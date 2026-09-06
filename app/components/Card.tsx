import Image from "next/image"
import { useTransform, motion, useScroll, MotionValue } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { cn } from "@/utils/cn"

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
                            className={cn(
                                "mb-6 block font-satoshi text-xs font-light tabular-nums",
                                isEven
                                    ? "text-dark-supporting"
                                    : "text-light-supporting",
                            )}
                        >
                            {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* Title */}
                        <h2
                            className={cn(
                                "mb-6 font-satoshi text-3xl leading-[1.1] md:text-4xl",
                                isEven ? "text-white" : "text-[#1E3A20]",
                                i % 3 === 1 && "italic",
                            )}
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
                            className={cn(
                                "font-satoshi text-base font-light leading-relaxed md:text-lg",
                                isEven ? "text-dark-body" : "text-light-body",
                            )}
                        >
                            {description}
                        </p>
                    </div>

                    {/* CTA on last card only */}
                    {i === totalCards - 1 && (
                        <Link href="/contact" className="mt-8 inline-block">
                            <motion.span
                                className="cta-interactive inline-flex items-center gap-3 rounded-full px-7 py-3.5 font-satoshi text-sm font-medium tracking-[0.04em] text-[#1E3A20]"
                                style={{ backgroundColor: "#F0EBE1" }}
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
