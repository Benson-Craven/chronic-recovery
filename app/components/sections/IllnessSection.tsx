"use client"
import { motion, useTransform, useScroll, useInView } from "framer-motion"
import { useRef } from "react"
import React from "react"
import { FadeInOnScroll } from "../animations/FadeInOnScroll"
import Image from "next/image"

const IllnessSection = () => {
    return (
        <div id="illness" className="relative bg-secondary">
            <div className="h-[25vh]" />

            <div className="absolute left-1/2 top-0.5 -translate-x-1/2 transform pt-6 text-center">
                <p className="mb-2 text-gray-300/50">Scroll Down</p>
                <svg
                    className="mx-auto h-6 w-6 animate-bounce text-gray-300/30"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>

            <IllnessSectionCarousel />

            <FadeInOnScroll>
                <div className="container mx-auto flex flex-col items-center justify-center px-4 md:h-[60vh]">
                    {/* Main Question */}
                    <span className="mb-10 w-3/4 text-center text-2xl leading-tight text-gray-100 md:w-full md:text-5xl">
                        Have you seen{" "}
                        <span className="text-accent font-butler italic">
                            multiple
                        </span>{" "}
                        medical professionals without finding{" "}
                        <span className="text-accent font-butler italic">
                            lasting relief?
                        </span>
                    </span>

                    {/* Supportive Information Card */}
                    <div className="mt-6 w-4/5 max-w-lg rounded-lg border-none bg-white p-6 shadow-lg md:w-full">
                        {/* Sub-heading */}
                        <h3 className="text-center text-xl text-textPrimary md:text-2xl">
                            Is what you&apos;re{" "}
                            <span className="font-butler italic">
                                experiencing
                            </span>{" "}
                            not listed?
                        </h3>

                        {/* Descriptive Text */}
                        <p className="mt-3 text-center text-base leading-relaxed text-textPrimary md:text-lg">
                            We&apos;re here to help with any illness or concern,
                            even if it&apos;s not listed above. Reach out to
                            learn more and find the relief you deserve.
                        </p>
                    </div>
                </div>
            </FadeInOnScroll>
            <div className="h-[20vh]" />
        </div>
    )
}

const IllnessSectionCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const cardWidth = 100 / cards.length
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"])

    const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0])

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
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
            className="relative h-[250vh] bg-secondary"
        >
            {/* Section Header */}
            <motion.div
                style={{ opacity }}
                className="sticky top-[130px] pl-5 md:top-16 md:pl-10"
            >
                <h2 className="text-center text-3xl tracking-tight text-textThird md:text-5xl">
                    Are you{" "}
                    <span className="font-butler italic">experiencing</span> any
                    of the following?
                </h2>
            </motion.div>

            {/* Horizontal Scrolling Section */}
            <div className="sticky top-1/3 mt-8 flex flex-col items-start justify-center overflow-hidden md:top-44">
                <motion.div
                    style={{ x }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-row flex-nowrap gap-6 pl-5 md:gap-12 md:pl-10"
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
        <motion.div className="group relative h-[250px] w-[200px] overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl sm:h-[300px] md:h-[350px] lg:h-[400px] lg:w-[350px]">
            {/* Full-height Image Container */}
            <div className="relative h-full w-full">
                {/* Background Image */}
                <Image
                    src={card.url}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transition-transform duration-300 group-hover:translate-y-[-10px] md:p-6">
                    {/* Title */}
                    <h3 className="text-lg font-semibold leading-snug sm:text-xl md:text-2xl">
                        {card.title}
                    </h3>

                    {/* Description */}
                    {/* <p className="mt-1 text-xs font-light leading-relaxed text-gray-300 sm:text-sm md:text-base">
                        {card.description}
                    </p> */}

                    {/* Symptoms List */}
                    <div className="mt-3 space-y-1">
                        {card.symptoms?.map((symptom, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-textThird" />
                                <span className="text-xs text-gray-300 sm:text-sm">
                                    {symptom}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Optional Support Note */}
                    {/* Uncomment if needed */}
                    {/* <div className="mt-4 rounded-lg bg-white/10 p-3">
                        <p className="text-sm text-gray-300">
                            We understand your pain. Our specialists can help guide you toward relief.
                        </p>
                    </div> */}
                </div>
            </div>
        </motion.div>
    )
}

// Update the CardType to include new fields
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
        url: "/images/fib.jpg", // Reusing the IBS image
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
        url: "/images/neck-pain.avif", // Reusing the Long Covid image
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
        url: "/images/headache.avif", // Reusing the Migraines image
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
        url: "/images/stomach-pain.avif", // Reusing the IBS image
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
        url: "/images/anxiety.avif", // Reusing the Anxiety image
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
        url: "/images/viral.jpg", // Reusing the Long Covid image
        title: "Long Covid & Post-Viral Syndromes",
        description:
            "Persistent symptoms following viral infections, including Long Covid.",
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
