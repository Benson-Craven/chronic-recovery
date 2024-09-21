import Image from "next/image"
import { useTransform, motion, useScroll, MotionValue } from "framer-motion"
import { useRef } from "react"

interface CardProps {
    i: number
    title: string
    description: string
    src: string
    url: string
    color: string // color from the projects array
    progress: MotionValue<number>
    range: [number, number]
    targetScale: number
}

const Card: React.FC<CardProps> = ({
    i,
    title,
    description,
    src,
    url,
    color, // dynamically passed color
    progress,
    range,
    targetScale,
}) => {
    const container = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"],
    })

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1])
    const scale = useTransform(progress, range, [1, targetScale])

    return (
        <div
            ref={container}
            className="sticky top-0 flex h-screen items-center justify-center font-Satoshi"
        >
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                    backgroundColor: color,
                }} // Apply dynamic color here
                className="relative flex h-[500px] w-[1000px] overflow-hidden rounded-[32px] border-2 border-black"
            >
                <div className="flex flex-1 flex-col justify-center p-12">
                    <h2 className="mb-4 text-5xl font-bold text-black">
                        {title}
                    </h2>
                    <p className="mb-6 text-lg text-black">{description}</p>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
                    >
                        Count me in
                        <svg
                            className="ml-2"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 12H19M19 12L12 5M19 12L12 19"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
                <div className="relative w-1/2 overflow-hidden">
                    <motion.div
                        className="h-full w-full"
                        style={{ scale: imageScale }}
                    >
                        <Image
                            fill
                            src={`/images/${src}`}
                            alt={title}
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Card
