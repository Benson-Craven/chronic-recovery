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
} from "lucide-react"

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
                className="font-Satoshi container mx-auto overflow-hidden text-textPrimary"
            >
                {/* Text Content */}
                <div className="relative z-20 mb-16 max-w-xl p-6 px-4 md:w-1/2 md:p-0">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl leading-tight md:text-5xl lg:text-6xl xl:text-7xl"
                    >
                        What causes chronic pain?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-2 text-lg md:mt-8 md:text-xl lg:text-2xl xl:text-3xl"
                    >
                        95% of our brain is unconscious and directs the function
                        of our body based on its perception of immediate danger
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="relative z-10 mb-6 grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:mb-0 lg:grid-cols-4 lg:grid-rows-4">
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
                        </div>
                    </motion.figure>

                    {/* second box */}
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
                        {/* <img
                            src="/images/cork.avif"
                            alt="Brain visualization"
                            className="h-full w-full object-cover"
                        /> */}
                    </motion.figure>

                    {/* Third box  */}
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
                            <li>Pain reprocessing therapy</li>
                            <li>Somatic tracking</li>

                            <li>Graded exposure therapy</li>
                            <li>Emotional awareness & expression therapy</li>
                            {/* <li>
                                Intensive short-term dynamic psychotherapy
                                (ISTDP)
                            </li> */}
                            <li>Pain counselling</li>
                            <li>Nervous system regulation</li>

                            <li>Clinical hypnotherapy</li>
                            <li>Mindfulness exercises</li>
                        </ul>
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
                            <h3 className="text-xl">Understanding pain</h3>
                        </div>
                        <p className="mt-2">
                            Physical symptoms are the language between your
                            unconscious and conscious brain.
                        </p>
                    </motion.figure>

                    {/* last box */}
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
                    </motion.figure>
                </div>
            </div>
        </section>
    )
}

export default SVGPathScienceSection
