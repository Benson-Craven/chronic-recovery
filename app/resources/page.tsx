"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

type Item = {
    title: string
    url: string
    note?: string
}

type LinkSection = {
    category: string
    eyebrow: string
    items: Item[]
}

const links: LinkSection[] = [
    {
        category: "Podcasts",
        eyebrow: "Listen",
        items: [
            {
                title: "What The Latest Study on Chronic Back Pain Means For You (Yoni Ashar, PhD)",
                url: "https://www.curablehealth.com/podcast/back-pain-study",
                note: "Available on Apple Podcasts",
            },
        ],
    },
    {
        category: "Videos",
        eyebrow: "Watch",
        items: [
            {
                title: "TEDxAdelaide — Lorimer Moseley — Why Things Hurt",
                url: "https://youtu.be/gwd-wLdIHjs?si=UdLKtB6KXBQbjMnV",
            },
            {
                title: "New Hope for Back Pain",
                url: "https://youtu.be/_S7w2eg0DYw",
            },
            {
                title: "Trauma and the Nervous System",
                url: "https://youtu.be/ZdIQRxwT1I0",
            },
            {
                title: "Changing Your Mind: Chronic Pain and The Brain",
                url: "https://youtu.be/u1NiU_k5jT0",
            },
            {
                title: "Chronic Symptoms and the Nervous System",
                url: "https://youtu.be/r5V4hRm39RI",
            },
            {
                title: "In Search of a Unified Theory for Pain Relief — Howard Schubiner, MD",
                url: "https://youtu.be/ukrgiyoKfB8?si=GRxeoSRDK7Gszqbw",
            },
            {
                title: "How Your Nervous System Works & Changes",
                url: "https://youtu.be/H-XfCl-HpRM?si=GnZRqVpSAHC7ToMt",
            },
            {
                title: "How Placebo Effects Work to Change Our Biology & Psychology",
                url: "https://www.youtube.com/watch?v=gdUNjPijwA8",
            },
            {
                title: "A Science-Supported Journaling Protocol to Improve Mental & Physical Health",
                url: "https://www.youtube.com/watch?v=wAZn9dF3XTo",
            },
            {
                title: "Chronic Pain: A New Perspective — Georgie Oldfield — TEDxUniversityofManchester",
                url: "https://www.youtube.com/watch?v=BxsBJgMKHrw",
            },
        ],
    },
]

const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
}

