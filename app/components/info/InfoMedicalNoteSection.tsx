"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { fadeInVariants } from "./animations"

export default function InfoMedicalNoteSection() {
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
                    Before we begin
                </p>

                <h2 className="mb-14 font-satoshi text-4xl leading-[1.1] text-[#1E3A20] md:text-5xl lg:text-6xl">
                    Please rule out
                    <br />
                    <em>structural issues first</em>
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
                        Before we begin, I always recommend consulting your
                        doctor to rule out structural abnormality, disease, or
                        infection. Once you've done that, take my{" "}
                        <Link
                            href="/self-assessment"
                            className="text-[#1E3A20] underline underline-offset-2"
                        >
                            self-assessment questionnaire
                        </Link>{" "}
                        to help determine whether this approach is right for
                        you.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    )
}
