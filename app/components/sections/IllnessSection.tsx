"use client"

import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"
import { FadeInOnScroll } from "../animations/FadeInOnScroll"
import Image from "next/image"
import { Section, Container, Divider } from "../ui/Layout"
import { Heading, Text, Eyebrow } from "../ui/Typography"
import { WhatsAppCta } from "../WhatsAppLink"

export default function IllnessSection() {
    return (
        <div id="illness">
            <Section
                variant="green"
                className="relative pb-0 pt-20 md:pt-28 lg:pt-6"
            >
                <div className="hidden lg:block">
                    {/* Scroll indicator */}
                    <div className="absolute left-1/2 top-6 -translate-x-1/2 transform text-center">
                        <p className="mb-2 font-satoshi text-xs font-light uppercase tracking-[0.2em] text-dark-supporting">
                            Scroll
                        </p>

                        <svg
                            className="mx-auto h-4 w-4 animate-bounce text-dark-supporting"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>

                    <div className="h-[20vh]" />

                    <IllnessSectionCarousel />
                </div>

                <IllnessSectionList />
            </Section>

            {/* Closing question block */}
            <Section variant="green" className="pt-0">
                <FadeInOnScroll>
                    <Container size="narrow">
                        <Divider variant="cream" className="mb-16" />

                        <Eyebrow className="mb-8 text-dark-supporting">
                            Still unsure?
                        </Eyebrow>

                        <Heading as="h3" className="mb-10 text-white">
                            Have you seen <em>multiple</em> professionals
                            without finding <em>lasting relief?</em>
                        </Heading>

                        <div className="rounded-2xl border border-[#C8E6C9]/[0.12] bg-[#C8E6C9]/[0.07] px-8 py-7">
                            <p className="mb-2 font-satoshi text-sm font-medium text-[#C8E6C9]">
                                Not listed above?
                            </p>

                            <Text className="text-base text-dark-body">
                                I&apos;m here to help with any illness or
                                concern, even if it&apos;s not listed. Reach out
                                to learn more and find the relief you deserve.
                            </Text>

                            <div className="mt-6 max-w-sm">
                                <WhatsAppCta
                                    source="homepage_conditions"
                                    surface="green"
                                />
                            </div>
                        </div>
                    </Container>
                </FadeInOnScroll>

                <div className="h-[10vh]" />
            </Section>
        </div>
    )
}

function IllnessSectionList() {
    return (
        <section aria-labelledby="illness-list-heading" className="lg:hidden">
            <Container size="wide">
                <div className="mb-10 md:mb-14">
                    <Eyebrow className="text-dark-supporting">
                        Conditions
                    </Eyebrow>

                    <div id="illness-list-heading">
                        <Heading className="text-white">
                            Are you <em>experiencing</em> any of the following?
                        </Heading>
                    </div>
                </div>

                <div className="space-y-6 md:space-y-8">
                    {ILLNESS_CARDS.map((card, index) => (
                        <MobileCard key={card.id} card={card} index={index} />
                    ))}
                </div>
            </Container>
        </section>
    )
}

type MobileCardProps = {
    card: CardType
    index: number
}

