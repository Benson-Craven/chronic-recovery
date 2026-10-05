"use client"

import { motion } from "framer-motion"
import { fadeInVariants } from "./animations"

export default function InfoCommitmentSection() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="w-full bg-[#F7F4EF] px-6 py-20 md:py-28"
        >
            <div className="mx-auto max-w-5xl">
                <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="mb-4 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                            What you can expect
                        </p>

                        <h2 className="font-satoshi text-4xl leading-[1.1] text-[#1E3A20] md:text-5xl lg:text-6xl">
                            My commitment
                            <br />
                            <em>to you</em>
                        </h2>
                    </div>

                    <p className="max-w-xs font-satoshi text-sm font-light leading-relaxed text-light-supporting md:text-right">
                        When you work with me, you're not just another
                        appointment in my calendar.
                    </p>
                </div>

                <div className="h-px w-full bg-[#1E3A20]/[0.12]" />

                {[
                    {
                        number: "01",
                        text: "Understanding your unique story, because every person's pain journey is different",
                    },
                    {
                        number: "02",
                        text: "Providing evidence-based treatment rooted in the latest neuroscience research",
                    },
                    {
                        number: "03",
                        text: "Creating a safe, compassionate space where you feel heard and validated",
                    },
                    {
                        number: "04",
                        text: "Empowering you with tools you can use long after our sessions end",
                    },
                    {
                        number: "05",
                        text: "Being honest about what's possible, since this approach works for many conditions, but not all",
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
                        className="grid grid-cols-[80px_1fr] items-start border-b border-[#1E3A20]/10 py-8 md:grid-cols-[120px_1fr]"
                    >
                        <span
                            aria-hidden="true"
                            className="select-none font-satoshi text-5xl italic leading-none text-[rgba(30,58,32,0.08)] md:text-7xl"
                        >
                            {item.number}
                        </span>

                        <p className="pt-2 font-satoshi text-base font-light leading-relaxed text-light-body md:text-lg">
                            {item.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}
