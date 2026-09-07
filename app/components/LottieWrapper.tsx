"use client"

import { useEffect, useRef, useState } from "react"
import Lottie from "lottie-react"
import type { InteractivityProps, LottieRefCurrentProps } from "lottie-react"
import animationData from "../../public/assets/women-health.json"

const interactivity: Omit<InteractivityProps, "lottieObj"> = {
    mode: "scroll",
    actions: [{ visibility: [0.2, 1.25], type: "seek", frames: [0, 150] }],
}

export default function LottieClientWrapper({
    onReady,
}: {
    onReady: () => void
}) {
    const animation = useRef<LottieRefCurrentProps>(null)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (!loaded) return

        // Lottie's scroll handler only seeks after a scroll event. Match the
        // current position before revealing a player that loaded mid-scroll.
        const frame = requestAnimationFrame(() => {
            const player = animation.current
            const bounds =
                player?.animationContainerRef.current?.getBoundingClientRect()
            if (!player || !bounds) return

            const visibility =
                (window.innerHeight - bounds.top) /
                (window.innerHeight + bounds.height)
            const progress = Math.max(
                0,
                Math.min(1, (visibility - 0.2) / (1.25 - 0.2)),
            )
            player.goToAndStop(Math.max(0, Math.ceil(progress * 150) - 1), true)
            onReady()
        })

        return () => cancelAnimationFrame(frame)
    }, [loaded, onReady])

    return (
        <Lottie
            lottieRef={animation}
            animationData={animationData}
            interactivity={interactivity}
            autoplay={false}
            loop={false}
            onDOMLoaded={() => setLoaded(true)}
            className="h-full w-full"
        />
    )
}
