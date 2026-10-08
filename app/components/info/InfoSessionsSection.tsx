"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { EditorialSplit } from "../ui/EditorialSplit"
import { fadeInVariants } from "./animations"

export default function InfoSessionsSection() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="w-full bg-[#F7F4EF] px-6 py-20 md:py-28"
        >
            <EditorialSplit
                stickyVisual
                visual={{
                    kind: "illustration",
                    src: "/images/illustrations/one-to-one-support.png",
                    alt: "",
                }}
            >
                <div>
                    <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                        How it works
                    </p>

                    <h2 className="mb-14 font-satoshi text-4xl leading-[1.1] text-[#1E3A20] md:text-5xl lg:text-6xl">
                        What working
                        <br />
                        <em>together looks like</em>
                    </h2>

                    <p className="font-satoshi text-base font-light leading-relaxed text-light-body md:text-lg">
                        One-to-one, 60-minute sessions working with your body,
                        nervous system, and brain to restore your health.
                    </p>

                    <p className="mt-5 font-satoshi text-base font-light text-light-body">
                        <Link
                            href="/success-stories"
                            className="text-[#1E3A20] underline underline-offset-4"
                        >
                            Read client experiences
                        </Link>
                    </p>

                    <div className="mb-14 mt-14 divide-y divide-black/10">
                        {[
                            {
                                label: "In-person",
                                detail: "At my home clinic in Rochestown, Cork, Ireland",
                            },
                            {
                                label: "Online",
                                detail: "Via video call, perfect if you're anywhere in Ireland or beyond",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.08,
                                    ease: "easeOut",
                                }}
                                className="flex items-start gap-6 py-5"
                            >
                                <span className="mt-0.5 shrink-0 font-satoshi text-xs font-light tabular-nums text-light-supporting">
                                    0{index + 1}
                                </span>

                                <div>
                                    <p className="mb-1 font-satoshi text-sm font-medium text-[#1E3A20]">
                                        {item.label}
                                    </p>

                                    <p className="font-satoshi text-base font-light leading-relaxed text-light-body">
                                        {item.detail}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mb-14 rounded-2xl bg-[#1E3A20] px-8 py-7"
                    >
                        <p className="mb-1 font-satoshi text-xs uppercase tracking-[0.2em] text-dark-supporting">
                            Investment
                        </p>

                        <p className="font-satoshi text-2xl text-white md:text-3xl">
                            €75 per session
                        </p>
                    </motion.div>

                    <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                        Evidence-based approaches
                    </p>

                    <div className="divide-y divide-black/10">
                        {[
                            "Pain Reprocessing Therapy (PRT)",
                            "Somatic Tracking Techniques",
                            "Graded Exposure Therapy",
                            "Emotional Awareness & Expression Therapy (EAET)",
                            "And other transformative mind-body approaches",
                        ].map((approach, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.07,
                                    ease: "easeOut",
                                }}
                                className="flex items-start gap-6 py-5"
                            >
                                <span className="mt-0.5 shrink-0 font-satoshi text-xs font-light tabular-nums text-light-supporting">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <p className="font-satoshi text-base font-light leading-relaxed text-light-body">
                                    {approach}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </EditorialSplit>
        </motion.section>
    )
}
