import type { Metadata } from "next"
import Breadcrumbs from "@/app/components/Breadcrumbs"
import SeoContentPage from "@/app/components/SeoContentPage"
import {
    BreadcrumbJsonLd,
    FAQJsonLd,
    createPageMetadata,
} from "@/app/lib/seo"

export const metadata: Metadata = createPageMetadata({
    title: "Long Covid Support Cork & Online | Chronic Pain Recovery",
    description:
        "Explore brain-body support for long covid-related pain, fatigue and symptoms when active infection and medical causes have been assessed.",
    path: "/conditions/long-covid",
})

export default function LongCovidPage() {
    const breadcrumbs = [
        { name: "Home", path: "/" },
        { name: "Conditions", path: "/conditions" },
        { name: "Long Covid", path: "/conditions/long-covid" },
    ]

    return (
        <>
            <BreadcrumbJsonLd
                id="long-covid-breadcrumb-schema"
                items={breadcrumbs}
            />
            <FAQJsonLd
                id="long-covid-faq-schema"
                questions={[
                    {
                        question: "Can this approach help long covid symptoms?",
                        answer: "For some people, long covid-related pain, fatigue, dizziness, breathlessness sensations, or other persistent symptoms may involve nervous system sensitisation. This approach may support recovery when active infection and medical causes have been assessed.",
                    },
                    {
                        question: "Does this mean long covid is psychological?",
                        answer: "No. Symptoms are real. A brain-body approach looks at how the nervous system, immune stress, fear, exertion, and safety signals may interact after illness.",
                    },
                    {
                        question: "Should I see a doctor first?",
                        answer: "Yes. Ongoing symptoms after covid should be assessed by a medical professional before beginning this work, especially if symptoms are new, severe, changing, or affecting breathing or heart function.",
                    },
                ]}
            />
            <Breadcrumbs items={breadcrumbs} />
            <SeoContentPage
                hero={{
                    eyebrow: "Long covid support",
                    title: (
                        <>
                            Long covid,
                            <br />
                            fatigue and pain
                        </>
                    ),
                    intro:
                        "Support for people with long covid-related pain, fatigue, dizziness, or persistent symptoms where medical assessment has ruled out active disease, infection, or urgent causes.",
                }}
                sections={[
                    {
                        eyebrow: "Persistent symptoms",
                        heading: "When the body still feels under threat",
                        image: {
                            src: "/images/anxiety.avif",
                            alt: "Quiet indoor setting for long covid symptom support",
                        },
                        body: [
                            "Long covid can be complex, and symptoms should be taken seriously. For some people, the nervous system may remain sensitised after illness, continuing to produce fatigue, pain, dizziness, breathlessness sensations, or other protective signals after the immediate infection has passed.",
                            "This does not mean symptoms are imagined. It means the brain and body may still be operating as if danger is present. Brain-body recovery work may help some people build safety, reduce fear, and gently expand capacity.",
                        ],
                    },
                    {
                        eyebrow: "Careful pacing",
                        heading: "Support without pushing through",
                        image: {
                            src: "/images/forest.avif",
                            alt: "Gentle path representing paced long covid recovery",
                        },
                        body: [
                            "Long covid support must be paced carefully. The aim is not to force exercise or ignore post-exertional symptom flares. Instead, the work starts with understanding your current limits, triggers, fears, and the ways your nervous system responds to exertion, rest, stress, and sensation.",
                            "For suitable clients, sessions may include nervous system education, somatic tracking, calming threat responses, working with fear of symptoms, and gradually restoring confidence in daily activity.",
                        ],
                    },
                    {
                        eyebrow: "Brain-body connection",
                        heading: "A respectful view of real symptoms",
                        image: {
                            src: "/images/therapy.avif",
                            alt: "Therapy space for brain-body long covid support",
                        },
                        body: [
                            "People with long covid are often told either that everything is physical or that everything is anxiety. A biopsychosocial approach is more nuanced. It recognises that physiology, stress, immune activation, sleep, emotion, movement, and learned danger signals can all affect symptoms.",
                            "The goal is to help the system feel safer, not to blame you for being unwell. This work may sit alongside medical care, physiotherapy, occupational therapy, or other support.",
                        ],
                    },
                ]}
                listSection={{
                    eyebrow: "Signs to explore",
                    heading: "When neuroplastic patterns may be involved",
                    intro:
                        "These signs do not prove anything by themselves, but they can make brain-body support worth considering.",
                    items: [
                        {
                            title: "Symptoms fluctuate",
                            body: "Pain, fatigue, dizziness, or other symptoms vary with stress, sleep, environment, exertion, or emotional load.",
                        },
                        {
                            title: "Tests do not explain severity",
                            body: "Medical assessment has not found an active disease process that fully explains the intensity or persistence of symptoms.",
                        },
                        {
                            title: "Fear narrows life",
                            body: "Avoidance, monitoring, and fear of flares have made your world smaller, even when you want to do more.",
                        },
                        {
                            title: "Symptoms overlap",
                            body: "Long covid symptoms appear alongside migraine, IBS, widespread pain, anxiety, sleep disruption, or other sensitised-system patterns.",
                        },
                    ],
                }}
                safetyNote={{
                    heading: "Long covid needs medical oversight",
                    body:
                        "Please seek medical assessment for ongoing symptoms after covid, especially breathing, chest pain, fainting, neurological changes, fever, or worsening symptoms. This page is educational and does not replace diagnosis or treatment from a medical professional.",
                }}
                relatedLinks={[
                    {
                        href: "/treatments/pain-rehabilitation",
                        label: "Pain rehabilitation Ireland",
                    },
                    {
                        href: "/treatments/pain-reprocessing-therapy",
                        label: "Pain Reprocessing Therapy",
                    },
                    {
                        href: "/science",
                        label: "How neuroplastic pain works",
                    },
                ]}
            />
        </>
    )
}
