import type { Metadata } from "next"
import Breadcrumbs from "../components/Breadcrumbs"
import { BreadcrumbJsonLd, createPageMetadata } from "../lib/seo"

export const metadata: Metadata = createPageMetadata({
    title: "The Science of Chronic Pain | Pain Reprocessing Therapy Cork",
    description:
        "Learn how neuroplasticity and Pain Reprocessing Therapy may help retrain chronic pain signals. Evidence-informed support in Cork and online.",
    path: "/science",
})

export default function ScienceLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const breadcrumbs = [
        { name: "Home", path: "/" },
        { name: "The Science", path: "/science" },
    ]

    return (
        <>
            <BreadcrumbJsonLd
                id="science-breadcrumb-schema"
                items={breadcrumbs}
            />
            <Breadcrumbs items={breadcrumbs} />
            {children}
        </>
    )
}
