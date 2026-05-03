import type { Metadata } from "next"
import Breadcrumbs from "@/app/components/Breadcrumbs"
import SeoContentPage from "@/app/components/SeoContentPage"
import {
    BreadcrumbJsonLd,
    FAQJsonLd,
    createPageMetadata,
} from "@/app/lib/seo"

export const metadata: Metadata = createPageMetadata({
    title: "Pain Rehabilitation Ireland | Chronic Pain Recovery",
    description:
        "Pain rehabilitation support in Ireland for persistent pain, using education, nervous system retraining, pacing, and recovery-focused support.",
    path: "/treatments/pain-rehabilitation",
})

export default function PainRehabilitationPage() {
    const breadcrumbs = [
        { name: "Home", path: "/" },
        {
            name: "Pain Rehabilitation",
            path: "/treatments/pain-rehabilitation",
        },
    ]

    return (
        <>
            <BreadcrumbJsonLd
                id="pain-rehabilitation-breadcrumb-schema"
                items={breadcrumbs}
            />
            <FAQJsonLd
                id="pain-rehabilitation-faq-schema"
                questions={[
                    {
                        question: "What is pain rehabilitation?",
                        answer: "Pain rehabilitation is support for people with persistent pain that focuses on education, nervous system regulation, movement confidence, pacing, and returning to meaningful activities where appropriate.",
                    },
                    {
                        question: "Is pain rehabilitation the same as pain management?",
                        answer: "Not exactly. Pain management often focuses on reducing or controlling symptoms. Pain rehabilitation is usually more recovery-focused, helping the nervous system and daily life become less organised around pain.",
                    },
                    {
                        question: "Can pain rehabilitation be done online?",
                        answer: "Many parts of pain rehabilitation can be supported online, including education, symptom pattern work, pacing, fear reduction, and planning gradual return to activity.",
                    },
                ]}
            />
            <Breadcrumbs items={breadcrumbs} />
            <SeoContentPage
                hero={{
                    eyebrow: "Pain rehabilitation Ireland",
                    title: (
                        <>
                            Rebuilding life
                            <br />
                            <em>beyond pain</em>
                        </>
                    ),
                    intro:
                        "Pain rehabilitation support for people with persistent pain who want to understand their nervous system, reduce fear, and gently return to meaningful daily life.",
                }}
                sections={[
                    {
                        eyebrow: "Recovery-focused care",
                        heading: "More than coping with symptoms",
                        image: {
                            src: "/images/forest.avif",
                            alt: "Forest path representing pain rehabilitation and recovery",
                        },
                        body: [
                            "Pain rehabilitation is not just about tolerating pain better. For people with chronic or neuroplastic pain, the aim is often to help the nervous system feel safer, rebuild trust in the body, and reduce the ways pain has taken over daily decisions.",
                            "This approach may include pain neuroscience education, pacing, nervous system regulation, emotional awareness, movement confidence, and gradual re-engagement with work, family life, exercise, or rest.",
                        ],
                    },
                    {
                        eyebrow: "Why pain persists",
                        heading: "When protection becomes a pattern",
                        image: {
                            src: "/images/study.webp",
                            alt: "Pain neuroscience study materials for rehabilitation",
                        },
                        body: [
                            "After injury or illness, the nervous system can learn to stay protective. Pain may continue even when tissues have healed or when medical tests do not fully explain the severity of symptoms.",
                            "Pain rehabilitation looks at the whole pattern: what symptoms do, what has been ruled out, what you fear, what you avoid, and what helps your system feel even slightly safer.",
                        ],
                    },
                    {
                        eyebrow: "PRT connection",
                        heading: "Where Pain Reprocessing Therapy fits",
                        image: {
                            src: "/images/therapy.avif",
                            alt: "Therapy setting for pain rehabilitation support",
                        },
                        body: [
                            "Pain Reprocessing Therapy can be one part of pain rehabilitation when symptoms appear neuroplastic. It helps suitable clients reinterpret safe body sensations with less fear and danger.",
                            "Not every rehabilitation plan looks the same. Some people need education first, others need pacing or emotional support, and others benefit from somatic tracking and the PRT approach.",
                        ],
                    },
                ]}
                listSection={{
                    eyebrow: "Rehabilitation goals",
                    heading: "What this work can support",
                    intro:
                        "The goal is not to force progress. It is to build enough safety and confidence for the system to change.",
                    items: [
                        {
                            title: "Understanding pain",
                            body: "Learn why pain can persist after healing and why pain does not always mean ongoing damage.",
                        },
                        {
                            title: "Reducing fear",
                            body: "Work with the fear, scanning, and protective habits that can keep the nervous system on high alert.",
                        },
                        {
                            title: "Rebuilding capacity",
                            body: "Use careful pacing and gradual exposure to help everyday activities feel less threatening.",
                        },
                        {
                            title: "Returning to meaning",
                            body: "Reconnect with the parts of life that pain has interrupted, at a pace your system can tolerate.",
                        },
                    ],
                }}
                safetyNote={{
                    heading: "Rehabilitation starts with assessment",
                    body:
                        "Please consult your GP, consultant, physiotherapist, or relevant medical professional to assess structural abnormalities, disease, infection, acute injury, or urgent symptoms before beginning this approach.",
                }}
                researchLinks={[
                    {
                        title: "Multidisciplinary biopsychosocial rehabilitation for chronic low back pain",
                        source: "Cochrane Review, 2014",
                        href: "https://pubmed.ncbi.nlm.nih.gov/25180773/",
                        summary:
                            "Systematic review of randomised trials evaluating rehabilitation programmes that address physical, psychological, and social or work-related factors in chronic low back pain.",
                    },
                    {
                        title: "Multidisciplinary biopsychosocial rehabilitation for chronic low back pain",
                        source: "BMJ, 2015",
                        href: "https://www.bmj.com/content/350/bmj.h444",
                        summary:
                            "BMJ systematic review and meta-analysis summarising evidence for multidisciplinary rehabilitation compared with usual care, physical treatment, surgery, and waiting-list controls.",
                    },
                    {
                        title: "Pain Neuroscience Education for Adults With Chronic Musculoskeletal Pain",
                        source: "The Journal of Pain, 2019",
                        href: "https://pubmed.ncbi.nlm.nih.gov/30831273/",
                        summary:
                            "Mixed-methods systematic review and meta-analysis on pain neuroscience education, a core element of many modern pain rehabilitation approaches.",
                    },
                ]}
                relatedLinks={[
                    {
                        href: "/treatments/pain-reprocessing-therapy",
                        label: "Pain Reprocessing Therapy",
                    },
                    {
                        href: "/blog/pain-rehabilitation-vs-pain-management",
                        label: "Pain rehabilitation vs pain management",
                    },
                    {
                        href: "/locations/chronic-pain-management-ireland-online",
                        label: "Online chronic pain support Ireland",
                    },
                ]}
            />
        </>
    )
}
