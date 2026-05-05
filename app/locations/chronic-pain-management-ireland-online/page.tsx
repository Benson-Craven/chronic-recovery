import type { Metadata } from "next"
import Breadcrumbs from "@/app/components/Breadcrumbs"
import SeoContentPage from "@/app/components/SeoContentPage"
import {
    BreadcrumbJsonLd,
    FAQJsonLd,
    createPageMetadata,
} from "@/app/lib/seo"

export const metadata: Metadata = createPageMetadata({
    title: "Online Chronic Pain Management Ireland | Chronic Pain Recovery",
    description:
        "Online chronic pain support across Ireland for persistent pain and neuroplastic symptoms, using evidence-informed brain-body approaches.",
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
            <FAQJsonLd
                id="online-ireland-faq-schema"
                questions={[
                    {
                        question: "Can chronic pain recovery work happen online?",
                        answer: "Yes. Education, nervous system work, symptom tracking, and recovery planning can often be done online when the person is medically suitable for this approach.",
                    },
                    {
                        question: "Who is online chronic pain management suitable for?",
                        answer: "It may be suitable for people with persistent pain or medically unexplained symptoms after medical assessment has ruled out urgent or active medical causes.",
                    },
                    {
                        question: "Do online sessions replace medical care?",
                        answer: "No. Online sessions do not replace medical diagnosis, emergency care, or advice from your GP or specialist.",
                    },
                ]}
            />
            <Breadcrumbs items={breadcrumbs} />
            <SeoContentPage
                hero={{
                    eyebrow: "Online support across Ireland",
                    title: (
                        <>
                            Chronic pain support
                            <br />
                            <em>wherever you are</em>
                        </>
                    ),
                    intro:
                        "Online chronic pain management for people across Ireland who want to explore whether persistent pain may be linked to learned danger signals in the nervous system.",
                }}
                sections={[
                    {
                        eyebrow: "Online care",
                        heading: "A flexible way to begin recovery work",
                        image: {
                            src: "/images/phone.avif",
                            alt: "Online chronic pain support by phone or video",
                        },
                        body: [
                            "You do not need to live near Cork to begin exploring chronic pain recovery. Many parts of this work happen through conversation, education, tracking symptom patterns, and learning to respond to sensations with more safety.",
                            "Online sessions can support people who are managing fatigue, limited mobility, travel anxiety, busy family life, or symptoms that make regular travel difficult.",
                        ],
                    },
                    {
                        eyebrow: "Ireland-wide",
                        heading: "Support for persistent symptoms after assessment",
                        image: {
                            src: "/images/forest.avif",
                            alt: "Path through forest representing chronic pain recovery online",
                        },
                        body: [
                            "This approach may be relevant when pain has lasted more than three months, symptoms move or fluctuate, medical tests have not fully explained the pain, or stress and fear seem to amplify symptoms.",
                            "The work is careful and grounded. It does not ask you to ignore pain or push through. Instead, it helps you understand why the nervous system may still be protecting you and how to gently teach it new safety cues.",
                        ],
                    },
                    {
                        eyebrow: "What to expect",
                        heading: "Practical, personal and paced",
                        image: {
                            src: "/images/study.webp",
                            alt: "Books and notes for online chronic pain education",
                        },
                        body: [
                            "Online sessions may include pain neuroscience education, somatic tracking, emotional awareness, fear reduction, goal-setting, and gradual re-engagement with everyday activities.",
                            "Every plan depends on your history and medical context. The aim is to support recovery without making sweeping claims or overlooking medical care that may still be needed.",
                        ],
                    },
                ]}
                listSection={{
                    eyebrow: "Why online works",
                    heading: "What can be done remotely",
                    intro:
                        "For many people, the most important recovery work is learning how the brain and body are interpreting threat.",
                    items: [
                        {
                            title: "Understand your pain patterns",
                            body: "We look at when symptoms began, what changes them, what has been ruled out, and whether the pattern points toward a sensitised nervous system.",
                        },
                        {
                            title: "Reduce fear around symptoms",
                            body: "Fear can intensify pain signals. Online work can help you build a calmer, more accurate response to sensations.",
                        },
                        {
                            title: "Build a recovery plan",
                            body: "Your plan may include education, nervous system practices, movement confidence, and emotional processing.",
                        },
                        {
                            title: "Work from your own environment",
                            body: "Practising safety cues at home can help make the work directly relevant to the places where symptoms usually happen.",
                        },
                    ],
                }}
                safetyNote={{
                    heading: "Start with medical assessment",
                    body:
                        "Before beginning online chronic pain recovery work, please make sure structural abnormalities, disease, infection, acute injury, and urgent symptoms have been assessed by an appropriate medical professional.",
                }}
                relatedLinks={[
                    {
                        href: "/locations/chronic-pain-management-dublin-online",
                        label: "Online support for Dublin clients",
                    },
                    {
                        href: "/treatments/pain-reprocessing-therapy",
                        label: "Pain Reprocessing Therapy Ireland",
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
