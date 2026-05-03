"use client"

import Link from "next/link"
import React from "react"
import { motion } from "framer-motion"
import Breadcrumbs from "../components/Breadcrumbs"
import { BreadcrumbJsonLd } from "../lib/seo"

const treatable = [
    "Fibromyalgia",
    "Long Covid",
    "Tension headaches & migraine",
    "Back pain (including herniated discs, slipped discs, degenerative disc disease, stenosis, sciatica and pinched nerves)",
    "Neck pain",
    "Whiplash",
    "Knee pain",
    "Patellofemoral syndrome",
    "Temporomandibular joint (TMJ) syndrome",
    "Chronic abdominal and pelvic pain syndromes",
    "Chronic tendonitis (in any joint)",
    "Vulvodynia",
    "Piriformis syndrome",
    "Repetitive strain injury",
    "Foot pain syndromes",
    "Myofascial pain syndrome",
    "Amplified Musculoskeletal Pain Syndrome (AMPS)",
    "IBS",
    "CRPS",
    "Gastric issues",
    "Skin problems",
    "Chronic fatigue syndrome",
    "Facial pain",
    "Chronic sleep issues",
    "Chronic dizziness",
    "Palpitations",
    "Tinnitus",
    "RSI",
]

const nonTreatable = [
    "Structural abnormalities requiring surgical intervention",
    "Acute injuries",
    "Oncology — cancer",
    "Infections — HIV, Lyme disease, and other active infections",
    "CNS conditions — Parkinson's disease, dementia, ALS",
    "ENT conditions — hearing loss, Ménière's disease",
]

