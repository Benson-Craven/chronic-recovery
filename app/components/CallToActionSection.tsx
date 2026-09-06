"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"
import { PHONE_DISPLAY } from "../lib/contact"
import CtaActionRow from "./CtaActionRow"
import WhatsAppLink from "./WhatsAppLink"
import TrackedPhoneLink from "./TrackedPhoneLink"

interface CallToActionSectionProps {
    fadeInVariants: {
        hidden: { opacity: number; y: number }
        visible: {
            opacity: number
            y: number
            transition: {
                duration: number
            }
        }
    }
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({
    fadeInVariants,
}) => {
    return (
        <section
            style={{ backgroundColor: "#F7F4EF" }}
            className="w-full px-6 py-20 md:py-28 lg:py-36"
        >
            <motion.div
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 mx-auto max-w-5xl"
            >
                <div
                    className="mb-12 h-px w-full"
                    style={{ backgroundColor: "rgba(30,58,32,0.15)" }}
                />
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
                    <div>
                        <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                            Take the first step
                        </p>
                        <h2 className="font-satoshi text-5xl leading-[1.05] text-[#1E3A20] md:text-6xl lg:text-7xl">
                            Ready to feel
                            <br />
                            <em>like yourself again?</em>
                        </h2>
                    </div>

                    <div className="flex flex-col justify-between gap-10">
                        <div className="space-y-5 font-satoshi text-base font-light leading-relaxed text-light-body md:text-lg">
                            <p>
                                Tired of being told there&apos;s nothing more
                                that can be done?
                            </p>
                            <p>
                                Ready for an approach that addresses the root
                                cause of your pain?
                            </p>
                            <p>
                                Looking for someone who truly believes in your
                                capacity to heal?
                            </p>
                        </div>

                        <CtaActionRow>
                            <WhatsAppLink
                                source="main_consultation_cta"
                                className="cta-interactive flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full px-10 py-4 font-satoshi text-sm font-medium tracking-[0.04em] text-[#F7F4EF] sm:w-auto"
                                style={{ backgroundColor: "#1E3A20" }}
                            >
                                <FaWhatsapp
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                />
                                WhatsApp Marsha
                            </WhatsAppLink>
                            <Link
                                href="/contact"
                                className="cta-interactive w-full whitespace-nowrap rounded-full border px-10 py-4 text-center font-satoshi text-sm font-medium tracking-[0.04em] text-[#1E3A20] sm:w-auto"
                                style={{ borderColor: "rgba(30,58,32,0.3)" }}
                            >
                                Book Consultation
                            </Link>
                            <TrackedPhoneLink
                                source="main_consultation_cta"
                                className="font-satoshi text-sm font-light text-light-supporting sm:basis-full"
                            >
                                Call{" "}
                                <span className="font-normal text-light-body underline underline-offset-2">
                                    {PHONE_DISPLAY}
                                </span>
                            </TrackedPhoneLink>
                        </CtaActionRow>
                        <p className="max-w-sm font-satoshi text-xs leading-relaxed text-light-supporting">
                            Reach out via the contact form, phone, or WhatsApp.
                            I typically respond within 24 hours and we&apos;ll
                            schedule at a time that works for you.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default CallToActionSection
