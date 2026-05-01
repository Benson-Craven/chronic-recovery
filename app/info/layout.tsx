import type { Metadata } from "next"
import Breadcrumbs from "../components/Breadcrumbs"
import { BreadcrumbJsonLd, createPageMetadata } from "../lib/seo"

export const metadata: Metadata = createPageMetadata({
    title: "About | Chronic Pain Recovery Cork",
    description:
        "Learn about Chronic Pain Recovery in Cork, the brain-body approach, and support for people exploring evidence-informed chronic pain recovery.",
    path: "/info",
})

export default function InfoLayout({ children }: { children: React.ReactNode }) {
    const breadcrumbs = [
        { name: "Home", path: "/" },
        { name: "About", path: "/info" },
    ]

    return (
        <>
            <BreadcrumbJsonLd
                id="info-breadcrumb-schema"
                items={breadcrumbs}
            />
            <Breadcrumbs items={breadcrumbs} />
            {children}
        </>
    )
}
