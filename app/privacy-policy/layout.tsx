import type { Metadata } from "next"
import Breadcrumbs from "../components/Breadcrumbs"
import { BreadcrumbJsonLd, createPageMetadata } from "../lib/seo"

export const metadata: Metadata = createPageMetadata({
    title: "Privacy Policy | Chronic Pain Recovery",
    description:
        "Learn how Chronic Pain Recovery Project collects, uses, and protects website visitor information and contact form details.",
    path: "/privacy-policy",
})

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const breadcrumbs = [
        { name: "Home", path: "/" },
        { name: "Privacy Policy", path: "/privacy-policy" },
    ]

    return (
        <>
            <BreadcrumbJsonLd
                id="privacy-policy-breadcrumb-schema"
                items={breadcrumbs}
            />
            <Breadcrumbs items={breadcrumbs} />
            {children}
        </>
    )
}
