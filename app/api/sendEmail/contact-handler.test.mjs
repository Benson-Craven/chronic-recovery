import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import ts from "typescript"

const source = readFileSync(
    new URL("./contact-handler.ts", import.meta.url),
    "utf8",
)
const compiled = ts.transpileModule(source, {
    compilerOptions: {
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2022,
    },
}).outputText
const moduleUrl =
    "data:text/javascript;base64," + Buffer.from(compiled).toString("base64")
const { createContactHandler } = await import(moduleUrl)

const VALID_SUBMISSION = {
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "+353 87 123 4567",
    message: "I would like to arrange a consultation.",
    website: "",
    turnstileToken: "valid-token",
    source: "contact_page",
}

function contactRequest(overrides = {}) {
    return new Request("http://localhost/api/sendEmail", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...VALID_SUBMISSION, ...overrides }),
    })
}

function handlerWith({
    env = {},
    fetch = async () => {
        throw new Error("unexpected fetch")
    },
} = {}) {
    return createContactHandler({
        env,
        fetch,
        logRejection: () => {},
    })
}

test("malformed JSON is rejected before external services are called", async () => {
    const handler = handlerWith()
    const response = await handler(
        new Request("http://localhost/api/sendEmail", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: "not json",
        }),
    )

    assert.equal(response.status, 400)
    assert.deepEqual(await response.json(), {
        success: false,
        error: "INVALID_SUBMISSION",
    })
})

test("a filled honeypot receives fake success without external calls", async () => {
    const response = await handlerWith()(
        contactRequest({ website: "https://spam.example" }),
    )

    assert.equal(response.status, 200)
    assert.deepEqual(await response.json(), { success: true })
})

test("a valid enquiry without a Turnstile token is rejected as unverified", async () => {
    const response = await handlerWith()(contactRequest({ turnstileToken: "" }))

    assert.equal(response.status, 403)
    assert.deepEqual(await response.json(), {
        success: false,
        error: "VERIFICATION_FAILED",
    })
})

test("missing Turnstile configuration fails closed before delivery", async () => {
    const response = await handlerWith()(
        contactRequest({ turnstileToken: "valid-looking-token" }),
    )

    assert.equal(response.status, 503)
    assert.deepEqual(await response.json(), {
        success: false,
        error: "VERIFICATION_UNAVAILABLE",
    })
})

test("an invalid, expired, or reused Turnstile token is rejected before delivery", async () => {
    const fetchCalls = []
    const handler = handlerWith({
        env: { TURNSTILE_SECRET_KEY: "test-secret" },
        fetch: async (...args) => {
            fetchCalls.push(args)
            return Response.json({
                success: false,
                "error-codes": ["timeout-or-duplicate"],
            })
        },
    })
    const response = await handler(
        contactRequest({
            turnstileToken: "expired-or-reused-token",
            source: "contact_modal",
        }),
    )

    assert.equal(response.status, 403)
    assert.deepEqual(await response.json(), {
        success: false,
        error: "VERIFICATION_FAILED",
    })
    assert.equal(fetchCalls.length, 1)
    assert.equal(
        fetchCalls[0][0],
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    )
})

