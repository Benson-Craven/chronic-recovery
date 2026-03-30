import React, { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import animationData from "../../../public/assets/women-health.json"
import dynamic from "next/dynamic"
import type { InteractivityProps, LottieRefCurrentProps } from "lottie-react"

const LottieClientWrapper = dynamic(() => import("../LottieWrapper"), {
    ssr: false,
    loading: () => (
        <div
            className="h-64 w-full animate-pulse rounded-2xl"
            style={{ backgroundColor: "rgba(30,58,32,0.06)" }}
        />
    ),
})

const WeDoSection = () => {
    const container = useRef(null)
    const aniRef = useRef<LottieRefCurrentProps>(null)

    // Lottie scroll mechanics — unchanged
    const interactivity: Omit<InteractivityProps, "lottieObj"> = {
        mode: "scroll",
        actions: [
            {
                visibility: [0.2, 1.25],
                type: "seek",
                frames: [0, 150],
            },
        ],
    }

    return (
        <section
            id="mission"
            className="w-full px-6 py-20 md:py-28"
            style={{ backgroundColor: "#F7F4EF" }}
        >
            <div ref={container} className="mx-auto max-w-5xl">
                {/* Eyebrow */}
                <p
                    className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                    style={{
                        color: "#1E3A20",
                        fontFamily: "var(--font-dm-sans)",
                    }}
                >
                    Our approach
                </p>

                <div
                    className="mb-16 h-px w-full"
                    style={{ backgroundColor: "rgba(30,58,32,0.12)" }}
                />

                <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
                    {/* Lottie — left */}
                    <div className="w-full md:w-1/2">
                        <LottieClientWrapper
                            lottieRef={aniRef}
                            interactivity={interactivity}
                            animationData={animationData}
                            className="mx-auto w-full max-w-sm md:max-w-md lg:max-w-lg"
                        />
                    </div>

                    {/* Content — right */}
                    <div className="flex w-full flex-col justify-center md:w-1/2">
                        <h2
                            className="mb-8 text-4xl leading-[1.1] md:text-5xl"
                            style={{
                                fontFamily: "var(--font-dm-serif)",
                                color: "#1E3A20",
                            }}
                        >
                            The biopsychosocial
                            <br />
                            <em>approach to healing</em>
                        </h2>

                        <div
                            className="mb-8 h-px w-12"
                            style={{ backgroundColor: "rgba(30,58,32,0.2)" }}
                        />

                        <p
                            className="mb-10 text-base leading-relaxed md:text-lg"
                            style={{
                                color: "rgba(30,58,32,0.65)",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 300,
                            }}
                        >
                            There is new help for chronic pain sufferers — and
                            for people with medically unexplained diagnoses such
                            as IBS, long covid, chronic fatigue, migraines,
                            anxiety, and depression. If you've seen several
                            medical professionals and are still not getting
                            better, you will benefit from this approach. I work
                            with people of all ages and ailments with
                            life-changing results.
                        </p>

                        <div className="flex flex-col gap-4">
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                    }}
                                    className="w-full rounded-full py-4 text-sm font-medium tracking-wide transition-shadow hover:shadow-lg md:w-auto md:px-10"
                                    style={{
                                        backgroundColor: "#1E3A20",
                                        color: "#F7F4EF",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 500,
                                        letterSpacing: "0.04em",
                                    }}
                                >
                                    Book Your Consultation
                                </motion.button>
                            </Link>
                            <p
                                className="text-sm"
                                style={{
                                    color: "rgba(30,58,32,0.4)",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 300,
                                }}
                            >
                                or call / WhatsApp{" "}
                                <a
                                    href="tel:+353892335106"
                                    className="underline underline-offset-2 transition-opacity hover:opacity-100"
                                    style={{ color: "rgba(30,58,32,0.65)" }}
                                >
                                    +353 (0) 89-233-5106
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeDoSection
