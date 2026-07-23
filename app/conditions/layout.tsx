import type { Metadata } from "next"
import { createPageMetadata } from "../lib/seo"

export const metadata: Metadata = createPageMetadata({
    title: "Persistent Pain Topics and Service Scope | Chronic Pain Recovery",
    description:
        "Review persistent pain topics people ask about, the limits of this educational service, and when medical care is required.",
    path: "/conditions",
})

export default function ConditionsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
