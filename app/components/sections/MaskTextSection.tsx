"use client"
import { useRef, useEffect } from "react"

export default function Home() {
    const container = useRef<HTMLDivElement>(null)
    const stickyMask = useRef<HTMLDivElement>(null)

    const initialMaskSize = 0.8 // Initial mask size as a fraction
    const targetMaskSize = 60 // Adjusted target mask size (25%)
    const easing = 0.15 // Easing factor for smooth scrolling
    let easedScrollProgress = 0 // Tracks the eased scroll progress

    // Define the target position (dot above the 'i')
    const targetX = 57.89
    const targetY = 2.2

    useEffect(() => {
        requestAnimationFrame(animate)
    }, [])

    const animate = () => {
        const scrollProgress = calculateScrollProgress()
        if (stickyMask.current) {
            const currentSize =
                initialMaskSize +
                (targetMaskSize - initialMaskSize) * scrollProgress
            stickyMask.current.style.webkitMaskSize = `${currentSize * 100}%`

            // Calculate the current mask position
            const currentX = 50 + (targetX - 50) * scrollProgress
            const currentY = 50 + (targetY - 50) * scrollProgress

            // Update the mask position
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

        // Easing the scroll progress
        const delta = scrollProgress - easedScrollProgress
        easedScrollProgress += delta * easing

        return Math.min(Math.max(easedScrollProgress, 0), 1) // Clamp between 0 and 1
    }

    return (
        <main className="mb-[100vh] bg-[#fafafa]">
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
                        <source src="/videos/remedies.mp4" type="video/mp4" />
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
    )
}
