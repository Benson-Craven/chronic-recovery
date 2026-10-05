import React from "react"
import Link from "next/link"
import { cn } from "@/utils/cn"

interface CtaButtonProps {
    href: string
    children: React.ReactNode
    className?: string
    variant?: "primary" | "outline"
    fullWidth?: boolean
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export const CtaButton: React.FC<CtaButtonProps> = ({
    href,
    children,
    className,
    variant = "primary",
    fullWidth = false,
    onClick,
}) => {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={cn(
                "font-satoshi tracking-[0.04em]",
                "cta-interactive inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-medium tracking-wide",
                variant === "primary"
                    ? "bg-[#1E3A20] text-[#F7F4EF]"
                    : "border border-[#1E3A20] bg-[#F7F4EF] text-[#1E3A20]",
                fullWidth && "w-full",
                className,
            )}
        >
            {children}
        </Link>
    )
}
