import type { Metadata } from "next"
import Breadcrumbs from "../components/Breadcrumbs"
import { BreadcrumbJsonLd, createPageMetadata } from "../lib/seo"

export const metadata: Metadata = createPageMetadata({
    title: "Conditions We Treat | Chronic Pain Recovery Cork",
    description:
        "See chronic pain and neuroplastic symptom patterns that may benefit from a biopsychosocial approach, plus conditions that need medical care first.",
    path: "/conditions",
})

export default function ConditionsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const breadcrumbs = [
        { name: "Home", path: "/" },
        { name: "Conditions", path: "/conditions" },
    ]

    return (
        <>
            <BreadcrumbJsonLd
                id="conditions-breadcrumb-schema"
                items={breadcrumbs}
            />
            <Breadcrumbs items={breadcrumbs} />
            {children}
        </>
    )
}
