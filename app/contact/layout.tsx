import type { Metadata } from "next"
import Breadcrumbs from "../components/Breadcrumbs"
import { BreadcrumbJsonLd, createPageMetadata } from "../lib/seo"

export const metadata: Metadata = createPageMetadata({
    title: "Book a Consultation | Chronic Pain Recovery Cork",
    description:
        "Contact Chronic Pain Recovery in Rochestown, Cork to ask about in-person or online support for persistent pain and neuroplastic symptoms.",
    path: "/contact",
})

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const breadcrumbs = [
        { name: "Home", path: "/" },
        { name: "Book a Consultation", path: "/contact" },
    ]

    return (
        <>
            <BreadcrumbJsonLd
                id="contact-breadcrumb-schema"
                items={breadcrumbs}
            />
            <Breadcrumbs items={breadcrumbs} />
            {children}
        </>
    )
}
