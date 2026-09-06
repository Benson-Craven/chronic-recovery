import React from "react"
import { cn } from "@/utils/cn"

interface TypographyProps {
    children: React.ReactNode
    className?: string
}

export const Eyebrow: React.FC<TypographyProps> = ({ children, className }) => (
    <p
        className={cn(
            "font-satoshi text-light-supporting",
            "mb-6 text-xs font-medium uppercase tracking-[0.25em]",
            className,
        )}
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
    as: Component = "h2",
    italic = false,
}) => (
    <Component
        className={cn(
            "font-satoshi",
            "text-4xl leading-[1.1] md:text-5xl lg:text-6xl",
            italic && "italic",
            className,
        )}
    >
        {children}
    </Component>
)

export const Text: React.FC<TypographyProps> = ({ children, className }) => (
    <p
        className={cn(
            "font-satoshi font-light text-light-body",
            "text-base leading-relaxed md:text-lg",
            className,
        )}
    >
        {children}
    </p>
)

export const ItalicQuote: React.FC<TypographyProps> = ({
    children,
    className,
}) => (
    <p
        className={cn(
            "font-satoshi",
            "text-xl italic leading-relaxed md:text-2xl lg:text-3xl",
            className,
        )}
    >
        {children}
    </p>
)
