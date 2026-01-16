"use client"

import MindBodySection from "./components/sections/MindBodySection"
import WeDoSection from "./components/sections/WhatWeDoSection"
import IllnessSection from "./components/sections/IllnessSection"
import { motion } from "framer-motion"
import ScienceSection from "./components/sections/ScienceSection"
import Services from "./components/sections/Services"
import MaskTextSection from "./components/sections/MaskTextSection"
import SVGTest from "./components/sections/SVGTest"
import SVGPathScienceSection from "./components/sections/SVGPathScienceSection"
import Approach from "./components/sections/Approach"
import CallToActionSection from "./components/CallToActionSection"

export default function Home() {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    }

    return (
        <>
            <main className="bg-background">
                <section className="bg-background flex h-[80vh] items-center justify-center">
                    <motion.h1
                        className="text-primary-text mx-11 flex-wrap text-center font-butler text-4xl font-extralight uppercase md:text-5xl lg:text-7xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.15,
                            duration: 1,
                            ease: "easeInOut",
                        }}
                    >
                        The <i>Biopsychosocial Approach </i> to{" "}
                        <span className="text-secondary-text">
                            chronic pain recovery
                        </span>
                    </motion.h1>
                </section>

                <section>
                    <MindBodySection />
                    <WeDoSection />
                    <IllnessSection />

                    {/* <ScienceSection /> */}
                    <Approach />
                    <Services />

                    <CallToActionSection fadeInVariants={fadeInVariants} />

                    {/* <MaskTextSection /> */}
                    <SVGPathScienceSection />

                    {/* <SVGTest /> */}
                </section>
            </main>
        </>
    )
}

