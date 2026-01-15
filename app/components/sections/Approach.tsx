import React from "react"
import { motion } from "framer-motion"
import { FadeInOnScroll } from "../animations/FadeInOnScroll"
import Link from "next/link"

const Approach = () => {
    return (
        <section className="flex min-h-screen items-center justify-center bg-background px-4 py-16 md:py-24">
            <div className="flex w-full flex-col items-center justify-center text-center md:w-2/3">
                <FadeInOnScroll threshold={0.7}>
                    <h2 className="font-Satoshi p-5 text-2xl text-primary-text sm:text-3xl md:text-5xl">
                        This is not pain management.
                    </h2>
                </FadeInOnScroll>
                <FadeInOnScroll threshold={0.7}>
                    <p className="font-Satoshi mt-2 px-4 text-base text-secondary-text sm:text-lg md:text-2xl">
                        The treatment I provide will help you cure your chronic pain.
                    </p>
                </FadeInOnScroll>
                <FadeInOnScroll threshold={0.7}>
                    <Link href="/contact">
                        <motion.button
                            className="font-Satoshi mt-10 w-auto rounded-full bg-tertiary-text px-5 py-3 text-lg text-foreground sm:text-xl md:text-2xl"
                            whileTap={{ scale: 0.85 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            Book Your Consultation Now
                        </motion.button>
                    </Link>
                </FadeInOnScroll>
            </div>
        </section>
    )
}

export default Approach
