import type { Metadata } from "next"
import Breadcrumbs from "../components/Breadcrumbs"
import { BreadcrumbJsonLd, createPageMetadata } from "../lib/seo"

export const metadata: Metadata = createPageMetadata({
    title: "Chronic Pain Research | Pain Reprocessing Therapy Evidence",
    description:
        "Review selected research on Pain Reprocessing Therapy, psychophysiologic symptom relief, and brain-body approaches for chronic pain.",
    path: "/research",
})

export default function ResearchLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const breadcrumbs = [
        { name: "Home", path: "/" },
        { name: "Research", path: "/research" },
    ]

    return (
        <>
            <BreadcrumbJsonLd
                id="research-breadcrumb-schema"
                items={breadcrumbs}
            />
            <Breadcrumbs items={breadcrumbs} />
            {children}
        </>
    )
}
