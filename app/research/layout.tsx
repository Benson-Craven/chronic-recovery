import type { Metadata } from "next"
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
    return (
        <>
            <BreadcrumbJsonLd
                id="research-breadcrumb-schema"
                items={[
                    { name: "Home", path: "/" },
                    { name: "Research", path: "/research" },
                ]}
            />
            {children}
        </>
    )
}
