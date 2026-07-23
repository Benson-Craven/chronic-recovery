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

const trainingItems = [
    "I am listed in the Association for the Treatment of Neuroplastic Symptoms (ATNS) Practitioner & Coach Directory.",
    "I work as a chronic pain therapist, with online sessions across Ireland and limited in-person availability in Rochestown, Cork.",
    "Please ask me directly to confirm the training and scope relevant to your needs before deciding whether to work with me.",
]

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
                                Rochestown, Cork, Ireland. I provide
                                educational, recovery-oriented support online
                                across Ireland, with limited in-person
                                availability in Rochestown. My work explores a
                                biopsychosocial perspective with people living
                                with{" "}
                                <Link
                                    href="/#illness"
                                    className="underline underline-offset-2 transition-opacity hover:opacity-70"
                                    style={{ color: "#1E3A20" }}
                                >
                                    persistent pain conditions
                                </Link>{" "}
                                after appropriate medical assessment. Ask me
                                directly about my training and scope so you can
                                decide whether working with me fits your needs.
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
                                    <TrackedPhoneLink
                                        source="info_intro"
                                        className="underline underline-offset-2"
                                        style={{
                                            color: "#1E3A20",
                                            opacity: 0.7,
                                        }}
                                    >
                                        +353 (0) 87-102-5108
                                    </TrackedPhoneLink>
                                </p>
                                <Link
                                    href={authorProfile.atnsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 flex max-w-md items-center gap-4 border-y py-5 transition-opacity hover:opacity-80"
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
                                        <span
                                            className="block text-xs font-medium uppercase tracking-[0.16em]"
                                            style={{
                                                color: "#1E3A20",
                                                fontFamily:
                                                    "var(--font-dm-sans)",
                                            }}
                                        >
                                            View my ATNS directory profile
                                        </span>
                                        <span
                                            className="mt-1 block text-sm leading-relaxed"
                                            style={{
                                                color: "rgba(30,58,32,0.55)",
                                                fontFamily:
                                                    "var(--font-dm-sans)",
                                                fontWeight: 300,
                                            }}
                                        >
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
                        <Eyebrow>When questions remain</Eyebrow>
                        <Heading className="mb-14">
                            After tests and treatment,
                            <br />
                            <em>you may still have questions.</em>
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
                                Some people enquire after previous appointments,
                                tests, or treatment have not fully explained
                                their persistent pain. A session can offer
                                education and space to discuss those questions
                                without dismissing symptoms or replacing medical
                                care.
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
                                "Pain is real.
                                <br />
                                Careful questions matter."
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
                        <Eyebrow style={{ color: "#C8E6C9" }}>
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
                            My work centres on a biopsychosocial perspective,
                            pain education, and Pain Reprocessing Therapy where
                            appropriate. I discuss these ideas as possible parts
                            of a person's wider pain context, not as a diagnosis
                            or guaranteed explanation.
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

            {/* Credentials — cream */}
            <Section variant="cream" id="credentials-training">
                <Container>
                    <Eyebrow>Practitioner information</Eyebrow>
                    <Heading className="mb-14">
                        Details to review
                        <br />
                        <em>before booking.</em>
                    </Heading>
                    <Divider className="mb-0" />

                    {trainingItems.map((item, index) => (
                        <NumberRow key={item} number={index + 1}>
                            {item}
                        </NumberRow>
                    ))}

                    <Link
                        href={authorProfile.atnsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-12 inline-flex text-xs font-medium uppercase tracking-[0.16em] transition-opacity hover:opacity-65"
                        style={{
                            color: "#1E3A20",
                            fontFamily: "var(--font-dm-sans)",
                        }}
                    >
                        View my ATNS directory profile
                    </Link>
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
                        How this approach differs
                        <br />
                        <em>from symptom-only support</em>
                    </h2>
                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(30,58,32,0.12)" }}
                    />
                    {[
                        {
                            number: "01",
                            heading: "The whole context, not one explanation",
                            body: "Persistent pain can involve biological, psychological, and social influences. A brain-body perspective may be worth exploring after appropriate assessment, but it should not be used to assume that tissue, disease, or another medical factor is irrelevant.",
                        },
                        {
                            number: "02",
                            heading:
                                "Education and reflection, with clear boundaries",
                            body: "Sessions can explore relevant pain science, symptom patterns, and possible next steps. They do not provide a medical diagnosis, medication advice, emergency care, or a promised outcome.",
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
                        "For some persistent pain,
                        <br />
                        nervous-system patterns may change over time."
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
                        Who may find
                        <br />
                        <em>this useful</em>
                    </h2>
                    <p
                        className="mb-16 max-w-xl text-base leading-relaxed md:text-lg"
                        style={{
                            color: "rgba(200, 230, 201, 0.65)",
                            fontFamily: "var(--font-dm-sans)",
                            fontWeight: 300,
                        }}
                    >
                        My service may be relevant to people exploring
                        persistent symptoms after appropriate medical
                        assessment. I discuss suitability individually.
                    </p>
                    <div
                        className="mb-16 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3"
                        style={{ backgroundColor: "rgba(200,230,201,0.1)" }}
                    >
                        {[
                            {
                                title: "Persistent pain",
                                conditions:
                                    "Symptoms that have continued and are being assessed or managed with a healthcare team.",
                            },
                            {
                                title: "Fluctuating symptoms",
                                conditions:
                                    "Pain or related symptoms that change with context, stress, attention, or daily demands.",
                            },
                            {
                                title: "Incomplete explanations",
                                conditions:
                                    "People who still have questions after tests or treatment, without assuming that a test rules out every medical cause.",
                            },
                            {
                                title: "Pain education",
                                conditions:
                                    "People who want to understand relevant pain science in plain language.",
                            },
                            {
                                title: "Care alongside treatment",
                                conditions:
                                    "Support intended to complement, not replace, care from regulated healthcare professionals.",
                            },
                            {
                                title: "Online access",
                                conditions:
                                    "Online-first sessions across Ireland, with limited in-person availability in Rochestown, Cork.",
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
                        "Pain is real. A nervous-system contribution may be one
                        part of the picture for some people, but it cannot be
                        established from a checklist or assumption."
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
                            className="text-base leading-relaxed md:text-lg"
                            style={{
                                color: "rgba(30, 58, 32, 0.7)",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 300,
                            }}
                        >
                            One-to-one, 60-minute sessions to understand your
                            context, discuss relevant pain science, and agree a
                            careful next step.
                        </p>
                        <div className="mb-14 mt-14 divide-y divide-black/10">
                            {[
                                {
                                    label: "In-person",
                                    detail: "Limited availability in Rochestown, Cork. The private address is shared after an appointment is confirmed.",
                                },
                                {
                                    label: "Online",
                                    detail: "I offer video sessions across Ireland as my primary service format.",
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
                                                fontFamily:
                                                    "var(--font-dm-sans)",
                                            }}
                                        >
                                            {item.label}
                                        </p>
                                        <p
                                            className="text-base leading-relaxed"
                                            style={{
                                                color: "rgba(30, 58, 32, 0.65)",
                                                fontFamily:
                                                    "var(--font-dm-sans)",
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
                            What sessions may include
                        </p>
                        <div className="divide-y divide-black/10">
                            {[
                                "Pain Reprocessing Therapy (PRT)",
                                "Pain science education",
                                "Guided reflection on symptom patterns",
                                "Clear medical-care boundaries and next steps",
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
                </EditorialSplit>
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
                        A careful fit
                    </p>
                    <h2
                        className="mb-14 text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        Clear expectations
                        <br />
                        <em>before you begin</em>
                    </h2>
                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(200,230,201,0.15)" }}
                    />
                    {[
                        {
                            number: "01",
                            body: "A first conversation is used to understand why you are enquiring, what assessment has taken place, and what you want to explore.",
                        },
                        {
                            number: "02",
                            body: "If my service is not appropriate, medical follow-up or another form of support may be a better next step. I do not promise an outcome or recovery timeline.",
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
                            text: "Understanding your unique story, because every person's pain journey is different",
                        },
                        {
                            number: "02",
                            text: "Providing evidence-informed education while being clear about the limits of the research",
                        },
                        {
                            number: "03",
                            text: "Creating a safe, compassionate space where you feel heard and validated",
                        },
                        {
                            number: "04",
                            text: "Empowering you with tools you can use long after your sessions with me end",
                        },
                        {
                            number: "05",
                            text: "Being honest about scope, uncertainty, and when another form of support may be more appropriate",
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
                            as an educational reflection. It is not diagnostic
                            and does not determine whether this approach is
                            right for you.
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
                        When to enquire
                    </p>
                    <h2
                        className="mb-14 text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        Choose a time
                        <br />
                        <em>that works for you</em>
                    </h2>
                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(200,230,201,0.15)" }}
                    />
                    {[
                        {
                            number: "01",
                            body: "An enquiry can be useful when you have questions about persistent pain, want to understand my service, and have considered the medical assessment relevant to your symptoms.",
                        },
                        {
                            number: "02",
                            body: "There is no need to decide under pressure. Ask about the approach, scope, session format, and fees before choosing whether to book.",
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
                        Based in Cork,
                        <br />
                        <em>online across Ireland</em>
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
                        <p
                            className="text-base leading-relaxed md:text-lg"
                            style={{
                                color: "rgba(30, 58, 32, 0.65)",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 300,
                            }}
                        >
                            Online video sessions across Ireland are my primary
                            service. I offer limited in-person sessions in
                            Rochestown, Cork and share the private address only
                            after an appointment is confirmed.
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
                                Explore your
                                <br />
                                <em>next step</em>
                            </h2>
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
                                    If you have questions about persistent pain
                                    and my service, you can start with a
                                    conversation with me about your
                                    circumstances.
                                </p>
                                <p
                                    style={{
                                        fontFamily: "var(--font-dm-serif)",
                                        fontStyle: "italic",
                                        color: "#1E3A20",
                                        fontSize: "1.15rem",
                                    }}
                                >
                                    Ask me about my scope, the session format,
                                    the evidence, and the limits of the approach
                                    before deciding whether it fits.
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
                                        color: "rgba(30,58,32,0.4)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    Call{" "}
                                    <TrackedPhoneLink
                                        source="info_closing_cta"
                                        className="underline underline-offset-2 transition-opacity hover:opacity-100"
                                        style={{ color: "rgba(30,58,32,0.65)" }}
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
