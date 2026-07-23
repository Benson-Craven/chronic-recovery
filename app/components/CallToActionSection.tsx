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
        <motion.section
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ backgroundColor: "#F7F4EF" }}
            className="w-full px-6 py-20 md:py-28 lg:py-36"
        >
            <div className="mx-auto max-w-5xl">
                <div
                    className="mb-12 h-px w-full"
                    style={{ backgroundColor: "rgba(30,58,32,0.15)" }}
                />
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
                    <div>
                        <p
                            className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                            style={{
                                color: "#1E3A20",
                                fontFamily: "var(--font-dm-sans)",
                            }}
                        >
                            Your next step
                        </p>
                        <h2
                            className="text-5xl leading-[1.05] md:text-6xl lg:text-7xl"
                            style={{
                                color: "#1E3A20",
                                fontFamily: "var(--font-dm-serif)",
                            }}
                        >
                            Ready to explore
                            <br />
                            <em>your next step?</em>
                        </h2>
                    </div>

                    <div className="flex flex-col justify-between gap-10">
                        <div
                            className="space-y-5 text-base leading-relaxed md:text-lg"
                            style={{
                                color: "rgba(30,58,32,0.65)",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 300,
                            }}
                        >
                            <p>
                                If persistent pain has continued despite
                                previous care, a consultation can help you
                                explore whether this approach is relevant to
                                your situation.
                            </p>
                            <p
                                style={{
                                    color: "#1E3A20",
                                    fontFamily: "var(--font-dm-serif)",
                                    fontStyle: "italic",
                                    fontSize: "1.15rem",
                                }}
                            >
                                Ask questions before deciding your next step.
                            </p>
                        </div>

                        <CtaActionRow>
                            <WhatsAppLink
                                source="main_consultation_cta"
                                className="cta-interactive flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full px-10 py-4 text-sm font-medium tracking-wide sm:w-auto"
                                style={{
                                    backgroundColor: "#1E3A20",
                                    color: "#F7F4EF",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 500,
                                    letterSpacing: "0.04em",
                                }}
                            >
                                <FaWhatsapp
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                />
                                WhatsApp Marsha
                            </WhatsAppLink>
                            <Link
                                href="/contact"
                                className="cta-interactive w-full whitespace-nowrap rounded-full border px-10 py-4 text-center text-sm font-medium tracking-wide sm:w-auto"
                                style={{
                                    borderColor: "rgba(30,58,32,0.3)",
                                    color: "#1E3A20",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 500,
                                    letterSpacing: "0.04em",
                                }}
                            >
                                Book Consultation
                            </Link>
                            <TrackedPhoneLink
                                source="main_consultation_cta"
                                className="text-sm transition-opacity hover:opacity-70 sm:basis-full"
                                style={{
                                    color: "rgba(30,58,32,0.4)",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 300,
                                }}
                            >
                                Call{" "}
                                <span
                                    className="underline underline-offset-2"
                                    style={{
                                        color: "rgba(30,58,32,0.65)",
                                        fontWeight: 400,
                                    }}
                                >
                                    {PHONE_DISPLAY}
                                </span>
                            </TrackedPhoneLink>
                        </CtaActionRow>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default CallToActionSection
