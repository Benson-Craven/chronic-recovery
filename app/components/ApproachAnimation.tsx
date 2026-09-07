"use client"

import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"

type AnimationPlayer = typeof import("./LottieWrapper").default

export default function ApproachAnimation() {
    const container = useRef<HTMLDivElement>(null)
    const [reducedMotion, setReducedMotion] = useState<boolean | null>(null)
    const [Player, setPlayer] = useState<AnimationPlayer | null>(null)
    const [ready, setReady] = useState(false)
    const onReady = useCallback(() => setReady(true), [])

    useEffect(() => {
        const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
        const updatePreference = () => {
            setReducedMotion(preference.matches)
            setReady(false)
        }
        updatePreference()
        preference.addEventListener("change", updatePreference)
        return () => preference.removeEventListener("change", updatePreference)
    }, [])

    useEffect(() => {
        if (reducedMotion !== false || Player || !container.current) return

        let cancelled = false
        const loadPlayer = () => {
            import("./LottieWrapper")
                .then((module) => {
                    if (!cancelled) setPlayer(() => module.default)
                })
                .catch(() => {
                    // Keep the still visible if an animation chunk cannot load.
                })
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    observer.disconnect()
                    loadPlayer()
                }
            },
            { rootMargin: "50px 0px" },
        )
        observer.observe(container.current)

        return () => {
            cancelled = true
            observer.disconnect()
        }
    }, [reducedMotion, Player])

    const showPlayer = reducedMotion === false && Player !== null

    return (
        <div
            ref={container}
            aria-hidden="true"
            className="relative mx-auto aspect-square w-full max-w-sm md:max-w-md lg:max-w-lg"
        >
            <Image
                src="/assets/women-health-still.svg"
                alt=""
                width={1500}
                height={1500}
                className={
                    showPlayer && ready
                        ? "invisible h-full w-full"
                        : "h-full w-full"
                }
            />
            {showPlayer && (
                <div
                    className={`absolute inset-0 ${ready ? "visible" : "invisible"}`}
                >
                    <Player onReady={onReady} />
                </div>
            )}
        </div>
    )
}
