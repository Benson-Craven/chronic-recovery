import type { Metadata } from "next"
import Breadcrumbs from "@/app/components/Breadcrumbs"
import SeoContentPage from "@/app/components/SeoContentPage"
import { BreadcrumbJsonLd, createPageMetadata } from "@/app/lib/seo"

export const metadata: Metadata = createPageMetadata({
    title: "Chronic Pain Management Cork | Chronic Pain Recovery",
    description:
        "Evidence-informed chronic pain management in Cork and online for persistent pain that may have a neuroplastic component after medical assessment.",
    path: "/locations/chronic-pain-management-cork",
})

export default function ChronicPainManagementCorkPage() {
    const breadcrumbs = [
        { name: "Home", path: "/" },
        {
            name: "Chronic Pain Management Cork",
            path: "/locations/chronic-pain-management-cork",
        },
    ]

    return (
        <>
            <BreadcrumbJsonLd
                id="cork-location-breadcrumb-schema"
                items={breadcrumbs}
            />
            <Breadcrumbs items={breadcrumbs} />
            <SeoContentPage
                whatsAppSource="cork_location_closing_cta"
                hero={{
                    eyebrow: "Cork chronic pain support",
                    title: (
                        <>
                            Chronic pain
                            <br />
                            <em>management in Cork</em>
                        </>
                    ),
                    intro: "I'm Marsha Canny, a chronic pain therapist based in Rochestown, Cork. I offer one-to-one support online throughout Ireland, with limited in-person sessions in Rochestown.",
                }}
                sections={[
                    {
                        eyebrow: "Local support",
                        heading: "A brain-body approach for persistent pain",
                        visual: {
                            kind: "photo",
                            src: "/images/cork.avif",
                            alt: "Cork, Ireland for chronic pain management support",
                        },
                        body: [
                            "Persistent pain can involve biological, psychological, and social influences. For some people, nervous-system sensitisation may be one part of the picture after appropriate medical assessment. This does not mean the pain is imagined.",
                            "In sessions, I offer education and guided reflection on your pain context. The aim is to explore relevant pain science carefully without assuming a diagnosis, overlooking medical care, or promising a result.",
                        ],
                    },
                    {
                        eyebrow: "Who it may help",
                        heading:
                            "When a brain-body perspective may be worth discussing",
                        visual: {
                            kind: "illustration",
                            src: "/images/illustrations/whole-person-health.png",
                            alt: "",
                        },
                        body: [
                            "Many people arrive after scans, tests, medication, physiotherapy, injections, or specialist appointments have not fully explained why pain is still present. When serious medical causes have been assessed, it may be worth exploring whether neuroplastic pain is part of the picture.",
                            "No symptom pattern or normal test result can establish that conclusion on its own. Suitability depends on your history, symptoms, medical context, and the questions you want to explore.",
                        ],
                    },
                    {
                        eyebrow: "How sessions work",
                        heading: "In-person in Cork, with online flexibility",
                        visual: {
                            kind: "illustration",
                            src: "/images/illustrations/one-to-one-support.png",
                            alt: "",
                        },
                        body: [
                            "One-to-one sessions last 60 minutes. I begin by asking about your history, medical context, current concerns, symptom patterns, and the questions you want to explore. I then discuss relevant pain science and a possible next step.",
                            "I offer limited in-person appointments in Rochestown, Cork and share the private address only after an appointment is confirmed. I offer the same support online across Ireland by video call.",
                        ],
                    },
                ]}
                listSection={{
                    eyebrow: "Before you enquire",
                    heading: "About me, pricing and first steps",
                    intro: "Clear practical information can help you decide whether to start a conversation.",
                    items: [
                        {
                            title: "About me",
                            body: "I'm a chronic pain therapist based in Rochestown. My public ATNS Practitioner & Coach Directory profile is linked from the About page.",
                        },
                        {
                            title: "Where are sessions available?",
                            body: "I offer sessions online throughout Ireland and in person on a limited basis in Rochestown, Cork.",
                        },
                        {
                            title: "What does a session cost?",
                            body: "I charge €70 for a 60-minute session. A package of 6 sessions costs €360.",
                        },
                        {
                            title: "How do I begin?",
                            body: "Use WhatsApp or the contact form to tell me briefly what support you are looking for. You can then discuss your medical context with me, ask questions, and decide whether an appointment is an appropriate next step.",
                        },
                    ],
                }}
                safetyNote={{
                    heading: "Medical care comes first",
                    body: "Please consult your GP or relevant medical professional to assess structural abnormalities, disease, infection, acute injury, or urgent symptoms before beginning this approach. Chronic Pain Recovery does not provide medical diagnosis or emergency care.",
                }}
                relatedLinks={[
                    {
                        href: "/treatments/pain-reprocessing-therapy",
                        label: "Pain Reprocessing Therapy",
                    },
                    {
                        href: "/locations/chronic-pain-management-ireland-online",
                        label: "Online support across Ireland",
                    },
                    {
                        href: "/self-assessment",
                        label: "Educational neuroplastic pain self-assessment",
                    },
                ]}
            />
        </>
    )
}
