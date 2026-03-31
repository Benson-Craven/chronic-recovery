import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/utils/cn"

interface CtaButtonProps {
    href: string
    children: React.ReactNode
    className?: string
    variant?: "primary" | "outline"
    fullWidth?: boolean
}

export const CtaButton: React.FC<CtaButtonProps> = ({
    href,
    children,
    className,
    variant = "primary",
    fullWidth = false,
}) => {
    return (
        <Link href={href} className={cn(fullWidth && "w-full")}>
            <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                }}
                className={cn(
                    "rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-shadow hover:shadow-lg",
                    variant === "primary"
                        ? "bg-[#1E3A20] text-[#F7F4EF]"
                        : "bg-[#F7F4EF] text-[#1E3A20] border border-[#1E3A20]",
                    fullWidth && "w-full",
                    className,
                )}
                style={{
                    fontFamily: "var(--font-dm-sans)",
                    letterSpacing: "0.04em",
                }}
            >
                {children}
            </motion.button>
        </Link>
    )
}
