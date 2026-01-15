"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

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
            transition: {
                duration: 0.6,
            },
        },
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    return (
        <div className="font-Satoshi bg-background text-primary-text min-h-screen">
            {/* DESKTOP HERO with Curtain Effect (hidden on mobile) */}
            <section
                ref={container}
                className="relative hidden h-[150vh] w-full bg-[#fafafa] md:block md:h-[200vh]"
            >
                <div className="relative h-full w-full">
                    {/* Left curtain */}
                    <motion.div
                        style={{ scaleX: scaleTransform }}
                        className="absolute left-0 top-0 z-10 h-full w-1/3 origin-left border-2 border-[#fafafa] bg-[#fafafa]"
                    />

                    {/* Sticky container for image */}
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

                    {/* Right curtain */}
                    <motion.div
                        style={{ scaleX: scaleTransform }}
                        className="absolute right-0 top-0 z-10 h-full w-1/3 origin-right border-2 border-[#fafafa] bg-[#fafafa]"
                    />
                </div>
            </section>

            {/* INTRO SECTION with Images */}
            <section className="flex items-center justify-center bg-[#fafafa] py-12 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center md:flex-row">
                        <div className="mb-8 md:mb-0 md:w-1/2">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-6">
                                    <div className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                                        <Image
                                            src="/images/marsha.avif"
                                            alt="Marsha Canny"
                                            width={400}
                                            height={600}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="mt-2 space-y-6 md:mt-8">
                                    <div className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                                        <Image
                                            src="/images/cork.avif"
                                            alt="Cork, Ireland"
                                            width={100}
                                            height={150}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    <div className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                                        <Image
                                            src="/images/books.avif"
                                            alt="Books and Resources"
                                            width={300}
                                            height={300}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 md:pl-12">
                            <h2 className="text-primary-text mb-6 text-4xl font-medium">
                                About Me
                            </h2>

                            <p className="text-primary-text mb-8 text-lg">
                                My name is Marsha Canny. I am a chronic pain
                                therapist based in Rochestown, Cork, Ireland. I
                                use a multi-disciplinary approach to help you
                                cure your chronic pain, not manage it. I
                                specialise in helping people with{" "}
                                <Link
                                    href="/#illness"
                                    className="text-secondary-text hover:text-[#D9D9D6]"
                                >
                                    persistent pain conditions
                                </Link>{" "}
                                and I work with many people of all ages and
                                ailments and see fantastic results. <br />
                                <br />I completely cured myself of chronic
                                migraines and neck pain that I suffered for over
                                10 years. I will work with your body, nervous
                                system and brain to get you back to good health.
                            </p>

                            <Link
                                href="/contact"
                                className="text-primary-text inline-flex items-center transition duration-300 hover:text-[#D9D9D6]"
                            >
                                <span className="mr-2">
                                    Book a consultation
                                </span>
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT SECTIONS */}
            <div className="container mx-auto px-4 py-12 md:py-20">
                <motion.div
                    className="space-y-12"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* I Know What It's Like */}
                    <motion.section variants={fadeInVariants}>
                        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                            I Know What It's Like to Be Told "There's Nothing
                            More We Can Do"
                        </h2>
                        <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                            <p>
                                If you're reading this, you've probably heard
                                those words before. You've seen multiple
                                specialists. You've had the scans, the x-rays,
                                the blood tests. Everything comes back "normal"
                                - but you're still in pain. Day after day. Month
                                after month. Maybe even year after year.
                            </p>
                            <p className="text-secondary-text text-xl font-medium">
                                I'm here to tell you something important: Your
                                pain is real. And there's hope.
                            </p>
                        </div>
                    </motion.section>

                    {/* Journey Section */}
                    <motion.section variants={fadeInVariants}>
                        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                            My Journey to Chronic Pain Recovery Work
                        </h2>
                        <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                            <p>
                                I didn't start out in this field by chance. Like
                                many practitioners working with chronic pain,
                                I've walked a path that's led me to understand
                                something profound about how pain actually works
                                - and more importantly, how it can be reversed.
                            </p>
                            <p>
                                My work centers on the{" "}
                                <strong>biopsychosocial approach</strong> to
                                chronic pain recovery, and I've been privileged
                                to train directly under{" "}
                                <strong>Dr. Howard Schubiner</strong>, one of
                                the world's leading pioneers in mind-body
                                medicine. Dr. Schubiner's groundbreaking
                                research has helped thousands of people recover
                                from conditions that conventional medicine often
                                labels as "incurable" or "chronic."
                            </p>
                        </div>
                    </motion.section>

                    {/* What Makes Me Different */}
                    <motion.section
                        variants={fadeInVariants}
                        className="rounded-[25px] border-2 border-black bg-white p-8 shadow-lg md:p-12"
                    >
                        <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
                            Why I'm Different from Other Practitioners You've
                            Seen
                        </h2>
                        <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                            <p className="text-xl font-medium">
                                Here's what sets my approach apart:
                            </p>
                            <p>
                                <strong>
                                    I don't just help you manage pain - I help
                                    you cure it.
                                </strong>{" "}
                                This isn't about learning to live with your
                                symptoms. It's about understanding why your
                                nervous system is stuck in a danger response and
                                teaching your brain to turn off those pain
                                signals safely.
                            </p>
                            <p>
                                Most chronic pain isn't caused by ongoing
                                structural damage. Recent neuroscience research
                                has shown that many persistent pain conditions
                                are the result of{" "}
                                <strong>learned neural pathways</strong> -
                                patterns in your brain that continue firing long
                                after your body has healed. Think of it like a
                                faulty alarm system that keeps going off even
                                when there's no danger.
                            </p>
                        </div>
                    </motion.section>

                    {/* The Science */}
                    <motion.section variants={fadeInVariants}>
                        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                            The Science That Changed Everything
                        </h2>
                        <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                            <p>
                                When I discovered the work of Dr. Schubiner and
                                researchers like Dr. Yoni Ashar and Professor
                                Tor Wager, everything clicked. Their 2022
                                randomized clinical trial published in{" "}
                                <em>JAMA Psychiatry</em> showed that{" "}
                                <strong>Pain Reprocessing Therapy</strong>{" "}
                                helped two-thirds of chronic back pain patients
                                become pain-free or nearly pain-free - and these
                                results lasted a full year after treatment.
                            </p>
                            <p className="font-medium">
                                This wasn't pain management. This was pain
                                reversal.
                            </p>
                            <p>
                                I knew I had to bring this approach to Ireland,
                                where over half a million people struggle with
                                chronic pain conditions every single day.
                            </p>
                        </div>
                    </motion.section>

                    {/* Who I Work With */}
                    <motion.section variants={fadeInVariants}>
                        <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
                            Who I Work With
                        </h2>
                        <p className="mb-6 text-lg text-gray-700">
                            I specialize in helping people with:
                        </p>
                        <div className="grid gap-6 md:grid-cols-2">
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
                                    title: "And More",
                                    conditions:
                                        "Many other medically unexplained symptoms",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg border border-gray-200 bg-white p-6"
                                >
                                    <h3 className="mb-2 text-xl font-semibold">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {item.conditions}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-lg leading-relaxed text-gray-700">
                            If you've been told "it's all in your head," you're
                            partially right - but not in the way they meant it.
                            Your pain originates in your brain's neural
                            circuits, but that doesn't make it any less real. In
                            fact, understanding this is the first step toward
                            healing.
                        </p>
                    </motion.section>

                    {/* What Working Together Looks Like */}
                    <motion.section
                        variants={fadeInVariants}
                        className="rounded-[25px] border-2 border-black bg-white p-8 shadow-lg md:p-12"
                    >
                        <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
                            What Working Together Looks Like
                        </h2>
                        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                            <p>
                                I offer{" "}
                                <strong>one-to-one, 60-minute sessions</strong>{" "}
                                where we'll work with your body, nervous system,
                                and brain to restore your health.
                            </p>

                            <div className="space-y-3">
                                <p className="font-semibold">
                                    Sessions are available:
                                </p>
                                <ul className="space-y-2 pl-6">
                                    <li className="list-disc">
                                        <strong>In-person</strong> at my home
                                        clinic in Rochestown, Cork, Ireland
                                    </li>
                                    <li className="list-disc">
                                        <strong>Online</strong> via video call
                                        (perfect if you're anywhere in Ireland
                                        or beyond)
                                    </li>
                                </ul>
                            </div>

                            <div className="rounded-lg bg-gray-50 p-6">
                                <p className="text-secondary-text text-xl font-semibold">
                                    Investment: €70 per session, or a package of
                                    6 sessions for €360
                                </p>
                            </div>

                            <div className="space-y-3">
                                <p className="font-semibold">
                                    I use evidence-based therapeutic approaches
                                    including:
                                </p>
                                <ul className="space-y-2 pl-6">
                                    <li className="list-disc">
                                        Pain Reprocessing Therapy (PRT)
                                    </li>
                                    <li className="list-disc">
                                        Somatic Tracking Techniques
                                    </li>
                                    <li className="list-disc">
                                        Graded Exposure Therapy
                                    </li>
                                    <li className="list-disc">
                                        Emotional Awareness & Expression Therapy
                                        (EAET)
                                    </li>
                                    <li className="list-disc">
                                        And other transformative mind-body
                                        approaches
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* Real Results */}
                    <motion.section variants={fadeInVariants}>
                        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                            Real Results for Real People
                        </h2>
                        <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                            <p>
                                I work with people of all ages and backgrounds,
                                from teenagers with amplified pain syndromes to
                                adults who've lived with fibromyalgia for
                                decades. The common thread? They'd all seen
                                multiple medical professionals without finding
                                lasting relief.
                            </p>
                            <p>
                                What makes me incredibly excited to come to work
                                every day is seeing the transformations that
                                happen when people finally understand what's
                                actually causing their pain - and that they have
                                the power to heal it.
                            </p>
                            <p>
                                I've watched clients who hadn't slept properly
                                in years finally rest peacefully. I've seen
                                people return to activities they loved but had
                                given up on. I've witnessed the relief and joy
                                when someone realizes they're not "broken" -
                                they just needed the right approach.
                            </p>
                        </div>
                    </motion.section>

                    {/* My Commitment */}
                    <motion.section variants={fadeInVariants}>
                        <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
                            My Commitment to You
                        </h2>
                        <p className="mb-6 text-lg text-gray-700">
                            When you work with me, you're not just another
                            appointment in my calendar. I'm committed to:
                        </p>
                        <div className="space-y-4">
                            {[
                                "Understanding your unique story - every person's pain journey is different",
                                "Providing evidence-based treatment rooted in the latest neuroscience research",
                                "Creating a safe, compassionate space where you feel heard and validated",
                                "Empowering you with tools you can use long after our sessions end",
                                "Being honest about what's possible - this approach works for many conditions, but not all",
                            ].map((commitment, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3"
                                >
                                    <span className="text-secondary-text mt-1 text-2xl">
                                        ✓
                                    </span>
                                    <p className="text-lg text-gray-700">
                                        {commitment}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Important Note */}
                    <motion.section
                        variants={fadeInVariants}
                        className="border-secondary-text rounded-lg border-l-4 bg-gray-50 p-6"
                    >
                        <h3 className="mb-3 text-xl font-semibold">
                            Important: Please Rule Out Structural Issues First
                        </h3>
                        <p className="text-gray-700">
                            Before we begin, I always recommend consulting your
                            doctor to rule out structural abnormality, disease,
                            or infection. Once you've done that, take my{" "}
                            <Link
                                href="/self-assessment"
                                className="text-secondary-text font-semibold underline hover:no-underline"
                            >
                                self-assessment questionnaire
                            </Link>{" "}
                            to help determine whether this approach is right for
                            you.
                        </p>
                    </motion.section>

                    {/* Why Now */}
                    <motion.section variants={fadeInVariants}>
                        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                            Why Now Is the Time to Act
                        </h2>
                        <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                            <p>
                                Here's the truth: chronic pain doesn't usually
                                get better on its own. Left untreated, pain
                                conditions often develop and accelerate over
                                time through neurophysiological processes. The
                                learned pain pathways become more entrenched.
                                The nervous system becomes more sensitized.
                            </p>
                            <p className="font-medium">
                                But here's the good news: neuroplasticity works
                                both ways. Just as your brain learned these pain
                                patterns, it can unlearn them. The sooner you
                                start, the faster you can begin your recovery
                                journey.
                            </p>
                        </div>
                    </motion.section>

                    {/* CTA Section */}
                    <motion.section
                        variants={fadeInVariants}
                        className="rounded-[25px] border-2 border-black bg-gradient-to-br from-white to-gray-50 p-8 text-center shadow-lg md:p-12"
                    >
                        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                            Your Next Step
                        </h2>
                        <div className="mb-8 space-y-3 text-lg text-gray-700">
                            <p>
                                If you're tired of being told there's nothing
                                more that can be done...
                            </p>
                            <p>
                                If you're ready to try an approach that
                                addresses the root cause of your pain...
                            </p>
                            <p>
                                If you want to work with someone who truly
                                believes in your capacity to heal...
                            </p>
                        </div>
                        <p className="mb-8 text-2xl font-semibold">
                            Let's talk.
                        </p>
                        <div className="space-y-4">
                            <Link href="/contact">
                                <button className="bg-secondary-text rounded-full px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg">
                                    Book Your Free Consultation
                                </button>
                            </Link>
                            <p className="text-gray-600">
                                Tel/WhatsApp:{" "}
                                <a
                                    href="tel:+353892335106"
                                    className="text-secondary-text font-bold hover:underline"
                                >
                                    +353 (0) 89-233-5106
                                </a>
                            </p>
                            <p className="text-sm text-gray-500">
                                You can reach out via the contact form, phone,
                                or WhatsApp. I typically respond within 24
                                hours, and we can schedule your first session at
                                a time that works for you.
                            </p>
                        </div>
                    </motion.section>

                    {/* FAQ Section */}
                    <motion.section variants={fadeInVariants}>
                        <h2 className="mb-8 text-2xl font-semibold md:text-3xl">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    question:
                                        "How is this different from pain management?",
                                    answer: "Pain management aims to reduce symptoms and help you cope. My approach aims to eliminate the pain by retraining your nervous system and turning off false danger signals.",
                                },
                                {
                                    question:
                                        "Will this work for my specific condition?",
                                    answer: "This approach has been shown to be effective for over 20 different chronic pain and medically unexplained conditions. The self-assessment questionnaire can help determine if you're a good candidate.",
                                },
                                {
                                    question:
                                        "Do I need to believe in mind-body medicine for this to work?",
                                    answer: "Not at all. You just need to be open to learning about the neuroscience behind your pain and willing to try the techniques. The science speaks for itself.",
                                },
                                {
                                    question: "How long does recovery take?",
                                    answer: "Everyone's journey is different. Some people experience significant relief within weeks, while others need several months. We'll work at a pace that feels right for you.",
                                },
                                {
                                    question:
                                        "Is this covered by health insurance?",
                                    answer: "Currently, these sessions are private pay. However, you may be able to claim back costs depending on your health insurance provider - I recommend checking your policy.",
                                },
                            ].map((faq, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg border border-gray-200 bg-white p-6"
                                >
                                    <h3 className="mb-3 text-xl font-semibold">
                                        {faq.question}
                                    </h3>
                                    <p className="text-gray-700">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Location Section */}
                    <motion.section variants={fadeInVariants}>
                        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                            Located in Cork, Serving All of Ireland
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                            While my home clinic is based in Rochestown, Cork, I
                            work with clients throughout Ireland via online
                            video sessions. Location doesn't need to be a
                            barrier to accessing this life-changing treatment
                            approach.
                        </p>
                    </motion.section>

                    {/* Final CTA */}
                    <motion.section
                        variants={fadeInVariants}
                        className="border-t-2 border-gray-200 pt-12 text-center"
                    >
                        <div className="mx-auto max-w-3xl space-y-6">
                            <p className="text-xl italic leading-relaxed text-gray-600">
                                You've spent long enough suffering. You've tried
                                enough treatments that didn't work. You've been
                                patient enough with a healthcare system that
                                couldn't give you answers.
                            </p>
                            <p className="text-xl italic leading-relaxed text-gray-600">
                                Now it's time to try something different.
                                Something backed by science. Something that
                                treats the root cause, not just the symptoms.
                            </p>
                            <p className="text-primary-text text-2xl font-semibold">
                                I'm here when you're ready to take that first
                                step.
                            </p>
                            <Link href="/contact">
                                <button className="bg-secondary-text mt-6 rounded-full px-10 py-4 text-xl font-semibold text-white transition-all hover:scale-105 hover:shadow-lg">
                                    Start Your Healing Journey Today
                                </button>
                            </Link>
                        </div>
                    </motion.section>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutPage
