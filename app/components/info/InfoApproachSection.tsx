"use client"

import { motion } from "framer-motion"
import { fadeInVariants } from "./animations"

export default function InfoApproachSection() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="w-full bg-[#F7F4EF] px-6 py-20 md:py-28"
        >
            <div className="mx-auto max-w-3xl">
                <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                    A different approach
                </p>

                <h2 className="mb-14 font-satoshi text-4xl leading-[1.1] text-[#1E3A20] md:text-5xl lg:text-6xl">
                    Why I&apos;m different
                    <br />
                    from practitioners
                    <br />
                    <em>you&apos;ve seen before</em>
                </h2>

                <div className="h-px w-full bg-[#1E3A20]/[0.12]" />

                {[
                    {
                        number: "01",
                        heading: "The root cause, not the symptom",
                        body: "Most chronic pain isn't caused by ongoing structural damage. Recent neuroscience research has shown that many persistent pain conditions are the result of learned neural pathways, patterns in your brain that continue firing long after your body has healed. Think of it like a faulty alarm system that keeps going off even when there's no danger.",
                    },
                    {
                        number: "02",
                        heading: "I don't only manage pain; I support recovery",
                        body: "Many approaches focus mainly on coping tools. My approach works at the level of the nervous system to retrain learned danger signals, giving your brain a new pattern to practise.",
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
                        className="flex items-start gap-6 border-b border-[#1E3A20]/[0.12] py-10"
                    >
                        <span className="mt-1 shrink-0 font-satoshi text-xs font-light tabular-nums text-light-supporting">
                            {item.number}
                        </span>

                        <div>
                            <p className="mb-3 font-satoshi text-base font-medium text-[#1E3A20] md:text-lg">
                                {item.heading}
                            </p>

                            <p className="font-satoshi text-base font-light leading-relaxed text-light-body md:text-lg">
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
                    className="mt-12 font-satoshi text-2xl italic leading-snug text-[#1E3A20] md:text-3xl"
                >
                    "Pain is not a life sentence,
                    <br />
                    it&apos;s a signal that can be unlearned."
                </motion.p>
            </div>
        </motion.section>
    )
}
