import React from "react"
import { cn } from "@/utils/cn"

type SectionProps = {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
    id?: string
    variant?: "cream" | "green" | "white"
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
    ({ children, className, style, id, variant = "white" }, ref) => {
        const variants = {
            white: "bg-[#fafafa] text-[#1E3A20]",
            cream: "bg-[#F7F4EF] text-[#1E3A20]",
            green: "bg-[#1E3A20] text-[#F7F4EF]",
        }

        return (
            <section
                ref={ref}
                id={id}
                className={cn(
                    "w-full px-6 py-20 md:py-28",
                    className,
                    variants[variant],
                )}
                style={style}
            >
                {children}
            </section>
        )
    },
)

Section.displayName = "Section"

type ContainerProps = {
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

type DividerProps = {
    className?: string
    variant?: "cream" | "green"
}

export function Divider({ className, variant = "green" }: DividerProps) {
    return (
        <div
            className={cn(
                "h-px w-full",
                className,
                variant === "green"
                    ? "bg-[rgba(30,58,32,0.12)]"
                    : "bg-[rgba(200,230,201,0.15)]",
            )}
        />
    )
}
