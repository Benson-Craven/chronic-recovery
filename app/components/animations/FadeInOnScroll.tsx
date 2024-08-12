"use client"

import { ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface FadeInOnScrollProps {
    children: ReactNode
    threshold?: number
}

export function FadeInOnScroll({ children, threshold }: FadeInOnScrollProps) {
    const ref = useRef(null)
    const inView = useInView(ref, {
        amount: threshold,
        once: true, // This ensures the animation only happens once
    })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    )
}
