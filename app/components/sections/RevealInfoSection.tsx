"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Section, Container, Divider } from "../ui/Layout"
import { Heading, Text, Eyebrow, ItalicQuote } from "../ui/Typography"
import { CtaButton } from "../ui/CtaButton"
import { NumberRow } from "../ui/NumberRow"
import { EditorialSplit } from "../ui/EditorialSplit"
import { authorProfile } from "@/app/lib/seo"
import { PHONE_DISPLAY } from "@/app/lib/contact"
import CtaActionRow from "../CtaActionRow"
import { WhatsAppCta } from "../WhatsAppLink"
import TrackedPhoneLink from "../TrackedPhoneLink"

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
        <div className="min-h-screen bg-background font-satoshi text-primary-text">
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
                                alt="Therapy room for brain-body chronic pain support"
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
                                            src="/images/marsha-new.jpg"
                                            alt="Marsha Canny of Chronic Pain Recovery Cork"
                                            width={400}
                                            height={500}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                                        <Image
                                            src="/images/cork.avif"
                                            alt="Cork, Ireland near the Chronic Pain Recovery practice"
                                            width={400}
                                            height={200}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                                    <Image
                                        src="/images/cork-3.jpg"
                                        alt="Cork city and harbour area"
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
                                multi-disciplinary approach to support chronic
                                pain recovery, not just pain management. I
                                specialise in helping people with{" "}
                                <Link
                                    href="/#illness"
                                    className="text-[#1E3A20] underline underline-offset-2"
                                >
                                    persistent pain conditions
                                </Link>{" "}
                                and see fantastic results across all ages and
                                ailments. I recovered from chronic migraines and
                                neck pain that I suffered for over 10 years. I
                                will work with your body, nervous system and
                                brain to get you back to good health.
                            </Text>

                            <div className="space-y-4">
                                <CtaButton href="/contact">
                                    Book Your Consultation
                                </CtaButton>
                                <p className="font-satoshi text-sm font-light text-light-supporting">
                                    or call / WhatsApp{" "}
                                    <TrackedPhoneLink
                                        source="info_intro"
                                        className="text-light-body underline underline-offset-2"
                                    >
                                        +353 (0) 87-102-5108
                                    </TrackedPhoneLink>
                                </p>
                                <Link
                                    href={authorProfile.atnsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 flex max-w-md items-center gap-4 border-y py-5"
                                    style={{
                                        borderColor: "rgba(30,58,32,0.12)",
                                    }}
                                >
                                    <Image
                                        src="/atns-logo.webp"
                                        alt="Association for the Treatment of Neuroplastic Symptoms logo"
                                        width={72}
                                        height={72}
                                        className="h-16 w-16 shrink-0 object-contain"
                                    />
                                    <span className="min-w-0">
                                        <span className="block font-satoshi text-xs font-medium uppercase tracking-[0.16em] text-[#1E3A20]">
                                            View my verified ATNS profile
                                        </span>
                                        <span className="mt-1 block font-satoshi text-sm font-light leading-relaxed text-light-supporting">
                                            I am listed in the Practitioner &
                                            Coach Directory.
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* I Know What It's Like — cream */}
            <Section variant="cream" id="know-what-its-like">
                <EditorialSplit
                    stickyVisual
                    visual={{
                        kind: "illustration",
                        src: "/images/illustrations/compassionate-support.png",
                        alt: "",
                    }}
                >
                    <div>
                        <Eyebrow>You are not alone</Eyebrow>
                        <Heading className="mb-14">
                            I know what it&apos;s like
                            <br />
                            to be told there&apos;s nothing
                            <br />
                            <em>more we can do.</em>
                        </Heading>
                        <Divider className="mb-0" />

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                            className="border-b py-10"
                            style={{
                                borderColor: "rgba(30,58,32,0.12)",
                            }}
                        >
                            <Text>
                                If you&apos;re reading this, you&apos;ve
                                probably heard those words before. You&apos;ve
                                seen multiple specialists. You&apos;ve had the
                                scans, the x-rays, the blood tests. Everything
                                comes back &quot;normal&quot; or you&apos;ve
                                even been given a &quot;diagnosis&quot;, but
                                you&apos;re still in pain. Day after day. Month
                                after month. Maybe even year after year.
                            </Text>
                        </motion.div>

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
                    </div>
                </EditorialSplit>
            </Section>

            {/* Journey — green */}
            <Section variant="green">
                <EditorialSplit
                    reverse
                    surface="green"
                    stickyVisual
                    visual={{
                        kind: "illustration",
                        src: "/images/illustrations/walking-together.png",
                        alt: "",
                    }}
                >
                    <div>
                        <Eyebrow className="text-dark-supporting">
                            My background
                        </Eyebrow>
                        <Heading className="mb-14 text-white">
                            My journey to
                            <br />
                            <em>chronic pain recovery work</em>
                        </Heading>
                        <Divider variant="cream" className="mb-0" />

                        <NumberRow number={1} variant="green">
                            I didn't start out in this field by chance. Like
                            many practitioners working with chronic pain, I've
                            walked a path that's led me to understand something
                            profound about how pain actually works, and more
                            importantly, how recovery may be possible.
                        </NumberRow>
                        <NumberRow number={2} variant="green" index={1}>
                            My work centres on the biopsychosocial approach to
                            chronic pain recovery. I&apos;ve completed
                            specialised training in the methods developed by Dr
                            Howard Schubiner, one of the world&apos;s leading
                            pioneers in mind-body medicine, whose groundbreaking
                            research has helped thousands recover from
                            conditions conventional medicine often labels as
                            incurable.
                        </NumberRow>
                        <NumberRow number={3} variant="green" index={2}>
                            I am listed in the Association for the Treatment of
                            Neuroplastic Symptoms (ATNS) Practitioner & Coach
                            Directory, which helps people find practitioners and
                            coaches working with neuroplastic symptoms.
                        </NumberRow>
                    </div>
                </EditorialSplit>
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
                    <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                        A different approach
                    </p>
                    <h2 className="mb-14 font-satoshi text-4xl leading-[1.1] text-[#1E3A20] md:text-5xl lg:text-6xl">
                        Why I&apos;m different
                        <br />
                        from practitioners
                        <br />
                        <em>you&apos;ve seen before</em>
                    </h2>
                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(30,58,32,0.12)" }}
                    />
                    {[
                        {
                            number: "01",
                            heading: "The root cause, not the symptom",
                            body: "Most chronic pain isn't caused by ongoing structural damage. Recent neuroscience research has shown that many persistent pain conditions are the result of learned neural pathways, patterns in your brain that continue firing long after your body has healed. Think of it like a faulty alarm system that keeps going off even when there's no danger.",
                        },
                        {
                            number: "02",
                            heading:
                                "I don't only manage pain; I support recovery",
                            body: "Many approaches focus mainly on coping tools. My approach works at the level of the nervous system to retrain learned danger signals, giving your brain a new pattern to practise.",
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
                            <span className="mt-1 shrink-0 font-satoshi text-xs font-light tabular-nums text-light-supporting">
                                {item.number}
                            </span>
                            <div>
                                <p className="mb-3 font-satoshi text-base font-medium text-[#1E3A20] md:text-lg">
                                    {item.heading}
                                </p>
                                <p className="font-satoshi text-base font-light leading-relaxed text-light-body md:text-lg">
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
                        className="mt-12 font-satoshi text-2xl italic leading-snug text-[#1E3A20] md:text-3xl"
                    >
                        "Pain is not a life sentence,
                        <br />
                        it&apos;s a signal that can be unlearned."
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
                    <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-dark-supporting">
                        Who I work with
                    </p>
                    <h2 className="mb-6 font-satoshi text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl">
                        You don&apos;t have to keep
                        <br />
                        <em>living like this.</em>
                    </h2>
                    <p className="mb-16 max-w-xl font-satoshi text-base font-light leading-relaxed text-dark-body md:text-lg">
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
                                    "If you've been living with unexplained or persistent pain, reach out. This approach may be right for you.",
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
                                <span className="font-satoshi text-xs font-light tabular-nums text-dark-supporting">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h3 className="font-satoshi text-base font-medium text-white md:text-lg">
                                    {item.title}
                                </h3>
                                <p className="font-satoshi text-sm font-light leading-relaxed text-dark-supporting">
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
                        className="max-w-2xl font-satoshi text-xl italic leading-relaxed text-dark-body md:text-2xl"
                    >
                        "If you&apos;ve been told it&apos;s all in your head,
                        you&apos;re partially right. Your pain lives in your
                        brain&apos;s neural circuits, but that makes it no less
                        real. Understanding this is the first step toward
                        healing."
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
                <EditorialSplit
                    stickyVisual
                    visual={{
                        kind: "illustration",
                        src: "/images/illustrations/one-to-one-support.png",
                        alt: "",
                    }}
                >
                    <div>
                        <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                            How it works
                        </p>
                        <h2 className="mb-14 font-satoshi text-4xl leading-[1.1] text-[#1E3A20] md:text-5xl lg:text-6xl">
                            What working
                            <br />
                            <em>together looks like</em>
                        </h2>
                        <p className="font-satoshi text-base font-light leading-relaxed text-light-body md:text-lg">
                            One-to-one, 60-minute sessions working with your
                            body, nervous system, and brain to restore your
                            health.
                        </p>
                        <div className="mb-14 mt-14 divide-y divide-black/10">
                            {[
                                {
                                    label: "In-person",
                                    detail: "At my home clinic in Rochestown, Cork, Ireland",
                                },
                                {
                                    label: "Online",
                                    detail: "Via video call, perfect if you're anywhere in Ireland or beyond",
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
                                    <span className="mt-0.5 shrink-0 font-satoshi text-xs font-light tabular-nums text-light-supporting">
                                        0{index + 1}
                                    </span>
                                    <div>
                                        <p className="mb-1 font-satoshi text-sm font-medium text-[#1E3A20]">
                                            {item.label}
                                        </p>
                                        <p className="font-satoshi text-base font-light leading-relaxed text-light-body">
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
                            <p className="mb-1 font-satoshi text-xs uppercase tracking-[0.2em] text-dark-supporting">
                                Investment
                            </p>
                            <p className="font-satoshi text-2xl text-white md:text-3xl">
                                €70 per session
                            </p>
                        </motion.div>
                        <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
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
                                    <span className="mt-0.5 shrink-0 font-satoshi text-xs font-light tabular-nums text-light-supporting">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <p className="font-satoshi text-base font-light leading-relaxed text-light-body">
                                        {approach}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </EditorialSplit>
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
                            <p className="mb-4 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                                What you can expect
                            </p>
                            <h2 className="font-satoshi text-4xl leading-[1.1] text-[#1E3A20] md:text-5xl lg:text-6xl">
                                My commitment
                                <br />
                                <em>to you</em>
                            </h2>
                        </div>
                        <p className="max-w-xs font-satoshi text-sm font-light leading-relaxed text-light-supporting md:text-right">
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
                            text: "Understanding your unique story, because every person's pain journey is different",
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
                            text: "Being honest about what's possible, since this approach works for many conditions, but not all",
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
                                aria-hidden="true"
                                className="font-satoshi text-5xl italic leading-none text-[rgba(30,58,32,0.08)] md:text-7xl"
                                style={{ userSelect: "none" }}
                            >
                                {item.number}
                            </span>

                            {/* Commitment text */}
                            <p className="pt-2 font-satoshi text-base font-light leading-relaxed text-light-body md:text-lg">
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
                    <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                        Before we begin
                    </p>
                    <h2 className="mb-14 font-satoshi text-4xl leading-[1.1] text-[#1E3A20] md:text-5xl lg:text-6xl">
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
                        <p className="font-satoshi text-base font-light leading-relaxed text-light-body md:text-lg">
                            Before we begin, I always recommend consulting your
                            doctor to rule out structural abnormality, disease,
                            or infection. Once you've done that, take my{" "}
                            <Link
                                href="/self-assessment"
                                className="text-[#1E3A20] underline underline-offset-2"
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
                    <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-dark-supporting">
                        Don&apos;t wait
                    </p>
                    <h2 className="mb-14 font-satoshi text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl">
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
                            <span className="mt-1 shrink-0 font-satoshi text-xs font-light tabular-nums text-dark-supporting">
                                {item.number}
                            </span>
                            <p className="font-satoshi text-base font-light leading-relaxed text-dark-body md:text-lg">
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
                    <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                        Where to find me
                    </p>
                    <h2 className="mb-14 font-satoshi text-4xl leading-[1.1] text-[#1E3A20] md:text-5xl lg:text-6xl">
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
                        <p className="font-satoshi text-base font-light leading-relaxed text-light-body md:text-lg">
                            While my home clinic is based in Rochestown, Cork, I
                            work with clients throughout Ireland and worldwide
                            via online video sessions. Location doesn&apos;t
                            need to be a barrier to accessing this life-changing
                            treatment approach.
                        </p>
                    </motion.div>
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
                        style={{ backgroundColor: "rgba(30,58,32,0.12)" }}
                    />
                    <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
                        {/* Left — headline */}
                        <div>
                            <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                                Your next step
                            </p>
                            <h2 className="font-satoshi text-5xl leading-[1.05] text-[#1E3A20] md:text-6xl lg:text-7xl">
                                Something
                                <br />
                                <em>different</em>
                                <br />
                                awaits you.
                            </h2>
                        </div>

                        {/* Right — body + CTA */}
                        <div className="flex flex-col justify-between gap-10">
                            <div className="space-y-5 font-satoshi text-base font-light leading-relaxed text-light-body md:text-lg">
                                <p>
                                    You&apos;ve spent long enough suffering.
                                    You&apos;ve tried enough treatments that
                                    didn&apos;t work. You&apos;ve been patient
                                    enough with a healthcare system that
                                    couldn&apos;t give you answers.
                                </p>
                                <p className="font-satoshi text-[1.15rem] italic text-[#1E3A20]">
                                    Now it&apos;s time to try something backed
                                    by science, something that treats the root
                                    cause, not just the symptoms.
                                </p>
                                <p>
                                    I'm here when you're ready to take that
                                    first step.
                                </p>
                            </div>

                            <CtaActionRow>
                                <WhatsAppCta source="info_closing_cta" />
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
                                        source="info_closing_cta"
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

export default AboutPage
