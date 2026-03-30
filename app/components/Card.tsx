import Image from "next/image"
import { useTransform, motion, useScroll, MotionValue } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

interface CardProps {
    i: number
    totalCards: number
    title: string
    description: string
    src: string
    url: string
    color: string
    progress: MotionValue<number>
    range: [number, number]
    targetScale: number
}

const Card: React.FC<CardProps> = ({
    i,
    totalCards,
    title,
    description,
    src,
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

    const isEven = i % 2 === 0

    return (
        <div
            ref={container}
            className="sticky top-0 flex h-screen items-center justify-center"
        >
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                    backgroundColor: isEven ? "#1E3A20" : "#F7F4EF",
                    borderRadius: "24px",
                }}
                className="relative flex h-[500px] w-[400px] flex-col overflow-hidden md:h-[500px] md:w-[1000px] md:flex-row"
            >
                {/* Image — left half */}
                <div className="relative h-1/3 overflow-hidden md:h-full md:w-1/2">
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
                    {/* Subtle overlay tying image to card colour */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: isEven
                                ? "linear-gradient(to right, transparent 60%, #1E3A20)"
                                : "linear-gradient(to right, transparent 60%, #F7F4EF)",
                        }}
                    />
                </div>

                {/* Content — right half */}
                <div className="flex flex-1 flex-col justify-between p-8 md:p-12">
                    <div>
                        {/* Index */}
                        <span
                            className="mb-6 block text-xs tabular-nums opacity-30"
                            style={{
                                color: isEven ? "#C8E6C9" : "#1E3A20",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 300,
                            }}
                        >
                            {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* Title */}
                        <h2
                            className="mb-6 text-3xl leading-[1.1] md:text-4xl"
                            style={{
                                fontFamily: "var(--font-dm-serif)",
                                color: isEven ? "#ffffff" : "#1E3A20",
                                fontStyle: i % 3 === 1 ? "italic" : "normal",
                            }}
                        >
                            {title}
                        </h2>

                        {/* Divider */}
                        <div
                            className="mb-6 h-px w-12"
                            style={{
                                backgroundColor: isEven
                                    ? "rgba(200,230,201,0.3)"
                                    : "rgba(30,58,32,0.15)",
                            }}
                        />

                        {/* Description */}
                        <p
                            className="text-base leading-relaxed md:text-lg"
                            style={{
                                color: isEven
                                    ? "rgba(200,230,201,0.75)"
                                    : "rgba(30,58,32,0.65)",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 300,
                            }}
                        >
                            {description}
                        </p>
                    </div>

                    {/* CTA on last card only */}
                    {i === totalCards - 1 && (
                        <Link href="/contact" className="mt-8 inline-block">
                            <motion.span
                                className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide"
                                style={{
                                    backgroundColor: "#F0EBE1",
                                    color: "#1E3A20",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 500,
                                    letterSpacing: "0.04em",
                                }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                }}
                            >
                                Enquire About a Consultation
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                >
                                    <path
                                        d="M2 10L10 2M10 2H4M10 2V8"
                                        stroke="#1E3A20"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </motion.span>
                        </Link>
                    )}
                </div>
            </motion.div>
        </div>
    )
}

export default Card
