"use client"

import { motion } from "framer-motion"
import { fadeInVariants } from "./animations"

export default function InfoAudienceSection() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="w-full bg-[#1E3A20] px-6 py-20 md:py-28"
        >
            <div className="mx-auto max-w-5xl">
                <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-dark-supporting">
                    Who I work with
                </p>

                <h2 className="mb-6 font-satoshi text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl">
                    You don&apos;t have to keep
                    <br />
                    <em>living like this.</em>
                </h2>

                <p className="mb-16 max-w-xl font-satoshi text-base font-light leading-relaxed text-dark-body md:text-lg">
                    I specialise in helping people whose pain has persisted long
                    after conventional medicine ran out of answers.
                </p>

                <div className="mb-16 grid grid-cols-1 gap-px bg-[#C8E6C9]/10 sm:grid-cols-2 lg:grid-cols-3">
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
                            title: "And many more",
                            conditions:
                                "If you've been living with unexplained or persistent pain, reach out. This approach may be right for you.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.45,
                                delay: index * 0.07,
                                ease: "easeOut",
                            }}
                            className="flex flex-col gap-3 bg-[#1E3A20] p-8"
                        >
                            <span className="font-satoshi text-xs font-light tabular-nums text-dark-supporting">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <h3 className="font-satoshi text-base font-medium text-white md:text-lg">
                                {item.title}
                            </h3>

                            <p className="font-satoshi text-sm font-light leading-relaxed text-dark-supporting">
                                {item.conditions}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mb-10 h-px w-full bg-[#C8E6C9]/[0.15]" />

                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="max-w-2xl font-satoshi text-xl italic leading-relaxed text-dark-body md:text-2xl"
                >
                    "If you&apos;ve been told it&apos;s all in your head,
                    you&apos;re partially right. Your pain lives in your
                    brain&apos;s neural circuits, but that makes it no less
                    real. Understanding this is the first step toward healing."
                </motion.p>
            </div>
        </motion.section>
    )
}
