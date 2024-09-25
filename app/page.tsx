"use client"

import MindBodySection from "./components/sections/MindBodySection"
import WeDoSection from "./components/sections/WhatWeDoSection"
import IllnessSection from "./components/sections/IllnessSection"
import { motion } from "framer-motion"
import ScienceSection from "./components/sections/ScienceSection"
import Services from "./components/sections/Services"
import MaskTextSection from "./components/sections/MaskTextSection"
import ScienceInfo from "./components/sections/ScienceInfo"
import SVGTest from "./components/sections/SVGTest"

export default function Home() {
    return (
        <>
            <main>
                <section className="flex h-[80vh] items-center justify-center bg-[#fafafa]">
                    <motion.h1
                        className="mx-11 flex-wrap text-center font-butler text-6xl font-extralight uppercase text-textPrimary md:text-7xl lg:text-9xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.15,
                            duration: 1,
                            ease: "easeInOut",
                        }}
                    >
                        The <i>Biophysical Approach </i> to{" "}
                        <span className="text-textSecondary">
                            chronic pain recovery
                        </span>
                    </motion.h1>
                </section>

                <section>
                    <MindBodySection />
                    <WeDoSection />
                    <IllnessSection />

                    {/* <ScienceSection /> */}
                    <Services />
                    <MaskTextSection />
                    {/* <ScienceInfo /> */}
                    {/* <SVGTest /> */}
                </section>
            </main>
        </>
    )
}
