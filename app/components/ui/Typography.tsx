import React from "react"
import { cn } from "@/utils/cn"

interface TypographyProps {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

export const Eyebrow: React.FC<TypographyProps> = ({
    children,
    className,
    style,
}) => (
    <p
        className={cn(
            "mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50",
            className,
        )}
        style={{
            fontFamily: "var(--font-dm-sans)",
            ...style,
        }}
    >
        {children}
    </p>
)

interface HeadingProps extends TypographyProps {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    italic?: boolean
}

export const Heading: React.FC<HeadingProps> = ({
    children,
    className,
    style,
    as: Component = "h2",
    italic = false,
}) => (
    <Component
        className={cn(
            "text-4xl leading-[1.1] md:text-5xl lg:text-6xl",
            italic && "italic",
            className,
        )}
        style={{
            fontFamily: "var(--font-dm-serif)",
            ...style,
        }}
    >
        {children}
    </Component>
)

export const Text: React.FC<TypographyProps> = ({
    children,
    className,
    style,
}) => (
    <p
        className={cn("text-base leading-relaxed md:text-lg", className)}
        style={{
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 300,
            ...style,
        }}
    >
        {children}
    </p>
)

export const ItalicQuote: React.FC<TypographyProps> = ({
    children,
    className,
    style,
}) => (
    <p
        className={cn(
            "text-xl leading-relaxed italic md:text-2xl lg:text-3xl",
            className,
        )}
        style={{
            fontFamily: "var(--font-dm-serif)",
            ...style,
        }}
    >
        {children}
    </p>
)
