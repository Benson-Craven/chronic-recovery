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
            ref={container}
            className="font-Satoshi relative h-[200vh] bg-gray-900 text-white"
        >
            <div className="sticky top-0 z-10 flex min-h-screen w-full items-center justify-center">
                <motion.div
                    style={{ scaleX: scaleTransform }}
                    className="absolute left-0 top-0 z-10 h-full w-1/5 origin-left bg-[#fafafa]"
                />
                <div className="absolute inset-0 mx-auto flex h-[100vh] max-w-4xl flex-col items-center justify-center px-4 text-center text-white">
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
                        href="/en/oguni-sugi"
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
                    <Image
                        src={`/images/forest.png`}
                        alt={"Forest"}
                        layout="fill"
                        objectFit="cover"
                    />
                    {/* {[1, 2, 3].map((colIndex) => (
                        <div key={colIndex} className="flex flex-1 flex-col">
                            {[1, 2, 3].map((imgIndex) => (
                                <div key={imgIndex} className="flex-1 p-1">
                                    <Image
                                        src={`/img/oguni-sugi-${colIndex}-${imgIndex}.jpg`}
                                        alt={`Oguni Sugi ${colIndex}-${imgIndex}`}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            ))}
                        </div>
                    ))} */}
                </div>
            </div>
            <motion.div
                style={{ scaleX: scaleTransform }}
                className="absolute right-0 top-0 z-10 h-full w-1/5 origin-right bg-[#fafafa]"
            />
        </section>
    )
}

export default ScienceSection
