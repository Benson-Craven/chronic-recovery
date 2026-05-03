"use client"

import MindBodySection from "./components/sections/MindBodySection"
import WeDoSection from "./components/sections/WhatWeDoSection"
import IllnessSection from "./components/sections/IllnessSection"
import { motion } from "framer-motion"
import ScienceSection from "./components/sections/ScienceSection"
import Services from "./components/sections/Services"
import MaskTextSection from "./components/sections/MaskTextSection"
import SVGTest from "./components/sections/SVGTest"
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
                <section className="bg-background flex h-[80vh] items-center justify-center">
                    <motion.h1
                        className="text-primary-text mx-11 flex-wrap text-center font-butler text-4xl font-extralight uppercase md:text-5xl lg:text-7xl"
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
                </section>

                <section>
                    <MindBodySection />
                    <WeDoSection />
                    <IllnessSection />
                    <CredentialsSection />

                    {/* <ScienceSection /> */}
                    <Approach />
                    <Services />

                    <CallToActionSection fadeInVariants={fadeInVariants} />

                    {/* <MaskTextSection /> */}
                    <SVGPathScienceSection />

                    {/* <SVGTest /> */}
                </section>
            </main>
        </>
    )
}
