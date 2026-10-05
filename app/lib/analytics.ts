import type { PhoneSource, WhatsAppSource } from "@/app/lib/contact"
import { WHATSAPP_URL } from "./contact"

type GtagEventParams = {
    event_category?: string
    event_label?: string
    value?: number
    form_location?: string
    contact_location?: string
    location?: string
    cta_text?: string
    destination?: string
    position?: string
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

export function trackPhoneClick(contactLocation: PhoneSource) {
    if (typeof window === "undefined" || !window.gtag) return

    window.gtag("event", "phone_click", {
        event_category: "contact",
        event_label: contactLocation,
        contact_location: contactLocation,
    })
}

export type SuccessStoriesPosition = "intro" | "closing"

export function trackSuccessStoriesView() {
    if (typeof window === "undefined" || !window.gtag) return

    window.gtag("event", "success_stories_view", {
        location: "success_stories_page",
        destination: "/success-stories",
    })
}

export function trackHomepageSuccessStoriesClick() {
    if (typeof window === "undefined" || !window.gtag) return

    window.gtag("event", "homepage_success_stories_click", {
        location: "homepage_testimonials",
        cta_text: "Read more success stories",
        destination: "/success-stories",
        position: "after_services",
    })
}

export function trackSuccessStoriesCtaClick(
    cta: "whatsapp" | "consultation",
    position: SuccessStoriesPosition,
) {
    if (typeof window === "undefined" || !window.gtag) return

    window.gtag("event", "success_stories_cta_click", {
        location: "success_stories_page",
        cta_text: cta === "whatsapp" ? "WhatsApp Marsha" : "Book Consultation",
        destination: cta === "whatsapp" ? WHATSAPP_URL : "/contact",
        position,
    })
}
