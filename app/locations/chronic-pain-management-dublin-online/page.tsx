import type { Metadata } from "next"
import Breadcrumbs from "@/app/components/Breadcrumbs"
import SeoContentPage from "@/app/components/SeoContentPage"
import {
    BreadcrumbJsonLd,
    FAQJsonLd,
    createPageMetadata,
} from "@/app/lib/seo"

export const metadata: Metadata = createPageMetadata({
    title: "Online Chronic Pain Management Dublin | Chronic Pain Recovery",
    description:
        "Online chronic pain support for people in Dublin exploring neuroplastic pain and Pain Reprocessing Therapy.",
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
            <FAQJsonLd
                id="online-dublin-faq-schema"
                questions={[
                    {
                        question: "Do you have a chronic pain clinic in Dublin?",
                        answer: "Chronic Pain Recovery is based in Cork and offers online chronic pain support for people in Dublin. This page does not represent a physical Dublin clinic.",
                    },
                    {
                        question: "Can Dublin clients work with you online?",
                        answer: "Yes. People in Dublin can access online support for persistent pain, neuroplastic pain patterns, and Pain Reprocessing Therapy when medically appropriate.",
                    },
                    {
                        question: "Is online chronic pain support medical treatment?",
                        answer: "No. Online support does not replace medical diagnosis, emergency care, or treatment from your GP, consultant, or physiotherapist.",
                    },
                ]}
            />
            <Breadcrumbs items={breadcrumbs} />
            <SeoContentPage
                hero={{
                    eyebrow: "Dublin online support",
                    title: (
                        <>
                            Chronic pain support
                            <br />
                            <em>for Dublin clients online</em>
                        </>
                    ),
                    intro:
                        "Online chronic pain management for people in Dublin who want evidence-informed support for persistent pain and neuroplastic symptoms.",
                }}
                sections={[
                    {
                        eyebrow: "Honest access",
                        heading: "Cork-based, available online in Dublin",
                        image: {
                            src: "/images/phone.avif",
                            alt: "Online chronic pain support for Dublin clients",
                        },
                        body: [
                            "Chronic Pain Recovery is not a physical Dublin clinic. Support is offered online for people in Dublin who are exploring whether persistent pain may involve a sensitised nervous system.",
                            "This can be useful if travel is difficult, symptoms fluctuate, or you prefer to begin recovery work from home while still receiving structured support.",
                        ],
                    },
                    {
                        eyebrow: "Who it may suit",
                        heading: "For pain that has outlasted healing",
                        image: {
                            src: "/images/meeting1.avif",
                            alt: "Online meeting for chronic pain support in Ireland",
                        },
                        body: [
                            "Online work may be appropriate when pain has lasted longer than expected, symptoms move or flare with stress, scans do not fully explain the pain, or you have overlapping symptoms such as IBS, migraine, fatigue, or widespread pain.",
                            "The first priority is always medical assessment. Once active disease, infection, acute injury, or urgent causes have been considered, brain-body support may help some people understand and work with the pain loop.",
                        ],
                    },
                    {
                        eyebrow: "Treatment options",
                        heading: "Brain-body support and PRT online",
                        image: {
                            src: "/images/study.webp",
                            alt: "Study materials for online chronic pain support",
                        },
                        body: [
                            "Sessions may draw from pain neuroscience education, nervous system regulation, emotional awareness, somatic tracking, and Pain Reprocessing Therapy.",
                            "The aim is to help you reduce fear, rebuild trust in your body, and take small steps back toward the parts of life pain has interrupted.",
                        ],
                    },
                ]}
                listSection={{
                    eyebrow: "Online session focus",
                    heading: "What Dublin clients can work on",
                    intro:
                        "Online support is practical, careful, and grounded in your medical context.",
                    items: [
                        {
                            title: "Map the pain pattern",
                            body: "Look at when symptoms began, what changes them, what has been ruled out, and what your nervous system may have learned.",
                        },
                        {
                            title: "Learn pain science",
                            body: "Understand how real pain can persist without always meaning ongoing tissue damage.",
                        },
                        {
                            title: "Practise safety cues",
                            body: "Use somatic tracking and nervous system regulation to help the body experience more safety.",
                        },
                        {
                            title: "Build a next-step plan",
                            body: "Create realistic, paced steps toward movement, rest, work, family life, or activities that matter to you.",
                        },
                    ],
                }}
                safetyNote={{
                    heading: "Medical support remains important",
                    body:
                        "Please seek medical assessment for new, severe, changing, or unexplained symptoms. Online chronic pain support does not replace diagnosis, emergency care, medication advice, or treatment from your healthcare team.",
                }}
                relatedLinks={[
                    {
                        href: "/treatments/pain-reprocessing-therapy",
                        label: "Pain Reprocessing Therapy Ireland",
                    },
                    {
                        href: "/locations/chronic-pain-management-ireland-online",
                        label: "Online support across Ireland",
                    },
                ]}
            />
        </>
    )
}
