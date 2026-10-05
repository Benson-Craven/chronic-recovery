type ContactFormSource = "contact_modal" | "contact_page"
type ApiError =
    | "INVALID_SUBMISSION"
    | "VERIFICATION_FAILED"
    | "VERIFICATION_UNAVAILABLE"
    | "DELIVERY_FAILED"

type ContactEnvironment = {
    BREVO_API_KEY?: string
    EMAIL_TO?: string
    BREVO_SENDER_EMAIL?: string
    BREVO_SENDER_NAME?: string
    NEXT_PUBLIC_TURNSTILE_ENABLED?: string
    TURNSTILE_SECRET?: string
    TURNSTILE_HOSTNAMES?: string
}

type ContactSubmission = {
    name: string
    email: string
    phone: string
    message: string
    turnstileToken: string
    source: ContactFormSource
}

type VerificationResult =
    | { status: "verified" }
    | { status: "failed" }
    | { status: "unavailable" }

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email"

type ContactHandlerDependencies = {
    env: ContactEnvironment
    fetch: typeof fetch
    logRejection: (
        category: ApiError | "HONEYPOT",
        source: ContactFormSource | "unknown",
    ) => void
}

function errorResponse(error: ApiError, status: number) {
    return Response.json({ success: false, error }, { status })
}

function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;")
}

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value)
}

function getVisitorIp(headers: Headers) {
    const cloudflareIp = headers.get("cf-connecting-ip")?.trim()
    if (cloudflareIp) return cloudflareIp

    const forwardedIp = headers.get("x-forwarded-for")?.split(",", 1)[0]?.trim()
    return forwardedIp || undefined
}

function parseContactFields(
    body: Record<string, unknown>,
): Omit<ContactSubmission, "turnstileToken"> | null {
    if (
        typeof body.name !== "string" ||
        typeof body.email !== "string" ||
        typeof body.phone !== "string" ||
        typeof body.message !== "string" ||
        typeof body.website !== "string" ||
        (body.source !== "contact_modal" && body.source !== "contact_page")
    ) {
        return null
    }

    const name = body.name.trim()
    const email = body.email.trim()
    const phone = body.phone.trim()
    const message = body.message.trim()
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if (
        name.length < 2 ||
        name.length > 100 ||
        email.length > 254 ||
        !validEmail ||
        phone.length < 7 ||
        phone.length > 50 ||
        message.length < 10 ||
        message.length > 500
    ) {
        return null
    }

    return {
        name,
        email,
        phone,
        message,
        source: body.source,
    }
}

async function verifyTurnstile(
    submission: ContactSubmission,
    secret: string,
    allowedHostnames: readonly string[],
    visitorIp: string | undefined,
    fetcher: typeof fetch,
): Promise<VerificationResult> {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 5_000)

    try {
        const body = new URLSearchParams({
            secret,
            response: submission.turnstileToken,
        })
        if (visitorIp) {
            body.set("remoteip", visitorIp)
        }
        const response = await fetcher(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                method: "POST",
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                },
                body,
                signal: controller.signal,
            },
        )

        if (!response.ok) {
            return { status: "unavailable" }
        }

        const result: unknown = await response.json()
        if (!isRecord(result) || typeof result.success !== "boolean") {
            return { status: "unavailable" }
        }

        if (!result.success) {
            const errorCodes = Array.isArray(result["error-codes"])
                ? result["error-codes"]
                : []
            const serviceOrConfigurationError = errorCodes.some((code) =>
                [
                    "missing-input-secret",
                    "invalid-input-secret",
                    "bad-request",
                    "internal-error",
                ].includes(String(code)),
            )

            return {
                status: serviceOrConfigurationError ? "unavailable" : "failed",
            }
        }

        if (result.action !== submission.source) {
            return { status: "failed" }
        }

        if (
            typeof result.hostname !== "string" ||
            !allowedHostnames.includes(result.hostname.trim().toLowerCase())
        ) {
            return { status: "failed" }
        }

        return { status: "verified" }
    } catch {
        return { status: "unavailable" }
    } finally {
        clearTimeout(timeout)
    }
}

