"use client"

import Card from "../Card"
import { useScroll } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

interface Project {
    title: string
    description: string
    src: string
    url: string
    color: string
}

const projects: Project[] = [
    {
        title: "Structured approach to resolving the causes",
        description:
            "I specialise in helping people with persistent pain conditions and work with many people of all ages and ailments — with fantastic results.",
        src: "phone.avif",
        url: "",
        color: "#1E3A20",
    },
    {
        title: "1-to-1, 60-minute sessions",
        description:
            "I will work with your body, nervous system, and brain to get you back to good health.",
        src: "meeting1.avif",
        url: "",
        color: "#F7F4EF",
    },
    {
        title: "In-person in Cork or online",
        description:
            "€70 per session at my home clinic in Rochestown, Cork — or online anywhere. Package of 6 sessions available for €360.",
        src: "cork.avif",
        url: "",
        color: "#1E3A20",
    },
]

export default function Services() {
    const container = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    })

    return (
        <main
            ref={container}
            className="relative pt-24"
            style={{ backgroundColor: "#F7F4EF" }}
        >
            {/* Section header */}
            <div id="services" className="mx-auto max-w-5xl px-6 pb-16">
                <p
                    className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                    style={{
                        color: "#1E3A20",
                        fontFamily: "var(--font-dm-sans)",
                    }}
                >
                    Services
                </p>
                <h2
                    className="text-4xl leading-[1.1] md:text-5xl lg:text-6xl"
                    style={{
                        fontFamily: "var(--font-dm-serif)",
                        color: "#1E3A20",
                    }}
                >
                    How can I
                    <br />
                    <em>help you?</em>
                </h2>
                <div
                    className="mt-10 h-px w-full"
                    style={{ backgroundColor: "rgba(30,58,32,0.12)" }}
                />
            </div>

            {/* Stacking cards */}
            <div className="mt-4">
                {projects.map((project, i) => {
                    const targetScale = 1 - (projects.length - i) * 0.05
                    return (
                        <Card
                            totalCards={projects.length}
                            key={`p_${i}`}
                            i={i}
                            {...project}
                            progress={scrollYProgress}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    )
                })}
            </div>

            {/* Disclaimer */}
            <div
                className="mx-auto max-w-3xl px-6 py-10"
                style={{ borderTop: "1px solid rgba(30,58,32,0.1)" }}
            >
                <p
                    className="text-center text-sm leading-relaxed md:text-base"
                    style={{
                        color: "rgba(30,58,32,0.5)",
                        fontFamily: "var(--font-dm-sans)",
                        fontWeight: 300,
                    }}
                >
                    Please consult your doctor to rule out structural
                    abnormality, disease, or infection. Take the{" "}
                    <Link
                        href="/self-assessment"
                        className="underline underline-offset-2 transition-opacity hover:opacity-60"
                        style={{ color: "#1E3A20" }}
                    >
                        self-assessment questionnaire
                    </Link>{" "}
                    to help determine whether this approach is right for you.
                </p>
            </div>

            <div className="h-[20vh]" />
        </main>
    )
}
