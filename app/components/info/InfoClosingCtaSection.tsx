"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { PHONE_DISPLAY } from "@/app/lib/contact"
import CtaActionRow from "../CtaActionRow"
import { WhatsAppCta } from "../WhatsAppLink"
import TrackedPhoneLink from "../TrackedPhoneLink"
import { fadeInVariants } from "./animations"

export default function InfoClosingCtaSection() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="w-full bg-[#F7F4EF] px-6 py-20 md:py-28 lg:py-36"
        >
            <div className="mx-auto max-w-5xl">
                <div className="mb-12 h-px w-full bg-[#1E3A20]/[0.12]" />

                <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
                    <div>
                        <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                            Your next step
                        </p>

                        <h2 className="font-satoshi text-5xl leading-[1.05] text-[#1E3A20] md:text-6xl lg:text-7xl">
                            Something
                            <br />
                            <em>different</em>
                            <br />
                            awaits you.
                        </h2>
                    </div>

                    <div className="flex flex-col justify-between gap-10">
                        <div className="space-y-5 font-satoshi text-base font-light leading-relaxed text-light-body md:text-lg">
                            <p>
                                You&apos;ve spent long enough suffering.
                                You&apos;ve tried enough treatments that
                                didn&apos;t work. You&apos;ve been patient
                                enough with a healthcare system that
                                couldn&apos;t give you answers.
                            </p>

                            <p className="font-satoshi text-[1.15rem] italic text-[#1E3A20]">
                                Now it&apos;s time to try something backed by
                                science, something that treats the root cause,
                                not just the symptoms.
                            </p>

                            <p>
                                I'm here when you're ready to take that first
                                step.
                            </p>
                        </div>

                        <CtaActionRow>
                            <WhatsAppCta source="info_closing_cta" />

                            <Link
                                href="/contact"
                                className="cta-interactive w-full whitespace-nowrap rounded-full border border-[#1E3A20]/30 bg-transparent py-4 text-center font-satoshi text-sm font-medium tracking-[0.04em] text-[#1E3A20] sm:w-auto sm:px-10"
                            >
                                Book Consultation
                            </Link>

                            <p className="font-satoshi text-sm font-light text-light-supporting sm:basis-full">
                                Call{" "}
                                <TrackedPhoneLink
                                    source="info_closing_cta"
                                    className="text-light-body underline underline-offset-2"
                                >
                                    {PHONE_DISPLAY}
                                </TrackedPhoneLink>
                            </p>
                        </CtaActionRow>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
