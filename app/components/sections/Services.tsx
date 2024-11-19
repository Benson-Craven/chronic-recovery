"use client"
import Card from "../Card"
import { useScroll, MotionValue } from "framer-motion"
import { useRef } from "react"

interface Project {
    title: string
    description: string
    src: string
    url: string
    color: string
}

const projects: Project[] = [
    {
        title: "Structured approach to resolving the causes ",
        description:
            "I specialise in helping people with persistent pain conditions and have worked with many people of all ages and ailments and seen fantastic results.",
        src: "phone.jpg",
        url: "https://example.com/project1",
        color: "#cfdda5",
    },
    {
        title: "1-1 50 minute sessions",
        description:
            "I will work with your body, nervous system and brain to get you back to good health.",
        src: "meeting1.jpg",
        url: "https://example.com/project2",
        color: "#a4ac96",
    },
    {
        title: "In person sessions in Cork, Ireland or online*",
        description: "€65 per session",
        src: "cork.jpg",
        url: "https://example.com/project3",
        color: "#cfdda5",
    },
]

export default function Services() {
    const container = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    })

    return (
        <main ref={container} className="relative bg-[#fafafa] pt-24">
            <div
                id="services"
                className="container mx-auto flex items-center justify-center"
            >
                <h2 className="mb-6 text-3xl tracking-tight text-textPrimary sm:text-4xl md:text-7xl">
                    How can I help you?
                </h2>
                <div className="mb-16 h-[1px] bg-textPrimary opacity-10" />
            </div>
            <div className="mt-16">
                {" "}
                {projects.map((project, i) => {
                    const targetScale = 1 - (projects.length - i) * 0.05
                    return (
                        <Card
                            totalCards={projects.length} // Pass total cards
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
        </main>
    )
}
