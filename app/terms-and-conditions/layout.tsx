import type { Metadata } from "next"
import Breadcrumbs from "../components/Breadcrumbs"
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
    const breadcrumbs = [
        { name: "Home", path: "/" },
        {
            name: "Terms and Conditions",
            path: "/terms-and-conditions",
        },
    ]

    return (
        <>
            <BreadcrumbJsonLd
                id="terms-breadcrumb-schema"
                items={breadcrumbs}
            />
            <Breadcrumbs items={breadcrumbs} />
            {children}
        </>
    )
}
