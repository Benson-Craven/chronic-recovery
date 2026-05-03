"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

type TextBlock = {
    heading: string
    body: string[]
    eyebrow?: string
    image?: {
        src: string
        alt: string
    }
}

type ListSection = {
    eyebrow: string
    heading: string
    intro?: string
    items: {
        title: string
        body: string
    }[]
}

type RelatedLink = {
    href: string
    label: string
}

type SeoContentPageProps = {
    hero: {
        eyebrow: string
        title: ReactNode
        intro: string
    }
    sections: TextBlock[]
    listSection: ListSection
    safetyNote: {
        heading: string
        body: string
    }
    relatedLinks: RelatedLink[]
}

const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function SeoContentPage({
    hero,
    sections,
    listSection,
    safetyNote,
    relatedLinks,
}: SeoContentPageProps) {
    return (
        <div className="min-h-screen" style={{ backgroundColor: "#F7F4EF" }}>
            <section
                style={{ backgroundColor: "#1E3A20" }}
                className="w-full px-6 py-24 md:py-36"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-3xl"
                >
                    <p
                        className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                        style={{
                            color: "#C8E6C9",
                            fontFamily: "var(--font-dm-sans)",
                        }}
                    >
                        {hero.eyebrow}
                    </p>
                    <h1
                        className="mb-8 text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        {hero.title}
                    </h1>
                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(200,230,201,0.2)" }}
                    />
                    <p
                        className="mt-8 max-w-xl text-base leading-relaxed md:text-lg"
                        style={{
                            color: "rgba(200,230,201,0.65)",
                            fontFamily: "var(--font-dm-sans)",
                            fontWeight: 300,
                        }}
                    >
                        {hero.intro}
                    </p>
                </motion.div>
            </section>

            {sections.map((section, index) => {
                const isGreen = index % 2 === 1
                const foreground = isGreen ? "#C8E6C9" : "#1E3A20"
                const bodyColor = isGreen
                    ? "rgba(200,230,201,0.68)"
                    : "rgba(30,58,32,0.68)"

                return (
                    <motion.section
                        key={section.heading}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        style={{ backgroundColor: isGreen ? "#1E3A20" : "#F7F4EF" }}
                        className="w-full px-6 py-20 md:py-28"
                    >
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-14 md:grid-cols-2 md:items-center md:gap-20">
                            <div className={section.image && index % 2 === 1 ? "md:order-2" : ""}>
                                {section.eyebrow && (
                                    <p
                                        className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                                        style={{
                                            color: foreground,
                                            fontFamily: "var(--font-dm-sans)",
                                        }}
                                    >
                                        {section.eyebrow}
                                    </p>
                                )}
                                <h2
                                    className="mb-8 text-4xl leading-[1.1] md:text-5xl lg:text-6xl"
                                    style={{
                                        color: isGreen ? "#FFFFFF" : "#1E3A20",
                                        fontFamily: "var(--font-dm-serif)",
                                    }}
                                >
                                    {section.heading}
                                </h2>
                                <div
                                    className="mb-8 h-px w-full"
                                    style={{
                                        backgroundColor: isGreen
                                            ? "rgba(200,230,201,0.15)"
                                            : "rgba(30,58,32,0.12)",
                                    }}
                                />
                                <div className="space-y-5">
                                    {section.body.map((paragraph) => (
                                        <p
                                            key={paragraph}
                                            className="text-base leading-relaxed md:text-lg"
                                            style={{
                                                color: bodyColor,
                                                fontFamily: "var(--font-dm-sans)",
                                                fontWeight: 300,
                                            }}
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {section.image && (
                                <div className="overflow-hidden">
                                    <Image
                                        src={section.image.src}
                                        alt={section.image.alt}
                                        width={900}
                                        height={680}
                                        className="aspect-[4/3] w-full object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            )}
                        </div>
                    </motion.section>
                )
            })}

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                style={{ backgroundColor: "#1E3A20" }}
                className="w-full px-6 py-20 md:py-28"
            >
                <div className="mx-auto max-w-5xl">
                    <p
                        className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                        style={{
                            color: "#C8E6C9",
                            fontFamily: "var(--font-dm-sans)",
                        }}
                    >
                        {listSection.eyebrow}
                    </p>
                    <h2
                        className="mb-6 text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        {listSection.heading}
                    </h2>
                    {listSection.intro && (
                        <p
                            className="mb-14 max-w-2xl text-base leading-relaxed md:text-lg"
                            style={{
                                color: "rgba(200,230,201,0.65)",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 300,
                            }}
                        >
                            {listSection.intro}
                        </p>
                    )}
                    <div
                        className="grid grid-cols-1 gap-px md:grid-cols-2"
                        style={{ backgroundColor: "rgba(200,230,201,0.1)" }}
                    >
                        {listSection.items.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.45,
                                    delay: Math.min(index * 0.06, 0.4),
                                    ease: "easeOut",
                                }}
                                className="p-7"
                                style={{ backgroundColor: "#1E3A20" }}
                            >
                                <span
                                    className="mb-5 block text-xs tabular-nums opacity-30"
                                    style={{
                                        color: "#C8E6C9",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h3
                                    className="mb-4 text-lg text-white"
                                    style={{ fontFamily: "var(--font-dm-sans)" }}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed md:text-base"
                                    style={{
                                        color: "rgba(200,230,201,0.62)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    {item.body}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <section
                style={{ backgroundColor: "#F7F4EF" }}
                className="w-full px-6 py-20 md:py-28"
            >
                <div className="mx-auto max-w-3xl">
                    <p
                        className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                        style={{
                            color: "#1E3A20",
                            fontFamily: "var(--font-dm-sans)",
                        }}
                    >
                        Before you begin
                    </p>
                    <h2
                        className="mb-8 text-4xl leading-[1.1] md:text-5xl"
                        style={{
                            color: "#1E3A20",
                            fontFamily: "var(--font-dm-serif)",
                        }}
                    >
                        {safetyNote.heading}
                    </h2>
                    <p
                        className="text-base leading-relaxed md:text-lg"
                        style={{
                            color: "rgba(30,58,32,0.68)",
                            fontFamily: "var(--font-dm-sans)",
                            fontWeight: 300,
                        }}
                    >
                        {safetyNote.body}
                    </p>
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Link href="/contact">
                            <button
                                className="w-full rounded-full px-8 py-4 text-sm font-medium tracking-wide sm:w-auto"
                                style={{
                                    backgroundColor: "#1E3A20",
                                    color: "#F7F4EF",
                                    fontFamily: "var(--font-dm-sans)",
                                }}
                            >
                                Book a Consultation
                            </button>
                        </Link>
                        <Link href="/self-assessment">
                            <button
                                className="w-full rounded-full border px-8 py-4 text-sm font-medium tracking-wide sm:w-auto"
                                style={{
                                    borderColor: "rgba(30,58,32,0.22)",
                                    color: "#1E3A20",
                                    fontFamily: "var(--font-dm-sans)",
                                }}
                            >
                                Take the Self-Assessment
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section
                style={{ backgroundColor: "#1E3A20" }}
                className="w-full px-6 py-16 md:py-20"
            >
                <div className="mx-auto max-w-5xl">
                    <p
                        className="mb-8 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                        style={{
                            color: "#C8E6C9",
                            fontFamily: "var(--font-dm-sans)",
                        }}
                    >
                        Related reading
                    </p>
                    <div className="grid grid-cols-1 gap-px md:grid-cols-3">
                        {relatedLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="p-6 transition-opacity hover:opacity-70"
                                style={{
                                    borderTop: "1px solid rgba(200,230,201,0.12)",
                                    color: "rgba(200,230,201,0.72)",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 300,
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
