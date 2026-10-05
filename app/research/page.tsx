"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import CtaActionRow from "../components/CtaActionRow"
import { EditorialSplit } from "../components/ui/EditorialSplit"
import { WhatsAppCta } from "../components/WhatsAppLink"
import TrackedPhoneLink from "../components/TrackedPhoneLink"
import { PHONE_DISPLAY } from "../lib/contact"
import PageHero from "../components/sections/PageHero"

const STUDIES = [
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
        stat: "230",
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

export default function ResearchStudies() {
    return (
        <div className="min-h-screen bg-[#F7F4EF]">
            <PageHero
                eyebrow="Evidence Base"
                description=" These peer-reviewed studies demonstrate the
                        effectiveness of mind-body approaches for chronic pain.
                        The evidence is clear: the brain can be retrained."
            >
                The research
                <br />
                <em>behind the results</em>
            </PageHero>

            {/* Studies — cream */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                className="w-full bg-[#F7F4EF] px-6 py-20 md:py-28"
            >
                <EditorialSplit
                    visual={{
                        kind: "illustration",
                        src: "/images/illustrations/group-education.png",
                        alt: "",
                    }}
                >
                    <div>
                        <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                            {STUDIES.length} studies
                        </p>

                        <h2 className="mb-14 font-satoshi text-4xl leading-[1.1] text-[#1E3A20] md:text-5xl">
                            Peer-reviewed
                            <br />
                            <em>research archive</em>
                        </h2>

                        <div className="h-px w-full bg-[rgba(30,58,32,0.12)]" />
                    </div>
                </EditorialSplit>

                <div className="mx-auto mt-16 max-w-4xl">
                    {STUDIES.map((study, index) => (
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
                            className="grid grid-cols-[48px_1fr] gap-6 border-b border-[rgba(30,58,32,0.12)] py-10 md:grid-cols-[64px_1fr_140px]"
                        >
                            {/* Index number */}
                            <span className="mt-1 font-satoshi text-xs font-light tabular-nums text-light-supporting">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            {/* Title + description */}
                            <div className="flex flex-col gap-3">
                                <a
                                    href={study.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2"
                                >
                                    <span className="font-satoshi text-base font-medium text-[#1E3A20] md:text-lg">
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
                                <p className="font-satoshi text-sm font-light leading-relaxed text-light-supporting md:text-base">
                                    {study.description}
                                </p>
                            </div>

                            {/* Stat callout — desktop only */}
                            <div className="hidden flex-col items-end justify-start gap-1 md:flex">
                                <span className="font-satoshi text-3xl leading-none text-[#1E3A20]">
                                    {study.stat}
                                </span>
                                <span className="text-right font-satoshi text-xs font-light leading-snug text-light-supporting">
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
                className="w-full bg-[#1E3A20] px-6 py-20 md:py-28"
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
                        <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-dark-supporting">
                            Why it matters
                        </p>
                        <h2 className="mb-14 font-satoshi text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl">
                            Science is catching up
                            <br />
                            <em>to what patients know</em>
                        </h2>
                        <div className="h-px w-full bg-[rgba(200,230,201,0.15)]" />
                        {[
                            {
                                number: "01",
                                body: "The biopsychosocial method is now taught to medical practitioners worldwide, including in Australia, the US, and the NHS in the UK. This is no longer fringe science.",
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
                                className="flex items-start gap-6 border-b border-[rgba(200,230,201,0.12)] py-10"
                            >
                                <span className="mt-1 shrink-0 font-satoshi text-xs font-light tabular-nums text-dark-supporting">
                                    {item.number}
                                </span>
                                <p className="font-satoshi text-base font-light leading-relaxed text-dark-body md:text-lg">
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
                            className="mt-12 font-satoshi text-2xl italic leading-snug text-dark-body md:text-3xl"
                        >
                            "What the brain has learned,
                            <br />
                            it can unlearn."
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
                className="w-full bg-[#F7F4EF] px-6 py-20 md:py-28 lg:py-36"
            >
                <div className="mx-auto max-w-5xl">
                    <div className="mb-12 h-px w-full bg-[rgba(30,58,32,0.15)]" />
                    <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
                        <div>
                            <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                                Your next step
                            </p>
                            <h2 className="font-satoshi text-5xl leading-[1.05] text-[#1E3A20] md:text-6xl lg:text-7xl">
                                The evidence
                                <br />
                                <em>is there.</em>
                                <br />
                                Are you?
                            </h2>
                        </div>

                        <div className="flex flex-col justify-between gap-10">
                            <div className="space-y-5 font-satoshi text-base font-light leading-relaxed text-light-body md:text-lg">
                                <p>
                                    The research shows it&apos;s possible.
                                    Thousands of people have recovered from
                                    conditions conventional medicine
                                    couldn&apos;t resolve, using exactly this
                                    approach.
                                </p>
                                <p className="font-satoshi text-[1.15rem] italic text-[#1E3A20]">
                                    You could be next.
                                </p>
                            </div>

                            <CtaActionRow>
                                <WhatsAppCta source="research_closing_cta" />
                                <Link
                                    href="/contact"
                                    className="cta-interactive w-full whitespace-nowrap rounded-full border border-solid border-[rgba(30,58,32,0.3)] bg-transparent py-4 text-center font-satoshi text-sm font-medium tracking-[0.04em] text-[#1E3A20] sm:w-auto sm:px-10"
                                >
                                    Book Consultation
                                </Link>
                                <p className="font-satoshi text-sm font-light text-light-supporting sm:basis-full">
                                    Call{" "}
                                    <TrackedPhoneLink
                                        source="research_closing_cta"
                                        className="text-light-body underline underline-offset-2"
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
