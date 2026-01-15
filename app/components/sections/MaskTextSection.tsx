import React, { useRef, useEffect } from "react"
import Image from "next/image"

export default function MaskTextSection() {
    // Refs for DOM elements
    const container = useRef<HTMLDivElement>(null)
    const stickyMask = useRef<HTMLDivElement>(null)

    // Animation configuration
    const initialMaskSize = 0.8 // Starting size of the mask (80% of original)
    const targetMaskSize = 25 // End size of the mask (2500% of original)
    const easing = 0.15 // Smoothing factor for animation (lower = smoother but slower)
    let easedScrollProgress = 0 // Tracks the smoothed scroll progress

    // Final position for the mask
    const targetX = 57.89 // Final X position in percentage
    const targetY = 2.2 // Final Y position in percentage

    useEffect(() => {
        // Set up scroll event listener
        const handleScroll = () => {
            requestAnimationFrame(animate) // Schedule animation on next frame
        }
        window.addEventListener("scroll", handleScroll)

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const animate = () => {
        const scrollProgress = calculateScrollProgress()

        if (stickyMask.current) {
            // Calculate current size based on scroll progress
            const currentSize =
                initialMaskSize +
                (targetMaskSize - initialMaskSize) * scrollProgress

            // Apply current size to mask
            stickyMask.current.style.webkitMaskSize = `${currentSize * 100}%`

            // Calculate and apply current position
            const currentX = 50 + (targetX - 50) * scrollProgress
            const currentY = 50 + (targetY - 50) * scrollProgress
            stickyMask.current.style.webkitMaskPosition = `${currentX}% ${currentY}%`
        }

        // Continue animation on next frame
        requestAnimationFrame(animate)
    }

    const calculateScrollProgress = (): number => {
        const containerElement = container.current
        const stickyMaskElement = stickyMask.current

        if (!containerElement || !stickyMaskElement) {
            return 0
        }

        // Calculate raw scroll progress
        const containerRect = containerElement.getBoundingClientRect()
        const scrollProgress =
            stickyMaskElement.offsetTop /
            (containerRect.height - window.innerHeight)

        // Apply easing to the scroll progress
        const delta = scrollProgress - easedScrollProgress
        easedScrollProgress += delta * easing

        // Clamp the scroll progress between 0 and 1
        return Math.min(Math.max(easedScrollProgress, 0), 1)
    }

    return (
        <main id="science" className="relative hidden bg-background md:block">
            <div className="h-[20vh]" />
            {/** Container with 400vh height to allow for long scroll **/}
            <div ref={container} className="relative h-[400vh]">
                {/** Sticky container for the masked video **/}
                <div
                    ref={stickyMask}
                    className="pointer-events-none sticky top-0 flex h-[100vh] select-none items-center justify-center overflow-hidden"
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
                        playsInline
                        disablePictureInPicture
                        className="pointer-events-none h-full w-full select-none object-cover"
                    >
                        <source src="/videos/remedies.mp4" type="video/mp4" />
                    </video>
                </div>
                {/** Scroll indicator **/}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 transform text-center">
                    <p className="mb-2 text-primary-text/30">Scroll Down</p>
                    <svg
                        className="mx-auto h-6 w-6 animate-bounce text-primary-text/20"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </main>
    )
}
