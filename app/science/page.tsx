"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

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
                            <em>your brain creates pain</em>
                            <br />— and how to turn it off
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
                            The most recent science shows that many chronic pain
                            conditions originate in the brain — and that gives
                            us a powerful new path to healing.
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
                <div className="mx-auto max-w-3xl">
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
                        All pain is real —
                        <br />
                        <em>it is not in your head</em>
                    </h2>
                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(30,58,32,0.12)" }}
                    />
                    {[
                        {
                            number: "01",
                            body: "All pain originates in the brain, and to treat chronic pain, you must start with the brain. These insights come from the most recent scientific studies into the causes of chronic pain.",
                        },
                        {
                            number: "02",
                            body: "There is new help for chronic pain sufferers — and for people with medically unexplained diagnoses such as IBS, long covid, chronic fatigue, migraine, anxiety, back pain, and fibromyalgia. If you've seen several medical professionals and are still not getting better, you may benefit from this approach.",
                        },
                        {
                            number: "03",
                            body: 'Sufferers of chronic pain are often unaware that pain can get "stuck" in the body when neural circuits keep sending pain signals, even after the body is safe. This can happen for many reasons, including stress, trauma, or unprocessed emotions.',
                        },
                        {
                            number: "04",
                            body: "The biopsychosocial method is an evidence-informed approach to supporting chronic pain recovery and is now being taught to medical practitioners worldwide — including in Australia, the US, and the NHS in the UK. I'm a graduate of Dr. Howard Schubiner, a pioneer in mind-body medicine.",
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
                <div className="mx-auto max-w-5xl">
                    <p
                        className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                        style={{
                            color: "#C8E6C9",
                            fontFamily: "var(--font-dm-sans)",
                        }}
                    >
                        Root causes
                    </p>
                    <h2
                        className="mb-16 text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        What causes
                        <br />
                        <em>chronic pain?</em>
                    </h2>

                    <div
                        className="grid grid-cols-1 gap-px sm:grid-cols-3"
                        style={{ backgroundColor: "rgba(200,230,201,0.1)" }}
                    >
                        {[
                            {
                                title: "Learned Neural Pathways",
                                body: "Your brain created pain pathways when there was an injury, but didn't turn them off when you healed.",
                            },
                            {
                                title: "Stress & Unprocessed Emotions",
                                body: "Chronic stress, trauma, and emotional pain can activate danger signals in your nervous system.",
                            },
                            {
                                title: "Fear & Avoidance",
                                body: 'Fear of movement and beliefs that your body is "broken" reinforce and entrench pain pathways.',
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
                                    {item.body}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
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
                <div className="mx-auto max-w-3xl">
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
                        Pain is not
                        <br />
                        <em>a life sentence</em>
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
                            Just as your brain <em>learned</em> these pain
                            patterns, it can{" "}
                            <strong
                                style={{ fontWeight: 500, color: "#1E3A20" }}
                            >
                                unlearn
                            </strong>{" "}
                            them. This is called neuroplasticity — your brain's
                            ability to change and rewire itself at any age.
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
                            Pain Reprocessing Therapy teaches your brain to turn
                            off false danger signals and reinterpret sensations
                            as safe, which may help reduce persistent pain when
                            this approach is appropriate.
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
                        "Neuroplasticity works both ways —
                        <br />
                        what the brain learns, it can unlearn."
                    </motion.p>
                </div>
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
                        If you've been to multiple doctors and are still
                        suffering, even one of these criteria can indicate
                        neuroplastic pain.
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
                        "If you have a diagnosis but your pain hasn't resolved,
                        there's likely a neuroplastic component."
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
                            Evidence-based
                            <br />
                            <em>treatment approaches</em>
                        </h2>
                        <p
                            className="max-w-xs text-sm leading-relaxed md:text-right"
                            style={{
                                color: "rgba(30,58,32,0.45)",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 300,
                            }}
                        >
                            Specialised training in the methods developed by Dr.
                            Howard Schubiner, a pioneer in mind-body medicine.
                        </p>
                    </div>

                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(30,58,32,0.12)" }}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {[
                            {
                                title: "Pain Reprocessing Therapy (PRT)",
                                body: "Retrains your brain to turn off pain signals by reinterpreting sensations as safe.",
                            },
                            {
                                title: "Somatic Tracking",
                                body: "Learning to observe pain sensations with curiosity rather than fear.",
                            },
                            {
                                title: "Graded Exposure Therapy",
                                body: "Gradually reintroducing feared movements to prove safety to your brain.",
                            },
                            {
                                title: "Emotional Awareness & Expression Therapy (EAET)",
                                body: "Processing unresolved emotions that may be fueling persistent pain.",
                            },
                            {
                                title: "Pain Neuroscience Education",
                                body: "Understanding how your brain creates pain and why it's safe to move.",
                            },
                            {
                                title: "Nervous System Regulation",
                                body: "Techniques to calm your fight-or-flight response and restore balance.",
                            },
                            {
                                title: "Movement Re-training",
                                body: "Getting back to normal activities and exercise without fear.",
                            },
                            {
                                title: "Mindfulness Practices",
                                body: "Building awareness of thought patterns that amplify pain.",
                            },
                            {
                                title: "Clinical Hypnotherapy",
                                body: "Accessing subconscious patterns and rewiring pain responses.",
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
                        <span
                            className="mt-1 shrink-0 text-xs tabular-nums opacity-30"
                            style={{
                                color: "#C8E6C9",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 300,
                            }}
                        >
                            01
                        </span>
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
                            to help determine whether this approach is right for
                            you.
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
                                Ready to start
                                <br />
                                <em>your recovery?</em>
                            </h2>
                            <div
                                className="mt-12 hidden md:block"
                                style={{
                                    backgroundColor: "rgba(30,58,32,0.15)",
                                }}
                            />
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
                                    If you've been suffering with chronic pain
                                    and traditional treatments haven't worked,
                                    there is hope. This science-backed approach
                                    has helped thousands recover.
                                </p>
                                <p
                                    style={{
                                        fontFamily: "var(--font-dm-serif)",
                                        fontStyle: "italic",
                                        color: "#1E3A20",
                                        fontSize: "1.15rem",
                                    }}
                                >
                                    It can help you too.
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
                                        className="w-full rounded-full py-4 text-sm font-medium tracking-wide transition-shadow hover:shadow-md md:w-auto md:px-10"
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
                                        href="tel:+353871025108"
                                        className="underline underline-offset-2 transition-opacity hover:opacity-100"
                                        style={{
                                            color: "#1E3A20",
                                            opacity: 0.6,
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
                        style={{ backgroundColor: "rgba(30,58,32,0.15)" }}
                    />
                </div>
            </motion.section>
        </div>
    )
}

export default SciencePage
