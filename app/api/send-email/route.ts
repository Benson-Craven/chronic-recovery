import { createContactHandler } from "./contact-handler"

export const POST = createContactHandler({
    env: {
        BREVO_API_KEY: process.env.BREVO_API_KEY,
        EMAIL_TO: process.env.EMAIL_TO,
        BREVO_SENDER_EMAIL: process.env.BREVO_SENDER_EMAIL,
        BREVO_SENDER_NAME: process.env.BREVO_SENDER_NAME,
        NEXT_PUBLIC_TURNSTILE_ENABLED:
            process.env.NEXT_PUBLIC_TURNSTILE_ENABLED,
        TURNSTILE_SECRET: process.env.TURNSTILE_SECRET,
        TURNSTILE_HOSTNAMES: process.env.TURNSTILE_HOSTNAMES,
    },
    fetch: (input, init) => fetch(input, init),
    logRejection: (category, source) => {
        console.warn("Contact form submission rejected", { category, source })
    },
})