const ExternalIcon = () => (
    <svg
        className="shrink-0 opacity-30 transition-opacity group-hover:opacity-70"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M2 10L10 2M10 2H4M10 2V8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const UsefulLinks: React.FC = () => {
    return (
        <div className="min-h-screen" style={{ backgroundColor: "#F7F4EF" }}>
            {/* Hero — green */}
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
                        Resources
                    </p>
                    <h1
                        className="mb-8 text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        Useful links
                        <br />
                        <em>to go deeper</em>
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
                        Curated podcasts and videos to help you understand
                        chronic pain, the nervous system, and why recovery is
                        possible.
                    </p>
                </motion.div>
            </section>

            {/* Podcasts — cream */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
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
                        Listen
                    </p>
                    <h2
                        className="mb-14 text-4xl leading-[1.1] md:text-5xl"
                        style={{
                            fontFamily: "var(--font-dm-serif)",
                            color: "#1E3A20",
                        }}
                    >
                        Podcasts
                    </h2>

                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(30,58,32,0.12)" }}
                    />

                    {links[0].items.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                                ease: "easeOut",
                            }}
                            className="group flex items-start gap-6 border-b py-10 transition-opacity hover:opacity-70"
                            style={{ borderColor: "rgba(30,58,32,0.12)" }}
                        >
                            <span
                                className="mt-1 shrink-0 text-xs tabular-nums opacity-30"
                                style={{
                                    color: "#1E3A20",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 300,
                                }}
                            >
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <div className="flex flex-1 flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <p
                                        className="text-base font-medium md:text-lg"
                                        style={{
                                            color: "#1E3A20",
                                            fontFamily: "var(--font-dm-sans)",
                                        }}
                                    >
                                        {item.title}
                                    </p>
                                    <ExternalIcon />
                                </div>
                                {item.note && (
                                    <p
                                        className="text-xs"
                                        style={{
                                            color: "rgba(30,58,32,0.4)",
                                            fontFamily: "var(--font-dm-sans)",
                                            fontWeight: 300,
                                        }}
                                    >
                                        {item.note}
                                    </p>
                                )}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.section>

            {/* Videos — green */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                style={{ backgroundColor: "#1E3A20" }}
                className="w-full px-6 py-20 md:py-28"
            >
                <div className="mx-auto max-w-3xl">
                    <p
                        className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                        style={{
                            color: "#C8E6C9",
                            fontFamily: "var(--font-dm-sans)",
                        }}
                    >
                        Watch
                    </p>
                    <h2
                        className="mb-14 text-4xl leading-[1.1] text-white md:text-5xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        Videos
                    </h2>

                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(200,230,201,0.15)" }}
                    />

                    {links[1].items.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.06,
                                ease: "easeOut",
                            }}
                            className="group flex items-start gap-6 border-b py-8 transition-opacity hover:opacity-70"
                            style={{ borderColor: "rgba(200,230,201,0.12)" }}
                        >
                            <span
                                className="mt-1 shrink-0 text-xs tabular-nums opacity-30"
                                style={{
                                    color: "#C8E6C9",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 300,
                                }}
                            >
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <div className="flex flex-1 items-center gap-2">
                                <p
                                    className="text-base leading-snug md:text-lg"
                                    style={{
                                        color: "rgba(200,230,201,0.8)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    {item.title}
                                </p>
                                <span style={{ color: "#C8E6C9" }}>
                                    <ExternalIcon />
                                </span>
                            </div>
                        </motion.a>
                    ))}

                    {/* Pull quote */}
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                        className="mt-14 text-2xl leading-snug md:text-3xl"
                        style={{
                            fontFamily: "var(--font-dm-serif)",
                            fontStyle: "italic",
                            color: "rgba(200,230,201,0.8)",
                        }}
                    >
                        "Understanding your pain
                        <br />
                        is the first step to ending it."
                    </motion.p>
                </div>
            </motion.section>

            {/* Final CTA — cream editorial split */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                style={{ backgroundColor: "#F7F4EF" }}
                className="w-full px-6 py-20 md:py-28 lg:py-36"
            >
                <div className="mx-auto max-w-5xl">
                    <div
                        className="mb-12 h-px w-full"
                        style={{ backgroundColor: "rgba(30,58,32,0.15)" }}
                    />
                    <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
                        <div>
                            <p
                                className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                                style={{
                                    color: "#1E3A20",
                                    fontFamily: "var(--font-dm-sans)",
                                }}
                            >
                                Ready to begin?
                            </p>
                            <h2
                                className="text-5xl leading-[1.05] md:text-6xl lg:text-7xl"
                                style={{
                                    fontFamily: "var(--font-dm-serif)",
                                    color: "#1E3A20",
                                }}
                            >
                                Knowledge
                                <br />
                                <em>is just</em>
                                <br />
                                the start.
                            </h2>
                            <div
                                className="mt-12 hidden h-px md:block"
                                style={{
                                    backgroundColor: "rgba(30,58,32,0.15)",
                                }}
                            />
                        </div>

                        <div className="flex flex-col justify-between gap-10">
                            <div
                                className="space-y-5 text-base leading-relaxed md:text-lg"
                                style={{
                                    color: "rgba(30, 58, 32, 0.65)",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 300,
                                }}
                            >
                                <p>
                                    These resources can help you understand
                                    what's happening in your nervous system. But
                                    understanding alone isn't always enough —
                                    sometimes you need a guide.
                                </p>
                                <p
                                    style={{
                                        fontFamily: "var(--font-dm-serif)",
                                        fontStyle: "italic",
                                        color: "#1E3A20",
                                        fontSize: "1.15rem",
                                    }}
                                >
                                    That's where I come in.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">
                                <Link href="/contact">
                                    {" "}
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20,
                                        }}
                                        className="w-full rounded-full py-4 text-sm font-medium tracking-wide transition-shadow hover:shadow-lg md:w-auto md:px-10"
                                        style={{
                                            backgroundColor: "#1E3A20",
                                            color: "#F7F4EF",
                                            fontFamily: "var(--font-dm-sans)",
                                            fontWeight: 500,
                                            letterSpacing: "0.04em",
                                        }}
                                    >
                                        Book Your Consultation
                                    </motion.button>
                                </Link>
                                <Link href="/self-assessment">
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20,
                                        }}
                                        className="w-full rounded-full py-4 text-sm font-medium tracking-wide md:w-auto md:px-10"
                                        style={{
                                            backgroundColor: "transparent",
                                            color: "#1E3A20",
                                            border: "1px solid rgba(30,58,32,0.3)",
                                            fontFamily: "var(--font-dm-sans)",
                                            fontWeight: 400,
                                            letterSpacing: "0.04em",
                                        }}
                                    >
                                        Take the Self-Assessment
                                    </motion.button>
                                </Link>
                                <p
                                    className="text-sm"
                                    style={{
                                        color: "rgba(30, 58, 32, 0.4)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    or call / WhatsApp{" "}
                                    <a
                                        href="tel:+353871025108"
                                        className="underline underline-offset-2 transition-opacity hover:opacity-100"
                                        style={{
                                            color: "#1E3A20",
                                            opacity: 0.6,
                                        }}
                                    >
                                        +353 (0) 87-102-5108
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="mt-12 h-px w-full"
                        style={{ backgroundColor: "rgba(30,58,32,0.15)" }}
                    />
                </div>
            </motion.section>
        </div>
    )
}

export default UsefulLinks
