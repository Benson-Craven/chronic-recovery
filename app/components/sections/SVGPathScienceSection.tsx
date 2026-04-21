"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
    Brain,
    AlertTriangle,
    Activity,
    ThumbsUp,
    Shield,
    Smile,
} from "lucide-react"
import Link from "next/link"

const SVGPathScienceSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const pathLength = useTransform(scrollYProgress, [0.27, 1], [0, 1])

    return (
        <section className="relative" style={{ backgroundColor: "#F7F4EF" }}>
            {/* SVG path — behind all content */}
            <motion.svg
                viewBox="0 0 1000 2000"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute -left-0 top-32 h-full w-full md:-left-[10%] lg:-left-[15%]"
                style={{ zIndex: 0 }}
                preserveAspectRatio="xMidYMid slice"
            >
                <motion.path
                    d="M-24.5 101C285 315 5.86278 448.291 144.223 631.238C239.404 757.091 559.515 782.846 608.808 617.456C658.101 452.067 497.627 367.073 406.298 426.797C314.968 486.521 263.347 612.858 322.909 865.537C384.086 1125.06 79.3992 1007.94 100 1261.99C144.222 1807.35 819 1325 513 1142.5C152.717 927.625 -45 1916.5 1191.5 1852"
                    stroke="rgba(30,58,32,0.08)"
                    strokeWidth="32"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    style={{ pathLength }}
                />
            </motion.svg>

            {/* Content */}
            <div
                ref={sectionRef}
                className="container relative mx-auto overflow-hidden"
                style={{ zIndex: 10 }}
            >
                {/* Section header */}
                <div className="px-6 pb-12 pt-20 md:pt-28">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                        style={{
                            color: "#1E3A20",
                            fontFamily: "var(--font-dm-sans)",
                        }}
                    >
                        The science
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-8 text-4xl leading-[1.1] md:text-5xl lg:text-6xl"
                        style={{
                            fontFamily: "var(--font-dm-serif)",
                            color: "#1E3A20",
                        }}
                    >
                        What causes
                        <br />
                        <em>chronic pain?</em>
                    </motion.h2>
                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(30,58,32,0.12)" }}
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-8 max-w-2xl text-base leading-relaxed md:text-lg"
                        style={{
                            color: "rgba(30,58,32,0.65)",
                            fontFamily: "var(--font-dm-sans)",
                            fontWeight: 300,
                        }}
                    >
                        Chronic pain isn't always caused by ongoing injury. Many
                        long-lasting pain conditions come from learned neural
                        pathways in the brain — patterns that continue to fire
                        even after the body has healed.
                    </motion.p>
                </div>

                {/* Bento Grid
                    Layout:
                    Row 1–2: [Image 2×2] [Signals 1×2] [Treatment 1×2]
                    Row 3:   [Good News 4×1                             ]
                    Row 4:   [PRT 2×1          ] [Biopsychosocial 2×1  ]
                */}
                <div
                    id="treatment"
                    className="grid grid-cols-1 gap-3 px-6 pb-20 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-4"
                >
                    {/* 01 — Image hero 2×2 */}
                    <motion.figure
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-64 overflow-hidden lg:col-span-2 lg:row-span-2 lg:h-auto"
                        style={{ borderRadius: "20px" }}
                    >
                        <img
                            src="/images/meeting1.avif"
                            alt="Unconscious brain"
                            className="h-full w-full object-cover"
                            loading="lazy"
                        />
                        <div
                            className="absolute inset-0 flex flex-col justify-end p-7"
                            style={{
                                background:
                                    "linear-gradient(to top, rgba(10,25,12,0.97) 0%, rgba(10,25,12,0.6) 50%, transparent 100%)",
                            }}
                        >
                            <Brain
                                className="mb-3 h-5 w-5 opacity-50"
                                style={{ color: "#C8E6C9" }}
                            />
                            <h3
                                className="mb-3 text-2xl leading-snug text-white"
                                style={{ fontFamily: "var(--font-dm-serif)" }}
                            >
                                All pain is real — and it starts in the brain
                            </h3>
                            <p
                                className="mb-5 text-sm leading-relaxed"
                                style={{
                                    color: "rgba(200,230,201,0.7)",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 300,
                                }}
                            >
                                95% of brain function is unconscious —
                                constantly interpreting signals to determine
                                safety or danger. Pain originates here, not in
                                imagined injury.
                            </p>
                            <BentoLink
                                href="/contact"
                                label="Book a Consultation"
                                dark
                            />
                        </div>
                    </motion.figure>

                    {/* 02 — Signals 1×2 */}
                    <BentoCard
                        delay={0.1}
                        icon={<AlertTriangle className="h-4 w-4" />}
                        title="Signals that won't switch off"
                        body="Warning signals can persist long after healing, creating a cycle of chronic pain. Physical symptoms are the language between your unconscious and conscious brain — and that language can be retrained."
                        href="/self-assessment"
                        linkLabel="Take the Self-Assessment"
                        bg="cream"
                        colSpan={1}
                        rowSpan={2}
                    />

                    {/* 03 — Treatment Paths 1×2 */}
                    <BentoCard
                        delay={0.15}
                        icon={<Activity className="h-4 w-4" />}
                        title="Treatment paths"
                        body=""
                        href="/science"
                        linkLabel="Learn More"
                        bg="green"
                        colSpan={1}
                        rowSpan={2}
                        extra={
                            <ul className="mt-3 space-y-2">
                                {[
                                    "Pain Reprocessing Therapy",
                                    "Somatic Tracking Techniques",
                                    "Graded Exposure Therapy",
                                    "Emotional Awareness & Expression Therapy",
                                ].map((t, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-2"
                                    >
                                        <span
                                            className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                                            style={{
                                                backgroundColor:
                                                    "rgba(200,230,201,0.5)",
                                            }}
                                        />
                                        <span
                                            className="text-xs leading-snug"
                                            style={{
                                                color: "rgba(200,230,201,0.75)",
                                                fontFamily:
                                                    "var(--font-dm-sans)",
                                                fontWeight: 300,
                                            }}
                                        >
                                            {t}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        }
                    />

                    {/* 04 — The Good News 4×1 */}
                    <BentoCard
                        delay={0.1}
                        icon={<ThumbsUp className="h-4 w-4" />}
                        title="The good news"
                        body="Turning off these signals is safe — and possible. Just as your brain learned these pain patterns, it can unlearn them. Neuroplasticity works both ways, and that is exactly what this approach harnesses."
                        href="/contact"
                        linkLabel="Start Your Healing"
                        bg="cream"
                        colSpan={4}
                        rowSpan={1}
                    />

                    {/* 05 — PRT 2×1 */}
                    <BentoCard
                        delay={0.1}
                        icon={<Smile className="h-4 w-4" />}
                        title="Pain Reprocessing Therapy"
                        body="PRT helps retrain the brain to turn off misfiring pain signals — especially where pain lingers long after an injury has healed, or where stress and unprocessed emotions are driving the cycle."
                        href="/science"
                        linkLabel="Learn More"
                        bg="green"
                        colSpan={2}
                        rowSpan={1}
                    />

                    {/* 06 — Biopsychosocial 2×1 */}
                    <BentoCard
                        delay={0.15}
                        icon={<Shield className="h-4 w-4" />}
                        title="Biopsychosocial method"
                        body="A leading approach taught worldwide, including the NHS and US medical programmes. I'm a graduate of Dr. Howard Schubiner — one of the world's foremost pioneers in mind-body medicine."
                        href="/science"
                        linkLabel="Explore the Science"
                        bg="cream"
                        colSpan={2}
                        rowSpan={1}
                    />
                </div>
            </div>
        </section>
    )
}

// ── Lookup maps ────────────────────────────────────────────────────
const colSpanClass: Record<number, string> = {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    3: "lg:col-span-3",
    4: "lg:col-span-4",
}

const rowSpanClass: Record<number, string> = {
    1: "lg:row-span-1",
    2: "lg:row-span-2",
}

// ── Shared bento card ──────────────────────────────────────────────
type BentoCardProps = {
    icon: React.ReactNode
    title: string
    body: string
    href: string
    linkLabel: string
    bg: "green" | "cream"
    colSpan?: 1 | 2 | 3 | 4
    rowSpan?: 1 | 2
    delay?: number
    extra?: React.ReactNode
}

function BentoCard({
    icon,
    title,
    body,
    href,
    linkLabel,
    bg,
    colSpan = 1,
    rowSpan = 1,
    delay = 0,
    extra,
}: BentoCardProps) {
    const isGreen = bg === "green"
    return (
        <motion.figure
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className={`relative flex h-64 flex-col justify-between overflow-hidden p-7 ${colSpanClass[colSpan]} ${rowSpanClass[rowSpan]} lg:h-auto`}
            style={{
                borderRadius: "20px",
                backgroundColor: isGreen ? "#1E3A20" : "#EDE9E0",
            }}
        >
            <div>
                <div className="mb-4 flex items-center gap-2.5">
                    <span
                        style={{
                            color: isGreen
                                ? "rgba(200,230,201,0.5)"
                                : "rgba(30,58,32,0.35)",
                        }}
                    >
                        {icon}
                    </span>
                    <h3
                        className="text-lg leading-snug"
                        style={{
                            fontFamily: "var(--font-dm-serif)",
                            color: isGreen ? "#ffffff" : "#1E3A20",
                        }}
                    >
                        {title}
                    </h3>
                </div>
                {body && (
                    <p
                        className="text-sm leading-relaxed"
                        style={{
                            color: isGreen
                                ? "rgba(200,230,201,0.65)"
                                : "rgba(30,58,32,0.6)",
                            fontFamily: "var(--font-dm-sans)",
                            fontWeight: 300,
                        }}
                    >
                        {body}
                    </p>
                )}
                {extra}
            </div>
            <BentoLink href={href} label={linkLabel} dark={isGreen} />
        </motion.figure>
    )
}

// ── Shared link pill ───────────────────────────────────────────────
function BentoLink({
    href,
    label,
    dark,
}: {
    href: string
    label: string
    dark: boolean
}) {
    return (
        <Link href={href} className="mt-4 inline-block">
            <motion.span
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium"
                style={{
                    backgroundColor: dark ? "#F0EBE1" : "#1E3A20",
                    color: dark ? "#1E3A20" : "#F7F4EF",
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {label}
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path
                        d="M2 10L10 2M10 2H4M10 2V8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </motion.span>
        </Link>
    )
}

export default SVGPathScienceSection
