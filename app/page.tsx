"use client"

import MindBodySection from "./MindBodySection/page"
import WeDoSection from "./WhatWeDoSection/page"
import IllnessSection from "./illnessSection/page"
import { StickyScrollRevealDemo } from "./AppointmentSection/page"
import { motion } from "framer-motion"
import HeroSection from "./HeroSection/page"

export default function Home() {
    const words = ["better", "cute", "beautiful", "modern"]

    return (
        <>
            <main>
                <section className="flex min-h-screen items-center justify-center bg-primary">
                    <motion.h1
                        className="mx-11 flex-wrap font-PlayfairDisplay text-4xl font-bold uppercase text-textPrimary md:text-9xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.25,
                            duration: 1,
                            ease: "easeInOut",
                        }}
                    >
                        The <i>Biophysical Approach</i> to{" "}
                        <span className="text-textSecondary">
                            chronic pain recovery
                        </span>
                    </motion.h1>
                </section>

                <section>
                    <IllnessSection />
                    <WeDoSection />
                    <MindBodySection />

                    {/* <StickyScrollRevealDemo /> */}
                </section>
            </main>
        </>
    )
}
