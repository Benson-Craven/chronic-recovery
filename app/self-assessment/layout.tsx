import type { Metadata } from "next"
import { BreadcrumbJsonLd, createPageMetadata } from "../lib/seo"

export const metadata: Metadata = createPageMetadata({
    title: "Neuroplastic Pain Self-Assessment | Chronic Pain Recovery",
    description:
        "Use this self-assessment to explore whether a brain-to-body component may be involved in persistent pain, then discuss next steps safely.",
    path: "/self-assessment",
})

export default function SelfAssessmentLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <BreadcrumbJsonLd
                id="self-assessment-breadcrumb-schema"
                items={[
                    { name: "Home", path: "/" },
                    {
                        name: "Neuroplastic Pain Self-Assessment",
                        path: "/self-assessment",
                    },
                ]}
            />
            {children}
        </>
    )
}
