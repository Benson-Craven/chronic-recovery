"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

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
        <div className="container mx-auto px-4 py-12 md:py-20">
            <motion.section
                variants={fadeInVariants}
                className="rounded-[25px] border-2 border-black bg-gradient-to-br from-white to-gray-50 p-8 text-center shadow-lg md:p-12"
            >
                <h2 className="text-secondary-text mb-6 text-3xl font-bold md:text-4xl">
                    Your Next Step
                </h2>
                <div className="mb-8 space-y-3 text-lg text-gray-700">
                    <p>
                        If you're tired of being told there's nothing more that
                        can be done...
                    </p>
                    <p>
                        If you're ready to try an approach that addresses the
                        root cause of your pain...
                    </p>
                    <p>
                        If you want to work with someone who truly believes in
                        your capacity to heal...
                    </p>
                </div>
                <p className="text-secondary-text mb-8 text-2xl font-semibold">
                    Let's talk.
                </p>
                <div className="space-y-4">
                    <Link href="/contact">
                        <button className="bg-secondary-text rounded-full px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg">
                            Book Your Consultation
                        </button>
                    </Link>
                    <p className="text-gray-600">
                        Tel/WhatsApp:{" "}
                        <a
                            href="tel:+353892335106"
                            className="text-secondary-text font-bold hover:underline"
                        >
                            +353 (0) 89-233-5106
                        </a>
                    </p>
                    <p className="text-sm text-gray-500">
                        You can reach out via the contact form, phone, or
                        WhatsApp. I typically respond within 24 hours, and we
                        can schedule your first session at a time that works for
                        you.
                    </p>
                </div>
            </motion.section>
        </div>
    )
}

export default CallToActionSection
