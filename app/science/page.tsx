"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import CtaActionRow from "../components/CtaActionRow"
import { EditorialSplit } from "../components/ui/EditorialSplit"
import { WhatsAppCta } from "../components/WhatsAppLink"
import TrackedPhoneLink from "../components/TrackedPhoneLink"
import { PHONE_DISPLAY } from "../lib/contact"

const SciencePage = () => {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    return (
        <div className="font-Satoshi min-h-screen bg-[#F7F4EF]">
            {/* Hero */}
            <section
                style={{ backgroundColor: "#1E3A20" }}
                className="w-full px-6 py-24 md:py-36"
            >
                <div className="mx-auto max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p
                            className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                            style={{
                                color: "#C8E6C9",
                                fontFamily: "var(--font-dm-sans)",
                            }}
                        >
                            The science
                        </p>
                        <h1
                            className="mb-8 text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
                            style={{ fontFamily: "var(--font-dm-serif)" }}
                        >
                            Understanding how
                            <br />
                            <em>pain signals can persist</em>
                            <br />
                            in a whole-person context
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
                            Pain is influenced by the nervous system, the body,
                            and a person's wider context. Research into these
                            interactions may offer useful options for some
                            people alongside appropriate medical care.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Revolutionary Discovery — cream */}
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
                        src: "/images/illustrations/pain-neuroscience.png",
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
                            The foundation
                        </p>
                        <h2
                            className="mb-14 text-4xl leading-[1.1] md:text-5xl lg:text-6xl"
                            style={{
                                fontFamily: "var(--font-dm-serif)",
                                color: "#1E3A20",
                            }}
                        >
                            All pain is real,
                            <br />
                            <em>it is not in your head</em>
                        </h2>
                        <div
                            className="h-px w-full"
                            style={{ backgroundColor: "rgba(30,58,32,0.12)" }}
                        />
                        <div className="mt-16">
                            {[
                                {
                                    number: "01",
                                    body: "Pain is a real protective experience produced through the nervous system. It is shaped by signals from the body, the brain's interpretation of threat, and the person's wider context.",
                                },
                                {
                                    number: "02",
                                    body: "When symptoms persist, a biopsychosocial perspective can help someone consider biological, psychological, and social influences without assuming that one factor explains everything.",
                                },
                                {
                                    number: "03",
                                    body: "For some people, nervous-system sensitisation may contribute to persistent pain after appropriate medical assessment. Stress, fear, sleep, past experiences, and daily demands can interact with symptoms, but none is automatically the cause.",
                                },
                                {
                                    number: "04",
                                    body: "Evidence from specific study populations cannot diagnose an individual or guarantee a result. The research is most useful when its methods and limits are discussed openly.",
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
                                    className="flex items-start gap-6 border-b py-10"
                                    style={{
                                        borderColor: "rgba(30,58,32,0.12)",
                                    }}
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
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </EditorialSplit>
            </motion.section>

            {/* What Causes Chronic Pain — green */}
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
                    stickyVisual
                    visual={{
                        kind: "illustration",
                        src: "/images/illustrations/whole-person-health.png",
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
                            Contributing factors
                        </p>
                        <h2
                            className="text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl"
                            style={{ fontFamily: "var(--font-dm-serif)" }}
                        >
                            What can influence
                            <br />
                            <em>chronic pain?</em>
                        </h2>
                        <div className="mt-16">
                            <div
                                className="grid grid-cols-1 gap-px"
                                style={{
                                    backgroundColor: "rgba(200,230,201,0.1)",
                                }}
                            >
                                {[
                                    {
                                        title: "Nervous-system sensitisation",
                                        body: "For some people, protective pain responses may remain more sensitive after the original trigger has changed.",
                                    },
                                    {
                                        title: "Stress and emotional context",
                                        body: "Stress and emotional experiences may affect symptoms and the nervous system without making pain imagined or proving a single cause.",
                                    },
                                    {
                                        title: "Fear and avoidance",
                                        body: "Concern about pain or damage can shape activity and confidence. Any return to activity should respect medical advice and individual limits.",
                                    },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.45,
                                            delay: index * 0.1,
                                            ease: "easeOut",
                                        }}
                                        className="flex flex-col gap-4 p-8"
                                        style={{ backgroundColor: "#1E3A20" }}
                                    >
                                        <span
                                            className="text-xs tabular-nums opacity-30"
                                            style={{
                                                color: "#C8E6C9",
                                                fontFamily:
                                                    "var(--font-dm-sans)",
                                                fontWeight: 300,
                                            }}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <h3
                                            className="text-base font-medium text-white md:text-lg"
                                            style={{
                                                fontFamily:
                                                    "var(--font-dm-sans)",
                                            }}
                                        >
                                            {item.title}
                                        </h3>
                                        <p
                                            className="text-sm leading-relaxed"
                                            style={{
                                                color: "rgba(200, 230, 201, 0.55)",
                                                fontFamily:
                                                    "var(--font-dm-sans)",
                                                fontWeight: 300,
                                            }}
                                        >
                                            {item.body}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </EditorialSplit>
            </motion.section>

            {/* The Good News — cream */}
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
                        src: "/images/illustrations/mind-body-connection.png",
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
                            The good news
                        </p>
                        <h2
                            className="mb-14 text-4xl leading-[1.1] md:text-5xl lg:text-6xl"
                            style={{
                                fontFamily: "var(--font-dm-serif)",
                                color: "#1E3A20",
                            }}
                        >
                            Pain patterns
                            <br />
                            <em>may change over time</em>
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
                                Neuroplasticity describes the nervous system's
                                capacity to change. Research suggests that
                                changing how some sensations are interpreted may
                                be helpful for selected people, but this does
                                not apply to every cause of pain or promise
                                recovery.
                            </p>
                        </motion.div>

                        {/* Highlighted callout */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.15,
                                ease: "easeOut",
                            }}
                            className="mt-12 rounded-2xl px-8 py-7"
                            style={{ backgroundColor: "#1E3A20" }}
                        >
                            <p
                                className="mb-1 text-xs uppercase tracking-[0.2em] opacity-50"
                                style={{
                                    color: "#C8E6C9",
                                    fontFamily: "var(--font-dm-sans)",
                                }}
                            >
                                How it works
                            </p>
                            <p
                                className="text-xl text-white md:text-2xl"
                                style={{ fontFamily: "var(--font-dm-serif)" }}
                            >
                                Pain Reprocessing Therapy uses education and
                                guided attention to help suitable participants
                                consider sensations with less threat. Evidence
                                is strongest for the specific populations
                                studied and does not replace medical assessment.
                            </p>
                        </motion.div>

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
                            "The nervous system can change,
                            <br />
                            but every person's pain context is different."
                        </motion.p>
                    </div>
                </EditorialSplit>
            </motion.section>

            {/* Who Can Benefit — green */}
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
                        Is this for you?
                    </p>
                    <h2
                        className="mb-6 text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        Signs your pain
                        <br />
                        <em>may be neuroplastic</em>
                    </h2>
                    <p
                        className="mb-16 max-w-xl text-base leading-relaxed md:text-lg"
                        style={{
                            color: "rgba(200, 230, 201, 0.65)",
                            fontFamily: "var(--font-dm-sans)",
                            fontWeight: 300,
                        }}
                    >
                        These patterns may be useful discussion points, but none
                        can diagnose neuroplastic pain. New, severe, changing,
                        or unexplained symptoms need medical assessment.
                    </p>

                    <div
                        className="mb-12 grid grid-cols-1 gap-px sm:grid-cols-2"
                        style={{ backgroundColor: "rgba(200,230,201,0.1)" }}
                    >
                        {[
                            "Pain began without a physical injury",
                            "Pain persists after an injury has healed (3+ months)",
                            "Medical tests show no structural cause",
                            "Pain spreads to different body areas over time",
                            "Pain varies with stress levels or emotions",
                            "Pain is worse at certain times of day",
                            "Pain decreases when distracted or on vacation",
                            "You have multiple chronic symptoms (IBS, migraines, etc.)",
                        ].map((sign, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.05,
                                    ease: "easeOut",
                                }}
                                className="flex items-start gap-5 p-6"
                                style={{ backgroundColor: "#1E3A20" }}
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
                                    className="text-sm leading-relaxed md:text-base"
                                    style={{
                                        color: "rgba(200, 230, 201, 0.7)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    {sign}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(200,230,201,0.15)" }}
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: 0.1,
                            ease: "easeOut",
                        }}
                        className="mt-10 max-w-2xl text-xl leading-relaxed md:text-2xl"
                        style={{
                            fontFamily: "var(--font-dm-serif)",
                            fontStyle: "italic",
                            color: "rgba(200, 230, 201, 0.8)",
                        }}
                    >
                        "Persistent symptoms can have more than one contributing
                        factor. A checklist cannot determine which factors
                        apply."
                    </motion.p>
                </div>
            </motion.section>

            {/* Treatment Approaches — cream */}
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
                        How I work
                    </p>
                    <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <h2
                            className="text-4xl leading-[1.1] md:text-5xl lg:text-6xl"
                            style={{
                                fontFamily: "var(--font-dm-serif)",
                                color: "#1E3A20",
                            }}
                        >
                            Educational
                            <br />
                            <em>session focus</em>
                        </h2>
                        <p
                            className="max-w-xs text-sm leading-relaxed md:text-right"
                            style={{
                                color: "rgba(30,58,32,0.45)",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 300,
                            }}
                        >
                            Ask me directly to confirm the training and scope
                            relevant to your needs before booking.
                        </p>
                    </div>

                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(30,58,32,0.12)" }}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {[
                            {
                                title: "Your symptom context",
                                body: "Reviewing what has happened, what medical assessment has taken place, and what you want to understand.",
                            },
                            {
                                title: "Pain science education",
                                body: "Discussing relevant pain concepts in plain language without assuming they explain every symptom.",
                            },
                            {
                                title: "Pain Reprocessing Therapy",
                                body: "Considering PRT when it appears appropriate to the person's history, assessment, and goals.",
                            },
                            {
                                title: "Guided reflection",
                                body: "Noticing patterns in symptoms, fear, stress, attention, and daily life without assigning a single cause.",
                            },
                            {
                                title: "Medical boundaries",
                                body: "Identifying questions that belong with a GP or another regulated healthcare professional.",
                            },
                            {
                                title: "A clear next step",
                                body: "Deciding whether further sessions, another form of support, or medical follow-up may be more appropriate.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.05,
                                    ease: "easeOut",
                                }}
                                className="flex flex-col gap-3 border-b border-r px-8 py-8"
                                style={{
                                    borderColor: "rgba(30,58,32,0.1)",
                                    // Remove right border on every 3rd item
                                    ...(index % 3 === 2
                                        ? { borderRight: "none" }
                                        : {}),
                                }}
                            >
                                <span
                                    className="text-xs tabular-nums opacity-30"
                                    style={{
                                        color: "#1E3A20",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <p
                                    className="text-base font-medium"
                                    style={{
                                        color: "#1E3A20",
                                        fontFamily: "var(--font-dm-sans)",
                                    }}
                                >
                                    {item.title}
                                </p>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{
                                        color: "rgba(30,58,32,0.55)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    {item.body}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Important Note — green */}
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
                        Before we begin
                    </p>
                    <h2
                        className="mb-14 text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        Please rule out
                        <br />
                        <em>structural issues first</em>
                    </h2>
                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(200,230,201,0.15)" }}
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex items-start gap-6 border-b py-10"
                        style={{ borderColor: "rgba(200,230,201,0.12)" }}
                    >
                        <p
                            className="text-base leading-relaxed md:text-lg"
                            style={{
                                color: "rgba(200, 230, 201, 0.7)",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 300,
                            }}
                        >
                            Before beginning this approach, please consult your
                            doctor to rule out structural abnormality, disease,
                            or infection. Once you've done that, take the{" "}
                            <Link
                                href="/self-assessment"
                                className="underline underline-offset-2 transition-opacity hover:opacity-100"
                                style={{ color: "#C8E6C9" }}
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
                                Ready to explore
                                <br />
                                <em>your next step?</em>
                            </h2>
                        </div>

                        {/* Right — body + CTAs */}
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
                                    If persistent pain has continued despite
                                    previous care, a consultation can help you
                                    explore whether this approach is relevant to
                                    your situation.
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
                                <WhatsAppCta source="science_closing_cta" />
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
                                        source="science_closing_cta"
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

export default SciencePage
