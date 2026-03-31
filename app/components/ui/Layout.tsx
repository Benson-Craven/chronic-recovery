import React from "react"
import { cn } from "@/utils/cn"

interface SectionProps {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
    id?: string
    variant?: "cream" | "green" | "white"
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
    ({ children, className, style, id, variant = "white" }, ref) => {
        const variants = {
            white: { backgroundColor: "#fafafa", color: "#1E3A20" },
            cream: { backgroundColor: "#F7F4EF", color: "#1E3A20" },
            green: { backgroundColor: "#1E3A20", color: "#F7F4EF" },
        }

        return (
            <section
                ref={ref}
                id={id}
                className={cn("w-full px-6 py-20 md:py-28", className)}
                style={{
                    ...variants[variant],
                    ...style,
                }}
            >
                {children}
            </section>
        )
    },
)

Section.displayName = "Section"

interface ContainerProps {
    children: React.ReactNode
    className?: string
    size?: "narrow" | "wide"
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    ({ children, className, size = "narrow" }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "mx-auto",
                    size === "narrow" ? "max-w-3xl" : "max-w-5xl",
                    className,
                )}
            >
                {children}
            </div>
        )
    },
)

Container.displayName = "Container"

interface DividerProps {
    className?: string
    variant?: "cream" | "green"
}

export const Divider: React.FC<DividerProps> = ({
    className,
    variant = "green",
}) => {
    return (
        <div
            className={cn("h-px w-full", className)}
            style={{
                backgroundColor:
                    variant === "green"
                        ? "rgba(30,58,32,0.12)"
                        : "rgba(200,230,201,0.15)",
            }}
        />
    )
}
