"use client"
import { motion, useTransform, useScroll, useInView } from "framer-motion"
import { useRef } from "react"
import React from "react"
import { FadeInOnScroll } from "../animations/FadeInOnScroll"
import Image from "next/image"

const IllnessSection = () => {
    return (
        <div className="relative bg-secondary">
            <div className="h-[25vh]" />

            {/* Scroll Down Indicator */}
            <motion.div
                className="absolute left-1/2 top-0.5 flex -translate-x-1/2 flex-col items-center gap-2 pt-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <span className="text-sm text-gray-300 md:text-base">
                    Scroll Down
                </span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6 text-gray-300"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3v12m0 0l-3.75-3.75M12 15l3.75-3.75"
                        />
                    </svg>
                </motion.div>
            </motion.div>

            <IllnessSectionCarousel />

            <FadeInOnScroll>
                <div className="container mx-auto flex h-[40vh] flex-col items-center justify-center md:h-[60vh]">
                    <span className="w-3/4 text-center text-2xl leading-tight text-gray-100 md:w-full md:text-5xl">
                        Have you seen{" "}
                        <span className="text-accent font-butler italic">
                            multiple
                        </span>{" "}
                        medical professionals without finding{" "}
                        <span className="text-accent font-butler italic">
                            lasting relief?
                        </span>
                    </span>
                    <div className="mt-6 w-4/5 max-w-lg rounded-lg border-none bg-white p-6 shadow-lg">
                        <h3 className="text-center text-xl text-textPrimary md:text-2xl">
                            Is what you&apos;re{" "}
                            <span className="font-butler italic">
                                experiencing
                            </span>{" "}
                            not listed?
                        </h3>
                        <p className="mt-3 text-center text-base leading-relaxed text-textPrimary">
                            Were here to help with any illness or concern, even
                            if it&apos;s not listed above. Reach out to learn
                            more and find the relief you deserve.
                        </p>
                    </div>
                </div>
            </FadeInOnScroll>
        </div>
    )
}

const IllnessSectionCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const cardWidth = 100 / cards.length
    const x = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", `-${100 - (cards.length / 3) * cardWidth}%`],
    )

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
            className="relative h-[300vh] bg-secondary"
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
                    className="mb-10 flex flex-row flex-nowrap gap-6 pl-5 md:gap-12 md:pl-10"
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
                    <p className="mt-1 text-xs font-light leading-relaxed text-gray-300 sm:text-sm md:text-base">
                        {card.description}
                    </p>

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

// Updated cards array with more supportive information
const cards: CardType[] = [
    {
        url: "/images/stomach-pain.avif",
        title: "Irritable Bowel Syndrome (IBS)",
        description:
            "Chronic digestive discomfort that significantly affects daily life.",
        symptoms: [
            "Abdominal pain or cramping",
            "Bloating",
            "Diarrhea or constipation",
        ],
        id: 1,
    },
    {
        url: "/images/neck-pain.avif",
        title: "Long Covid",
        description:
            "Persistent symptoms after recovering from COVID-19, including neck pain.",
        symptoms: ["Fatigue", "Neck or muscle discomfort", "Brain fog"],
        id: 2,
    },
    {
        url: "/images/headache.avif",
        title: "Migraines",
        description:
            "Recurring headaches that interfere with daily activities and productivity.",
        symptoms: [
            "Throbbing or pulsing pain",
            "Sensitivity to light and sound",
            "Nausea or vomiting",
        ],
        id: 3,
    },
    {
        url: "/images/wrist-pain.avif",
        title: "Wrist Pain",
        description: "Wrist discomfort caused by pressure on the median nerve.",
        symptoms: [
            "Tingling or numbness in the fingers",
            "Weak grip strength",
            "Wrist pain that worsens at night",
        ],
        id: 4,
    },
    {
        url: "/images/anxiety.avif",
        title: "Anxiety",
        description:
            "Mental health condition that may cause physical symptoms like muscle tension.",
        symptoms: [
            "Restlessness or nervousness",
            "Muscle tension",
            "Difficulty sleeping",
        ],
        id: 5,
    },
    {
        url: "/images/depression.avif",
        title: "Depression",
        description:
            "Mental health condition that can lead to fatigue and physical discomfort.",
        symptoms: ["Low energy", "Sleep disturbances", "Chronic body aches"],
        id: 6,
    },
]

export default IllnessSection
