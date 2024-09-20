import { motion, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"
import Image from "next/image"
import { FadeInOnScroll } from "../animations/FadeInOnScroll"
import Link from "next/link"

const RevealInfoSection = () => {
    const container = useRef(null)
    const secondContainer = useRef(null)

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    })

    const { scrollYProgress: secondScrollYProgress } = useScroll({
        target: secondContainer,
        offset: ["start start", "end end"],
    })

    const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 0])

    const leftTransform = useTransform(
        secondScrollYProgress,
        [0, 1],
        ["0%", "-5%"],
    )
    const rightTransform = useTransform(
        secondScrollYProgress,
        [0, 1],
        ["0%", "5%"],
    )

    return (
        <>
            <section ref={container} className="h-[200vh] w-full bg-gray-100">
                <div className="relative h-full w-full">
                    {/* Left scaling div */}
                    <motion.div
                        style={{ scaleX: scaleTransform }}
                        className="absolute left-0 top-0 z-10 h-full w-1/3 origin-left bg-[#fafafa]"
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
                                src="/images/forest.png"
                                alt="Forest Image"
                                layout="fill"
                                objectFit="cover"
                            />
                        </motion.div>
                    </div>{" "}
                    {/* Right scaling div */}
                    <motion.div
                        style={{ scaleX: scaleTransform }}
                        className="absolute right-0 top-0 z-10 h-full w-1/3 origin-right bg-[#fafafa]"
                    />
                </div>
            </section>
            <section className="flex h-[120vh] items-center justify-center bg-[#F9F9F9] py-16 md:py-24">
                <div ref={secondContainer} className="container mx-auto px-4">
                    <div className="flex flex-col items-center md:flex-row">
                        <div className="mb-8 md:mb-0 md:w-1/2">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <motion.div
                                        style={{ x: leftTransform }}
                                        className="overflow-hidden rounded-lg"
                                    >
                                        <Image
                                            src="/images/forest.png"
                                            alt="Forest"
                                            width={400}
                                            height={600}
                                            className="h-full w-full transform object-cover transition duration-500 hover:scale-105"
                                        />
                                    </motion.div>
                                    <motion.div
                                        style={{ x: leftTransform }}
                                        className="overflow-hidden rounded-lg"
                                    >
                                        <Image
                                            src="/images/forest.png"
                                            alt="Forest"
                                            width={100}
                                            height={150}
                                            className="h-full w-full transform object-cover transition duration-500 hover:scale-105"
                                        />
                                    </motion.div>
                                </div>
                                <div className="mt-8 space-y-4">
                                    <motion.div
                                        style={{ x: rightTransform }}
                                        className="overflow-hidden rounded-lg"
                                    >
                                        <Image
                                            src="/images/forest.png"
                                            alt="Oguni Cedar"
                                            width={100}
                                            height={100}
                                            className="h-full w-full transform object-cover transition duration-500 hover:scale-105"
                                        />
                                    </motion.div>
                                    <motion.div
                                        style={{ x: rightTransform }}
                                        className="overflow-hidden rounded-lg"
                                    >
                                        <Image
                                            src="/images/forest.png"
                                            alt="Aso Region"
                                            width={300}
                                            height={300}
                                            className="h-full w-full transform object-cover transition duration-500 hover:scale-105"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <div className="font-Satoshi md:w-1/2 md:pl-12">
                            <h2 className="mb-6 text-4xl font-bold text-[#212721]">
                                About Me
                            </h2>
                            <p className="mb-8 text-lg text-[#212721]">
                                My name is Marsha Canny and I am a chronic pain
                                therapist based in Rochestown, Cork, Ireland and
                                I use a multi-disciplinary approach to help you
                                cure your chronic pain, not manage it. I
                                specialise in helping people with persistent
                                pain conditions and have worked with many people
                                of all ages and ailments and seen fantastic
                                results. I will work with your body, nervous
                                system and brain to get you back to good health.
                            </p>
                            <Link
                                href="/about"
                                className="inline-flex items-center font-semibold text-[#212721] transition duration-300 hover:text-[#D9D9D6]"
                            >
                                <span className="mr-2">
                                    Book a consultation
                                </span>
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RevealInfoSection
