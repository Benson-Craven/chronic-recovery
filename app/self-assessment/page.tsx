"use client"

import React, { useCallback, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import CtaActionRow from "../components/CtaActionRow"
import { EditorialSplit } from "../components/ui/EditorialSplit"
import { WhatsAppCta } from "../components/WhatsAppLink"
import { PHONE_DISPLAY, PHONE_HREF } from "../lib/contact"
import { cn } from "@/utils/cn"
import PageHero from "../components/sections/PageHero"

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
    "Are your symptoms triggered by the anticipation of stress, prior to school, work, a doctor's visit, a medical test, or a social gathering?",
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
        }
    if (count <= 7)
        return {
            label: "Mild likelihood",
            summary:
                "Your responses suggest there may be a mild brain-to-body component to your condition. This approach may be worth exploring.",
        }
    if (count <= 12)
        return {
            label: "Moderate likelihood",
            summary:
                "Your responses suggest a moderate likelihood of a brain-to-body disorder. Many people in this range respond very well to this approach.",
        }
    return {
        label: "High likelihood",
        summary:
            "Your responses suggest a high likelihood of a brain-to-body disorder. You are a strong candidate for this approach, and recovery is possible.",
    }
}

export default function SelfAssessment() {
    const [answers, setAnswers] = useState<string[]>(
        Array(questions.length).fill(""),
    )
    const [resultRevealed, setResultRevealed] = useState(false)

    const handleAnswer = (index: number, value: string) => {
        const updated = [...answers]
        updated[index] = value
        setAnswers(updated)
    }

    const yesCount = answers.filter((a) => a === "yes").length
    const answeredCount = answers.filter((a) => a !== "").length
    const complete = answeredCount === questions.length
    const remainingCount = questions.length - answeredCount
    const showResult = complete && resultRevealed
    const result = getResult(yesCount)
    const progress = Math.round((answeredCount / questions.length) * 100)

    const focusResult = useCallback((node: HTMLDivElement | null) => {
        if (node) {
            node.focus({ preventScroll: true })
        }
    }, [])

    return (
        <div className="min-h-screen bg-[#F7F4EF]">
            {/* Sticky progress bar */}
            <div className="fixed left-0 right-0 top-0 z-50 h-[3px] w-full bg-[rgba(30,58,32,0.08)]">
                <motion.div
                    className="h-full bg-[#1E3A20]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                />
            </div>

            <PageHero
                eyebrow="Self assessment"
                description='These questions help identify whether a brain-to-body
                        disorder may be playing a role in your condition. The
                        more "Yes" answers, the more likely this approach could
                        help you.'
            >
                Could this approach
                <br />
                <em>be right for you?</em>
            </PageHero>

            {/* Progress bar + questions — cream */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                className="w-full bg-[#F7F4EF] px-6 py-20 md:py-28"
            >
                <div className="mx-auto max-w-3xl">
                    {/* Progress indicator */}

                    <div className="mb-14 flex items-center justify-between">
                        <p className="font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                            {answeredCount} of {questions.length} answered
                        </p>

                        <p className="font-satoshi text-xs font-light tabular-nums text-light-supporting">
                            {progress}%
                        </p>
                    </div>

                    {/* Thin progress track */}
                    <div className="mb-14 h-px w-full overflow-hidden bg-[rgba(30,58,32,0.1)]">
                        <motion.div
                            className="h-full bg-[#1E3A20]"
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                    </div>
                </div>

                <div className="mx-auto mt-16 max-w-3xl">
                    {/* Questions */}
                    <div className="divide-y border-[rgba(30,58,32,0.12)]">
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
                                <span className="mt-0.5 font-satoshi text-xs font-light tabular-nums text-light-supporting">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                {/* Question + buttons */}
                                <div className="flex flex-col gap-5">
                                    <p className="font-satoshi text-base font-light leading-relaxed text-light-body md:text-lg">
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
                                                    className={cn(
                                                        "rounded-full px-6 py-2 font-satoshi text-sm tracking-[0.04em] transition-all",
                                                        selected
                                                            ? "border border-[#1E3A20] bg-[#1E3A20] font-medium text-[#F7F4EF]"
                                                            : "border border-[rgba(30,58,32,0.2)] bg-transparent font-light text-light-body",
                                                    )}
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
                            Your result
                        </p>
                        <h2 className="mb-14 font-satoshi text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl">
                            Assessment
                            <br />
                            <em>summary</em>
                        </h2>

                        <div className="h-px w-full bg-[rgba(200,230,201,0.15)]" />

                        <AnimatePresence mode="wait">
                            {!showResult ? (
                                <motion.div
                                    key={complete ? "ready" : "locked"}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4 }}
                                    className="flex items-start gap-6 border-b border-[rgba(200,230,201,0.12)] py-10"
                                >
                                    <div className="flex flex-col items-start gap-4">
                                        <div className="flex flex-col gap-2">
                                            <p className="font-satoshi text-sm font-medium uppercase tracking-[0.15em] text-[#C8E6C9]">
                                                {complete
                                                    ? "Assessment complete"
                                                    : "Result locked"}
                                            </p>
                                            <p className="font-satoshi text-base font-light leading-relaxed text-dark-body md:text-lg">
                                                {complete
                                                    ? "Your result is ready when you are."
                                                    : `Answer the remaining ${remainingCount} ${
                                                          remainingCount === 1
                                                              ? "question"
                                                              : "questions"
                                                      } to unlock your result.`}
                                            </p>
                                        </div>

                                        {complete && (
                                            <motion.button
                                                type="button"
                                                onClick={() =>
                                                    setResultRevealed(true)
                                                }
                                                className="cta-interactive rounded-full bg-[#C8E6C9] px-8 py-3 font-satoshi text-sm font-medium tracking-[0.04em] text-[#1E3A20]"
                                            >
                                                See my result
                                            </motion.button>
                                        )}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="revealed"
                                    ref={focusResult}
                                    role="region"
                                    aria-label="Assessment result"
                                    tabIndex={-1}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4 }}
                                    aria-live="polite"
                                >
                                    {/* Score row */}
                                    <div className="flex items-start gap-6 border-b border-[rgba(200,230,201,0.12)] py-10">
                                        <span className="mt-1 shrink-0 font-satoshi text-xs font-light tabular-nums text-dark-supporting">
                                            01
                                        </span>
                                        <div className="flex flex-col gap-2">
                                            <p className="font-satoshi text-sm font-light uppercase tracking-[0.15em] text-dark-supporting">
                                                Score
                                            </p>
                                            <p className="font-satoshi text-5xl leading-none text-white">
                                                {yesCount}
                                                <span className="font-satoshi text-2xl font-light text-dark-supporting">
                                                    /{questions.length}
                                                </span>
                                            </p>
                                            <p className="font-satoshi text-sm font-light text-dark-supporting">
                                                "Yes" answers
                                            </p>
                                        </div>
                                    </div>

                                    {/* Result label + summary */}
                                    <div className="flex items-start gap-6 border-b border-[rgba(200,230,201,0.12)] py-10">
                                        <span className="mt-1 shrink-0 font-satoshi text-xs font-light tabular-nums text-dark-supporting">
                                            02
                                        </span>
                                        <div className="flex flex-col gap-3">
                                            <p className="font-satoshi text-sm font-medium uppercase tracking-[0.15em] text-dark-body">
                                                {result.label}
                                            </p>
                                            <p className="font-satoshi text-base font-light leading-relaxed text-dark-body md:text-lg">
                                                {result.summary}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </EditorialSplit>
            </motion.section>

            {/* CTA — cream editorial split */}
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
                                Next step
                            </p>
                            <h2 className="font-satoshi text-5xl leading-[1.05] text-[#1E3A20] md:text-6xl lg:text-7xl">
                                This could
                                <br />
                                <em>be the start</em>
                                <br />
                                of healing.
                            </h2>
                        </div>

                        <div className="flex flex-col justify-between gap-10">
                            <div className="space-y-5 font-satoshi text-base font-light leading-relaxed text-light-body md:text-lg">
                                <p>
                                    This questionnaire is a starting point, not
                                    a diagnosis. If your responses suggest a
                                    brain-to-body component, the next step is a
                                    conversation.
                                </p>
                                <p className="font-satoshi text-[1.15rem] italic text-[#1E3A20]">
                                    I'm here when you're ready.
                                </p>
                            </div>

                            <CtaActionRow>
                                <WhatsAppCta source="self_assessment_closing_cta" />
                                <Link
                                    href="/contact"
                                    className="cta-interactive w-full whitespace-nowrap rounded-full border border-solid border-[rgba(30,58,32,0.3)] bg-transparent py-4 text-center font-satoshi text-sm font-medium tracking-[0.04em] text-[#1E3A20] sm:w-auto sm:px-10"
                                >
                                    Book Consultation
                                </Link>
                                <p className="font-satoshi text-sm font-light text-light-supporting sm:basis-full">
                                    Call{" "}
                                    <a
                                        href={PHONE_HREF}
                                        className="text-light-body underline underline-offset-2"
                                    >
                                        {PHONE_DISPLAY}
                                    </a>
                                </p>
                            </CtaActionRow>
                        </div>
                    </div>
                </div>
            </motion.section>

            <aside className="mx-auto max-w-3xl px-6 pb-12 font-satoshi text-xs font-light leading-relaxed text-light-supporting">
                This questionnaire is for educational purposes and is not
                diagnostic. It does not replace medical assessment or advice
                from a qualified healthcare professional.
            </aside>
        </div>
    )
}
