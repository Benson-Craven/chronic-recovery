import React, { useRef, useEffect } from "react"
import Image from "next/image"

export default function MaskTextSection() {
    const container = useRef<HTMLDivElement>(null)
    const stickyMask = useRef<HTMLDivElement>(null)

    const initialMaskSize = 0.8
    const targetMaskSize = 25
    const easing = 0.15
    let easedScrollProgress = 0

    const targetX = 57.89
    const targetY = 2.2

    useEffect(() => {
        requestAnimationFrame(animate)
    }, [])

    const svgRef = useRef<HTMLDivElement>(null)
    const pathRef = useRef<SVGPathElement>(null)

    useEffect(() => {
        const svg = svgRef.current
        const path = pathRef.current

        if (!svg || !path) return

        const scroll = () => {
            const distance = window.scrollY + window.innerHeight * 2
            const totalDistance = svg.clientHeight

            const percentage = distance / totalDistance

            const pathLength = path.getTotalLength()

            path.style.strokeDasharray = `${pathLength}`
            path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`
        }

        scroll()
        window.addEventListener("scroll", scroll)

        return () => {
            window.removeEventListener("scroll", scroll)
        }
    }, [])

    const animate = () => {
        const scrollProgress = calculateScrollProgress()
        if (stickyMask.current) {
            const currentSize =
                initialMaskSize +
                (targetMaskSize - initialMaskSize) * scrollProgress
            stickyMask.current.style.webkitMaskSize = `${currentSize * 100}%`

            const currentX = 50 + (targetX - 50) * scrollProgress
            const currentY = 50 + (targetY - 50) * scrollProgress

            stickyMask.current.style.webkitMaskPosition = `${currentX}% ${currentY}%`
        }
        requestAnimationFrame(animate)
    }

    const calculateScrollProgress = (): number => {
        const containerElement = container.current
        const stickyMaskElement = stickyMask.current

        if (!containerElement || !stickyMaskElement) {
            return 0
        }

        const containerRect = containerElement.getBoundingClientRect()
        const scrollProgress =
            stickyMaskElement.offsetTop /
            (containerRect.height - window.innerHeight)

        const delta = scrollProgress - easedScrollProgress
        easedScrollProgress += delta * easing

        return Math.min(Math.max(easedScrollProgress, 0), 1)
    }

    return (
        <>
            <main id="science" className="relative bg-[#fafafa]">
                <div className="h-[20vh]" />

                <div ref={container} className="relative h-[400vh]">
                    <div
                        ref={stickyMask}
                        className="sticky top-0 flex h-[100vh] items-center justify-center overflow-hidden"
                        style={{
                            maskImage: "url(/images/science.svg)",
                            WebkitMaskImage: "url(/images/science.svg)",
                            maskRepeat: "no-repeat",
                            maskSize: `${initialMaskSize * 100}%`,
                            maskPosition: "center center",
                        }}
                    >
                        <video
                            autoPlay
                            muted
                            loop
                            className="h-full w-full object-cover"
                        >
                            <source
                                src="/videos/remedies.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 transform text-center font-Satoshi">
                        <p className="mb-2 font-semibold text-textPrimary/30">
                            Scroll Down
                        </p>
                        <svg
                            className="mx-auto h-6 w-6 animate-bounce text-textPrimary/20"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </div>
            </main>
            <section
                ref={svgRef}
                className="relative h-[300vh] overflow-hidden bg-[#fafafa] font-Satoshi text-textPrimary"
            >
                <div className="relative z-20 md:w-1/2 md:pl-16 lg:pl-24 xl:pl-32">
                    <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl xl:text-7xl">
                        What causes chronic pain?
                    </h2>
                    <p className="mt-8 text-lg md:text-xl lg:text-2xl xl:text-3xl">
                        95% of our brain is unconscious and directs the function
                        of our body based on its perception of immediate danger.
                    </p>
                </div>
                <div className="relative z-10 grid grid-cols-4 gap-4 p-10 sm:grid-cols-2">
                    {/* <figure className="col-span-1 row-span-1 h-[400px] w-[300px]">
                        <Image
                            src="/images/monstera.jpg"
                            alt="Photo 2"
                            layout="responsive"
                            width={300}
                            height={400}
                            objectFit="cover"
                        />
                    </figure> */}

                    <figure className="col-span-1 row-span-2">
                        <Image
                            src="/images/meeting2.jpg"
                            alt="Photo 3"
                            layout="responsive"
                            width={400}
                            height={600}
                            objectFit="cover"
                            className="rounded-3xl"
                        />
                    </figure>

                    {/* <figure className="col-span-2 row-span-1">
                        <Image
                            src="/images/phone.jpg"
                            alt="Photo 4"
                            layout="responsive"
                            width={500}
                            height={300}
                            objectFit="cover"
                        />
                    </figure> */}

                    {/* <figure className="col-span-1 row-span-1">
                        <Image
                            src="/photo5.jpg"
                            alt="Photo 5"
                            layout="responsive"
                            width={300}
                            height={300}
                            objectFit="cover"
                        />
                    </figure> */}
                </div>

                <svg
                    width="1000"
                    height="2000"
                    viewBox="0 0 1000 2000"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 top-0 z-0 h-[200vw] w-[100vw]"
                >
                    <path
                        ref={pathRef}
                        d="M-24.5 101C285 315 5.86278 448.291 144.223 631.238C239.404 757.091 559.515 782.846 608.808 617.456C658.101 452.067 497.627 367.073 406.298 426.797C314.968 486.521 263.347 612.858 322.909 865.537C384.086 1125.06 79.3992 1007.94 100 1261.99C144.222 1807.35 819 1325 513 1142.5C152.717 927.625 -45 1916.5 1191.5 1852"
                        stroke="#A4AC96"
                        stroke-width="30"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        strokeOpacity="0.6"
                        className="z-0"
                    />
                </svg>
            </section>
        </>
    )
}
