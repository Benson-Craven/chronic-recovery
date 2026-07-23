import type { Metadata } from "next"
import Breadcrumbs from "@/app/components/Breadcrumbs"
import SeoContentPage from "@/app/components/SeoContentPage"
import { BreadcrumbJsonLd, createPageMetadata } from "@/app/lib/seo"

export const metadata: Metadata = createPageMetadata({
    title: "Online Chronic Pain Support Ireland | Chronic Pain Recovery",
    description:
        "Online chronic pain support across Ireland with Marsha Canny, including 60-minute video sessions, fees, suitability boundaries, and next steps.",
    path: "/locations/chronic-pain-management-ireland-online",
})

export default function OnlineIrelandPage() {
    const breadcrumbs = [
        { name: "Home", path: "/" },
        {
            name: "Online Chronic Pain Management Ireland",
            path: "/locations/chronic-pain-management-ireland-online",
        },
    ]

    return (
        <>
            <BreadcrumbJsonLd
                id="online-ireland-breadcrumb-schema"
                items={breadcrumbs}
            />
            <Breadcrumbs items={breadcrumbs} />
            <SeoContentPage
                whatsAppSource="ireland_location_closing_cta"
                hero={{
                    eyebrow: "Online support across Ireland",
                    title: (
                        <>
                            Chronic pain support
                            <br />
                            <em>wherever you are</em>
                        </>
                    ),
                    intro: "I'm Marsha Canny, a chronic pain therapist. Through my primary Ireland-wide service, I offer educational, recovery-oriented support by video to people exploring persistent pain after appropriate medical assessment.",
                }}
                sections={[
                    {
                        eyebrow: "Online care",
                        heading: "A flexible way to explore persistent pain",
                        visual: {
                            kind: "illustration",
                            src: "/images/illustrations/online-support.png",
                            alt: "",
                        },
                        body: [
                            "You do not need to live near Cork to ask me questions about persistent pain and a possible brain-body perspective. My sessions use conversation, education, and careful reflection on your symptom and medical context.",
                            "I work online first, which may be practical when travel is difficult or you prefer to join from home. This does not change the need for appropriate medical assessment or urgent care when symptoms require it.",
                        ],
                    },
                    {
                        eyebrow: "Ireland-wide",
                        heading:
                            "Support for persistent symptoms after assessment",
                        visual: {
                            kind: "illustration",
                            src: "/images/illustrations/whole-person-health.png",
                            alt: "",
                        },
                        body: [
                            "This approach may be relevant when pain has lasted more than three months, symptoms move or fluctuate, medical tests have not fully explained the pain, or stress and fear seem to amplify symptoms.",
                            "These patterns are discussion points, not a diagnosis. My work does not ask you to ignore pain or push through symptoms, and it does not replace advice from the healthcare professionals responsible for your care.",
                        ],
                    },
                    {
                        eyebrow: "What to expect",
                        heading: "A clear 60-minute video session",
                        visual: {
                            kind: "illustration",
                            src: "/images/illustrations/one-to-one-support.png",
                            alt: "",
                        },
                        body: [
                            "I begin a session by asking why you are enquiring, what medical assessment has taken place, what changes the symptoms, and what you want to understand. I then explain relevant pain science in plain language.",
                            "I use the final part to focus on your questions and an appropriate next step. That may be another session, medical follow-up, or a different form of support.",
                        ],
                    },
                ]}
                listSection={{
                    eyebrow: "About me, sessions and fees",
                    heading: "Practical details before you enquire",
                    intro: "This is the main service page for online access across Ireland.",
                    items: [
                        {
                            title: "About me",
                            body: "I'm a chronic pain therapist based in Rochestown, Cork. My public ATNS Practitioner & Coach Directory profile is linked from the About page.",
                        },
                        {
                            title: "Session format",
                            body: "I offer 60-minute one-to-one video sessions shaped around your history, medical context, current concerns, and questions.",
                        },
                        {
                            title: "Pricing",
                            body: "I charge €70 for a 60-minute session. A package of 6 sessions costs €360.",
                        },
                        {
                            title: "How to begin",
                            body: "Use WhatsApp or the contact form to tell me briefly what you want to explore. In the first conversation, you can ask me questions and discuss whether an appointment is an appropriate next step.",
                        },
                    ],
                }}
                safetyNote={{
                    heading: "Start with medical assessment",
                    body: "Before beginning online chronic pain recovery work, please make sure structural abnormalities, disease, infection, acute injury, and urgent symptoms have been assessed by an appropriate medical professional.",
                }}
                relatedLinks={[
                    {
                        href: "/locations/chronic-pain-management-dublin-online",
                        label: "Online support for Dublin clients",
                    },
                    {
                        href: "/treatments/pain-reprocessing-therapy",
                        label: "Pain Reprocessing Therapy in Ireland",
                    },
                    {
                        href: "/locations/chronic-pain-management-cork",
                        label: "Chronic pain management Cork",
                    },
                ]}
            />
        </>
    )
}
