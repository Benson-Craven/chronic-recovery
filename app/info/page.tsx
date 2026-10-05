"use client"

import { motion } from "framer-motion"
import RevealInfoSection from "../components/sections/RevealInfoSection"
import InfoIntroSection from "../components/info/InfoIntroSection"
import InfoEmpathySection from "../components/info/InfoEmpathySection"
import InfoJourneySection from "../components/info/InfoJourneySection"
import InfoApproachSection from "../components/info/InfoApproachSection"
import InfoAudienceSection from "../components/info/InfoAudienceSection"
import InfoSessionsSection from "../components/info/InfoSessionsSection"
import InfoCommitmentSection from "../components/info/InfoCommitmentSection"
import InfoMedicalNoteSection from "../components/info/InfoMedicalNoteSection"
import InfoWhyNowSection from "../components/info/InfoWhyNowSection"
import InfoLocationSection from "../components/info/InfoLocationSection"
import InfoClosingCtaSection from "../components/info/InfoClosingCtaSection"
import TestimonialsSection from "../components/sections/TestimonialsSection"

export default function Info() {
    return (
        <>
            <main>
                <section className="flex h-[80vh] items-center justify-center bg-[#fafafa]">
                    <motion.h1
                        className="mx-11 flex-wrap text-center font-butler text-4xl font-extralight uppercase text-primary-text md:text-5xl lg:text-7xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.15,
                            duration: 1,
                            ease: "easeInOut",
                        }}
                    >
                        The <i>Brain & Body </i> can{" "}
                        <span className="text-secondary-text">
                            work together beautifully
                        </span>
                    </motion.h1>
                </section>
                <section>
                    <div className="min-h-screen bg-background font-satoshi text-primary-text">
                        <RevealInfoSection />
                        <InfoIntroSection />
                        <InfoEmpathySection />
                        <InfoJourneySection />
                        <InfoApproachSection />
                        <InfoAudienceSection />
                        <InfoSessionsSection />
                        <TestimonialsSection variant="green" />
                        <InfoCommitmentSection />
                        <InfoMedicalNoteSection />
                        <InfoWhyNowSection />
                        <InfoLocationSection />
                        <InfoClosingCtaSection />
                    </div>
                </section>
            </main>
        </>
    )
}
