import type { Metadata } from "next"
import { createPageMetadata } from "../lib/seo"

export const metadata: Metadata = createPageMetadata({
    title: "Journal | Chronic Pain Recovery Insights",
    description:
        "Read chronic pain recovery articles about pain science, neuroplastic symptoms, and practical ways to support nervous system change.",
    path: "/blog",
})

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return children
}