test("a verified enquiry from each form is delivered once with its source", async () => {
    for (const formSource of ["contact_page", "contact_modal"]) {
        const fetchCalls = []
        const handler = handlerWith({
            env: {
                TURNSTILE_SECRET_KEY: "test-secret",
                BREVO_API_KEY: "test-brevo-key",
                EMAIL_TO: "practice@example.com",
            },
            fetch: async (url, init) => {
                fetchCalls.push([url, init])
                if (
                    url ===
                    "https://challenges.cloudflare.com/turnstile/v0/siteverify"
                ) {
                    return Response.json({
                        success: true,
                        action: formSource,
                    })
                }

                return new Response(null, { status: 201 })
            },
        })
        const response = await handler(
            contactRequest({
                name: "  Jane Doe  ",
                email: " jane@example.com ",
                phone: " +353 87 123 4567 ",
                message: " I would like to arrange a consultation. ",
                source: formSource,
            }),
        )

        assert.equal(response.status, 200, formSource)
        assert.deepEqual(await response.json(), { success: true }, formSource)
        assert.equal(fetchCalls.length, 2, formSource)

        const verificationBody = fetchCalls[0][1].body
        assert.equal(
            verificationBody.get("response"),
            "valid-token",
            formSource,
        )
        assert.equal(verificationBody.has("remoteip"), false, formSource)

        assert.equal(
            fetchCalls[1][0],
            "https://api.brevo.com/v3/smtp/email",
            formSource,
        )
        const email = JSON.parse(fetchCalls[1][1].body)
        const sourceLabel =
            formSource === "contact_page" ? "Contact page" : "Contact modal"
        assert.equal(email.subject, "New enquiry from Jane Doe", formSource)
        assert.deepEqual(email.tags, ["contact_form", formSource], formSource)
        assert.match(
            email.htmlContent,
            new RegExp("<strong>Source:</strong> " + sourceLabel),
            formSource,
        )
    }
})

test("invalid and oversized contact fields are rejected before verification", async () => {
    const invalidFields = [
        ["short name", { name: "J" }],
        ["long name", { name: "J".repeat(101) }],
        ["invalid email", { email: "not-an-email" }],
        ["long email", { email: "a".repeat(243) + "@example.com" }],
        ["short phone", { phone: "123456" }],
        ["long phone", { phone: "1".repeat(51) }],
        ["short message", { message: "123456789" }],
        ["long message", { message: "m".repeat(501) }],
        ["invalid honeypot type", { website: 123 }],
        ["invalid source", { source: "homepage" }],
    ]
    const handler = handlerWith({
        env: { TURNSTILE_SECRET_KEY: "test-secret" },
    })

    for (const [label, override] of invalidFields) {
        const response = await handler(contactRequest(override))

        assert.equal(response.status, 400, label)
        assert.deepEqual(
            await response.json(),
            { success: false, error: "INVALID_SUBMISSION" },
            label,
        )
    }
})

test("a Turnstile action mismatch is rejected before delivery", async () => {
    const handler = handlerWith({
        env: { TURNSTILE_SECRET_KEY: "test-secret" },
        fetch: async () =>
            Response.json({
                success: true,
                action: "contact_modal",
            }),
    })
    const response = await handler(contactRequest())

    assert.equal(response.status, 403)
    assert.deepEqual(await response.json(), {
        success: false,
        error: "VERIFICATION_FAILED",
    })
})

test("a Cloudflare failure returns verification unavailable", async () => {
    const handler = handlerWith({
        env: { TURNSTILE_SECRET_KEY: "test-secret" },
        fetch: async () => {
            throw new Error("Cloudflare unavailable")
        },
    })
    const response = await handler(contactRequest({ source: "contact_modal" }))

    assert.equal(response.status, 503)
    assert.deepEqual(await response.json(), {
        success: false,
        error: "VERIFICATION_UNAVAILABLE",
    })
})

test("a Brevo failure returns delivery failed after successful verification", async () => {
    let fetchCalls = 0
    const handler = handlerWith({
        env: {
            TURNSTILE_SECRET_KEY: "test-secret",
            BREVO_API_KEY: "test-brevo-key",
            EMAIL_TO: "practice@example.com",
        },
        fetch: async () => {
            fetchCalls += 1
            if (fetchCalls === 1) {
                return Response.json({
                    success: true,
                    action: "contact_modal",
                })
            }
            return new Response(null, { status: 500 })
        },
    })
    const response = await handler(contactRequest({ source: "contact_modal" }))

    assert.equal(response.status, 502)
    assert.deepEqual(await response.json(), {
        success: false,
        error: "DELIVERY_FAILED",
    })
    assert.equal(fetchCalls, 2)
})
