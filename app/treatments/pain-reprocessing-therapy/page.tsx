import type { Metadata } from "next"
import Breadcrumbs from "@/app/components/Breadcrumbs"
import SeoContentPage from "@/app/components/SeoContentPage"
import { BreadcrumbJsonLd, createPageMetadata } from "@/app/lib/seo"

export const metadata: Metadata = createPageMetadata({
    title: "Pain Reprocessing Therapy in Ireland | Chronic Pain Recovery",
    description:
        "Explore Pain Reprocessing Therapy with Marsha Canny, a chronic pain therapist offering 60-minute online sessions across Ireland and limited in-person sessions in Rochestown, Cork.",
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
            <BreadcrumbJsonLd id="prt-breadcrumb-schema" items={breadcrumbs} />
            <Breadcrumbs items={breadcrumbs} />
            <SeoContentPage
                whatsAppSource="prt_closing_cta"
                hero={{
                    eyebrow: "Retraining pain signals",
                    title: "Pain Reprocessing Therapy in Ireland",
                    intro: "I'm Marsha Canny, a chronic pain therapist. I offer one-to-one Pain Reprocessing Therapy support for suitable adults online across Ireland, with limited in-person sessions in Rochestown, Cork.",
                }}
                sections={[
                    {
                        eyebrow: "The method",
                        heading: "What Pain Reprocessing Therapy does",
                        visual: {
                            kind: "illustration",
                            src: "/images/illustrations/pain-neuroscience.png",
                            alt: "",
                        },
                        body: [
                            "Pain Reprocessing Therapy, often called PRT, is based on the idea that some chronic pain is maintained by learned neural pathways rather than ongoing tissue damage. The pain is real, but the danger signal may be inaccurate.",
                            "PRT helps suitable clients observe sensations differently, reduce fear, and build evidence of safety. Over time, this may help the nervous system lower its protective alarm response.",
                        ],
                    },
                    {
                        eyebrow: "What it involves",
                        heading: "Education, safety and somatic tracking",
                        visual: {
                            kind: "illustration",
                            src: "/images/illustrations/mind-body-connection.png",
                            alt: "",
                        },
                        body: [
                            "A central part of PRT is learning why pain can persist after healing and how the brain can misinterpret normal sensations as dangerous. This education can reduce fear and create a foundation for change.",
                            "Somatic tracking is another key practice. It means paying attention to sensations with curiosity and safety rather than alarm, when it is appropriate to do so. This is not about ignoring pain; it is about changing the meaning the brain attaches to it.",
                        ],
                    },
                    {
                        eyebrow: "Who it is for",
                        heading: "When pain may be neuroplastic",
                        visual: {
                            kind: "illustration",
                            src: "/images/illustrations/gradual-recovery.png",
                            alt: "",
                        },
                        body: [
                            "PRT may be relevant when pain began without clear injury, persists beyond expected healing, moves around, varies with stress, improves with distraction, or has not been explained by medical tests.",
                            "These patterns are not a diagnosis. Suitability depends on your symptoms, history, and medical context, and new, severe, changing, or unexplained symptoms should be assessed by an appropriate medical professional first.",
                        ],
                    },
                ]}
                listSection={{
                    eyebrow: "About me, sessions and fees",
                    heading: "Practical details before you enquire",
                    intro: "The first conversation is an opportunity to ask questions and discuss whether this educational, recovery-oriented approach may fit your needs.",
                    items: [
                        {
                            title: "About me",
                            body: "I'm a chronic pain therapist based in Rochestown, Cork. My public ATNS Practitioner & Coach Directory profile is linked from the About page.",
                        },
                        {
                            title: "Session format",
                            body: "I offer 60-minute one-to-one sessions shaped around your pain history, medical context, goals, and questions.",
                        },
                        {
                            title: "Cork and online access",
                            body: "I offer online sessions across Ireland and limited in-person sessions in Rochestown, Cork. I share the private address only when an appointment is confirmed.",
                        },
                        {
                            title: "Pricing",
                            body: "I charge €70 for a 60-minute session. A package of 6 sessions costs €360.",
                        },
                    ],
                }}
                safetyNote={{
                    heading: "PRT is not for every pain condition",
                    body: "Pain Reprocessing Therapy should only be considered after appropriate medical assessment. It is not a replacement for treatment of active disease, infection, acute injury, cancer, urgent symptoms, or structural problems requiring surgical intervention.",
                }}
                researchLinks={[
                    {
                        title: "Effect of Pain Reprocessing Therapy vs Placebo and Usual Care for Patients With Chronic Back Pain",
                        source: "JAMA Psychiatry, 2022",
                        href: "https://pubmed.ncbi.nlm.nih.gov/34586357/",
                        summary:
                            "Randomised clinical trial of 151 adults with primary chronic back pain comparing PRT with open-label placebo and usual care, with one-year follow-up.",
                    },
                    {
                        title: "Pain Reprocessing Therapy vs Placebo and Usual Care: 5-Year Follow-Up",
                        source: "JAMA Psychiatry, 2025",
                        href: "https://jamanetwork.com/journals/jamapsychiatry/fullarticle/2837160",
                        summary:
                            "Long-term follow-up from the original PRT trial reporting durability of outcomes in chronic back pain. Useful context, while still specific to the trial population studied.",
                    },
                ]}
                relatedLinks={[
                    {
                        href: "/science",
                        label: "The science of chronic pain",
                    },
                    {
                        href: "/blog/pain-reprocessing-therapy-ireland",
                        label: "What is Pain Reprocessing Therapy?",
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
