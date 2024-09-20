import React, { useRef } from "react"
import { FadeInOnScroll } from "../animations/FadeInOnScroll"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import ShineUnderlineEffect from "../UnderlineEffect"

const WeDoSection = () => {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    })

    const leftTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"])
    const rightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "5%"])

    return (
        <>
            {" "}
            <section className="flex min-h-screen items-center justify-center bg-[#fafafa]">
                <div className="flex h-2/3 w-2/3 flex-col items-center justify-center">
                    <FadeInOnScroll threshold={0.7}>
                        <h1 className="p-5 text-center font-Satoshi text-5xl font-bold text-textPrimary">
                            Our approach has helped countless individuals of all
                            ages{" "}
                            <span className="font-butler italic">overcome</span>{" "}
                            debilitating ailments and{" "}
                            <span className="font-butler italic">reclaim </span>{" "}
                            their lives
                        </h1>{" "}
                    </FadeInOnScroll>
                    <FadeInOnScroll threshold={0.7}>
                        {" "}
                        <p className="mt-2 p-5 text-center font-Satoshi text-2xl font-bold text-textSecondary">
                            Experience life-changing results with our proven
                            methods
                        </p>
                    </FadeInOnScroll>
                    <FadeInOnScroll threshold={0.7}>
                        <motion.button
                            className="text-l mt-10 w-auto rounded-full bg-textThird px-5 py-3 font-Satoshi font-bold text-secondary md:text-2xl"
                            whileTap={{ scale: 0.85 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            Book Your Consultation Now
                        </motion.button>
                    </FadeInOnScroll>
                </div>{" "}
            </section>
            {/* <section className="flex min-h-screen flex-col md:flex-row">
                <div className="flex min-h-screen w-1/2 flex-col items-center justify-center bg-primary p-10">
                    <h1 className="font-Satoshi mb-8 bg-textPrimary p-4 text-lg font-bold md:text-6xl">
                        The <span className="font-butler italic">truth?</span>
                    </h1>

                    <p className="font-Satoshi mt-5 p-5 text-lg font-bold text-textPrimary md:text-5xl">
                        <span className="font-butler italic">95%</span> of your
                        brain is unconsciously on{" "}
                        <span className="font-butler italic">high alert,</span>{" "}
                        stuck in defense mode from past hurts.
                    </p>
                    <p className="font-Satoshi mt-5 p-5 text-lg font-bold text-textPrimary md:text-5xl">
                        But you can{" "}
                        <span className="font-butler italic">retrain </span>{" "}
                        that bad habit. Our pioneering mind-body approach lets
                        you take back the reins.
                    </p>
                </div>

                <div className="flex min-h-screen w-1/2 items-center justify-center bg-pink-100">
                    <video
                        src="/videos/Waterfall.mp4"
                        autoPlay
                        muted
                        loop
                        className="h-full w-full object-cover"
                    />
                </div>
            </section> */}
            <section className="bg-[#F9F9F9] py-16 md:py-24">
                <div ref={container} className="container mx-auto px-4">
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
                                            alt="Anai Wood Factory"
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
                                            alt="Anai Wood Products"
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
                                We Cultivate for Posterity
                            </h2>
                            <p className="mb-8 text-lg text-[#212721]">
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
                                    href="/about"
                                    className="inline-flex items-center font-semibold text-[#212721] transition duration-300 hover:text-[#D9D9D6]"
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
        </>
    )
}

export default WeDoSection
