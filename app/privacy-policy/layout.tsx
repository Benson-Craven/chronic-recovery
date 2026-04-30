import type { Metadata } from "next"
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
    return (
        <>
            <BreadcrumbJsonLd
                id="privacy-policy-breadcrumb-schema"
                items={[
                    { name: "Home", path: "/" },
                    { name: "Privacy Policy", path: "/privacy-policy" },
                ]}
            />
            {children}
        </>
    )
}
