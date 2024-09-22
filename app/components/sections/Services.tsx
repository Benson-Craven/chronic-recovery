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
        title: "Structured approach to resolving the causes of chronic pain",
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

export default function Home() {
    const container = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    })

    return (
        <main
            ref={container}
            className="relative bg-[#fafafa] pt-24 font-Satoshi"
        >
            <div
                id="services"
                className="absolute left-1/2 -translate-x-1/2 transform"
            >
                <h2 className="mb-16 text-7xl tracking-tight text-black">
                    How can I help you?
                </h2>
            </div>
            <div className="mt-16">
                {" "}
                {projects.map((project, i) => {
                    const targetScale = 1 - (projects.length - i) * 0.05
                    return (
                        <Card
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
