import { motion, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"
import Image from "next/image"
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

    // Smoother transforms for the image grid
    const leftTransform = useTransform(
        secondScrollYProgress,
        [0, 1],
        ["-4%", "0%"],
    )
    const rightTransform = useTransform(
        secondScrollYProgress,
        [0, 1],
        ["4%", "0%"],
    )

    // Add fade in for text
    const contentOpacity = useTransform(secondScrollYProgress, [0.2, 0], [0, 1])
    const contentY = useTransform(
        secondScrollYProgress,
        [0, 0.2],
        ["20px", "0px"],
    )

    return (
        <>
            {/* Keep the first section exactly the same */}
            <section
                ref={container}
                className="relative h-[150vh] w-full bg-[#fafafa] md:h-[200vh]"
            >
                <div className="relative h-full w-full">
                    {/* Left curtain */}
                    <motion.div
                        style={{ scaleX: scaleTransform }}
                        className="absolute left-0 top--1 z-10 h-full w-1/2 origin-left border-2 border-[#fafafa] bg-[#fafafa] md:w-1/3"
                    />

                    {/* Sticky container for image */}
                    <div className="sticky top-0 h-screen w-full overflow-hidden">
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
                                src="/images/therapy.avif"
                                alt="Therapy Hero Image"
                                fill
                                priority
                                sizes="100vw"
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Right curtain */}
                    <motion.div
                        style={{ scaleX: scaleTransform }}
                        className="absolute right-0 top-0 z-10 h-full w-1/2 origin-right border-2 border-[#fafafa] bg-[#fafafa] md:w-1/3"
                    />
                </div>
            </section>

            {/* Update only the image grid and text section */}
            <section className="flex items-center justify-center bg-[#fafafa] py-16 md:py-24">
                <div ref={secondContainer} className="container mx-auto px-4">
                    <div className="flex flex-col items-center md:flex-row">
                        <div className="mb-8 md:mb-0 md:w-1/2">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <motion.div
                                        style={{ x: rightTransform }}
                                        className="overflow-hidden rounded-lg"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Image
                                            src="/images/marsha.avif"
                                            alt="Forest"
                                            width={400}
                                            height={600}
                                            className="h-full w-full object-cover"
                                        />
                                    </motion.div>
                                    <motion.div
                                        style={{ x: rightTransform }}
                                        className="overflow-hidden rounded-lg"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Image
                                            src="/images/cork.avif"
                                            alt="cork"
                                            width={100}
                                            height={150}
                                            className="h-full w-full object-cover"
                                        />
                                    </motion.div>
                                </div>
                                <div className="mt-8 space-y-4">
                                    <motion.div
                                        style={{ x: leftTransform }}
                                        className="overflow-hidden rounded-lg"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Image
                                            src="/images/office.avif"
                                            alt="office"
                                            width={100}
                                            height={100}
                                            className="h-full w-full object-cover"
                                        />
                                    </motion.div>
                                    <motion.div
                                        style={{ x: leftTransform }}
                                        className="overflow-hidden rounded-lg"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Image
                                            src="/images/books.avif"
                                            alt="books"
                                            width={300}
                                            height={300}
                                            className="h-full w-full object-cover"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            style={{
                                y: contentY,
                            }}
                            className="md:w-1/2 md:pl-12"
                        >
                            <h2 className="mb-6 text-4xl font-medium text-textPrimary">
                                About Me
                            </h2>
                            <p className="mb-8 text-lg text-textPrimary">
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
                                className="inline-flex items-center text-textPrimary transition duration-300 hover:text-[#D9D9D6]"
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
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RevealInfoSection
