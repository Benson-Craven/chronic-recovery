"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const questions = [
    "Has your doctor completed diagnostic testing without finding a definite cause for your pain or illness?",
    "If your physician believes your symptoms are caused by organ disease or structural damage, are you not improving as expected?",
    "Have you had more than one symptom for longer than six months?",
    "Are your symptoms located in different areas of the body or do they move to different locations?",
    "Are your symptoms increased by stress or thinking about stressful situations?",
    "Would you describe yourself as highly detail-oriented, highly self-critical, a perfectionist, or do you routinely put the needs of others ahead of your own?",
    "Are people who caused stress for you as a child still active in your life?",
    "Have you experienced a significant amount of stress in your life recently?",
    "In the last two weeks, have you often felt nervous, anxious or on edge, or been unable to stop or control worrying?",
    "In the last two weeks, have you often felt little interest or pleasure in doing things, or felt down, depressed, or hopeless?",
    "Did your symptoms begin soon after a terrifying, traumatic, or horrifying event, or after a triggering event linked to past trauma?",
    "If you learned that a child you care about was experiencing everything you did as a child, would you feel sad or angry?",
    "Did the symptom begin with no obvious trigger or cause?",
    "If the symptom began after an injury, has it persisted long after the injury should have healed? (Most physical injuries heal in 6 weeks or less.)",
    "Do your symptoms occur after, but not during, activity or exercise?",
    "Are your symptoms less severe or less frequent when you are engaged in enjoyable or distracting activities, such as vacation?",
    "Are your symptoms triggered by foods, smells, sounds, light, computer screens, menses, changes in the weather, or specific movements?",
    "Are your symptoms triggered by the anticipation of stress — prior to school, work, a doctor's visit, a medical test, or a social gathering?",
    "Are your symptoms triggered by light touch or gentle stimuli, such as wind or cold?",
    "Are you often more critical of yourself than others are of you?",
    "Over the course of your life, have you had other physical symptoms that your physician struggled to diagnose?",
    "Do you identify with any of these traits: perfectionist, people pleaser, sensitive to criticism, over-scheduled, hard on yourself, slightly compulsive, or very dependable?",
]

const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const getResult = (count: number) => {
    if (count <= 2)
        return {
            label: "Low likelihood",
            summary:
                "Your responses do not strongly indicate a brain-to-body disorder. That said, if you're still experiencing pain, it's worth speaking with a professional.",
            colour: "rgba(200,230,201,0.6)",
        }
    if (count <= 7)
        return {
            label: "Mild likelihood",
            summary:
                "Your responses suggest there may be a mild brain-to-body component to your condition. This approach may be worth exploring.",
            colour: "rgba(200,230,201,0.7)",
        }
    if (count <= 12)
        return {
            label: "Moderate likelihood",
            summary:
                "Your responses suggest a moderate likelihood of a brain-to-body disorder. Many people in this range respond very well to this approach.",
            colour: "#C8E6C9",
        }
    return {
        label: "High likelihood",
        summary:
            "Your responses suggest a high likelihood of a brain-to-body disorder. You are a strong candidate for this approach — recovery is possible.",
        colour: "#C8E6C9",
    }
}

