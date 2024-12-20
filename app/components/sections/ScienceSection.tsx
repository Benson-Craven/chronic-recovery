import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

const ScienceSection = () => {
    const container = useRef(null)

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    })

    const scaleTransform = useTransform(scrollYProgress, [0, 1], [0, 1])
    return (
        <section
            id="science"
            ref={container}
            className="relative h-[200vh] text-white"
        >
            <div className="sticky top-0 z-10 flex min-h-screen w-full items-center justify-center">
                <motion.div
                    style={{
                        scaleX: scaleTransform,
                        clipPath: "ellipse(50% 100% at 0% 50%)",
                    }}
                    className="absolute left-0 top-0 z-10 h-full w-1/2 origin-left bg-[#fafafa]"
                />
                <div className="absolute inset-0 mx-auto flex h-[100vh] max-w-4xl flex-col items-center justify-center px-4 text-center text-white mix-blend-difference">
                    <h3
                        className="mb-4 text-xl opacity-75"
                        style={{ position: "absolute", top: "10%" }}
                    >
                        The Legacy We Treasure
                    </h3>
                    <h2 className="mb-8 text-8xl font-bold">The Science</h2>
                    <p className="mb-8 max-w-md text-xl">
                        Symptoms in the body communicate perceived danger to the
                        conscious mind. These signals can persist long after
                        healing, creating faulty danger responses. Fortunately,
                        we can teach the brain to turn off these signals safely
                        on our own.
                    </p>
                    <Link
                        href=""
                        style={{ position: "absolute", bottom: "10%" }}
                        className="inline-flex items-center rounded-full border border-white px-6 py-3 text-white transition duration-300 hover:bg-white hover:text-gray-900"
                    >
                        <span className="mr-2">Explore more</span>
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
                </div>
            </div>

            <div className="sticky inset-0 z-0 h-[100vh]">
                <div className="flex h-full">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        src={`/videos/remedies.mp4`}
                        className="h-full w-full object-cover brightness-50 filter"
                    />
                    {/* {[1, 2, 3].map((colIndex) => (
                        <div key={colIndex} className="flex flex-1 flex-col">
                            {[1, 2, 3].map((imgIndex) => (
                                <div key={imgIndex} className="flex-1 p-1">
                                    <Image
                                        src={`/img-${colIndex}-${imgIndex}.jpg`}
 ${colIndex}-${imgIndex}`}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            ))}
                        </div>
                    ))} */}
                </div>
            </div>
            <motion.div
                style={{
                    scaleX: scaleTransform,

                    clipPath: "ellipse(50% 100% at 100% 50%)",
                }}
                className="absolute right-0 top-0 z-10 h-full w-1/2 origin-right bg-[#fafafa]"
            />
        </section>
    )
}

export default ScienceSection
