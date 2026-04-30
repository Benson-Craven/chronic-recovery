import type { Metadata } from "next"
import { BreadcrumbJsonLd, createPageMetadata } from "../lib/seo"

export const metadata: Metadata = createPageMetadata({
    title: "About | Chronic Pain Recovery Cork",
    description:
        "Learn about Chronic Pain Recovery in Cork, the brain-body approach, and support for people exploring evidence-informed chronic pain recovery.",
    path: "/info",
})

export default function InfoLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <BreadcrumbJsonLd
                id="info-breadcrumb-schema"
                items={[
                    { name: "Home", path: "/" },
                    { name: "About", path: "/info" },
                ]}
            />
            {children}
        </>
    )
}
