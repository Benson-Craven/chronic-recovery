import { motion, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"
import Image from "next/image"

const RevealImageSection = () => {
    const container = useRef(null)

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    })

    const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 0])

    return (
        <section ref={container} className="h-[200vh] w-full bg-gray-100">
            <div className="relative h-full w-full">
                {/* Left scaling div */}
                <motion.div
                    style={{ scaleX: scaleTransform }}
                    className="absolute left-0 top-0 z-10 h-full w-1/3 origin-left bg-white"
                />
                {/* Image */}
                <div className="sticky top-0 h-[100vh] w-full">
                    <div className="relative h-full w-full">
                        <Image
                            src="/images/forest.png"
                            alt="Forest Image"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
                {/* Right scaling div */}
                <motion.div
                    style={{ scaleX: scaleTransform }}
                    className="absolute right-0 top-0 z-10 h-full w-1/3 origin-right bg-white"
                />
            </div>
        </section>
    )
}

export default RevealImageSection
