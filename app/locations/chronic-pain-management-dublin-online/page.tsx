import type { Metadata } from "next"
import Breadcrumbs from "@/app/components/Breadcrumbs"
import SeoContentPage from "@/app/components/SeoContentPage"
import { BreadcrumbJsonLd, createPageMetadata } from "@/app/lib/seo"

export const metadata: Metadata = createPageMetadata({
    title: "Online Chronic Pain Support for Dublin | Chronic Pain Recovery",
    description:
        "Cork-based online chronic pain support for people in Dublin, with 60-minute video sessions and access to the primary Ireland-wide online service.",
    path: "/locations/chronic-pain-management-dublin-online",
})

export default function OnlineDublinPage() {
    const breadcrumbs = [
        { name: "Home", path: "/" },
        {
            name: "Online Chronic Pain Management Dublin",
            path: "/locations/chronic-pain-management-dublin-online",
        },
    ]

    return (
        <>
            <BreadcrumbJsonLd
                id="online-dublin-breadcrumb-schema"
                items={breadcrumbs}
            />
            <Breadcrumbs items={breadcrumbs} />
            <SeoContentPage
                whatsAppSource="dublin_location_closing_cta"
                hero={{
                    eyebrow: "Dublin online support",
                    title: (
                        <>
                            Chronic pain support
                            <br />
                            <em>for Dublin clients online</em>
                        </>
                    ),
                    intro: "I'm Marsha Canny, a chronic pain therapist based in Cork. I offer evidence-informed online support to people in Dublin who want to explore persistent pain and possible neuroplastic symptoms.",
                }}
                sections={[
                    {
                        eyebrow: "Honest access",
                        heading: "Cork-based, available online in Dublin",
                        visual: {
                            kind: "illustration",
                            src: "/images/illustrations/online-support.png",
                            alt: "",
                        },
                        body: [
                            "I do not run a physical Dublin clinic. I offer online support for people in Dublin who are exploring whether persistent pain may involve a sensitised nervous system.",
                            "This can be useful if travel is difficult, symptoms fluctuate, or you prefer to begin recovery work from home while still receiving structured support.",
                        ],
                    },
                    {
                        eyebrow: "Who it may suit",
                        heading: "For pain that has outlasted healing",
                        visual: {
                            kind: "illustration",
                            src: "/images/illustrations/whole-person-health.png",
                            alt: "",
                        },
                        body: [
                            "Online work may be appropriate when pain has lasted longer than expected, symptoms move or flare with stress, scans do not fully explain the pain, or you have overlapping symptoms such as IBS, migraine, fatigue, or widespread pain.",
                            "The first priority is always medical assessment. Once active disease, infection, acute injury, or urgent causes have been considered, brain-body support may help some people understand and work with the pain loop.",
                        ],
                    },
                    {
                        eyebrow: "Your online session",
                        heading: "What a 60-minute video session involves",
                        visual: {
                            kind: "illustration",
                            src: "/images/illustrations/pain-neuroscience.png",
                            alt: "",
                        },
                        body: [
                            "I begin a session by asking about your current symptoms, medical context, what changes the pain, and the questions you want to explore. I then explain relevant pain science in plain language and discuss an appropriate next step.",
                            "My online sessions are educational and recovery-oriented. I do not provide a diagnosis, medication advice, emergency care, or a replacement for your healthcare team.",
                        ],
                    },
                ]}
                listSection={{
                    eyebrow: "Online session walkthrough",
                    heading: "A clear, practical process",
                    intro: "The conversation is shaped by your circumstances and stays grounded in your medical context.",
                    items: [
                        {
                            title: "Before the session",
                            body: "Share the main reason for your enquiry and any access needs with me when arranging your appointment.",
                        },
                        {
                            title: "During the session",
                            body: "I review your symptom history, medical assessment, current concerns, and the patterns you have noticed.",
                        },
                        {
                            title: "Explore the pain context",
                            body: "I discuss pain science with you and explore whether a brain-body perspective may be relevant without assuming a diagnosis.",
                        },
                        {
                            title: "Agree a next step",
                            body: "I summarise what we discussed and whether further sessions or another form of support may be appropriate.",
                        },
                    ],
                }}
                safetyNote={{
                    heading: "Medical support remains important",
                    body: "Please seek medical assessment for new, severe, changing, or unexplained symptoms. Online chronic pain support does not replace diagnosis, emergency care, medication advice, or treatment from your healthcare team.",
                }}
                relatedLinks={[
                    {
                        href: "/locations/chronic-pain-management-ireland-online",
                        label: "Primary online service across Ireland",
                    },
                    {
                        href: "/treatments/pain-reprocessing-therapy",
                        label: "Pain Reprocessing Therapy in Ireland",
                    },
                ]}
            />
        </>
    )
}
