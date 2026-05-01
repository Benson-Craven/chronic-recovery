import type { Metadata } from "next"
import Breadcrumbs from "../components/Breadcrumbs"
import { BreadcrumbJsonLd, FAQJsonLd, createPageMetadata } from "../lib/seo"

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
            <FAQJsonLd
                id="science-faq-schema"
                questions={[
                    {
                        question: "What is neuroplastic pain?",
                        answer: "Neuroplastic pain is persistent pain that may be maintained by learned danger signals in the nervous system after serious structural, disease, infection, or acute injury causes have been assessed.",
                    },
                    {
                        question: "Can chronic pain improve through brain-based approaches?",
                        answer: "Some chronic pain conditions may improve when the nervous system learns that the body is safe. Pain Reprocessing Therapy and related biopsychosocial methods can support that process for appropriate clients.",
                    },
                    {
                        question: "Is this approach a replacement for medical care?",
                        answer: "No. Structural abnormalities, disease, infection, and acute injury should be assessed by a doctor before beginning this approach. This work can complement appropriate medical care.",
                    },
                ]}
            />
            {children}
        </>
    )
}
