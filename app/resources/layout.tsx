import type { Metadata } from "next"
import Breadcrumbs from "../components/Breadcrumbs"
import { BreadcrumbJsonLd, createPageMetadata } from "../lib/seo"

export const metadata: Metadata = createPageMetadata({
    title: "Chronic Pain Resources | Chronic Pain Recovery Cork",
    description:
        "Explore selected chronic pain podcasts and videos on pain science, the nervous system, and recovery-oriented approaches for persistent symptoms.",
    path: "/resources",
})

export default function ResourcesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const breadcrumbs = [
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources" },
    ]

    return (
        <>
            <BreadcrumbJsonLd
                id="resources-breadcrumb-schema"
                items={breadcrumbs}
            />
            <Breadcrumbs items={breadcrumbs} />
            {children}
        </>
    )
}
