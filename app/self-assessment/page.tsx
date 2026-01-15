"use client"

import React, { useState } from "react"
import Link from "next/link"

const questions = [
    "Has your doctor completed diagnostic testing without finding a definite cause for your pain or illness?",
    "If your physician believes your symptoms are caused by organ disease or structural damage, answer ‘Yes’ if you are not improving as expected.",
    "Have you had more than one symptom for longer than six months?",
    "Are your symptoms located in different areas of the body or do they move to different locations?",
    "Are your symptoms increased by stress or thinking about stressful situations?",
    "Would you describe yourself as highly detail-oriented, highly self-critical, a perfectionist or do you routinely put the needs of others ahead of your own needs?",
    "Are people who caused stress for you as a child still active in your life?",
    "Have you experienced a significant amount of stress in your life recently?",
    "In the last two weeks, have you often felt nervous, anxious or on edge or have you been unable to stop or control worrying?",
    "In the last two weeks, have you often felt little interest or pleasure in doing things or have you felt down, depressed, or hopeless?",
    "Did your symptoms begin soon after a terrifying, traumatic, or horrifying event or after a triggering event that is linked to that trauma?",
    "If you learned that a child you care about was experiencing everything you did as a child, would you feel sad or angry?",
    "Did the symptom begin with no obvious trigger or cause?",
    "If the symptom began after an injury, has it persisted long after the injury should have healed? (Healing of most physical injuries complete in 6 weeks or less.)",
    "Do your symptoms occur after, but not during, activity or exercise?",
    "Are your symptoms less severe or less frequent when you are engaged in enjoyable or distracting activities, such as vacation?",
    "Are your symptoms triggered by foods, smells, sounds, light, computer screens, menses, changes in the weather or specific movements?",
    "Are your symptoms triggered by the anticipation of stress, such as prior to school, work, a doctor’s visit, a medical test, a visit to a relative, or a social gathering or during those activities?",
    "Are your symptoms triggered by light touch or gentle stimuli, such as the wind or cold?",
    "Are you often more critical of yourself than others are?",
    "Over the course of your life, have you had other physical symptoms that your physician struggled to diagnose?",
    "Do you have any or some of the following traits: Perfectionist, Spiritual or Religious, People Pleaser, Need to Be Liked, Do-Gooder, Sensitive to Criticism, Over-scheduled or Overwhelmed, Controlling, Slightly Compulsive, Hard on Yourself and/or Very Dependable?",
]

export default function SelfAssessment() {
    const [answers, setAnswers] = useState<string[]>(
        Array(questions.length).fill(""),
    )

    const handleAnswerChange = (index: number, value: string) => {
        const updatedAnswers = [...answers]
        updatedAnswers[index] = value
        setAnswers(updatedAnswers)
    }

    const yesCount = answers.filter((answer) => answer === "yes").length

    const feedbackMessage = () => {
        if (yesCount >= 0 && yesCount <= 2)
            return "Your responses do not indicate a brain-to-body disorder."
        if (yesCount <= 3 && yesCount <= 7)
            return "Your responses suggest there may be a mild brain-to-body disorder."
        if (yesCount <= 12)
            return "Your responses suggest a moderate likelihood of a brain-to-body disorder."
        return "Your responses suggest a high likelihood of a brain-to-body disorder."
    }

    return (
        <main className="min-h-screen bg-[#fafafa] text-primary-text">
            <section className="container mx-auto px-6 py-12 md:px-12 lg:px-24">
                <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-7xl">
                    Self Assessment
                </h1>
                <p className="mb-8 text-lg leading-relaxed text-foreground">
                    These questions aim to increase understanding of your pain
                    or illness. The greater the number of questions to which you
                    respond "Yes," the higher the likelihood that a
                    brain-to-body disorder plays a significant role in your
                    condition.
                </p>
                <form className="space-y-6">
                    {questions.map((question, index) => (
                        <div
                            key={index}
                            className="flex flex-col rounded-lg border-2 border-tertiary-text bg-background p-4 duration-150 hover:border-foreground"
                        >
                            <label
                                htmlFor={`question-${index}`}
                                className="mb-3 font-medium text-primary-text"
                            >
                                {index + 1}. {question}
                            </label>
                            <div className="flex items-center space-x-4">
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleAnswerChange(index, "yes")
                                    }
                                    className={`rounded-lg px-4 py-2 font-medium ${
                                        answers[index] === "yes"
                                            ? "bg-tertiary-text text-foreground"
                                            : "bg-foreground text-background"
                                    }`}
                                >
                                    Yes
                                </button>
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleAnswerChange(index, "no")
                                    }
                                    className={`rounded-lg px-4 py-2 font-medium ${
                                        answers[index] === "no"
                                            ? "bg-tertiary-text text-foreground"
                                            : "bg-foreground text-background"
                                    }`}
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    ))}
                </form>
                <div className="mt-12 rounded-lg bg-foreground p-6 shadow-sm">
                    <h2 className="text-2xl font-semibold text-background">
                        Assessment Summary
                    </h2>
                    <p className="mt-4 text-lg text-tertiary-text">
                        {feedbackMessage()}
                    </p>
                    <p className="mt-2 text-secondary-text">
                        You answered "Yes" to {yesCount} out of{" "}
                        {questions.length} questions.
                    </p>
                </div>
                <div className="mt-8">
                    <Link
                        href="/"
                        className="rounded-md bg-primary-text px-6 py-3 text-lg font-semibold text-background duration-150 hover:bg-foreground"
                    >
                        Back
                    </Link>
                </div>
            </section>
        </main>
    )
}
