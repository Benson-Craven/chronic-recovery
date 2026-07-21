import { createContactHandler } from "./contact-handler"

export const POST = createContactHandler({
    env: process.env,
    fetch: (input, init) => fetch(input, init),
    logRejection: (category, source) => {
        console.warn("Contact form submission rejected", { category, source })
    },
})
