import React from "react"
import { motion } from "framer-motion"
import { FadeInOnScroll } from "../animations/FadeInOnScroll"

const Approach = () => {
    return (
        <section className="flex min-h-screen items-center justify-center bg-[#fafafa] px-4 py-16 md:py-24">
            <div className="flex w-full flex-col items-center justify-center text-center md:w-2/3">
                <FadeInOnScroll threshold={0.7}>
                    <h2 className="font-Satoshi p-5 text-2xl text-textPrimary sm:text-3xl md:text-5xl">
                        A Compassionate Approach to Lasting Relief
                    </h2>
                </FadeInOnScroll>
                <FadeInOnScroll threshold={0.7}>
                    <p className="font-Satoshi mt-2 px-4 text-base text-textSecondary sm:text-lg md:text-2xl">
                        Discover the support and care that have helped many find
                        relief from chronic conditions and regain control over
                        their lives.
                    </p>
                </FadeInOnScroll>
                <FadeInOnScroll threshold={0.7}>
                    <motion.button
                        className="font-Satoshi mt-10 w-auto rounded-full bg-textThird px-5 py-3 text-lg text-secondary sm:text-xl md:text-2xl"
                        whileTap={{ scale: 0.85 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        Book Your Consultation Now
                    </motion.button>
                </FadeInOnScroll>
            </div>
        </section>
    )
}

export default Approach
