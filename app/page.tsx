import HomeIntro from "./components/HomeIntro"
import TestimonialsSection from "./components/sections/TestimonialsSection"
import MindBodySection from "./components/sections/MindBodySection"
import WeDoSection from "./components/sections/WhatWeDoSection"
import IllnessSection from "./components/sections/IllnessSection"
import Services from "./components/sections/Services"
import SVGPathScienceSection from "./components/sections/SVGPathScienceSection"
import Approach from "./components/sections/Approach"
import CallToActionSection from "./components/CallToActionSection"
import CredentialsSection from "./components/sections/CredentialsSection"

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
            <main className="bg-background">
                <section className="flex h-[80vh] flex-col items-center justify-center gap-6 bg-background px-6 text-center">
                    <h1 className="max-w-6xl flex-wrap font-butler text-4xl font-extralight uppercase text-primary-text md:text-5xl lg:text-7xl">
                        The <i>Biopsychosocial Approach </i> to{" "}
                        <span className="text-secondary-text">
                            chronic pain recovery
                        </span>
                    </h1>
                    <HomeIntro>
                        <span className="h-px w-16 bg-secondary-text/40" />
                        <p className="text-balance font-satoshi text-base font-light leading-8 text-light-body md:text-lg md:leading-9">
                            For{" "}
                            <span className="text-light-body">
                                chronic pain
                            </span>
                            ,{" "}
                            <span className="text-light-body">
                                chronic symptoms
                            </span>
                            , and{" "}
                            <span className="text-light-body">
                                chronic fatigue
                            </span>
                        </p>
                        <p className="text-balance font-satoshi text-sm font-light leading-7 text-light-supporting md:text-base">
                            Based in Ireland, supporting clients online
                            worldwide.
                        </p>
                    </HomeIntro>
                </section>

                <section>
                    <MindBodySection />
                    <WeDoSection />
                    <IllnessSection />
                    <CredentialsSection />
                    <Approach />
                    <Services />
                    <TestimonialsSection />
                    <SVGPathScienceSection />
                    <CallToActionSection fadeInVariants={fadeInVariants} />
                </section>
            </main>
        </>
    )
}
