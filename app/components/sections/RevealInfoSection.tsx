"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import CallToActionSection from "../CallToActionSection"
import { Section, Container, Divider } from "../ui/Layout"
import { Heading, Text, Eyebrow, ItalicQuote } from "../ui/Typography"
import { CtaButton } from "../ui/CtaButton"
import { NumberRow } from "../ui/NumberRow"

const AboutPage = () => {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    })

    const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 0])

    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    return (
        <div className="font-satoshi min-h-screen bg-background text-primary-text">
            {/* DESKTOP HERO — Curtain Effect */}
            <section
                ref={container}
                className="relative hidden h-[150vh] w-full bg-[#fafafa] md:block md:h-[200vh]"
            >
                <div className="relative h-full w-full">
                    <motion.div
                        style={{ scaleX: scaleTransform }}
                        className="absolute left-0 top-0 z-10 h-full w-1/3 origin-left border-2 border-[#fafafa] bg-[#fafafa]"
                    />
                    <div className="sticky top-0 h-screen w-full overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                delay: 0.25,
                                duration: 1,
                                ease: "easeInOut",
                            }}
                            className="relative h-full w-full"
                        >
                            <Image
                                src="/images/therapy.avif"
                                alt="Therapy Hero Image"
                                fill
                                priority
                                sizes="100vw"
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                    <motion.div
                        style={{ scaleX: scaleTransform }}
                        className="absolute right-0 top-0 z-10 h-full w-1/3 origin-right border-2 border-[#fafafa] bg-[#fafafa]"
                    />
                </div>
            </section>

            {/* INTRO SECTION */}
            <Section variant="cream" className="py-12 md:py-24">
                <Container size="wide">
                    <div className="flex flex-col items-center md:flex-row">
                        <div className="mb-8 md:mb-0 md:w-1/2">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-4">
                                    <div className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                                        <Image
                                            src="/images/marsha.avif"
                                            alt="Marsha Canny"
                                            width={400}
                                            height={500}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                                        <Image
                                            src="/images/cork.avif"
                                            alt="Cork, Ireland"
                                            width={400}
                                            height={200}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                                    <Image
                                        src="/images/cork-3.jpg"
                                        alt="Cork"
                                        width={400}
                                        height={716}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 md:pl-12">
                            <Eyebrow>About me</Eyebrow>
                            <Heading className="mb-6">Marsha Canny</Heading>
                            <Text className="mb-8">
                                I am a chronic pain therapist based in
                                Rochestown, Cork, Ireland. I use a
                                multi-disciplinary approach to help you cure
                                your chronic pain, not manage it. I specialise
                                in helping people with{" "}
                                <Link
                                    href="/#illness"
                                    className="underline underline-offset-2 transition-opacity hover:opacity-70"
                                    style={{ color: "#1E3A20" }}
                                >
                                    persistent pain conditions
                                </Link>{" "}
                                and see fantastic results across all ages and
                                ailments.
                                <br />
                                <br />I completely cured myself of chronic
                                migraines and neck pain that I suffered for over
                                10 years. I will work with your body, nervous
                                system and brain to get you back to good health.
                            </Text>

                            <div className="space-y-4">
                                <CtaButton href="/contact">
                                    Book Your Consultation
                                </CtaButton>
                                <p
                                    className="text-sm"
                                    style={{
                                        color: "rgba(30,58,32,0.45)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    or call / WhatsApp{" "}
                                    <a
                                        href="tel:+353892335106"
                                        className="underline underline-offset-2"
                                        style={{
                                            color: "#1E3A20",
                                            opacity: 0.7,
                                        }}
                                    >
                                        +353 (0) 89-233-5106
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* I Know What It's Like — cream */}
            <Section variant="cream" id="know-what-its-like">
                <Container>
                    <Eyebrow>You are not alone</Eyebrow>
                    <Heading className="mb-14">
                        I know what it's like
                        <br />
                        <em>to be told there's nothing</em>
                        <br />
                        more we can do.
                    </Heading>
                    <Divider className="mb-0" />
                    
                    <NumberRow number={1}>
                        If you're reading this, you've probably heard those
                        words before. You've seen multiple specialists.
                        You've had the scans, the x-rays, the blood tests.
                        Everything comes back "normal" — but you're still in
                        pain. Day after day. Month after month. Maybe even
                        year after year.
                    </NumberRow>

                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: 0.15,
                            ease: "easeOut",
                        }}
                    >
                        <ItalicQuote className="mt-12">
                            "Your pain is real.
                            <br />
                            And there is hope."
                        </ItalicQuote>
                    </motion.div>
                </Container>
            </Section>

            {/* Journey — green */}
            <Section variant="green">
                <Container>
                    <Eyebrow style={{ color: "#C8E6C9" }}>My background</Eyebrow>
                    <Heading className="mb-14 text-white">
                        My journey to
                        <br />
                        <em>chronic pain recovery work</em>
                    </Heading>
                    <Divider variant="cream" className="mb-0" />
                    
                    <NumberRow number={1} variant="green">
                        I didn't start out in this field by chance. Like many practitioners working with chronic pain, I've walked a path that's led me to understand something profound about how pain actually works — and more importantly, how it can be reversed.
                    </NumberRow>
                    <NumberRow number={2} variant="green" index={1}>
                        My work centres on the biopsychosocial approach to chronic pain recovery. I've completed specialised training in the methods developed by Dr. Howard Schubiner — one of the world's leading pioneers in mind-body medicine — whose groundbreaking research has helped thousands recover from conditions conventional medicine often labels as incurable.
                    </NumberRow>
                </Container>
            </Section>

            {/* What Makes Me Different — cream */}
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
                        A different approach
                    </p>
                    <h2
                        className="mb-14 text-4xl leading-[1.1] md:text-5xl lg:text-6xl"
                        style={{
                            fontFamily: "var(--font-dm-serif)",
                            color: "#1E3A20",
                        }}
                    >
                        Why I'm different
                        <br />
                        <em>from practitioners</em>
                        <br />
                        you've seen before
                    </h2>
                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(30,58,32,0.12)" }}
                    />
                    {[
                        {
                            number: "01",
                            heading: "The root cause, not the symptom",
                            body: "Most chronic pain isn't caused by ongoing structural damage. Recent neuroscience research has shown that many persistent pain conditions are the result of learned neural pathways — patterns in your brain that continue firing long after your body has healed. Think of it like a faulty alarm system that keeps going off even when there's no danger.",
                        },
                        {
                            number: "02",
                            heading:
                                "I don't manage pain — I help you reverse it",
                            body: "Most practitioners give you tools to cope. My approach works at the level of the nervous system to retrain those misfiring pain signals, giving your brain a new pattern to follow — one that isn't pain.",
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
                                {item.number}
                            </span>
                            <div>
                                <p
                                    className="mb-3 text-base font-medium md:text-lg"
                                    style={{
                                        color: "#1E3A20",
                                        fontFamily: "var(--font-dm-sans)",
                                    }}
                                >
                                    {item.heading}
                                </p>
                                <p
                                    className="text-base leading-relaxed md:text-lg"
                                    style={{
                                        color: "rgba(30, 58, 32, 0.65)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    {item.body}
                                </p>
                            </div>
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
                            color: "#1E3A20",
                        }}
                    >
                        "Pain is not a life sentence —
                        <br />
                        it's a signal that can be unlearned."
                    </motion.p>
                </div>
            </motion.section>

            {/* Who I Work With — green */}
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
                        Who I work with
                    </p>
                    <h2
                        className="mb-6 text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        You don't have to keep
                        <br />
                        <em>living like this.</em>
                    </h2>
                    <p
                        className="mb-16 max-w-xl text-base leading-relaxed md:text-lg"
                        style={{
                            color: "rgba(200, 230, 201, 0.65)",
                            fontFamily: "var(--font-dm-sans)",
                            fontWeight: 300,
                        }}
                    >
                        I specialise in helping people whose pain has persisted
                        long after conventional medicine ran out of answers.
                    </p>
                    <div
                        className="mb-16 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3"
                        style={{ backgroundColor: "rgba(200,230,201,0.1)" }}
                    >
                        {[
                            {
                                title: "Chronic Pain Syndromes",
                                conditions:
                                    "Fibromyalgia, Complex Regional Pain Syndrome (CRPS), chronic fatigue syndrome",
                            },
                            {
                                title: "Musculoskeletal Pain",
                                conditions:
                                    "Back pain, neck pain, knee pain, repetitive strain injury",
                            },
                            {
                                title: "Head & Facial Conditions",
                                conditions:
                                    "Migraines, tension headaches, TMJ syndrome, tinnitus",
                            },
                            {
                                title: "Gastrointestinal Issues",
                                conditions:
                                    "IBS, chronic abdominal pain, gastric problems",
                            },
                            {
                                title: "Post-Viral Syndromes",
                                conditions:
                                    "Long Covid, chronic fatigue, brain fog",
                            },
                            {
                                title: "And many more",
                                conditions:
                                    "If you've been living with unexplained or persistent pain, reach out — this approach may be right for you.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.07,
                                    ease: "easeOut",
                                }}
                                className="flex flex-col gap-3 p-8"
                                style={{ backgroundColor: "#1E3A20" }}
                            >
                                <span
                                    className="text-xs tabular-nums opacity-30"
                                    style={{
                                        color: "#C8E6C9",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h3
                                    className="text-base font-medium text-white md:text-lg"
                                    style={{
                                        fontFamily: "var(--font-dm-sans)",
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{
                                        color: "rgba(200, 230, 201, 0.55)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    {item.conditions}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                    <div
                        className="mb-10 h-px w-full"
                        style={{ backgroundColor: "rgba(200,230,201,0.15)" }}
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="max-w-2xl text-xl leading-relaxed md:text-2xl"
                        style={{
                            fontFamily: "var(--font-dm-serif)",
                            fontStyle: "italic",
                            color: "rgba(200, 230, 201, 0.8)",
                        }}
                    >
                        "If you've been told it's all in your head — you're
                        partially right. Your pain lives in your brain's neural
                        circuits, but that makes it no less real. Understanding
                        this is the first step toward healing."
                    </motion.p>
                </div>
            </motion.section>

            {/* What Working Together Looks Like — cream */}
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
                        How it works
                    </p>
                    <h2
                        className="mb-14 text-4xl leading-[1.1] md:text-5xl lg:text-6xl"
                        style={{
                            fontFamily: "var(--font-dm-serif)",
                            color: "#1E3A20",
                        }}
                    >
                        What working
                        <br />
                        <em>together looks like</em>
                    </h2>
                    <p
                        className="mb-14 text-base leading-relaxed md:text-lg"
                        style={{
                            color: "rgba(30, 58, 32, 0.7)",
                            fontFamily: "var(--font-dm-sans)",
                            fontWeight: 300,
                        }}
                    >
                        One-to-one, 60-minute sessions working with your body,
                        nervous system, and brain to restore your health.
                    </p>
                    <div className="mb-14 divide-y divide-black/10">
                        {[
                            {
                                label: "In-person",
                                detail: "At my home clinic in Rochestown, Cork, Ireland",
                            },
                            {
                                label: "Online",
                                detail: "Via video call — perfect if you're anywhere in Ireland or beyond",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.08,
                                    ease: "easeOut",
                                }}
                                className="flex items-start gap-6 py-5"
                            >
                                <span
                                    className="mt-0.5 shrink-0 text-xs tabular-nums opacity-40"
                                    style={{
                                        color: "#1E3A20",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    0{index + 1}
                                </span>
                                <div>
                                    <p
                                        className="mb-1 text-sm font-medium"
                                        style={{
                                            color: "#1E3A20",
                                            fontFamily: "var(--font-dm-sans)",
                                        }}
                                    >
                                        {item.label}
                                    </p>
                                    <p
                                        className="text-base leading-relaxed"
                                        style={{
                                            color: "rgba(30, 58, 32, 0.65)",
                                            fontFamily: "var(--font-dm-sans)",
                                            fontWeight: 300,
                                        }}
                                    >
                                        {item.detail}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mb-14 rounded-2xl px-8 py-7"
                        style={{ backgroundColor: "#1E3A20" }}
                    >
                        <p
                            className="mb-1 text-xs uppercase tracking-[0.2em] opacity-50"
                            style={{
                                color: "#C8E6C9",
                                fontFamily: "var(--font-dm-sans)",
                            }}
                        >
                            Investment
                        </p>
                        <p
                            className="text-2xl text-white md:text-3xl"
                            style={{ fontFamily: "var(--font-dm-serif)" }}
                        >
                            €70 per session
                        </p>
                        <p
                            className="mt-1 text-base"
                            style={{
                                color: "rgba(200, 230, 201, 0.7)",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 300,
                            }}
                        >
                            or a package of 6 sessions for €360
                        </p>
                    </motion.div>
                    <p
                        className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                        style={{
                            color: "#1E3A20",
                            fontFamily: "var(--font-dm-sans)",
                        }}
                    >
                        Evidence-based approaches
                    </p>
                    <div className="divide-y divide-black/10">
                        {[
                            "Pain Reprocessing Therapy (PRT)",
                            "Somatic Tracking Techniques",
                            "Graded Exposure Therapy",
                            "Emotional Awareness & Expression Therapy (EAET)",
                            "And other transformative mind-body approaches",
                        ].map((approach, index) => (
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
                                className="flex items-start gap-6 py-5"
                            >
                                <span
                                    className="mt-0.5 shrink-0 text-xs tabular-nums opacity-30"
                                    style={{
                                        color: "#1E3A20",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <p
                                    className="text-base leading-relaxed"
                                    style={{
                                        color: "rgba(30, 58, 32, 0.75)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    {approach}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Real Results — green */}
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
                        Real results
                    </p>
                    <h2
                        className="mb-14 text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        Real results
                        <br />
                        <em>for real people</em>
                    </h2>
                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(200,230,201,0.15)" }}
                    />
                    {[
                        {
                            number: "01",
                            body: "I work with people of all ages and backgrounds — from teenagers with amplified pain syndromes to adults who've lived with fibromyalgia for decades. The common thread? They'd all seen multiple medical professionals without finding lasting relief.",
                        },
                        {
                            number: "02",
                            body: "What makes me incredibly excited to come to work every day is seeing the transformations that happen when people finally understand what's actually causing their pain — and that they have the power to heal it.",
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
                </div>
            </motion.section>

            {/* My Commitment — cream, large number variant */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                style={{ backgroundColor: "#F7F4EF" }}
                className="w-full px-6 py-20 md:py-28"
            >
                <div className="mx-auto max-w-5xl">
                    {/* Header row */}
                    <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p
                                className="mb-4 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                                style={{
                                    color: "#1E3A20",
                                    fontFamily: "var(--font-dm-sans)",
                                }}
                            >
                                What you can expect
                            </p>
                            <h2
                                className="text-4xl leading-[1.1] md:text-5xl lg:text-6xl"
                                style={{
                                    fontFamily: "var(--font-dm-serif)",
                                    color: "#1E3A20",
                                }}
                            >
                                My commitment
                                <br />
                                <em>to you</em>
                            </h2>
                        </div>
                        <p
                            className="max-w-xs text-sm leading-relaxed md:text-right"
                            style={{
                                color: "rgba(30,58,32,0.45)",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 300,
                            }}
                        >
                            When you work with me, you're not just another
                            appointment in my calendar.
                        </p>
                    </div>

                    {/* Full-width rule */}
                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(30,58,32,0.12)" }}
                    />

                    {/* Commitment rows — large decorative numbers */}
                    {[
                        {
                            number: "01",
                            text: "Understanding your unique story — every person's pain journey is different",
                        },
                        {
                            number: "02",
                            text: "Providing evidence-based treatment rooted in the latest neuroscience research",
                        },
                        {
                            number: "03",
                            text: "Creating a safe, compassionate space where you feel heard and validated",
                        },
                        {
                            number: "04",
                            text: "Empowering you with tools you can use long after our sessions end",
                        },
                        {
                            number: "05",
                            text: "Being honest about what's possible — this approach works for many conditions, but not all",
                        },
                    ].map((item, index) => (
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
                            className="grid grid-cols-[80px_1fr] items-start border-b py-8 md:grid-cols-[120px_1fr]"
                            style={{ borderColor: "rgba(30,58,32,0.1)" }}
                        >
                            {/* Large decorative number */}
                            <span
                                className="text-5xl leading-none md:text-7xl"
                                style={{
                                    fontFamily: "var(--font-dm-serif)",
                                    color: "rgba(30,58,32,0.08)",
                                    fontStyle: "italic",
                                    userSelect: "none",
                                }}
                            >
                                {item.number}
                            </span>

                            {/* Commitment text */}
                            <p
                                className="pt-2 text-base leading-relaxed md:text-lg"
                                style={{
                                    color: "rgba(30, 58, 32, 0.7)",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 300,
                                }}
                            >
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Important Note — cream */}
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
                        className="mb-14 text-4xl leading-[1.1] md:text-5xl lg:text-6xl"
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
                                color: "rgba(30, 58, 32, 0.65)",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 300,
                            }}
                        >
                            Before we begin, I always recommend consulting your
                            doctor to rule out structural abnormality, disease,
                            or infection. Once you've done that, take my{" "}
                            <Link
                                href="/self-assessment"
                                className="underline underline-offset-2 transition-opacity hover:opacity-70"
                                style={{ color: "#1E3A20" }}
                            >
                                self-assessment questionnaire
                            </Link>{" "}
                            to help determine whether this approach is right for
                            you.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Why Now — green */}
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
                        Don't wait
                    </p>
                    <h2
                        className="mb-14 text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        Why now is
                        <br />
                        <em>the time to act</em>
                    </h2>
                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(200,230,201,0.15)" }}
                    />
                    {[
                        {
                            number: "01",
                            body: "Chronic pain doesn't usually get better on its own. Left untreated, pain conditions often develop and accelerate over time through neurophysiological processes. The learned pain pathways become more entrenched. The nervous system becomes more sensitised.",
                        },
                        {
                            number: "02",
                            body: "But here's the good news: neuroplasticity works both ways. Just as your brain learned these pain patterns, it can unlearn them. The sooner you start, the faster you can begin your recovery journey.",
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
                </div>
            </motion.section>
            {/* Location — cream */}
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
                        Where to find me
                    </p>
                    <h2
                        className="mb-14 text-4xl leading-[1.1] md:text-5xl lg:text-6xl"
                        style={{
                            fontFamily: "var(--font-dm-serif)",
                            color: "#1E3A20",
                        }}
                    >
                        Located in Cork,
                        <br />
                        <em>serving globally</em>
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
                                color: "rgba(30, 58, 32, 0.65)",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 300,
                            }}
                        >
                            While my home clinic is based in Rochestown, Cork, I
                            work with clients throughout Ireland and worldwide
                            via online video sessions. Location doesn't need to
                            be a barrier to accessing this life-changing
                            treatment approach.
                        </p>
                    </motion.div>
                </div>
            </motion.section>
            {/* CTA Section — component */}
            <CallToActionSection fadeInVariants={fadeInVariants} />

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
                        style={{ backgroundColor: "rgba(30,58,32,0.12)" }}
                    />
                    <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
                        {/* Left — headline */}
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
                                Something
                                <br />
                                <em>different</em>
                                <br />
                                awaits you.
                            </h2>
                            <div
                                className="mt-12 hidden h-px md:block"
                                style={{
                                    backgroundColor: "rgba(30,58,32,0.12)",
                                }}
                            />
                        </div>

                        {/* Right — body + CTA */}
                        <div className="flex flex-col justify-between gap-10">
                            <div
                                className="space-y-5 text-base leading-relaxed md:text-lg"
                                style={{
                                    color: "rgba(30,58,32,0.65)",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 300,
                                }}
                            >
                                <p>
                                    You've spent long enough suffering. You've
                                    tried enough treatments that didn't work.
                                    You've been patient enough with a healthcare
                                    system that couldn't give you answers.
                                </p>
                                <p
                                    style={{
                                        fontFamily: "var(--font-dm-serif)",
                                        fontStyle: "italic",
                                        color: "#1E3A20",
                                        fontSize: "1.15rem",
                                    }}
                                >
                                    Now it's time to try something backed by
                                    science — something that treats the root
                                    cause, not just the symptoms.
                                </p>
                                <p>
                                    I'm here when you're ready to take that
                                    first step.
                                </p>
                            </div>

                            <div className="space-y-4">
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
                                        Start Your Healing Journey Today
                                    </motion.button>
                                </Link>
                                <p
                                    className="text-sm"
                                    style={{
                                        color: "rgba(30,58,32,0.4)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    or call / WhatsApp{" "}
                                    <a
                                        href="tel:+353892335106"
                                        className="underline underline-offset-2 transition-opacity hover:opacity-100"
                                        style={{ color: "rgba(30,58,32,0.65)" }}
                                    >
                                        +353 (0) 89-233-5106
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="mt-12 h-px w-full"
                        style={{ backgroundColor: "rgba(30,58,32,0.12)" }}
                    />
                </div>
            </motion.section>
        </div>
    )
}

export default AboutPage