export default function SelfAssessment() {
    const [answers, setAnswers] = useState<string[]>(
        Array(questions.length).fill(""),
    )

    const handleAnswer = (index: number, value: string) => {
        const updated = [...answers]
        updated[index] = value
        setAnswers(updated)
    }

    const yesCount = answers.filter((a) => a === "yes").length
    const answeredCount = answers.filter((a) => a !== "").length
    const complete = answeredCount === questions.length
    const result = getResult(yesCount)
    const progress = Math.round((answeredCount / questions.length) * 100)

    return (
        <div className="min-h-screen" style={{ backgroundColor: "#F7F4EF" }}>
            {/* Sticky progress bar */}
            <div
                className="fixed left-0 right-0 top-0 z-50 h-[3px] w-full"
                style={{ backgroundColor: "rgba(30,58,32,0.08)" }}
            >
                <motion.div
                    className="h-full"
                    style={{ backgroundColor: "#1E3A20" }}
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                />
            </div>
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
                        Self assessment
                    </p>
                    <h1
                        className="mb-8 text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        Could this approach
                        <br />
                        <em>be right for you?</em>
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
                        These questions help identify whether a brain-to-body
                        disorder may be playing a role in your condition. The
                        more "Yes" answers, the more likely this approach could
                        help you.
                    </p>
                </motion.div>
            </section>

            {/* Progress bar + questions — cream */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                style={{ backgroundColor: "#F7F4EF" }}
                className="w-full px-6 py-20 md:py-28"
            >
                <div className="mx-auto max-w-3xl">
                    {/* Progress indicator */}
                    <div className="mb-14 flex items-center justify-between">
                        <p
                            className="text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                            style={{
                                color: "#1E3A20",
                                fontFamily: "var(--font-dm-sans)",
                            }}
                        >
                            {answeredCount} of {questions.length} answered
                        </p>
                        <p
                            className="text-xs tabular-nums opacity-40"
                            style={{
                                color: "#1E3A20",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 300,
                            }}
                        >
                            {progress}%
                        </p>
                    </div>

                    {/* Thin progress track */}
                    <div
                        className="mb-14 h-px w-full overflow-hidden"
                        style={{ backgroundColor: "rgba(30,58,32,0.1)" }}
                    >
                        <motion.div
                            className="h-full"
                            style={{ backgroundColor: "#1E3A20" }}
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                    </div>

                    {/* Questions */}
                    <div
                        className="divide-y"
                        style={{ borderColor: "rgba(30,58,32,0.12)" }}
                    >
                        {questions.map((question, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: Math.min(index * 0.04, 0.4),
                                    ease: "easeOut",
                                }}
                                className="grid grid-cols-[48px_1fr] gap-6 py-8"
                            >
                                {/* Index */}
                                <span
                                    className="mt-0.5 text-xs tabular-nums opacity-30"
                                    style={{
                                        color: "#1E3A20",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                {/* Question + buttons */}
                                <div className="flex flex-col gap-5">
                                    <p
                                        className="text-base leading-relaxed md:text-lg"
                                        style={{
                                            color: "rgba(30,58,32,0.8)",
                                            fontFamily: "var(--font-dm-sans)",
                                            fontWeight: 300,
                                        }}
                                    >
                                        {question}
                                    </p>

                                    <div className="flex gap-3">
                                        {["yes", "no"].map((option) => {
                                            const selected =
                                                answers[index] === option
                                            return (
                                                <motion.button
                                                    key={option}
                                                    type="button"
                                                    onClick={() =>
                                                        handleAnswer(
                                                            index,
                                                            option,
                                                        )
                                                    }
                                                    whileTap={{ scale: 0.97 }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 300,
                                                        damping: 20,
                                                    }}
                                                    className="rounded-full px-6 py-2 text-sm font-medium tracking-wide transition-all"
                                                    style={{
                                                        backgroundColor:
                                                            selected
                                                                ? "#1E3A20"
                                                                : "transparent",
                                                        color: selected
                                                            ? "#F7F4EF"
                                                            : "rgba(30,58,32,0.45)",
                                                        border: selected
                                                            ? "1px solid #1E3A20"
                                                            : "1px solid rgba(30,58,32,0.2)",
                                                        fontFamily:
                                                            "var(--font-dm-sans)",
                                                        fontWeight: selected
                                                            ? 500
                                                            : 300,
                                                        letterSpacing: "0.04em",
                                                    }}
                                                >
                                                    {option
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                        option.slice(1)}
                                                </motion.button>
                                            )
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Results — green */}
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
                        Your result
                    </p>
                    <h2
                        className="mb-14 text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        Assessment
                        <br />
                        <em>summary</em>
                    </h2>

                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(200,230,201,0.15)" }}
                    />

                    {/* Score row */}
                    <div
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
                        <div className="flex flex-col gap-2">
                            <p
                                className="text-sm uppercase tracking-[0.15em] opacity-50"
                                style={{
                                    color: "#C8E6C9",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 300,
                                }}
                            >
                                Score
                            </p>
                            <p
                                className="text-5xl leading-none"
                                style={{
                                    fontFamily: "var(--font-dm-serif)",
                                    color: "#ffffff",
                                }}
                            >
                                {yesCount}
                                <span
                                    className="text-2xl opacity-40"
                                    style={{
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    /{questions.length}
                                </span>
                            </p>
                            <p
                                className="text-sm"
                                style={{
                                    color: "rgba(200,230,201,0.5)",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 300,
                                }}
                            >
                                "Yes" answers
                            </p>
                        </div>
                    </div>

                    {/* Result label + summary */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={yesCount}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
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
                                02
                            </span>
                            <div className="flex flex-col gap-3">
                                <p
                                    className="text-sm font-medium uppercase tracking-[0.15em]"
                                    style={{
                                        color: result.colour,
                                        fontFamily: "var(--font-dm-sans)",
                                    }}
                                >
                                    {result.label}
                                </p>
                                <p
                                    className="text-base leading-relaxed md:text-lg"
                                    style={{
                                        color: "rgba(200,230,201,0.7)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    {result.summary}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {!complete && (
                        <p
                            className="mt-8 text-sm opacity-40"
                            style={{
                                color: "#C8E6C9",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 300,
                            }}
                        >
                            Answer all {questions.length} questions above for
                            your full result.
                        </p>
                    )}
                </div>
            </motion.section>

            {/* CTA — cream editorial split */}
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
                                Next step
                            </p>
                            <h2
                                className="text-5xl leading-[1.05] md:text-6xl lg:text-7xl"
                                style={{
                                    fontFamily: "var(--font-dm-serif)",
                                    color: "#1E3A20",
                                }}
                            >
                                This could
                                <br />
                                <em>be the start</em>
                                <br />
                                of healing.
                            </h2>
                            <div
                                className="mt-12 hidden h-px md:block"
                                style={{
                                    backgroundColor: "rgba(30,58,32,0.15)",
                                }}
                            />
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
                                    This questionnaire is a starting point, not
                                    a diagnosis. If your responses suggest a
                                    brain-to-body component, the next step is a
                                    conversation.
                                </p>
                                <p
                                    style={{
                                        fontFamily: "var(--font-dm-serif)",
                                        fontStyle: "italic",
                                        color: "#1E3A20",
                                        fontSize: "1.15rem",
                                    }}
                                >
                                    I'm here when you're ready.
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
                                <Link href="/">
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
                                            color: "#1E3A20",
                                            border: "1px solid rgba(30,58,32,0.3)",
                                            fontFamily: "var(--font-dm-sans)",
                                            fontWeight: 400,
                                            letterSpacing: "0.04em",
                                        }}
                                    >
                                        Back to Home
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
