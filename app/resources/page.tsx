"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import CtaActionRow from "../components/CtaActionRow"
import { WhatsAppCta } from "../components/WhatsAppLink"
import TrackedPhoneLink from "../components/TrackedPhoneLink"
import { PHONE_DISPLAY } from "../lib/contact"

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
                title: "TEDxAdelaide: Lorimer Moseley, Why Things Hurt",
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
                title: "In Search of a Unified Theory for Pain Relief: Howard Schubiner, MD",
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
                title: "Chronic Pain: A New Perspective, Georgie Oldfield at TEDxUniversityofManchester",
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
                    <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-dark-supporting">
                        Resources
                    </p>
                    <h1 className="mb-8 font-satoshi text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl">
                        Useful links
                        <br />
                        <em>to go deeper</em>
                    </h1>
                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(200,230,201,0.2)" }}
                    />
                    <p className="mt-8 max-w-xl font-satoshi text-base font-light leading-relaxed text-dark-body md:text-lg">
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
                    <div>
                        <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                            Listen
                        </p>
                        <h2 className="mb-14 font-satoshi text-4xl leading-[1.1] text-[#1E3A20] md:text-5xl">
                            Podcasts
                        </h2>

                        <div
                            className="h-px w-full"
                            style={{ backgroundColor: "rgba(30,58,32,0.12)" }}
                        />
                    </div>
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
                            className="group flex items-start gap-6 border-b py-10"
                            style={{ borderColor: "rgba(30,58,32,0.12)" }}
                        >
                            {links[0].items.length > 1 && (
                                <span className="mt-1 shrink-0 font-satoshi text-xs font-light tabular-nums text-light-supporting">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            )}
                            <div className="flex flex-1 flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <p className="font-satoshi text-base font-medium text-[#1E3A20] md:text-lg">
                                        {item.title}
                                    </p>
                                    <ExternalIcon />
                                </div>
                                {item.note && (
                                    <p className="font-satoshi text-xs font-light text-light-supporting">
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
                    <div>
                        <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-dark-supporting">
                            Watch
                        </p>
                        <h2 className="mb-14 font-satoshi text-4xl leading-[1.1] text-white md:text-5xl">
                            Videos
                        </h2>

                        <div
                            className="h-px w-full"
                            style={{
                                backgroundColor: "rgba(200,230,201,0.15)",
                            }}
                        />
                    </div>
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
                            className="group flex items-start gap-6 border-b py-8"
                            style={{ borderColor: "rgba(200,230,201,0.12)" }}
                        >
                            <span className="mt-1 shrink-0 font-satoshi text-xs font-light tabular-nums text-dark-supporting">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <div className="flex flex-1 items-center gap-2">
                                <p className="font-satoshi text-base font-light leading-snug text-dark-body md:text-lg">
                                    {item.title}
                                </p>
                                <span className="text-[#C8E6C9]">
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
                        className="mt-14 font-satoshi text-2xl italic leading-snug text-dark-body md:text-3xl"
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
                            <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                                Ready to begin?
                            </p>
                            <h2 className="font-satoshi text-5xl leading-[1.05] text-[#1E3A20] md:text-6xl lg:text-7xl">
                                Knowledge
                                <br />
                                <em>is just</em>
                                <br />
                                the start.
                            </h2>
                        </div>

                        <div className="flex flex-col justify-between gap-10">
                            <div className="space-y-5 font-satoshi text-base font-light leading-relaxed text-light-body md:text-lg">
                                <p>
                                    These resources can help you understand
                                    what's happening in your nervous system. But
                                    understanding alone isn't always enough,
                                    sometimes you need a guide.
                                </p>
                                <p className="font-satoshi text-[1.15rem] italic text-[#1E3A20]">
                                    That's where I come in.
                                </p>
                            </div>

                            <CtaActionRow>
                                <WhatsAppCta source="resources_closing_cta" />
                                <Link
                                    href="/contact"
                                    className="cta-interactive w-full whitespace-nowrap rounded-full py-4 text-center font-satoshi text-sm font-medium tracking-[0.04em] text-[#1E3A20] sm:w-auto sm:px-10"
                                    style={{
                                        backgroundColor: "transparent",
                                        border: "1px solid rgba(30,58,32,0.3)",
                                    }}
                                >
                                    Book Consultation
                                </Link>
                                <p className="font-satoshi text-sm font-light text-light-supporting sm:basis-full">
                                    Call{" "}
                                    <TrackedPhoneLink
                                        source="resources_closing_cta"
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

export default UsefulLinks
