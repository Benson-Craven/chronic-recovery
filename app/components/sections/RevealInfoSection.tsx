import { motion, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"
import Image from "next/image"
import Link from "next/link"

const RevealInfoSection = () => {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    })

    const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 0])

    return (
        <>
            {/* DESKTOP HERO (hidden on mobile) */}
            <section
                ref={container}
                className="relative hidden h-[150vh] w-full bg-[#fafafa] md:block md:h-[200vh]"
            >
                <div className="relative h-full w-full">
                    {/* Left curtain */}
                    <motion.div
                        style={{ scaleX: scaleTransform }}
                        className="absolute left-0 top-0 z-10 h-full w-1/3 origin-left border-2 border-[#fafafa] bg-[#fafafa]"
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
                        className="absolute right-0 top-0 z-10 h-full w-1/3 origin-right border-2 border-[#fafafa] bg-[#fafafa]"
                    />
                </div>
            </section>

            {/* MAIN CONTENT (no blank gap on mobile) */}
            <section className="flex items-center justify-center bg-[#fafafa] py-12 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center md:flex-row">
                        <div className="mb-8 md:mb-0 md:w-1/2">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-6">
                                    <div className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                                        <Image
                                            src="/images/marsha.avif"
                                            alt="Marsha"
                                            width={400}
                                            height={600}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="mt-2 space-y-6 md:mt-8">
                                    <div className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                                        <Image
                                            src="/images/cork.avif"
                                            alt="Cork"
                                            width={100}
                                            height={150}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    <div className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                                        <Image
                                            src="/images/books.avif"
                                            alt="Books"
                                            width={300}
                                            height={300}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 md:pl-12">
                            <h2 className="mb-6 text-4xl font-medium text-textPrimary">
                                About Me
                            </h2>

                            <p className="mb-8 text-lg text-textPrimary">
                                My name is Marsha Canny and I am a chronic pain
                                therapist based in Rochestown, Cork, Ireland and
                                I use a multi-disciplinary approach to help you
                                cure your chronic pain, not manage it. I
                                specialise in helping people with{" "}
                                <Link
                                    href="/conditions"
                                    className="text-textSecondary hover:text-[#D9D9D6]"
                                >
                                    persistent pain conditions
                                </Link>{" "}
                                and have worked with many people of all ages and
                                ailments and seen fantastic results. <br />
                                <br />
                                I will work with your body, nervous system and
                                brain to get you back to good health. I also
                                completely cured myself of chronic migraines and
                                neck pain that I suffered for over 10 years.
                            </p>

                            <Link
                                href="/contact"
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RevealInfoSection
