import React, { useRef } from "react"
import { motion } from "framer-motion"
import animationData from "../../../public/assets/women-health.json"
import dynamic from "next/dynamic"
import type { InteractivityProps, LottieRefCurrentProps } from "lottie-react"
import { Section, Container, Divider } from "../ui/Layout"
import { Heading, Text, Eyebrow } from "../ui/Typography"
import { CtaButton } from "../ui/CtaButton"

const LottieClientWrapper = dynamic(() => import("../LottieWrapper"), {
    ssr: false,
    loading: () => (
        <div
            className="h-64 w-full animate-pulse rounded-2xl"
            style={{ backgroundColor: "rgba(30,58,32,0.06)" }}
        />
    ),
})

const WeDoSection = () => {
    const container = useRef<HTMLDivElement>(null)
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
        <Section id="mission" variant="cream">
            <Container ref={container} size="wide">
                <Eyebrow>Our approach</Eyebrow>
                <Divider className="mb-16" />

                <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
                    {/* Lottie — left */}
                    <div className="w-full md:w-1/2">
                        <LottieClientWrapper
                            lottieRef={aniRef}
                            interactivity={interactivity}
                            animationData={animationData}
                            className="mx-auto w-full max-w-sm md:max-w-md lg:max-w-lg"
                        />
                    </div>

                    {/* Content — right */}
                    <div className="flex w-full flex-col justify-center md:w-1/2">
                        <Heading className="mb-8">
                            The biopsychosocial
                            <br />
                            <em>approach to healing</em>
                        </Heading>

                        <Divider className="mb-8 w-12" />

                        <Text className="mb-10">
                            There is new help for chronic pain sufferers — and
                            for people with medically unexplained diagnoses such
                            as IBS, long covid, chronic fatigue, migraines,
                            anxiety, and depression. If you've seen several
                            medical professionals and are still not getting
                            better, you will benefit from this approach. I work
                            with people of all ages and ailments with
                            life-changing results.
                        </Text>

                        <div className="flex flex-col gap-4">
                            <CtaButton href="/contact">
                                Book Your Consultation
                            </CtaButton>
                            <p
                                className="text-sm"
                                style={{
                                    color: "rgba(30,58,32,0.4)",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 300,
                                }}
                            >
                                or call / WhatsApp{" "}
                                <a
                                    href="tel:+353892335106"
                                    className="underline underline-offset-2 transition-opacity hover:opacity-100"
                                    style={{ color: "rgba(30,58,32,0.65)" }}
                                >
                                    +353 (0) 89-233-5106
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default WeDoSection
