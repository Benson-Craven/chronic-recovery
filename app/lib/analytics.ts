import type { WhatsAppSource } from "@/app/lib/contact"

type GtagEventParams = {
    event_category?: string
    event_label?: string
    value?: number
    form_location?: string
    contact_location?: string
}

declare global {
    interface Window {
        gtag?: (
            command: "event",
            eventName: string,
            params?: GtagEventParams,
        ) => void
    }
}

export function trackContactFormSubmission(formLocation: string) {
    if (typeof window === "undefined" || !window.gtag) return

    window.gtag("event", "generate_lead", {
        event_category: "contact",
        event_label: formLocation,
        form_location: formLocation,
    })
}

export function trackWhatsAppClick(contactLocation: WhatsAppSource) {
    if (typeof window === "undefined" || !window.gtag) return

    window.gtag("event", "whatsapp_click", {
        event_category: "contact",
        event_label: contactLocation,
        contact_location: contactLocation,
    })
}
