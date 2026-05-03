import type { Metadata } from "next"
import Breadcrumbs from "@/app/components/Breadcrumbs"
import SeoContentPage from "@/app/components/SeoContentPage"
import {
    BreadcrumbJsonLd,
    FAQJsonLd,
    createPageMetadata,
} from "@/app/lib/seo"

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
            <FAQJsonLd
                id="cork-location-faq-schema"
                questions={[
                    {
                        question: "Do you offer chronic pain management in Cork?",
                        answer: "Yes. Chronic Pain Recovery offers support in Cork and online for people with persistent pain that may have a neuroplastic component, once serious medical causes have been assessed.",
                    },
                    {
                        question: "Is this a replacement for my doctor or physiotherapist?",
                        answer: "No. This work does not replace medical diagnosis, urgent care, or appropriate physical rehabilitation. It can complement medical care when disease, infection, acute injury, or surgical causes have been considered.",
                    },
                    {
                        question: "Can I work with you if I live outside Cork city?",
                        answer: "Yes. Support is available for people across County Cork and online for people elsewhere in Ireland or internationally.",
                    },
                ]}
            />
            <Breadcrumbs items={breadcrumbs} />
            <SeoContentPage
                hero={{
                    eyebrow: "Cork chronic pain support",
                    title: (
                        <>
                            Chronic pain
                            <br />
                            <em>management in Cork</em>
                        </>
                    ),
                    intro:
                        "Evidence-informed support for people in Cork living with persistent pain, medically unexplained symptoms, or symptoms that may be maintained by a sensitised nervous system.",
                }}
                sections={[
                    {
                        eyebrow: "Local support",
                        heading: "A brain-body approach for persistent pain",
                        image: {
                            src: "/images/cork.avif",
                            alt: "Cork, Ireland for chronic pain management support",
                        },
                        body: [
                            "Chronic pain can continue long after tissues have healed, especially when the nervous system has learned to stay on high alert. This does not mean the pain is imagined. It means the brain and body may be interpreting normal sensations as danger.",
                            "At Chronic Pain Recovery in Cork, the work focuses on education, nervous system regulation, emotional awareness, and gradual safety-building. For suitable clients, this approach may help reduce fear, rebuild confidence, and support a different relationship with pain.",
                        ],
                    },
                    {
                        eyebrow: "Who it may help",
                        heading: "For pain that has not made sense medically",
                        image: {
                            src: "/images/therapy.avif",
                            alt: "Therapy room for chronic pain support in Cork",
                        },
                        body: [
                            "Many people arrive after scans, tests, medication, physiotherapy, injections, or specialist appointments have not fully explained why pain is still present. When serious medical causes have been assessed, it may be worth exploring whether neuroplastic pain is part of the picture.",
                            "This work can be appropriate for back pain, neck pain, fibromyalgia, headaches, IBS, chronic fatigue, long covid-related symptoms, pelvic pain, and other persistent symptom patterns listed on the conditions page.",
                        ],
                    },
                    {
                        eyebrow: "How sessions work",
                        heading: "In-person in Cork, with online flexibility",
                        image: {
                            src: "/images/office.avif",
                            alt: "Calm office setting for chronic pain recovery sessions",
                        },
                        body: [
                            "Sessions begin with your story: what happened, what you have been told, what you fear, and what your symptoms are stopping you from doing. From there, the aim is to understand whether your pain behaves like a protective nervous system pattern.",
                            "The process may include pain neuroscience education, somatic tracking, reducing fear around symptoms, pacing, emotional processing, and small steps toward meaningful activity. The work is personalised rather than protocol-driven.",
                        ],
                    },
                ]}
                listSection={{
                    eyebrow: "Common search questions",
                    heading: "What people in Cork often ask",
                    intro:
                        "These are the questions that usually matter before beginning chronic pain recovery work.",
                    items: [
                        {
                            title: "What if my scans show changes?",
                            body: "Many people have disc changes, arthritis, or other findings that do not fully explain pain intensity. A medical professional should assess these first, and neuroplastic pain work may still be helpful when ongoing danger is not the main driver.",
                        },
                        {
                            title: "Do I need a diagnosis?",
                            body: "A diagnosis can be useful, but the pattern of symptoms often matters too. The first priority is making sure serious structural, disease, infection, or acute injury causes have been checked.",
                        },
                        {
                            title: "Is this pain psychology?",
                            body: "It is a nervous system approach. Thoughts, emotions, stress, movement, sleep, and bodily sensations all interact with pain signals, but the pain itself is real.",
                        },
                        {
                            title: "How quickly can things change?",
                            body: "Timelines vary. Some people notice early shifts in fear or symptom intensity, while others need more time to build safety and confidence.",
                        },
                    ],
                }}
                safetyNote={{
                    heading: "Medical care comes first",
                    body:
                        "Please consult your GP or relevant medical professional to assess structural abnormalities, disease, infection, acute injury, or urgent symptoms before beginning this approach. Chronic Pain Recovery does not provide medical diagnosis or emergency care.",
                }}
                relatedLinks={[
                    {
                        href: "/treatments/pain-reprocessing-therapy",
                        label: "Pain Reprocessing Therapy",
                    },
                    {
                        href: "/conditions",
                        label: "Conditions that may benefit",
                    },
                    {
                        href: "/self-assessment",
                        label: "Neuroplastic pain self-assessment",
                    },
                ]}
            />
        </>
    )
}
