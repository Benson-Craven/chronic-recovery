import type { Metadata } from "next"
import { BreadcrumbJsonLd, createPageMetadata } from "../lib/seo"

export const metadata: Metadata = createPageMetadata({
    title: "Terms and Conditions | Chronic Pain Recovery",
    description:
        "Review the terms and conditions for using the Chronic Pain Recovery website, including copyright and third-party link notices.",
    path: "/terms-and-conditions",
})

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <BreadcrumbJsonLd
                id="terms-breadcrumb-schema"
                items={[
                    { name: "Home", path: "/" },
                    {
                        name: "Terms and Conditions",
                        path: "/terms-and-conditions",
                    },
                ]}
            />
            {children}
        </>
    )
}
