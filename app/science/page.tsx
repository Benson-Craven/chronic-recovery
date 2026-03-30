"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const SciencePage = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    }

    return (
        <div className="font-Satoshi min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-white to-background px-4 py-16 md:py-24">
                <div className="container mx-auto max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="mx-11 flex-wrap text-center font-butler text-4xl font-extralight uppercase text-primary-text md:text-5xl lg:text-7xl">
                            <i className="text-secondary-text">The Science</i>{" "}
                            Behind Chronic Pain Recovery
                        </h1>
                        <p className="mx-auto max-w-3xl text-xl font-light leading-relaxed text-gray-700 md:text-2xl">
                            Understanding how your brain creates pain — and how
                            you can turn it off
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto max-w-7xl px-4 py-12">
                {/* Revolutionary Discovery Section */}
                <motion.section
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16 rounded-[25px] border-2 border-black bg-white p-8 shadow-lg md:p-12"
                >
                    <h2 className="mb-6 text-3xl font-medium text-primary-text md:text-4xl">
                        All pain is real — it is not imaginary or ‘all in your
                        head’
                    </h2>
                    <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                        <p className="text-xl font-medium text-secondary-text">
                            All pain originates in the brain, and to treat
                            chronic pain, you must start with the brain. These
                            insights come from the most recent scientific
                            studies into the causes of chronic pain.
                        </p>
                        <p>
                            I am delighted to tell you that there is new help
                            for chronic pain sufferers and for people with other
                            medically unexplained diagnoses such as IBS, long
                            covid, chronic fatigue, migraine, anxiety, back
                            pain, fibromyalgia and many more. If you have been
                            to several medical professionals and are still not
                            getting better, you may benefit from this approach.
                            You may even have been given a diagnosis for your
                            chronic pain, but if your pain has not resolved,
                            then there has to be a neuroplastic component to it.
                        </p>
                        <p>
                            Sufferers of chronic pain are often unaware that
                            pain can get “stuck” in the body when neural
                            circuits keep sending pain signals, even after the
                            body is safe. This can happen for many reasons,
                            including stress, trauma, or unprocessed emotions.
                            Pain can also persist as a learned response — for
                            example, when an injury has healed but the pain
                            continues. This is where Pain Reprocessing Therapy
                            (PRT) can help the brain turn off the danger and
                            pain signals.
                        </p>
                        <p>
                            The biopsychosocial method is the most up-to-date
                            approach to treating chronic pain and is now being
                            taught to medical practitioners worldwide, including
                            Australia, the US, and the NHS in the UK. I'm a
                            graduate of Dr. Howard Schubiner, a pioneer in
                            mind-body medicine, and I work with many people of
                            all ages and conditions, with life-changing results.
                            Let me help you too.
                        </p>
                    </div>
                </motion.section>

                {/* What Causes Chronic Pain Section */}
                <motion.section
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16"
                >
                    <div className="grid items-center gap-8 md:grid-cols-2">
                        <div className="relative h-96 overflow-hidden rounded-[25px] shadow-lg">
                            <Image
                                src="/images/study.webp"
                                alt="Brain and chronic pain neuroscience"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-medium text-primary-text md:text-4xl">
                                What Causes Chronic Pain?
                            </h2>
                            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                                <p>
                                    Chronic pain can get "stuck" in your body
                                    when neural circuits keep sending pain
                                    signals, even after your body is safe and
                                    healed. This happens for several reasons:
                                </p>

                                <div className="space-y-3">
                                    <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-4">
                                        <div>
                                            <p className="font-semibold">
                                                Learned Neural Pathways
                                            </p>
                                            <p className="text-base text-gray-600">
                                                Your brain created pain pathways
                                                when there was an injury, but
                                                didn't turn them off when you
                                                healed
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-4">
                                        <div>
                                            <p className="font-semibold">
                                                Stress & Unprocessed Emotions
                                            </p>
                                            <p className="text-base text-gray-600">
                                                Chronic stress, trauma, and
                                                emotional pain can activate
                                                danger signals in your nervous
                                                system
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-4">
                                        <div>
                                            <p className="font-semibold">
                                                Fear & Avoidance
                                            </p>
                                            <p className="text-base text-gray-600">
                                                Fear of movement and beliefs
                                                that your body is "broken"
                                                reinforce pain pathways
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Key Insight Section */}
                <motion.section
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16 text-center"
                >
                    <div className="mx-auto max-w-4xl rounded-[25px] border-2 border-black bg-gradient-to-br from-white to-gray-50 p-8 md:p-12">
                        <h2 className="mb-6 text-3xl font-medium text-primary-text">
                            The Good News: Pain is Reversible
                        </h2>
                        <p className="mb-6 text-xl leading-relaxed text-gray-700">
                            Just as your brain <em>learned</em> these pain
                            patterns, it can <strong>unlearn</strong> them. This
                            is called <strong>neuroplasticity</strong> — your
                            brain's ability to change and rewire itself at any
                            age.
                        </p>
                        <div className="rounded-lg bg-secondary-text p-6 text-white">
                            <p className="text-lg">
                                Pain Reprocessing Therapy teaches your brain to
                                turn off false danger signals and reinterpret
                                sensations as safe — eliminating pain at its
                                source.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Who Can Benefit Section */}
                <motion.section
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16"
                >
                    <h2 className="mb-8 text-center text-3xl font-medium text-primary-text md:text-4xl">
                        Who Can Benefit from This Approach?
                    </h2>

                    <div className="mb-8 rounded-[25px] border-2 border-black bg-white p-8 md:p-12">
                        <p className="mb-6 text-lg leading-relaxed text-gray-700">
                            If you've been to multiple doctors and are still
                            suffering, you may benefit from this approach.
                        </p>

                        <div className="mb-6 rounded-lg bg-gray-50 p-6">
                            <h3 className="mb-4 text-xl font-medium text-primary-text">
                                Signs Your Pain May Be Neuroplastic:
                            </h3>
                            <div className="grid gap-3 md:grid-cols-2">
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
                                    <div
                                        key={index}
                                        className="flex items-start gap-2"
                                    >
                                        <span className="mt-1 text-secondary-text">
                                            ✓
                                        </span>
                                        <p className="text-gray-700">{sign}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-center text-sm italic text-gray-600">
                            Even ONE of these criteria can indicate neuroplastic
                            pain. If you have a diagnosis but your pain hasn't
                            resolved, there's likely a neuroplastic component.
                        </p>
                    </div>
                </motion.section>

                {/* Treatment Approaches Section */}
                <motion.section
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16"
                >
                    <h2 className="mb-8 text-center text-3xl font-medium text-primary-text md:text-4xl">
                        Evidence-Based Treatment Approaches
                    </h2>

                    <p className="mb-8 text-center text-lg text-gray-700">
                        The biopsychosocial method is now taught to medical
                        practitioners worldwide, including in Australia, the US,
                        and the NHS in the UK. I've completed specialised
                        training in the methods developed by{" "}
                        <strong>Dr. Howard Schubiner</strong>, a pioneer in
                        mind-body medicine.
                    </p>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Pain Reprocessing Therapy (PRT)",
                                description:
                                    "Retrains your brain to turn off pain signals by reinterpreting sensations as safe",
                            },
                            {
                                title: "Somatic Tracking",
                                description:
                                    "Learning to observe pain sensations with curiosity rather than fear",
                            },
                            {
                                title: "Graded Exposure Therapy",
                                description:
                                    "Gradually reintroducing feared movements to prove safety to your brain",
                            },
                            {
                                title: "Emotional Awareness & Expression Therapy (EAET)",
                                description:
                                    "Processing unresolved emotions that may be fueling pain",
                            },
                            {
                                title: "Pain Neuroscience Education",
                                description:
                                    "Understanding how your brain creates pain and why it's safe to move",
                            },
                            {
                                title: "Nervous System Regulation",
                                description:
                                    "Techniques to calm your fight-or-flight response and restore balance",
                            },
                            {
                                title: "Movement Re-training",
                                description:
                                    "Getting back to normal activities and exercise without fear",
                            },
                            {
                                title: "Mindfulness Practices",
                                description:
                                    "Building awareness of thought patterns that amplify pain",
                            },
                            {
                                title: "Clinical Hypnotherapy",
                                description:
                                    "Accessing subconscious patterns and rewiring pain responses",
                            },
                        ].map((treatment, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.03 }}
                                className="rounded-lg border-2 border-gray-200 bg-white p-6 shadow-md transition-all hover:border-secondary-text hover:shadow-lg"
                            >
                                <h3 className="mb-3 text-lg font-medium text-primary-text">
                                    {treatment.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Important Note Section */}
                <motion.section
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16"
                >
                    <div className="rounded-[25px] border-l-4 border-secondary-text bg-gray-50 p-8 md:p-12">
                        <h3 className="mb-4 text-2xl font-medium text-primary-text">
                            Important: Rule Out Structural Issues First
                        </h3>
                        <p className="mb-4 text-lg text-gray-700">
                            Before beginning this approach, please consult your
                            doctor to rule out structural abnormality, disease,
                            or infection. Once you've done that, take the{" "}
                            <Link
                                href="/self-assessment"
                                className="font-medium text-secondary-text underline hover:no-underline"
                            >
                                self-assessment questionnaire
                            </Link>{" "}
                            to help determine whether this approach is right for
                            you.
                        </p>
                    </div>
                </motion.section>

                {/* Final CTA Section */}
                <motion.section
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center"
                >
                    <div className="rounded-[25px] border-2 border-black bg-gradient-to-br from-white to-gray-50 p-8 md:p-12">
                        <h2 className="mb-6 text-3xl font-medium text-primary-text md:text-4xl">
                            Ready to Start Your Recovery Journey?
                        </h2>
                        <p className="mb-8 text-xl text-gray-700">
                            If you've been suffering with chronic pain and
                            traditional treatments haven't worked, there's hope.
                            This science-backed approach has helped thousands
                            recover — and it can help you too.
                        </p>
                        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <Link href="/contact">
                                <button className="rounded-full bg-secondary-text px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg">
                                    Book Your Consultation
                                </button>
                            </Link>
                            <Link href="/self-assessment">
                                <button className="rounded-full border-2 border-secondary-text bg-white px-8 py-4 text-lg font-semibold text-secondary-text transition-all hover:bg-gray-50">
                                    Take Self-Assessment
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    )
}

export default SciencePage
