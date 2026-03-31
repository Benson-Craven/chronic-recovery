"use client"
import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"
import React from "react"
import { FadeInOnScroll } from "../animations/FadeInOnScroll"
import Image from "next/image"
import { Section, Container, Divider } from "../ui/Layout"
import { Heading, Text, Eyebrow } from "../ui/Typography"

const IllnessSection = () => {
    return (
        <div id="illness">
            <Section variant="green" className="relative pb-0 pt-6">
                {/* Scroll indicator */}
                <div className="absolute left-1/2 top-6 -translate-x-1/2 transform text-center">
                    <p
                        className="mb-2 text-xs uppercase tracking-[0.2em] opacity-30"
                        style={{
                            color: "#C8E6C9",
                            fontFamily: "var(--font-dm-sans)",
                            fontWeight: 300,
                        }}
                    >
                        Scroll
                    </p>
                    <svg
                        className="mx-auto h-4 w-4 animate-bounce"
                        style={{ color: "rgba(200,230,201,0.3)" }}
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
            </Section>

            {/* Closing question block */}
            <Section variant="green" className="pt-0">
                <FadeInOnScroll>
                    <Container size="narrow">
                        <Divider variant="cream" className="mb-16" />

                        <Eyebrow className="mb-8" style={{ color: "#C8E6C9" }}>
                            Still unsure?
                        </Eyebrow>

                        <Heading
                            as="h3"
                            className="mb-10 text-white"
                        >
                            Have you seen <em>multiple</em> professionals
                            without finding <em>lasting relief?</em>
                        </Heading>

                        <div
                            className="rounded-2xl px-8 py-7"
                            style={{
                                backgroundColor: "rgba(200,230,201,0.07)",
                                border: "1px solid rgba(200,230,201,0.12)",
                            }}
                        >
                            <p
                                className="mb-2 text-sm font-medium"
                                style={{
                                    color: "#C8E6C9",
                                    fontFamily: "var(--font-dm-sans)",
                                }}
                            >
                                Not listed above?
                            </p>
                            <Text
                                className="text-base"
                                style={{ color: "rgba(200,230,201,0.65)" }}
                            >
                                I&apos;m here to help with any illness or
                                concern, even if it&apos;s not listed. Reach
                                out to learn more and find the relief you
                                deserve.
                            </Text>
                        </div>
                    </Container>
                </FadeInOnScroll>
                <div className="h-[10vh]" />
            </Section>
        </div>
    )
}

const IllnessSectionCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({ target: targetRef })

    // Scroll mechanics — unchanged
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"])
    const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.2 },
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
                className="sticky top-[130px] z-10 md:top-16"
            >
                <Eyebrow style={{ color: "#C8E6C9" }}>Conditions</Eyebrow>
                <Heading className="text-white">
                    Are you <em>experiencing</em> any of the following?
                </Heading>
            </motion.div>

            {/* Horizontal scroll container — mechanics unchanged */}
            <div className="sticky top-1/3 mt-8 flex flex-col items-start justify-center overflow-hidden md:top-44">
                <motion.div
                    style={{ x }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-row flex-nowrap gap-4 pl-5 md:gap-5 md:pl-10"
                >
                    {cards.map((card, index) => (
                        <Card key={card.id} card={card} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

const Card: React.FC<{ card: CardType; index: number }> = ({ card, index }) => {
    return (
        <motion.div
            className="group relative shrink-0 overflow-hidden"
            style={{
                borderRadius: "20px",
                width: "300px",
                height: "440px",
            }}
        >
            <div className="relative h-full w-full">
                <Image
                    src={card.url}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 300px, 480px"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to top, rgba(10,25,12,1) 0%, rgba(10,25,12,0.88) 40%, rgba(10,25,12,0.25) 70%, rgba(10,25,12,0.1) 100%)",
                    }}
                />

                <div className="absolute inset-0 flex flex-col justify-between p-7">
                    {/* Index */}
                    <span
                        className="text-xs tabular-nums opacity-40"
                        style={{
                            color: "#C8E6C9",
                            fontFamily: "var(--font-dm-sans)",
                            fontWeight: 300,
                        }}
                    >
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

                        <div
                            className="mb-4 h-px w-10"
                            style={{ backgroundColor: "rgba(200,230,201,0.4)" }}
                        />

                        <div className="space-y-2.5">
                            {card.symptoms?.map((symptom, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-3"
                                >
                                    <div
                                        className="mt-2 h-1 w-1 shrink-0 rounded-full"
                                        style={{
                                            backgroundColor:
                                                "rgba(200,230,201,0.6)",
                                        }}
                                    />
                                    <span
                                        className="text-sm leading-snug"
                                        style={{
                                            color: "rgba(200,230,201,0.9)",
                                            fontFamily: "var(--font-dm-sans)",
                                            fontWeight: 300,
                                        }}
                                    >
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

const cards: CardType[] = [
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

export default IllnessSection
