"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"
import RevealInfoSection from "../components/sections/RevealInfoSection"

const Info = () => {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    })

    const leftTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"])
    const rightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "5%"])
    return (
        <>
            <main>
                <section className="flex h-[80vh] items-center justify-center bg-[#fafafa]">
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
                        The <i>Brain & Body </i> can{" "}
                        <span className="text-secondary-text">
                            work together beautifully
                        </span>
                    </motion.h1>
                </section>
                <section>
                    <RevealInfoSection />
                </section>
            </main>
        </>
    )
}

export default Info
