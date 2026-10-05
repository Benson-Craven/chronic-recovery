"use client"

import { motion } from "framer-motion"
import { fadeInVariants } from "./animations"

export default function InfoWhyNowSection() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="w-full bg-[#1E3A20] px-6 py-20 md:py-28"
        >
            <div className="mx-auto max-w-3xl">
                <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-dark-supporting">
                    Don&apos;t wait
                </p>

                <h2 className="mb-14 font-satoshi text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl">
                    Why now is
                    <br />
                    <em>the time to act</em>
                </h2>

                <div className="h-px w-full bg-[#C8E6C9]/[0.15]" />

                {[
                    {
                        number: "01",
                        body: "Chronic pain doesn't usually get better on its own. Left untreated, pain conditions often develop and accelerate over time through neurophysiological processes. The learned pain pathways become more entrenched. The nervous system becomes more sensitised.",
                    },
                    {
                        number: "02",
                        body: "But here's the good news: neuroplasticity works both ways. Just as your brain learned these pain patterns, it can unlearn them. The sooner you start, the faster you can begin your recovery journey.",
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
                        className="flex items-start gap-6 border-b border-[#C8E6C9]/[0.12] py-10"
                    >
                        <span className="mt-1 shrink-0 font-satoshi text-xs font-light tabular-nums text-dark-supporting">
                            {item.number}
                        </span>

                        <p className="font-satoshi text-base font-light leading-relaxed text-dark-body md:text-lg">
                            {item.body}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}
