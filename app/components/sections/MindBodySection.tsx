"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"
import Image from "next/image"
import { FadeInOnScroll } from "../animations/FadeInOnScroll"

const RevealImageSection = () => {
    const container = useRef(null)

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    })

    const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 0])

    return (
        <section
            ref={container}
            className="hidden h-[200vh] w-full bg-[#fafafa] md:block"
        >
            <div className="relative h-full w-full">
                {/* Left scaling div */}
                <motion.div
                    style={{ scaleX: scaleTransform }}
                    className="absolute left-0 top-0 z-10 h-full w-1/12 origin-left bg-[#fafafa] md:w-1/3"
                />
                {/* Top scaling div */}
                <motion.div
                    style={{ scaleY: scaleTransform }}
                    className="fixed top-0 z-10 w-full origin-top bg-[#fafafa] md:h-[10vh]"
                />
                {/* Image */}{" "}
                <div className="sticky top-0 h-[100vh] w-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.25,
                            duration: 1,
                            ease: "easeInOut",
                        }}
                        className="relative h-full w-full"
                    >
                        <Image
                            src="/images/forest.avif"
                            alt="Forest Image"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </motion.div>
                </div>{" "}
                {/* Right scaling div */}
                <motion.div
                    style={{ scaleX: scaleTransform }}
                    className="absolute right-0 top-0 z-10 h-full w-1/12 origin-right bg-[#fafafa] md:w-1/3"
                />
                {/* Top scaling div */}
                <motion.div
                    style={{ scaleY: scaleTransform }}
                    className="fixed bottom-0 z-10 w-full origin-bottom bg-[#fafafa] md:h-[10vh]"
                />
            </div>
        </section>
    )
}

export default RevealImageSection
