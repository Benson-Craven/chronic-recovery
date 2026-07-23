type ContactFormSource = "contact_modal" | "contact_page"
type ApiError =
    | "INVALID_SUBMISSION"
    | "VERIFICATION_FAILED"
    | "VERIFICATION_UNAVAILABLE"
    | "DELIVERY_FAILED"

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
    env: Record<string, string | undefined>
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
    fetcher: typeof fetch,
): Promise<VerificationResult> {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 5_000)

    try {
        const body = new URLSearchParams({
            secret,
            response: submission.turnstileToken,
        })
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

        return { status: "verified" }
    } catch {
        return { status: "unavailable" }
    } finally {
        clearTimeout(timeout)
    }
}

async function deliverEmail(
    submission: ContactSubmission,
    env: Record<string, string | undefined>,
    fetcher: typeof fetch,
) {
    if (!env.BREVO_API_KEY || !env.EMAIL_TO) {
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
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Source:</strong> ${sourceLabel}</p>
                    <p><strong>Name:</strong> ${escapeHtml(submission.name)}</p>
                    <p><strong>Email:</strong> ${escapeHtml(submission.email)}</p>
                    <p><strong>Phone:</strong> ${escapeHtml(submission.phone)}</p>
                    <p><strong>Message:</strong><br>${escapeHtml(submission.message).replaceAll("\n", "<br>")}</p>
                `,
                tags: ["contact_form", submission.source],
            }),
            signal: controller.signal,
        })

        return response.ok
    } catch {
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
            if (!env.TURNSTILE_SECRET_KEY) {
                logRejection("VERIFICATION_UNAVAILABLE", submission.source)
                return errorResponse("VERIFICATION_UNAVAILABLE", 503)
            }

            const verification = await verifyTurnstile(
                submission,
                env.TURNSTILE_SECRET_KEY,
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
