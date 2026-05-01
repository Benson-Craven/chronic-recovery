import type { Metadata } from "next"
import Breadcrumbs from "../components/Breadcrumbs"
import { BreadcrumbJsonLd, createPageMetadata } from "../lib/seo"

export const metadata: Metadata = createPageMetadata({
    title: "Disclaimer | Chronic Pain Recovery",
    description:
        "Read the Chronic Pain Recovery website disclaimer, including medical information boundaries, terms of use, and liability notices.",
    path: "/disclaimer",
})

export default function DisclaimerLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const breadcrumbs = [
        { name: "Home", path: "/" },
        { name: "Disclaimer", path: "/disclaimer" },
    ]

    return (
        <>
            <BreadcrumbJsonLd
                id="disclaimer-breadcrumb-schema"
                items={breadcrumbs}
            />
            <Breadcrumbs items={breadcrumbs} />
            {children}
        </>
    )
}
