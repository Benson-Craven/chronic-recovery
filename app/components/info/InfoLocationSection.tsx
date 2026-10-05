"use client"

import { motion } from "framer-motion"
import { fadeInVariants } from "./animations"

export default function InfoLocationSection() {
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
                    Where to find me
                </p>

                <h2 className="mb-14 font-satoshi text-4xl leading-[1.1] text-[#1E3A20] md:text-5xl lg:text-6xl">
                    Located in Cork,
                    <br />
                    <em>serving globally</em>
                </h2>

                <div className="h-px w-full bg-[#1E3A20]/[0.12]" />

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex items-start gap-6 border-b border-[#1E3A20]/[0.12] py-10"
                >
                    <p className="font-satoshi text-base font-light leading-relaxed text-light-body md:text-lg">
                        While my home clinic is based in Rochestown, Cork, I
                        work with clients throughout Ireland and worldwide via
                        online video sessions. Location doesn&apos;t need to be
                        a barrier to accessing this life-changing treatment
                        approach.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    )
}
