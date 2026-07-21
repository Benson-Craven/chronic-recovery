"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"
import { PHONE_DISPLAY, PHONE_HREF } from "../lib/contact"
import WhatsAppLink from "./WhatsAppLink"

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
        <>
            <motion.section
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ backgroundColor: "#1E3A20" }}
                className="w-full rounded-3xl px-6 py-20 md:py-28 lg:py-36"
            >
                <div className="mx-auto max-w-3xl text-center">
                    {/* Eyebrow label */}
                    <p
                        className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-60"
                        style={{
                            color: "#C8E6C9",
                            fontFamily: "'DM Sans', sans-serif",
                        }}
                    >
                        Take the first step
                    </p>

                    {/* Main headline */}
                    <h2
                        className="mb-8 text-5xl leading-[1.1] text-white md:text-6xl lg:text-7xl"
                        style={{ fontFamily: "'DM Serif Display', serif" }}
                    >
                        Ready to feel
                        <br />
                        <em>like yourself again?</em>
                    </h2>

                    {/* Body copy */}
                    <div
                        className="mx-auto mb-10 max-w-xl space-y-2 text-base leading-relaxed md:text-lg"
                        style={{
                            color: "rgba(200, 230, 201, 0.8)",
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 300,
                        }}
                    >
                        <p>
                            Tired of being told there's nothing more that can be
                            done?
                        </p>
                        <p>
                            Ready for an approach that addresses the root cause
                            of your pain?
                        </p>
                        <p>
                            Looking for someone who truly believes in your
                            capacity to heal?
                        </p>
                    </div>

                    {/* Contact actions */}
                    <div className="mb-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                        <WhatsAppLink
                            source="main_consultation_cta"
                            className="flex items-center justify-center gap-2 rounded-full px-10 py-4 text-sm font-medium tracking-wide transition-transform hover:scale-[1.03] hover:shadow-xl active:scale-[0.98]"
                            style={{
                                backgroundColor: "#F0EBE1",
                                color: "#1E3A20",
                                fontFamily: "'DM Sans', sans-serif",
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
                            className="rounded-full border px-10 py-4 text-sm font-medium tracking-wide transition-transform hover:scale-[1.03] active:scale-[0.98]"
                            style={{
                                borderColor: "rgba(240,235,225,0.75)",
                                color: "#F0EBE1",
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 500,
                                letterSpacing: "0.04em",
                            }}
                        >
                            Book Consultation
                        </Link>
                    </div>

                    {/* Phone */}
                    <div className="mb-10">
                        <a
                            href={PHONE_HREF}
                            className="text-sm transition-opacity hover:opacity-100"
                            style={{
                                color: "rgba(200, 230, 201, 0.6)",
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 300,
                            }}
                        >
                            Call{" "}
                            <span style={{ color: "#C8E6C9", fontWeight: 400 }}>
                                {PHONE_DISPLAY}
                            </span>
                        </a>
                    </div>

                    {/* Fine print */}
                    <p
                        className="mx-auto max-w-sm text-xs leading-relaxed"
                        style={{
                            color: "rgba(200, 230, 201, 0.4)",
                            fontFamily: "'DM Sans', sans-serif",
                        }}
                    >
                        Reach out via the contact form, phone, or WhatsApp. I
                        typically respond within 24 hours and we'll schedule at
                        a time that works for you.
                    </p>
                </div>
            </motion.section>
        </>
    )
}

export default CallToActionSection
