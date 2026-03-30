"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const studies = [
    {
        title: "The Boulder Chronic Back Pain Study",
        link: "https://pubmed.ncbi.nlm.nih.gov/34586357/",
        description:
            "66% became pain or nearly pain-free with pain reprocessing therapy, maintained at one year.",
        stat: "66%",
        statLabel: "pain-free",
    },
    {
        title: "Harvard Psychophysiologic Symptom Relief Therapy (PSRT)",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8476063/",
        description:
            "For chronic back pain, 64% of patients reported being pain-free in the PSRT arm versus 25% in MBSR and 17% in usual care.",
        stat: "64%",
        statLabel: "pain-free vs 17% usual care",
    },
    {
        title: "Harvard PSRT for Post-Acute Sequelae of COVID-19",
        link: "https://www.medrxiv.org/content/10.1101/2022.10.07.22280732v1.full-text",
        description:
            "Up to a 55% decrease in symptoms over 13 weeks. Mean symptom duration prior to the study was 267 days.",
        stat: "55%",
        statLabel: "symptom reduction",
    },
    {
        title: "Emotional Awareness and Expression Therapy, CBT, and Education for Fibromyalgia",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5680092/",
        description:
            "A randomised controlled trial showing significant benefit from EAET versus CBT and FM education.",
        stat: "RCT",
        statLabel: "randomised controlled trial",
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

const ResearchStudies = () => {
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
                        Evidence base
                    </p>
                    <h1
                        className="mb-8 text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        The research
                        <br />
                        <em>behind the results</em>
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
                        These peer-reviewed studies demonstrate the
                        effectiveness of mind-body approaches for chronic pain.
                        The evidence is clear — the brain can be retrained.
                    </p>
                </motion.div>
            </section>

            {/* Studies — cream */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                style={{ backgroundColor: "#F7F4EF" }}
                className="w-full px-6 py-20 md:py-28"
            >
                <div className="mx-auto max-w-4xl">
                    <p
                        className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                        style={{
                            color: "#1E3A20",
                            fontFamily: "var(--font-dm-sans)",
                        }}
                    >
                        {studies.length} studies
                    </p>

                    <h2
                        className="mb-14 text-4xl leading-[1.1] md:text-5xl"
                        style={{
                            fontFamily: "var(--font-dm-serif)",
                            color: "#1E3A20",
                        }}
                    >
                        Peer-reviewed
                        <br />
                        <em>research archive</em>
                    </h2>

                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(30,58,32,0.12)" }}
                    />

                    {studies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                                ease: "easeOut",
                            }}
                            className="grid grid-cols-[48px_1fr] gap-6 border-b py-10 md:grid-cols-[64px_1fr_140px]"
                            style={{ borderColor: "rgba(30,58,32,0.12)" }}
                        >
                            {/* Index number */}
                            <span
                                className="mt-1 text-xs tabular-nums opacity-30"
                                style={{
                                    color: "#1E3A20",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 300,
                                }}
                            >
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            {/* Title + description */}
                            <div className="flex flex-col gap-3">
                                <a
                                    href={study.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 transition-opacity hover:opacity-70"
                                >
                                    <span
                                        className="text-base font-medium md:text-lg"
                                        style={{
                                            color: "#1E3A20",
                                            fontFamily: "var(--font-dm-sans)",
                                        }}
                                    >
                                        {study.title}
                                    </span>
                                    {/* External link arrow */}
                                    <svg
                                        className="shrink-0 opacity-30 transition-opacity group-hover:opacity-60"
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2 10L10 2M10 2H4M10 2V8"
                                            stroke="#1E3A20"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                                <p
                                    className="text-sm leading-relaxed md:text-base"
                                    style={{
                                        color: "rgba(30,58,32,0.6)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    {study.description}
                                </p>
                            </div>

                            {/* Stat callout — desktop only */}
                            <div className="hidden flex-col items-end justify-start gap-1 md:flex">
                                <span
                                    className="text-3xl leading-none"
                                    style={{
                                        fontFamily: "var(--font-dm-serif)",
                                        color: "#1E3A20",
                                    }}
                                >
                                    {study.stat}
                                </span>
                                <span
                                    className="text-right text-xs leading-snug opacity-40"
                                    style={{
                                        color: "#1E3A20",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    {study.statLabel}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Context note — green */}
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
                        Why it matters
                    </p>
                    <h2
                        className="mb-14 text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        Science is catching up
                        <br />
                        <em>to what patients know</em>
                    </h2>
                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(200,230,201,0.15)" }}
                    />
                    {[
                        {
                            number: "01",
                            body: "The biopsychosocial method is now taught to medical practitioners worldwide — including in Australia, the US, and the NHS in the UK. This is no longer fringe science.",
                        },
                        {
                            number: "02",
                            body: "These studies represent a new understanding of pain: that the brain can both create and resolve it. If your pain hasn't responded to structural treatments, there is likely a neuroplastic component.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: "easeOut",
                            }}
                            className="flex items-start gap-6 border-b py-10"
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
                                {item.number}
                            </span>
                            <p
                                className="text-base leading-relaxed md:text-lg"
                                style={{
                                    color: "rgba(200, 230, 201, 0.7)",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 300,
                                }}
                            >
                                {item.body}
                            </p>
                        </motion.div>
                    ))}

                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                        className="mt-12 text-2xl leading-snug md:text-3xl"
                        style={{
                            fontFamily: "var(--font-dm-serif)",
                            fontStyle: "italic",
                            color: "rgba(200,230,201,0.8)",
                        }}
                    >
                        "What the brain has learned,
                        <br />
                        it can unlearn."
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
                                Your next step
                            </p>
                            <h2
                                className="text-5xl leading-[1.05] md:text-6xl lg:text-7xl"
                                style={{
                                    fontFamily: "var(--font-dm-serif)",
                                    color: "#1E3A20",
                                }}
                            >
                                The evidence
                                <br />
                                <em>is there.</em>
                                <br />
                                Are you?
                            </h2>
                            <div
                                className="mt-12 hidden md:block"
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
                                    The research shows it's possible. Thousands
                                    of people have recovered from conditions
                                    conventional medicine couldn't resolve —
                                    using exactly this approach.
                                </p>
                                <p
                                    style={{
                                        fontFamily: "var(--font-dm-serif)",
                                        fontStyle: "italic",
                                        color: "#1E3A20",
                                        fontSize: "1.15rem",
                                    }}
                                >
                                    You could be next.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">
                                <Link href="/contact">
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
                                        href="tel:+353892335106"
                                        className="underline underline-offset-2 transition-opacity hover:opacity-100"
                                        style={{
                                            color: "#1E3A20",
                                            opacity: 0.6,
                                        }}
                                    >
                                        +353 (0) 89-233-5106
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

export default ResearchStudies
