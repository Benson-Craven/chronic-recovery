import React, { useRef } from "react"
import Link from "next/link"
import ShineUnderlineEffect from "../UnderlineEffect"
import animationData from "../../../public/assets/women-health.json"
import dynamic from "next/dynamic"
import type { InteractivityProps, LottieRefCurrentProps } from "lottie-react"

// Dynamically import the client-side Lottie wrapper with SSR disabled
const LottieClientWrapper = dynamic(() => import("../LottieWrapper"), {
    ssr: false,
    loading: () => (
        <div className="h-64 w-full animate-pulse bg-gray-200"></div>
    ),
})

const WeDoSection = () => {
    const container = useRef(null)
    const aniRef = useRef<LottieRefCurrentProps>(null)
    const interactivity: Omit<InteractivityProps, "lottieObj"> = {
        mode: "scroll",
        actions: [
            {
                visibility: [0.2, 1.25],
                type: "seek",
                frames: [0, 150],
            },
        ],
    }
    return (
        <section id="mission" className="bg-[#F9F9F9] py-16 md:py-24">
            <div ref={container} className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-12">
                    {/* Lottie Animation Container */}
                    <div className="w-full md:w-1/2">
                        <LottieClientWrapper
                            lottieRef={aniRef}
                            interactivity={interactivity}
                            animationData={animationData}
                            className="mx-auto w-full max-w-sm md:max-w-md lg:max-w-lg"
                        />
                    </div>
                    {/* Content Container */}
                    <div className="flex w-full flex-col justify-center text-center md:w-1/2 md:text-left">
                        <h2 className="text-primary-text mb-6 text-3xl tracking-tight md:text-4xl lg:text-5xl">
                            The biopsychosocial approach to healing chronic pain
                        </h2>
                        <p className="text-primary-text mb-8 text-base md:text-lg lg:text-xl">
                            I am delighted to tell you that there is new help
                            for chronic pain sufferers and for people with other
                            medically unexplained diagnoses such as IBS, long
                            covid, chronic fatigue, migraines, anxiety,
                            depression and other conditions. If you have been to
                            several medical professionals and are still not
                            getting better, you will benefit from this approach.
                            I work with many people of all ages and ailments
                            with amazing, life-changing results. Let me help you
                            too.
                        </p>
                        <div className="space-y-4">
                            <Link href="/contact">
                                <button className="bg-secondary-text rounded-full px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg">
                                    Book Your Consultation
                                </button>
                            </Link>
                            <p className="text-gray-600">
                                Tel/WhatsApp:{" "}
                                <a
                                    href="tel:+353892335106"
                                    className="text-secondary-text font-bold hover:underline"
                                >
                                    +353 (0) 89-233-5106
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeDoSection
