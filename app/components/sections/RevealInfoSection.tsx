"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function RevealInfoSection() {
    const container = useRef(null)

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    })

    const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 0])

    return (
        <section
            ref={container}
            className="relative hidden h-[150vh] w-full bg-[#fafafa] md:block md:h-[200vh]"
        >
            <div className="relative h-full w-full">
                <motion.div
                    style={{ scaleX: scaleTransform }}
                    className="absolute left-0 top-0 z-10 h-full w-1/3 origin-left border-2 border-[#fafafa] bg-[#fafafa]"
                />

                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.25,
                            duration: 1,
                            ease: "easeInOut",
                        }}
                        className="relative h-full w-full"
                    >
                        <Image
                            src="/images/therapy.avif"
                            alt="Therapy room for brain-body chronic pain support"
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover"
                        />
                    </motion.div>
                </div>

                <motion.div
                    style={{ scaleX: scaleTransform }}
                    className="absolute right-0 top-0 z-10 h-full w-1/3 origin-right border-2 border-[#fafafa] bg-[#fafafa]"
                />
            </div>
        </section>
    )
}
