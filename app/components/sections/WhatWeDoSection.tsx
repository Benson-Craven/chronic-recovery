import React, { useRef } from "react"
import { motion } from "framer-motion"
import animationData from "../../../public/assets/women-health.json"
import dynamic from "next/dynamic"
import type { InteractivityProps, LottieRefCurrentProps } from "lottie-react"
import { FaWhatsapp } from "react-icons/fa"
import { Section, Container, Divider } from "../ui/Layout"
import { Heading, Text, Eyebrow } from "../ui/Typography"
import { CtaButton } from "../ui/CtaButton"
import { PHONE_DISPLAY } from "@/app/lib/contact"
import CtaActionRow from "../CtaActionRow"
import WhatsAppLink from "../WhatsAppLink"
import TrackedPhoneLink from "../TrackedPhoneLink"

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
                <Eyebrow>My approach</Eyebrow>
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
                            <em>approach to support</em>
                        </Heading>

                        <Divider className="mb-8 w-12" />

                        <Text className="mb-10">
                            A biopsychosocial perspective considers how
                            biological, psychological, and social factors may
                            interact with persistent pain. After appropriate
                            medical assessment, it can offer some people a
                            useful framework for education and reflection
                            without assuming a diagnosis or promising an
                            outcome.
                        </Text>

                        <CtaActionRow>
                            <WhatsAppLink
                                source="homepage_approach"
                                className="cta-interactive flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#1E3A20] px-8 py-4 text-sm font-medium tracking-wide text-[#F7F4EF] sm:w-auto"
                                style={{
                                    fontFamily: "var(--font-dm-sans)",
                                    letterSpacing: "0.04em",
                                }}
                            >
                                <FaWhatsapp
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                />
                                WhatsApp Marsha
                            </WhatsAppLink>
                            <CtaButton href="/contact" variant="outline">
                                Book Consultation
                            </CtaButton>
                            <p
                                className="text-sm sm:basis-full"
                                style={{
                                    color: "rgba(30,58,32,0.4)",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 300,
                                }}
                            >
                                Call{" "}
                                <TrackedPhoneLink
                                    source="homepage_approach"
                                    className="underline underline-offset-2 transition-opacity hover:opacity-100"
                                    style={{ color: "rgba(30,58,32,0.65)" }}
                                >
                                    {PHONE_DISPLAY}
                                </TrackedPhoneLink>
                            </p>
                        </CtaActionRow>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default WeDoSection
