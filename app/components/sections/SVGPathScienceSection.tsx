"use client"

import React, { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import {
    Brain,
    AlertTriangle,
    Activity,
    Lightbulb,
    ThumbsUp,
    BookOpen,
    Shield,
    Smile,
    HandHeart,
} from "lucide-react"
import Link from "next/link"

const SVGPathScienceSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const pathLength = useTransform(scrollYProgress, [0.27, 1], [0, 1])
    const pathOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

    return (
        <section className="relative bg-[#fafafa]">
            {/* SVG Path */}
            <motion.svg
                viewBox="0 0 1000 2000"
                fill="none"
                xmlns="http://www.w3.org/3000/svg"
                className="absolute -left-0 top-32 h-full w-full md:-left-[10%] lg:-left-[15%]"
                preserveAspectRatio="xMidYMid slice"
            >
                <motion.path
                    d="M-24.5 101C285 315 5.86278 448.291 144.223 631.238C239.404 757.091 559.515 782.846 608.808 617.456C658.101 452.067 497.627 367.073 406.298 426.797C314.968 486.521 263.347 612.858 322.909 865.537C384.086 1125.06 79.3992 1007.94 100 1261.99C144.222 1807.35 819 1325 513 1142.5C152.717 927.625 -45 1916.5 1191.5 1852"
                    stroke="#A4AC96"
                    strokeWidth="40"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    style={{
                        pathLength: pathLength,
                    }}
                />
            </motion.svg>
            <div
                ref={sectionRef}
                className="font-Satoshi container mx-auto overflow-hidden text-primary-text"
            >
                {/* Text Content */}
                <div className="relative z-20 mb-16 max-w-xl p-6 px-4 md:w-1/2">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center text-4xl leading-tight md:text-start md:text-5xl lg:text-6xl xl:text-7xl"
                    >
                        What causes chronic pain?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-2 text-center text-lg md:mt-8 md:text-start md:text-xl lg:text-2xl xl:text-3xl"
                    >
                        Chronic pain isn’t always caused by ongoing injury. Many long-lasting pain conditions come from learned neural pathways in the brain—patterns that continue to fire even after the body has healed. In this view, chronic pain is a real, physical experience created by a protective nervous system stuck in danger mode.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div
                    id="treatment"
                    className="relative z-10 mb-10 grid grid-cols-1 gap-4 px-4 pb-6 md:grid-cols-2 lg:mb-0 lg:grid-cols-4 lg:grid-rows-4"
                >
                    {/* First box (spans 2x2) */}
                    <motion.figure
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-64 overflow-hidden rounded-3xl lg:col-span-2 lg:row-span-2 lg:h-auto"
                    >
                        <img
                            src="/images/meeting1.avif"
                            alt="Team collaboration"
                            className="h-full w-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                            <div className="flex items-center space-x-2">
                                <Brain className="h-8 w-8" />
                                <h2 className="text-2xl">
                                    The Unconscious Brain
                                </h2>
                            </div>
                            <p className="mt-4">
                                95% of our brain function is unconscious,
                                constantly interpreting signals to determine
                                safety or danger based on past experiences - all
                                without our awareness.
                            </p>
                            <Link
                                href="/contact"
                                className="mt-4 inline-block transform rounded-lg bg-white px-6 py-2 text-textPrimary transition duration-300 ease-in-out hover:scale-105 hover:bg-textPrimary hover:text-white"
                            >
                                Book a Free Consultation
                            </Link>
                        </div>
                    </motion.figure>

                    {/* Second box */}
                    <motion.figure
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative h-64 overflow-hidden rounded-3xl bg-amber-200/30 p-6"
                    >
                        <div className="flex items-center space-x-2">
                            <AlertTriangle className="h-6 w-6" />
                            <h3 className="text-xl">Stuck Signals</h3>
                        </div>
                        <p className="mt-2">
                            Warning signals can persist long after healing,
                            creating a cycle of chronic pain.
                        </p>
                        <Link
                            href="/self-assessment"
                            className="mt-4 inline-block transform rounded-lg bg-white px-6 py-2 text-textPrimary transition duration-300 ease-in-out hover:scale-105 hover:bg-textPrimary hover:text-white"
                        >
                            Take the Self-Assessment
                        </Link>
                    </motion.figure>

                    {/* Third box */}
                    <motion.figure
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative h-64 overflow-hidden rounded-3xl"
                    >
                        <video
                            src="/videos/grain.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                            <h3 className="text-xl">
                                Start Your Healing Journey
                            </h3>
                            <Link
                                href="/contact"
                                className="mt-4 inline-block transform rounded-lg bg-white px-6 py-2 text-textPrimary transition duration-300 ease-in-out hover:scale-105 hover:bg-textPrimary hover:text-white"
                            >
                                Get Started Now
                            </Link>
                        </div>
                    </motion.figure>

                    {/* Fourth box */}
                    <motion.figure
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-64 overflow-hidden rounded-3xl bg-textSecondary/30 p-6 lg:col-span-2"
                    >
                        <div className="flex items-center space-x-2">
                            <Activity className="h-6 w-6" />
                            <h3 className="text-xl">Treatment Paths</h3>
                        </div>
                        <ul className="mt-2 grid list-disc pl-2 text-sm md:grid-cols-2">
                            <li>Pain Reprocessing Therapy</li>
                            <li>Somatic Tracking Techniques</li>
                            <li>Graded Exposure Therapy</li>
                            <li>Emotional Awareness & Expression Therapy</li>
                        </ul>
                        <p className="mt-2 text-sm">
                            ... and many more transformative approaches.
                        </p>
                        <Link
                            href="/science"
                            className="mt-4 inline-block transform rounded-lg bg-white px-6 py-2 text-textPrimary transition duration-300 ease-in-out hover:scale-105 hover:bg-textPrimary hover:text-white"
                        >
                            Learn More About Treatments
                        </Link>
                    </motion.figure>

                    {/* Fifth box */}
                    <motion.figure
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative h-64 overflow-hidden rounded-3xl bg-textPrimary/30 p-6 lg:col-span-1"
                    >
                        <div className="flex items-center space-x-2">
                            <Lightbulb className="h-6 w-6" />
                            <h3 className="text-xl">Understanding Pain</h3>
                        </div>
                        <p className="mt-2">
                            Physical symptoms are the language between your
                            unconscious and conscious brain.
                        </p>
                        <Link
                            href="/science"
                            className="mt-4 inline-block transform rounded-lg bg-white px-6 py-2 text-textPrimary transition duration-300 ease-in-out hover:scale-105 hover:bg-textPrimary hover:text-white"
                        >
                            Read More
                        </Link>
                    </motion.figure>

                    {/* Sixth box */}
                    <motion.figure
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative h-64 overflow-hidden rounded-3xl bg-textSecondary/30 p-6 lg:col-span-3"
                    >
                        <div className="flex items-center space-x-2">
                            <ThumbsUp className="h-6 w-6" />
                            <h3 className="text-xl">The Good News</h3>
                        </div>
                        <p className="mt-2">
                            Turning off these signals is safe and something you
                            can do yourself through various therapeutic
                            approaches.
                        </p>
                        <Link
                            href="/contact"
                            className="mt-4 inline-block transform rounded-lg bg-white px-6 py-2 text-textPrimary transition duration-300 ease-in-out hover:scale-105 hover:bg-textPrimary hover:text-white"
                        >
                            Start Your Healing Today
                        </Link>
                    </motion.figure>

                    {/* Seventh box */}
                    <motion.figure
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-64 overflow-hidden rounded-3xl bg-amber-200/30 p-6 lg:col-span-4"
                    >
                        <div className="flex items-center space-x-2">
                            <Smile className="h-6 w-6 text-textPrimary" />
                            <h3 className="text-xl text-textPrimary">
                                Pain Reprocessing Therapy (PRT)
                            </h3>
                        </div>
                        <p className="mt-2 text-textPrimary">
                            Chronic pain can persist due to neural circuits
                            sending pain signals, often triggered by stress,
                            trauma, or unprocessed emotions. PRT helps retrain
                            the brain to turn off these signals, especially when
                            pain lingers after an injury has healed.
                        </p>

                        <Link
                            href="/science"
                            className="mt-4 inline-block transform rounded-lg bg-white px-6 py-2 text-textPrimary transition duration-300 ease-in-out hover:scale-105 hover:bg-textPrimary hover:text-white"
                        >
                            Learn More
                        </Link>
                    </motion.figure>

                    {/* Eighth box */}
                    <motion.figure
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative h-64 overflow-hidden rounded-3xl bg-textPrimary/30 p-6 lg:col-span-2"
                    >
                        <div className="flex items-center space-x-2">
                            <Shield className="h-6 w-6 text-textPrimary" />
                            <h3 className="text-xl text-textPrimary">
                                Biopsychosocial Method
                            </h3>
                        </div>
                        <p className="mt-2 text-textPrimary">
                            The biopsychosocial method is a leading approach to
                            chronic pain treatment, taught worldwide. Trained
                            under Dr. Howard Schubiner, I’ve helped many achieve
                            life-changing results—let me help you too.
                        </p>

                        <Link
                            href="/science"
                            className="mt-4 inline-block transform rounded-lg bg-white px-6 py-2 text-textPrimary transition duration-300 ease-in-out hover:scale-105 hover:bg-textPrimary hover:text-white"
                        >
                            Explore Techniques
                        </Link>
                    </motion.figure>

                    {/* Ninth box */}
                    <motion.figure
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative h-64 overflow-hidden rounded-3xl bg-textSecondary/30 p-6 lg:col-span-2"
                    >
                        <div className="flex items-center space-x-2">
                            <HandHeart className="h-6 w-6 text-textPrimary" />
                            <h3 className="text-xl text-textPrimary">
                                All Pain Is Real
                            </h3>
                        </div>
                        <p className="mt-2 text-textPrimary">
                            Pain isn’t imaginary—it originates in the brain.
                            Treating chronic pain starts there, as confirmed by
                            recent scientific research.
                        </p>
                        <Link
                            href="/contact"
                            className="mt-4 inline-block transform rounded-lg bg-white px-6 py-2 text-textPrimary transition duration-300 ease-in-out hover:scale-105 hover:bg-textPrimary hover:text-white"
                        >
                            Get The Help Your Deserve
                        </Link>
                    </motion.figure>
                </div>
            </div>
        </section>
    )
}

export default SVGPathScienceSection
