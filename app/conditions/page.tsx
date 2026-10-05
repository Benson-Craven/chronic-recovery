"use client"

import Link from "next/link"
import React from "react"
import { motion } from "framer-motion"
import Breadcrumbs from "../components/Breadcrumbs"
import CtaActionRow from "../components/CtaActionRow"
import { BreadcrumbJsonLd } from "../lib/seo"
import { EditorialSplit } from "../components/ui/EditorialSplit"
import { WhatsAppCta } from "../components/WhatsAppLink"
import TrackedPhoneLink from "../components/TrackedPhoneLink"
import { PHONE_DISPLAY } from "../lib/contact"
import PageHero from "../components/sections/PageHero"

const TREATABLE_CONDITIONS = [
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

const NON_TREATABLE_CONTIDITIONS = [
    "Structural abnormalities requiring surgical intervention",
    "Acute injuries",
    "Oncology: cancer",
    "Infections: HIV, Lyme disease, and other active infections",
    "CNS conditions: Parkinson's disease, dementia, ALS",
    "ENT conditions: hearing loss, Ménière's disease",
]

const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function ConditionsPage() {
    const breadcrumbs = [
        { name: "Home", path: "/" },
        { name: "Conditions", path: "/conditions" },
    ]

    return (
        <div className="min-h-screen bg-[#F7F4EF]">
            <BreadcrumbJsonLd
                id="conditions-breadcrumb-schema"
                items={breadcrumbs}
            />
            <Breadcrumbs items={breadcrumbs} />
            <PageHero
                eyebrow="Conditions"
                description="     Many conditions once considered permanent have been
                        shown to have a neuroplastic component, meaning recovery
                        is possible. This is not an exhaustive list."
            >
                Chronic pain
                <br />
                <em>conditions I treat</em>
            </PageHero>

            {/* Treatable conditions — cream */}
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
                        src: "/images/illustrations/whole-person-health.png",
                        alt: "",
                    }}
                >
                    <div>
                        <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                            {TREATABLE_CONDITIONS.length} examples
                        </p>
                        <h2 className="mb-4 font-satoshi text-4xl leading-[1.1] text-[#1E3A20] md:text-5xl">
                            Conditions that
                            <br />
                            <em>are treatable</em>
                        </h2>
                        <p className="font-satoshi text-sm font-light text-light-supporting">
                            This is not an exhaustive list of all treatable
                            conditions.
                        </p>
                    </div>
                </EditorialSplit>

                <div className="mx-auto mt-16 max-w-5xl">
                    <div className="h-px w-full bg-[rgba(30,58,32,0.12)]" />

                    <div className="grid grid-cols-1 gap-px bg-[rgba(30,58,32,0.08)] sm:grid-cols-2 lg:grid-cols-3">
                        {TREATABLE_CONDITIONS.map((condition, index) => (
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
                                className="flex items-start gap-4 bg-[#F7F4EF] p-6"
                            >
                                <span className="mt-0.5 shrink-0 font-satoshi text-xs font-light tabular-nums text-light-supporting">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <p className="font-satoshi text-sm font-light leading-relaxed text-light-body md:text-base">
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
                className="w-full bg-[#1E3A20] px-6 py-20 md:py-28"
            >
                <div className="mx-auto max-w-3xl">
                    <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-dark-supporting">
                        Outside this approach
                    </p>
                    <h2 className="mb-4 font-satoshi text-4xl leading-[1.1] text-white md:text-5xl">
                        Conditions that are
                        <br />
                        <em>not treatable here</em>
                    </h2>
                    <p className="mb-14 max-w-xl font-satoshi text-sm font-light leading-relaxed text-dark-body">
                        Note: people with structural or disease-related issues
                        alongside chronic pain can still benefit from this
                        treatment.
                    </p>

                    <div className="h-px w-full bg-[rgba(200,230,201,0.15)]" />

                    {NON_TREATABLE_CONTIDITIONS.map((condition, index) => (
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
                            className="flex items-start gap-6 border-b border-[rgba(200,230,201,0.12)] py-7"
                        >
                            <span className="mt-0.5 shrink-0 font-satoshi text-xs font-light tabular-nums text-dark-supporting">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <p className="font-satoshi text-base font-light leading-relaxed text-dark-body md:text-lg">
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
                className="w-full bg-[#F7F4EF] px-6 py-20 md:py-28"
            >
                <EditorialSplit
                    reverse
                    visual={{
                        kind: "illustration",
                        src: "/images/illustrations/pain-neuroscience.png",
                        alt: "",
                    }}
                >
                    <div>
                        <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                            Before we begin
                        </p>
                        <h2 className="mb-14 font-satoshi text-4xl leading-[1.1] text-[#1E3A20] md:text-5xl">
                            Please rule out
                            <br />
                            <em>structural issues first</em>
                        </h2>

                        <div className="h-px w-full bg-[rgba(30,58,32,0.12)]" />

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex items-start gap-6 border-b border-[rgba(30,58,32,0.12)] py-10"
                        >
                            <span className="mt-1 shrink-0 font-satoshi text-xs font-light tabular-nums text-light-supporting">
                                01
                            </span>
                            <p className="font-satoshi text-base font-light leading-relaxed text-light-body md:text-lg">
                                Please consult your doctor to rule out a
                                structural abnormality, disease, or infection
                                before beginning this approach.
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
                            className="flex items-start gap-6 border-b border-[rgba(30,58,32,0.12)] py-10"
                        >
                            <span className="mt-1 shrink-0 font-satoshi text-xs font-light tabular-nums text-light-supporting">
                                02
                            </span>
                            <p className="font-satoshi text-base font-light leading-relaxed text-light-body md:text-lg">
                                Not sure if this is right for you?{" "}
                                <Link
                                    href="/self-assessment"
                                    className="text-[#1E3A20] underline underline-offset-2"
                                >
                                    Take the self-assessment questionnaire
                                </Link>{" "}
                                to help determine whether this approach is a
                                good fit.
                            </p>
                        </motion.div>
                    </div>
                </EditorialSplit>
            </motion.section>

            {/* Final CTA — green */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                className="w-full bg-[#1E3A20] px-6 py-20 md:py-28 lg:py-36"
            >
                <div className="mx-auto max-w-5xl">
                    <div className="mb-12 h-px w-full bg-[rgba(200,230,201,0.15)]" />
                    <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
                        <div>
                            <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-dark-supporting">
                                Your next step
                            </p>
                            <h2 className="font-satoshi text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl">
                                Recognise
                                <br />
                                <em>your condition</em>
                                <br />
                                in this list?
                            </h2>
                        </div>

                        <div className="flex flex-col justify-between gap-10">
                            <div className="space-y-5 font-satoshi text-base font-light leading-relaxed text-dark-body md:text-lg">
                                <p>
                                    If your condition appears above, or if
                                    you&apos;ve been living with unexplained
                                    pain that hasn&apos;t responded to
                                    conventional treatment, this approach may be
                                    the answer you&apos;ve been looking for.
                                </p>
                                <p className="font-satoshi text-[1.15rem] italic text-dark-body">
                                    Recovery is possible. Let&apos;s talk.
                                </p>
                            </div>

                            <CtaActionRow>
                                <WhatsAppCta
                                    source="conditions_closing_cta"
                                    surface="green"
                                />
                                <Link
                                    href="/contact"
                                    className="cta-interactive w-full whitespace-nowrap rounded-full border border-solid border-[rgba(240,235,225,0.75)] bg-transparent py-4 text-center font-satoshi text-sm font-medium tracking-[0.04em] text-[#F0EBE1] sm:w-auto sm:px-10"
                                >
                                    Book Consultation
                                </Link>
                                <p className="font-satoshi text-sm font-light text-dark-supporting sm:basis-full">
                                    Call{" "}
                                    <TrackedPhoneLink
                                        source="conditions_closing_cta"
                                        className="text-dark-supporting underline underline-offset-2"
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
