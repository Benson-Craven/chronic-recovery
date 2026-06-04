"use client"

import MindBodySection from "./components/sections/MindBodySection"
import WeDoSection from "./components/sections/WhatWeDoSection"
import IllnessSection from "./components/sections/IllnessSection"
import { motion } from "framer-motion"
import Services from "./components/sections/Services"
import SVGPathScienceSection from "./components/sections/SVGPathScienceSection"
import Approach from "./components/sections/Approach"
import CallToActionSection from "./components/CallToActionSection"
import CredentialsSection from "./components/sections/CredentialsSection"

const homepageFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Can chronic pain improve, not just be managed?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Many chronic pain conditions can have a neuroplastic component, meaning the nervous system may be able to learn new safety signals. Pain Reprocessing Therapy and related biopsychosocial approaches can support this process when serious structural, disease, infection, or acute injury causes have been ruled out.",
            },
        },
        {
            "@type": "Question",
            name: "Who is this chronic pain approach for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "This approach may be appropriate for people with persistent pain or medically unexplained symptoms where medical assessment has not found an active disease, infection, acute injury, or surgical structural cause.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need to see a doctor first?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Structural abnormalities, disease, infection, and acute injury should be assessed by a doctor before beginning this work. Chronic Pain Recovery does not replace medical diagnosis or urgent medical care.",
            },
        },
    ],
}

export default function Home() {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    }

    return (
        <>
            <script
                id="homepage-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(homepageFaqSchema),
                }}
            />
            <main className="bg-background">
                <section className="flex h-[80vh] flex-col items-center justify-center gap-6 bg-background px-6 text-center">
                    <motion.h1
                        className="max-w-6xl flex-wrap font-butler text-4xl font-extralight uppercase text-primary-text md:text-5xl lg:text-7xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.15,
                            duration: 1,
                            ease: "easeInOut",
                        }}
                    >
                        The <i>Biopsychosocial Approach </i> to{" "}
                        <span className="text-secondary-text">
                            chronic pain recovery
                        </span>
                    </motion.h1>
                    <motion.div
                        className="flex max-w-3xl flex-col items-center gap-5"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.35,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                    >
                        <span className="h-px w-16 bg-secondary-text/40" />
                        <p className="text-balance font-satoshi text-base font-light leading-8 text-primary-text/80 md:text-lg md:leading-9">
                            For{" "}
                            <span className="text-secondary-text">
                                chronic pain
                            </span>
                            ,{" "}
                            <span className="text-secondary-text">
                                chronic symptoms
                            </span>
                            , and{" "}
                            <span className="text-secondary-text">
                                chronic fatigue
                            </span>
                        </p>
                    </motion.div>
                </section>

                <section>
                    <MindBodySection />
                    <WeDoSection />
                    <IllnessSection />
                    <CredentialsSection />
                    <Approach />
                    <Services />
                    <CallToActionSection fadeInVariants={fadeInVariants} />
                    <SVGPathScienceSection />
                </section>
            </main>
        </>
    )
}
