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
                        <h2 className="mb-6 text-3xl tracking-tight text-textPrimary md:text-4xl lg:text-5xl">
                            The Compassionate Approach to Lasting Relief
                        </h2>
                        <p className="mb-8 text-base text-textPrimary md:text-lg lg:text-xl">
                            Chronic pain and unexplained conditions like IBS,
                            long COVID, and chronic fatigue can feel
                            overwhelming. If you're searching for answers, this
                            approach offers a compassionate path forward. Many
                            have found relief and regained hope—I'd love to help
                            you, too.
                        </p>
                        <ShineUnderlineEffect>
                            <Link
                                href="/info"
                                className="inline-flex items-center justify-center text-textPrimary transition duration-300 hover:text-[#D9D9D6] md:justify-start"
                            >
                                <span className="mr-2">Find Out More</span>
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
    )
}

export default WeDoSection
