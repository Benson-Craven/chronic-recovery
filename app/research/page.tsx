"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import CtaActionRow from "../components/CtaActionRow"
import { EditorialSplit } from "../components/ui/EditorialSplit"
import { WhatsAppCta } from "../components/WhatsAppLink"
import TrackedPhoneLink from "../components/TrackedPhoneLink"
import { PHONE_DISPLAY } from "../lib/contact"

const studies = [
    {
        title: "The Boulder Chronic Back Pain Study",
        link: "https://pubmed.ncbi.nlm.nih.gov/34586357/",
        description:
            "In a randomised trial of 151 adults with primary chronic back pain, 33 of 50 people assigned to PRT reported being pain-free or nearly pain-free immediately after treatment. Group differences were maintained at one year.",
        stat: "66%",
        statLabel: "33 of 50 in the PRT group",
    },
    {
        title: "Harvard Psychophysiologic Symptom Relief Therapy (PSRT)",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8476063/",
        description:
            "In this 35-person pilot study of adults with nonspecific chronic back pain, 7 of 11 people in the PSRT group reported being pain-free at 26 weeks, compared with 3 of 12 in MBSR and 2 of 12 in usual care.",
        stat: "64%",
        statLabel: "7 of 11 in a pilot study",
    },
    {
        title: "PSRT for Post-Acute Sequelae of COVID-19 (preprint)",
        link: "https://www.medrxiv.org/content/10.1101/2022.10.07.22280732v1.full-text",
        description:
            "This small preprint reported a median 55% reduction in symptom scores over 13 weeks. It had not completed peer review and should not be treated as settled evidence.",
        stat: "55%",
        statLabel: "median change in a preprint",
    },
    {
        title: "Emotional Awareness and Expression Therapy, CBT, and Education for Fibromyalgia",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5680092/",
        description:
            "In a 230-person fibromyalgia trial, EAET did not differ from education on the primary pain-severity outcome. It performed better on several secondary outcomes and had some advantages over CBT.",
        stat: "230",
        statLabel: "participants in the trial",
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
                        Selected research
                        <br />
                        <em>and its limits</em>
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
                        These studies examine different approaches in specific
                        populations. Their designs, comparison groups, and
                        limitations matter, and no study can predict an
                        individual's outcome.
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
                <EditorialSplit
                    visual={{
                        kind: "illustration",
                        src: "/images/illustrations/group-education.png",
                        alt: "",
                    }}
                >
                    <div>
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
                            Research
                            <br />
                            <em>with study context</em>
                        </h2>

                        <div
                            className="h-px w-full"
                            style={{ backgroundColor: "rgba(30,58,32,0.12)" }}
                        />
                    </div>
                </EditorialSplit>

                <div className="mx-auto mt-16 max-w-4xl">
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
                <EditorialSplit
                    reverse
                    surface="green"
                    visual={{
                        kind: "illustration",
                        src: "/images/illustrations/journaling-reflection.png",
                        alt: "",
                    }}
                >
                    <div>
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
                            Read the findings
                            <br />
                            <em>in context</em>
                        </h2>
                        <div
                            className="h-px w-full"
                            style={{
                                backgroundColor: "rgba(200,230,201,0.15)",
                            }}
                        />
                        {[
                            {
                                number: "01",
                                body: "These studies cover different interventions and populations. Two are relatively small back-pain studies, one is a fibromyalgia trial, and the Long COVID item is a preprint.",
                            },
                            {
                                number: "02",
                                body: "The results support further investigation of brain-body approaches for some people. They do not establish that an individual's pain is neuroplastic or replace medical assessment.",
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
                                style={{
                                    borderColor: "rgba(200,230,201,0.12)",
                                }}
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
                            "Research can inform a conversation,
                            <br />
                            but it cannot promise an outcome."
                        </motion.p>
                    </div>
                </EditorialSplit>
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
                                Want to discuss
                                <br />
                                <em>whether it fits?</em>
                            </h2>
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
                                    A consultation can help you ask how this
                                    research relates to your history, medical
                                    assessment, and goals.
                                </p>
                                <p
                                    style={{
                                        fontFamily: "var(--font-dm-serif)",
                                        fontStyle: "italic",
                                        color: "#1E3A20",
                                        fontSize: "1.15rem",
                                    }}
                                >
                                    Ask questions before deciding your next
                                    step.
                                </p>
                            </div>

                            <CtaActionRow>
                                <WhatsAppCta source="research_closing_cta" />
                                <Link
                                    href="/contact"
                                    className="cta-interactive w-full whitespace-nowrap rounded-full py-4 text-center text-sm font-medium tracking-wide sm:w-auto sm:px-10"
                                    style={{
                                        backgroundColor: "transparent",
                                        border: "1px solid rgba(30,58,32,0.3)",
                                        color: "#1E3A20",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 500,
                                        letterSpacing: "0.04em",
                                    }}
                                >
                                    Book Consultation
                                </Link>
                                <p
                                    className="text-sm sm:basis-full"
                                    style={{
                                        color: "rgba(30, 58, 32, 0.4)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    Call{" "}
                                    <TrackedPhoneLink
                                        source="research_closing_cta"
                                        className="underline underline-offset-2 transition-opacity hover:opacity-100"
                                        style={{
                                            color: "#1E3A20",
                                            opacity: 0.6,
                                        }}
                                    >
                                        {PHONE_DISPLAY}
                                    </TrackedPhoneLink>
                                </p>
                            </CtaActionRow>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    )
}

export default ResearchStudies
