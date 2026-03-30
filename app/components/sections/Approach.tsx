import React from "react"
import { motion } from "framer-motion"
import { FadeInOnScroll } from "../animations/FadeInOnScroll"
import Link from "next/link"

const Approach = () => {
    return (
        <section
            className="w-full px-6 py-28 md:py-40"
            style={{ backgroundColor: "#F7F4EF" }}
        >
            <div className="mx-auto max-w-3xl text-center">
                <FadeInOnScroll threshold={0.5}>
                    <h2
                        className="mb-8 text-5xl leading-[1.05] md:text-6xl lg:text-7xl"
                        style={{
                            fontFamily: "var(--font-dm-serif)",
                            color: "#1E3A20",
                        }}
                    >
                        This is not
                        <br />
                        <em>pain management.</em>
                    </h2>
                </FadeInOnScroll>

                <FadeInOnScroll threshold={0.5}>
                    <div
                        className="mx-auto mb-10 h-px w-16"
                        style={{ backgroundColor: "rgba(30,58,32,0.15)" }}
                    />
                </FadeInOnScroll>

                <FadeInOnScroll threshold={0.5}>
                    <p
                        className="mx-auto mb-12 max-w-md text-base leading-relaxed md:text-lg"
                        style={{
                            color: "rgba(30,58,32,0.55)",
                            fontFamily: "var(--font-dm-sans)",
                            fontWeight: 300,
                        }}
                    >
                        The treatment I provide will help you cure your chronic
                        pain — not just cope with it.
                    </p>
                </FadeInOnScroll>

                <FadeInOnScroll threshold={0.5}>
                    <Link href="/contact">
                        <motion.button
                            className="rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-shadow hover:shadow-lg"
                            style={{
                                backgroundColor: "#1E3A20",
                                color: "#F7F4EF",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 500,
                                letterSpacing: "0.04em",
                            }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                            }}
                        >
                            Book Your Consultation
                        </motion.button>
                    </Link>
                </FadeInOnScroll>
            </div>
        </section>
    )
}

export default Approach
