import React from "react"
import { motion } from "framer-motion"
import { Text } from "./Typography"
import { cn } from "@/utils/cn"

interface NumberRowProps {
    number: string | number
    children: React.ReactNode
    index?: number
    variant?: "green" | "cream"
}

export const NumberRow: React.FC<NumberRowProps> = ({
    number,
    children,
    index = 0,
    variant = "cream",
}) => {
    const isGreen = variant === "green"

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
            }}
            className={cn("flex items-start gap-6 border-b py-10")}
            style={{
                borderColor: isGreen
                    ? "rgba(200,230,201,0.12)"
                    : "rgba(30,58,32,0.12)",
            }}
        >
            <span
                className={cn(
                    "mt-1 shrink-0 font-satoshi text-xs font-light tabular-nums",
                    isGreen ? "text-dark-supporting" : "text-light-supporting",
                )}
            >
                {typeof number === "number"
                    ? String(number).padStart(2, "0")
                    : number}
            </span>
            <div className="flex-1">
                {typeof children === "string" ? (
                    <Text
                        className={cn(
                            isGreen ? "text-dark-body" : "text-light-body",
                        )}
                    >
                        {children}
                    </Text>
                ) : (
                    children
                )}
            </div>
        </motion.div>
    )
}
