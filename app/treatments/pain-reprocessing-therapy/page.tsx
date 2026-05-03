import type { Metadata } from "next"
import Breadcrumbs from "@/app/components/Breadcrumbs"
import SeoContentPage from "@/app/components/SeoContentPage"
import {
    BreadcrumbJsonLd,
    FAQJsonLd,
    createPageMetadata,
} from "@/app/lib/seo"

export const metadata: Metadata = createPageMetadata({
    title: "Pain Reprocessing Therapy Ireland | Chronic Pain Recovery",
    description:
        "Learn how Pain Reprocessing Therapy may help neuroplastic chronic pain by changing the brain's interpretation of safe body signals.",
    path: "/treatments/pain-reprocessing-therapy",
})

export default function PainReprocessingTherapyPage() {
    const breadcrumbs = [
        { name: "Home", path: "/" },
        {
            name: "Pain Reprocessing Therapy",
            path: "/treatments/pain-reprocessing-therapy",
        },
    ]

    return (
        <>
            <BreadcrumbJsonLd
                id="prt-breadcrumb-schema"
                items={breadcrumbs}
            />
            <FAQJsonLd
                id="prt-faq-schema"
                questions={[
                    {
                        question: "What is Pain Reprocessing Therapy?",
                        answer: "Pain Reprocessing Therapy is an evidence-informed approach that helps suitable clients reinterpret safe body sensations as non-dangerous, which may reduce neuroplastic pain signals over time.",
                    },
                    {
                        question: "Is Pain Reprocessing Therapy suitable for all pain?",
                        answer: "No. Structural abnormalities, disease, infection, acute injury, and urgent medical causes should be assessed first. PRT is most relevant when pain appears to be maintained by learned nervous system danger signals.",
                    },
                    {
                        question: "Can Pain Reprocessing Therapy be done online?",
                        answer: "Yes. Many parts of PRT, including education, somatic tracking, and reducing fear around symptoms, can be supported online when clinically appropriate.",
                    },
                ]}
            />
            <Breadcrumbs items={breadcrumbs} />
            <SeoContentPage
                hero={{
                    eyebrow: "Pain Reprocessing Therapy",
                    title: (
                        <>
                            Retraining
                            <br />
                            <em>pain signals</em>
                        </>
                    ),
                    intro:
                        "Pain Reprocessing Therapy may help people with neuroplastic chronic pain by teaching the brain to interpret safe body sensations with less danger.",
                }}
                sections={[
                    {
                        eyebrow: "The method",
                        heading: "What Pain Reprocessing Therapy does",
                        image: {
                            src: "/images/study.webp",
                            alt: "Pain science books and study materials",
                        },
                        body: [
                            "Pain Reprocessing Therapy, often called PRT, is based on the idea that some chronic pain is maintained by learned neural pathways rather than ongoing tissue damage. The pain is real, but the danger signal may be inaccurate.",
                            "PRT helps suitable clients observe sensations differently, reduce fear, and build evidence of safety. Over time, this may help the nervous system lower its protective alarm response.",
                        ],
                    },
                    {
                        eyebrow: "What it involves",
                        heading: "Education, safety and somatic tracking",
                        image: {
                            src: "/images/therapy.avif",
                            alt: "Therapy setting for Pain Reprocessing Therapy",
                        },
                        body: [
                            "A central part of PRT is learning why pain can persist after healing and how the brain can misinterpret normal sensations as dangerous. This education can reduce fear and create a foundation for change.",
                            "Somatic tracking is another key practice. It means paying attention to sensations with curiosity and safety rather than alarm, when it is appropriate to do so. This is not about ignoring pain; it is about changing the meaning the brain attaches to it.",
                        ],
                    },
                    {
                        eyebrow: "Who it is for",
                        heading: "When pain may be neuroplastic",
                        image: {
                            src: "/images/headache.avif",
                            alt: "Person experiencing persistent headache symptoms",
                        },
                        body: [
                            "PRT may be relevant when pain began without clear injury, persists beyond expected healing, moves around, varies with stress, improves with distraction, or has not been explained by medical tests.",
                            "It may also be explored alongside symptoms such as fibromyalgia, migraine, back pain, neck pain, IBS, pelvic pain, long covid-related symptoms, and chronic fatigue, as long as medical causes have been assessed.",
                        ],
                    },
                ]}
                listSection={{
                    eyebrow: "Core principles",
                    heading: "How the work supports change",
                    intro:
                        "PRT is not positive thinking. It is a structured way of helping the nervous system update its prediction of danger.",
                    items: [
                        {
                            title: "Pain is real",
                            body: "The starting point is validation. Neuroplastic pain is generated by the brain and nervous system, but it is still a real bodily experience.",
                        },
                        {
                            title: "Pain does not always mean damage",
                            body: "For some chronic pain, the alarm system keeps firing even when tissues are not in ongoing danger.",
                        },
                        {
                            title: "Fear amplifies signals",
                            body: "Fear, avoidance, scanning, and protective tension can reinforce the brain's danger prediction.",
                        },
                        {
                            title: "Safety can be learned",
                            body: "With the right conditions, the brain can learn that certain sensations and movements are safe again.",
                        },
                    ],
                }}
                safetyNote={{
                    heading: "PRT is not for every pain condition",
                    body:
                        "Pain Reprocessing Therapy should only be considered after appropriate medical assessment. It is not a replacement for treatment of active disease, infection, acute injury, cancer, urgent symptoms, or structural problems requiring surgical intervention.",
                }}
                relatedLinks={[
                    {
                        href: "/treatments/pain-rehabilitation",
                        label: "Pain rehabilitation Ireland",
                    },
                    {
                        href: "/science",
                        label: "The science of chronic pain",
                    },
                    {
                        href: "/blog/pain-reprocessing-therapy-ireland",
                        label: "Pain Reprocessing Therapy in Ireland",
                    },
                    {
                        href: "/blog/why-pain-persists-after-healing",
                        label: "Why pain persists after healing",
                    },
                ]}
            />
        </>
    )
}
