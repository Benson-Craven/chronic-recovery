"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

export default function HomeIntro({ children }: { children: ReactNode }) {
    const reducedMotion = useReducedMotion()

    return (
        <motion.div
            className="flex max-w-3xl flex-col items-center gap-5 motion-reduce:!transform-none motion-reduce:!opacity-100"
            initial={reducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: reducedMotion ? 0 : 0.35,
                duration: reducedMotion ? 0 : 0.8,
                ease: "easeInOut",
            }}
        >
            {children}
        </motion.div>
    )
}