async function deliverEmail(
    submission: ContactSubmission,
    env: ContactEnvironment,
    fetcher: typeof fetch,
) {
    if (!env.BREVO_API_KEY || !env.EMAIL_TO) {
        console.error("Missing Brevo environment variables", {
            hasBrevoApiKey: Boolean(env.BREVO_API_KEY),
            hasEmailTo: Boolean(env.EMAIL_TO),
        })
        return false
    }

    const senderEmail =
        env.BREVO_SENDER_EMAIL ?? "noreply@chronicpainrecovery.ie"

    const senderName = env.BREVO_SENDER_NAME ?? "Chronic Pain Recovery"

    const sourceLabel =
        submission.source === "contact_modal" ? "Contact modal" : "Contact page"

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 10_000)

    try {
        const response = await fetcher(BREVO_API_URL, {
            method: "POST",
            headers: {
                accept: "application/json",
                "api-key": env.BREVO_API_KEY,
                "content-type": "application/json",
            },
            body: JSON.stringify({
                sender: {
                    name: senderName,
                    email: senderEmail,
                },
                to: [
                    {
                        email: env.EMAIL_TO,
                        name: senderName,
                    },
                ],
                replyTo: {
                    email: submission.email,
                    name: submission.name,
                },
                subject: `New enquiry from ${submission.name}`,
                htmlContent: `
                    <div style="
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 32px;
                        font-family: Arial, sans-serif;
                        color: #1E3A20;
                        background-color: #F7F4EF;
                    ">
                        <h2 style="
                            margin: 0 0 24px;
                            font-size: 24px;
                            font-weight: 600;
                        ">
                            New enquiry
                        </h2>

                        <p style="margin: 0 0 8px;">
                            <strong>Source:</strong> ${sourceLabel}
                        </p>

                        <p style="margin: 0 0 8px;">
                            <strong>Name:</strong> ${escapeHtml(submission.name)}
                        </p>

                        <p style="margin: 0 0 8px;">
                            <strong>Email:</strong>
                            <a href="mailto:${escapeHtml(submission.email)}">
                                ${escapeHtml(submission.email)}
                            </a>
                        </p>

                        <p style="margin: 0 0 24px;">
                            <strong>Phone:</strong>
                            <a href="tel:${escapeHtml(submission.phone)}">
                                ${escapeHtml(submission.phone)}
                            </a>
                        </p>

                        <div style="
                            padding: 20px;
                            border: 1px solid rgba(30, 58, 32, 0.15);
                            border-radius: 8px;
                            background-color: #ffffff;
                        ">
                            <p style="margin: 0 0 8px;">
                                <strong>Message</strong>
                            </p>

                            <p style="margin: 0; line-height: 1.6;">
                                ${escapeHtml(submission.message).replaceAll("\n", "<br>")}
                            </p>
                        </div>
                    </div>
                `,
                textContent: ` 
                New enquiry
                
                Source: ${sourceLabel}
                Name: ${submission.name}
                Email: ${submission.email}
                Phone: ${submission.phone}

                Message:
                ${submission.message}
                `,
                tags: ["contact_form", submission.source],
            }),
            signal: controller.signal,
        })

        if (!response.ok) {
            // const errorBody = await response.text()

            // console.error("Brevo delivery failed", {
            //     status: response.status,
            //     statusText: response.statusText,
            //     body: errorBody,
            //     senderEmail,
            //     emailTo: env.EMAIL_TO,
            // })

            return false
        }

        return true
    } catch (error) {
        console.error("Brevo request failed", error)
        return false
    } finally {
        clearTimeout(timeout)
    }
}

export function createContactHandler({
    env,
    fetch: fetcher,
    logRejection,
}: ContactHandlerDependencies) {
    return async function handleContactRequest(request: Request) {
        let body: unknown

        try {
            body = await request.json()
        } catch {
            logRejection("INVALID_SUBMISSION", "unknown")
            return errorResponse("INVALID_SUBMISSION", 400)
        }

        if (
            isRecord(body) &&
            "website" in body &&
            typeof body.website === "string" &&
            body.website.trim().length > 0
        ) {
            const source =
                "source" in body &&
                (body.source === "contact_modal" ||
                    body.source === "contact_page")
                    ? body.source
                    : "unknown"
            logRejection("HONEYPOT", source)
            return Response.json({ success: true })
        }

        if (!isRecord(body)) {
            logRejection("INVALID_SUBMISSION", "unknown")
            return errorResponse("INVALID_SUBMISSION", 400)
        }

        const fields = parseContactFields(body)

        if (!fields) {
            const source =
                body.source === "contact_modal" ||
                body.source === "contact_page"
                    ? body.source
                    : "unknown"
            logRejection("INVALID_SUBMISSION", source)
            return errorResponse("INVALID_SUBMISSION", 400)
        }

        const turnstileEnabled = env.NEXT_PUBLIC_TURNSTILE_ENABLED === "true"
        const turnstileToken =
            typeof body.turnstileToken === "string" ? body.turnstileToken : ""

        if (
            turnstileEnabled &&
            (turnstileToken.trim().length === 0 || turnstileToken.length > 2048)
        ) {
            logRejection("VERIFICATION_FAILED", fields.source)
            return errorResponse("VERIFICATION_FAILED", 403)
        }

        const submission: ContactSubmission = {
            ...fields,
            turnstileToken,
        }

        if (turnstileEnabled) {
            const turnstileSecret = env.TURNSTILE_SECRET?.trim()
            const allowedHostnames = (env.TURNSTILE_HOSTNAMES ?? "")
                .split(",")
                .map((hostname) => hostname.trim().toLowerCase())
                .filter(Boolean)

            if (!turnstileSecret || allowedHostnames.length === 0) {
                logRejection("VERIFICATION_UNAVAILABLE", submission.source)
                return errorResponse("VERIFICATION_UNAVAILABLE", 503)
            }

            const verification = await verifyTurnstile(
                submission,
                turnstileSecret,
                allowedHostnames,
                getVisitorIp(request.headers),
                fetcher,
            )

            if (verification.status === "unavailable") {
                logRejection("VERIFICATION_UNAVAILABLE", submission.source)
                return errorResponse("VERIFICATION_UNAVAILABLE", 503)
            }

            if (verification.status === "failed") {
                logRejection("VERIFICATION_FAILED", submission.source)
                return errorResponse("VERIFICATION_FAILED", 403)
            }
        }

        const delivered = await deliverEmail(submission, env, fetcher)
        if (!delivered) {
            logRejection("DELIVERY_FAILED", submission.source)
            return errorResponse("DELIVERY_FAILED", 502)
        }

        return Response.json({ success: true })
    }
}