const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const ConditionsPage = () => {
    const breadcrumbs = [
        { name: "Home", path: "/" },
        { name: "Conditions", path: "/conditions" },
    ]

    return (
        <div className="min-h-screen" style={{ backgroundColor: "#F7F4EF" }}>
            <BreadcrumbJsonLd
                id="conditions-breadcrumb-schema"
                items={breadcrumbs}
            />
            <Breadcrumbs items={breadcrumbs} />
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
                        Conditions
                    </p>
                    <h1
                        className="mb-8 text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        Chronic pain
                        <br />
                        <em>conditions I treat</em>
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
                        Many conditions once considered permanent have been
                        shown to have a neuroplastic component — meaning
                        recovery is possible. This is not an exhaustive list.
                    </p>
                </motion.div>
            </section>

            {/* Treatable conditions — cream */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                style={{ backgroundColor: "#F7F4EF" }}
                className="w-full px-6 py-20 md:py-28"
            >
                <div className="mx-auto max-w-5xl">
                    <p
                        className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                        style={{
                            color: "#1E3A20",
                            fontFamily: "var(--font-dm-sans)",
                        }}
                    >
                        {treatable.length} conditions
                    </p>
                    <h2
                        className="mb-4 text-4xl leading-[1.1] md:text-5xl"
                        style={{
                            fontFamily: "var(--font-dm-serif)",
                            color: "#1E3A20",
                        }}
                    >
                        Conditions that
                        <br />
                        <em>are treatable</em>
                    </h2>
                    <p
                        className="mb-14 text-sm opacity-40"
                        style={{
                            color: "#1E3A20",
                            fontFamily: "var(--font-dm-sans)",
                            fontWeight: 300,
                        }}
                    >
                        This is not an exhaustive list of all treatable
                        conditions.
                    </p>

                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(30,58,32,0.12)" }}
                    />

                    <div
                        className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3"
                        style={{ backgroundColor: "rgba(30,58,32,0.08)" }}
                    >
                        {treatable.map((condition, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: Math.min(index * 0.03, 0.5),
                                    ease: "easeOut",
                                }}
                                className="flex items-start gap-4 p-6"
                                style={{ backgroundColor: "#F7F4EF" }}
                            >
                                <span
                                    className="mt-0.5 shrink-0 text-xs tabular-nums opacity-25"
                                    style={{
                                        color: "#1E3A20",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <p
                                    className="text-sm leading-relaxed md:text-base"
                                    style={{
                                        color: "rgba(30,58,32,0.75)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    {condition}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Non-treatable conditions — green */}
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
                        Outside this approach
                    </p>
                    <h2
                        className="mb-4 text-4xl leading-[1.1] text-white md:text-5xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        Conditions that are
                        <br />
                        <em>not treatable here</em>
                    </h2>
                    <p
                        className="mb-14 max-w-xl text-sm leading-relaxed opacity-50"
                        style={{
                            color: "#C8E6C9",
                            fontFamily: "var(--font-dm-sans)",
                            fontWeight: 300,
                        }}
                    >
                        Note: people with structural or disease-related issues
                        alongside chronic pain can still benefit from this
                        treatment.
                    </p>

                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(200,230,201,0.15)" }}
                    />

                    {nonTreatable.map((condition, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.45,
                                delay: index * 0.07,
                                ease: "easeOut",
                            }}
                            className="flex items-start gap-6 border-b py-7"
                            style={{ borderColor: "rgba(200,230,201,0.12)" }}
                        >
                            <span
                                className="mt-0.5 shrink-0 text-xs tabular-nums opacity-30"
                                style={{
                                    color: "#C8E6C9",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 300,
                                }}
                            >
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <p
                                className="text-base leading-relaxed md:text-lg"
                                style={{
                                    color: "rgba(200,230,201,0.65)",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 300,
                                }}
                            >
                                {condition}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Important note — cream */}
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
                        Before we begin
                    </p>
                    <h2
                        className="mb-14 text-4xl leading-[1.1] md:text-5xl"
                        style={{
                            fontFamily: "var(--font-dm-serif)",
                            color: "#1E3A20",
                        }}
                    >
                        Please rule out
                        <br />
                        <em>structural issues first</em>
                    </h2>

                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(30,58,32,0.12)" }}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex items-start gap-6 border-b py-10"
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
                            01
                        </span>
                        <p
                            className="text-base leading-relaxed md:text-lg"
                            style={{
                                color: "rgba(30,58,32,0.65)",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 300,
                            }}
                        >
                            Please consult your doctor to rule out a structural
                            abnormality, disease, or infection before beginning
                            this approach.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: 0.1,
                            ease: "easeOut",
                        }}
                        className="flex items-start gap-6 border-b py-10"
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
                            02
                        </span>
                        <p
                            className="text-base leading-relaxed md:text-lg"
                            style={{
                                color: "rgba(30,58,32,0.65)",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 300,
                            }}
                        >
                            Not sure if this is right for you?{" "}
                            <Link
                                href="/self-assessment"
                                className="underline underline-offset-2 transition-opacity hover:opacity-60"
                                style={{ color: "#1E3A20" }}
                            >
                                Take the self-assessment questionnaire
                            </Link>{" "}
                            to help determine whether this approach is a good
                            fit.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Final CTA — green */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                style={{ backgroundColor: "#1E3A20" }}
                className="w-full px-6 py-20 md:py-28 lg:py-36"
            >
                <div className="mx-auto max-w-5xl">
                    <div
                        className="mb-12 h-px w-full"
                        style={{ backgroundColor: "rgba(200,230,201,0.15)" }}
                    />
                    <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
                        <div>
                            <p
                                className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                                style={{
                                    color: "#C8E6C9",
                                    fontFamily: "var(--font-dm-sans)",
                                }}
                            >
                                Your next step
                            </p>
                            <h2
                                className="text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
                                style={{ fontFamily: "var(--font-dm-serif)" }}
                            >
                                Recognise
                                <br />
                                <em>your condition</em>
                                <br />
                                in this list?
                            </h2>
                            <div
                                className="mt-12 hidden h-px md:block"
                                style={{
                                    backgroundColor: "rgba(200,230,201,0.15)",
                                }}
                            />
                        </div>

                        <div className="flex flex-col justify-between gap-10">
                            <div
                                className="space-y-5 text-base leading-relaxed md:text-lg"
                                style={{
                                    color: "rgba(200,230,201,0.65)",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 300,
                                }}
                            >
                                <p>
                                    If your condition appears above — or if
                                    you've been living with unexplained pain
                                    that hasn't responded to conventional
                                    treatment — this approach may be the answer
                                    you've been looking for.
                                </p>
                                <p
                                    style={{
                                        fontFamily: "var(--font-dm-serif)",
                                        fontStyle: "italic",
                                        color: "rgba(200,230,201,0.9)",
                                        fontSize: "1.15rem",
                                    }}
                                >
                                    Recovery is possible. Let's talk.
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
                                            backgroundColor: "#F0EBE1",
                                            color: "#1E3A20",
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
                                            color: "rgba(200,230,201,0.7)",
                                            border: "1px solid rgba(200,230,201,0.25)",
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
                                        color: "rgba(200,230,201,0.35)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    or call / WhatsApp{" "}
                                    <a
                                        href="tel:+353871025108"
                                        className="underline underline-offset-2 transition-opacity hover:opacity-100"
                                        style={{
                                            color: "rgba(200,230,201,0.6)",
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
                        style={{ backgroundColor: "rgba(200,230,201,0.15)" }}
                    />
                </div>
            </motion.section>
        </div>
    )
}

export default ConditionsPage
