import React, { useRef } from "react"
import { FadeInOnScroll } from "../animations/FadeInOnScroll"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import ShineUnderlineEffect from "../UnderlineEffect"
// import Lottie, { LottieRefCurrentProps } from "lottie-react"
import animationData from "../../../public/assets/women-health.json"
import dynamic from "next/dynamic"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })
const WeDoSection = () => {
    const container = useRef(null)
    // const animationRef = useRef<LottieRefCurrentProps>(null)

    return (
        <>
            <section className="h-[100vh] bg-[#F9F9F9] py-16 md:py-24">
                <div ref={container} className="container mx-auto px-4">
                    <div className="flex flex-col items-center md:flex-row md:space-x-12">
                        <Lottie
                            // lottieRef={animationRef}
                            animationData={animationData}
                            loop={true}
                            className="mb-8 flex max-w-xl items-center justify-center md:mb-0"
                        />
                        <div className="md:w-1/2">
                            <h2 className="mx-4 mb-6 text-4xl text-[#212721]">
                                We Cultivate for Posterity
                            </h2>
                            <p className="mx-4 mb-8 text-lg text-[rgb(33,39,33)]">
                                I am delighted to tell you that there is new
                                help for chronic pain sufferers and for people
                                with other medically unexplained diagnoses such
                                as IBS, long covid, chronic fatigue, migraines,
                                anxiety, depression and many more. If you have
                                been to several medical professionals and are
                                still not getting better, you may benefit from
                                this approach. I have worked with many people of
                                all ages and ailments with amazing,
                                life-changing, results. Let me help you too.
                            </p>
                            <ShineUnderlineEffect>
                                <Link
                                    href="/info"
                                    className="mx-4 inline-flex items-center text-[#212721] transition duration-300 hover:text-[#D9D9D6]"
                                >
                                    <span className="mr-2">About us</span>
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </Link>
                            </ShineUnderlineEffect>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex min-h-screen items-center justify-center bg-[#fafafa] px-4 py-16 md:py-24">
                <div className="flex flex-col items-center justify-center text-center md:w-2/3">
                    <FadeInOnScroll threshold={0.7}>
                        <h1 className="font-Satoshi p-5 text-3xl text-textPrimary md:text-5xl">
                            Our approach has helped countless individuals of all
                            ages{" "}
                            <span className="font-butler italic">overcome</span>{" "}
                            debilitating ailments and{" "}
                            <span className="font-butler italic">reclaim</span>{" "}
                            their lives
                        </h1>
                    </FadeInOnScroll>
                    <FadeInOnScroll threshold={0.7}>
                        <p className="font-Satoshi mt-2 p-5 text-lg text-textSecondary md:text-2xl">
                            Experience life-changing results with our proven
                            methods
                        </p>
                    </FadeInOnScroll>
                    <FadeInOnScroll threshold={0.7}>
                        <motion.button
                            className="font-Satoshi mt-10 w-auto rounded-full bg-textThird px-5 py-3 text-lg text-secondary md:text-2xl"
                            whileTap={{ scale: 0.85 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            Book Your Consultation Now
                        </motion.button>
                    </FadeInOnScroll>
                </div>
            </section>
        </>
    )
}

export default WeDoSection