function MobileCard({ card, index }: MobileCardProps) {
    return (
        <article className="overflow-hidden rounded-[20px] border border-[#C8E6C9]/[0.12]">
            <div className="relative h-40 sm:h-48 md:h-56">
                <Image
                    src={card.url}
                    alt={card.title}
                    fill
                    sizes="(max-width: 1023px) calc(100vw - 48px), 300px"
                    loading="lazy"
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,25,12,0.88)_0%,rgba(10,25,12,0.12)_75%)]" />

                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                    <span className="font-satoshi text-xs font-light tabular-nums text-[#C8E6C9]">
                        {String(index + 1).padStart(2, "0")}
                    </span>

                    <Heading
                        as="h3"
                        className="text-2xl leading-snug text-white md:text-3xl"
                    >
                        {card.title}
                    </Heading>
                </div>
            </div>

            <div className="bg-[#0A190C] px-6 py-7 md:px-8 md:py-9">
                <ul className="space-y-3">
                    {card.symptoms?.map((symptom) => (
                        <li key={symptom} className="flex items-start gap-3">
                            <span
                                aria-hidden="true"
                                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#C8E6C9]/60"
                            />

                            <span className="font-satoshi text-sm font-light leading-relaxed text-dark-body md:text-base">
                                {symptom}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

function IllnessSectionCarousel() {
    const targetRef = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({ target: targetRef })

    // Scroll mechanics
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"])
    const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    }

    return (
        <section
            aria-label="Illness types carousel"
            role="region"
            ref={targetRef}
            className="relative h-[250vh]"
        >
            {/* Section header */}
            <motion.div
                style={{ opacity }}
                className="sticky top-[130px] z-10 pb-20 md:top-16"
            >
                <Eyebrow className="text-dark-supporting">Conditions</Eyebrow>

                <Heading className="text-white">
                    Are you <em>experiencing</em> any of the following?
                </Heading>
            </motion.div>

            <div className="sticky top-1/3 flex flex-col items-start justify-center overflow-hidden md:top-72">
                <motion.div
                    style={{ x }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        margin: "-100px",
                    }}
                    className="flex flex-row flex-nowrap gap-4 pl-5 md:gap-5 md:pl-10"
                >
                    {ILLNESS_CARDS.map((card, index) => (
                        <Card key={card.id} card={card} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

type CardProps = {
    card: CardType
    index: number
}

function Card({ card, index }: CardProps) {
    return (
        <motion.div className="group relative h-[440px] w-[360px] shrink-0 overflow-hidden rounded-[20px]">
            <div className="relative h-full w-full">
                <Image
                    src={card.url}
                    alt={card.title}
                    fill
                    sizes="360px"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,25,12,1)_0%,rgba(10,25,12,0.88)_40%,rgba(10,25,12,0.25)_70%,rgba(10,25,12,0.1)_100%)]" />

                <div className="absolute inset-0 flex flex-col justify-between p-7">
                    {/* Index */}
                    <span className="font-satoshi text-xs font-light tabular-nums text-dark-supporting">
                        {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Bottom content */}
                    <div className="transition-transform duration-300 group-hover:translate-y-[-6px]">
                        <Heading
                            as="h3"
                            className="mb-4 text-2xl leading-snug text-white md:text-2xl lg:text-2xl"
                        >
                            {card.title}
                        </Heading>

                        <div className="mb-4 h-px w-10 bg-[#C8E6C9]/40" />

                        <div className="space-y-2.5">
                            {card.symptoms?.map((symptom, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-3"
                                >
                                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#C8E6C9]/60" />

                                    <span className="font-satoshi text-sm font-light leading-snug text-dark-body">
                                        {symptom}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

type CardType = {
    url: string
    title: string
    id: number
    description: string
    symptoms?: string[]
    acute?: boolean
}

const ILLNESS_CARDS: CardType[] = [
    {
        url: "/images/fib.jpg",
        title: "Chronic Pain Syndromes",
        description:
            "Persistent pain conditions that affect daily life and well-being.",
        symptoms: [
            "Fibromyalgia",
            "Chronic fatigue syndrome",
            "Amplified Musculoskeletal Pain Syndrome (AMPS)",
            "Myofascial pain syndrome",
            "Complex Regional Pain Syndrome (CRPS)",
        ],
        id: 1,
    },
    {
        url: "/images/neck-pain.avif",
        title: "Musculoskeletal Pain",
        description:
            "Pain affecting muscles, bones, joints, and connective tissues.",
        symptoms: [
            "Back / Neck / Knee Pain",
            "Whiplash",
            "Patellofemoral syndrome",
            "Piriformis syndrome",
            "Repetitive strain injury (RSI)",
            "Foot pain syndromes",
        ],
        id: 2,
    },
    {
        url: "/images/headache.avif",
        title: "Head & Facial Pain",
        description:
            "Conditions causing pain in the head, face, or jaw regions.",
        symptoms: [
            "Tension headaches & migraines",
            "Temporomandibular joint (TMJ) syndrome",
            "Facial pain",
            "Chronic dizziness",
            "Tinnitus",
        ],
        id: 3,
    },
    {
        url: "/images/stomach-pain.avif",
        title: "Gastrointestinal Issues",
        description:
            "Chronic digestive and abdominal conditions that disrupt daily life.",
        symptoms: [
            "Irritable Bowel Syndrome (IBS)",
            "Chronic abdominal and pelvic pain syndromes",
            "Gastric issues",
        ],
        id: 4,
    },
    {
        url: "/images/anxiety.avif",
        title: "Skin & Sensory Issues",
        description: "Chronic skin conditions and sensory-related discomfort.",
        symptoms: [
            "Skin problems",
            "Vulvodynia",
            "Chronic sleep issues",
            "Palpitations",
        ],
        id: 5,
    },
    {
        url: "/images/viral.jpg",
        title: "Long Covid & Post-Viral",
        description: "Persistent symptoms following viral infections.",
        symptoms: [
            "Long Covid",
            "Chronic fatigue syndrome",
            "Chronic dizziness",
            "Brain fog",
        ],
        id: 6,
    },
]
