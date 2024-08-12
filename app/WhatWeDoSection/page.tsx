import React from "react"
import { FadeInOnScroll } from "../components/animations/FadeInOnScroll"
import { motion } from "framer-motion"

const WeDoSection = () => {
    return (
        <>
            {" "}
            <section className="flex min-h-screen items-center justify-center bg-primary">
                <div className="flex h-2/3 w-2/3 flex-col items-center justify-center">
                    <FadeInOnScroll threshold={0.7}>
                        <h1 className="p-5 font-Jost text-5xl font-bold text-textPrimary">
                            Our approach has helped countless individuals of all
                            ages{" "}
                            <span className="font-PlayfairDisplay italic">
                                overcome
                            </span>{" "}
                            debilitating ailments and{" "}
                            <span className="font-PlayfairDisplay italic">
                                reclaim{" "}
                            </span>{" "}
                            their lives.
                        </h1>{" "}
                    </FadeInOnScroll>
                    <FadeInOnScroll threshold={0.7}>
                        {" "}
                        <p className="mt-2 p-5 text-center font-Jost text-2xl font-bold text-textSecondary">
                            Experience life-changing results with our proven
                            methods.
                        </p>
                    </FadeInOnScroll>
                    <FadeInOnScroll threshold={0.7}>
                        <motion.button
                            className="text-l mt-10 w-auto rounded-full bg-textThird px-5 py-3 font-Jost font-bold text-secondary md:text-2xl"
                            whileTap={{ scale: 0.85 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            Book Your Consultation Now
                        </motion.button>
                    </FadeInOnScroll>
                </div>{" "}
            </section>
            <section className="flex min-h-screen flex-col md:flex-row">
                <div className="flex min-h-screen w-1/2 flex-col items-center justify-center bg-primary p-10">
                    <h1 className="mb-8 bg-textPrimary p-4 font-Jost text-lg font-bold md:text-6xl">
                        The{" "}
                        <span className="font-PlayfairDisplay italic">
                            truth?
                        </span>
                    </h1>

                    <p className="mt-5 p-5 font-Jost text-lg font-bold text-textPrimary md:text-5xl">
                        <span className="font-PlayfairDisplay italic">95%</span>{" "}
                        of your brain is unconsciously on{" "}
                        <span className="font-PlayfairDisplay italic">
                            high alert,
                        </span>{" "}
                        stuck in defense mode from past hurts.
                    </p>
                    <p className="mt-5 p-5 font-Jost text-lg font-bold text-textPrimary md:text-5xl">
                        But you can{" "}
                        <span className="font-PlayfairDisplay italic">
                            retrain{" "}
                        </span>{" "}
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
            </section>
        </>
    )
}

export default WeDoSection
