"use client"

import type {
    ComponentPropsWithoutRef,
    MouseEventHandler,
    ReactNode,
} from "react"
import { FaWhatsapp } from "react-icons/fa"
import { trackWhatsAppClick } from "@/app/lib/analytics"
import { WHATSAPP_URL, type WhatsAppSource } from "@/app/lib/contact"
import { cn } from "@/utils/cn"

type WhatsAppLinkProps = Omit<
    ComponentPropsWithoutRef<"a">,
    "href" | "rel" | "target"
> & {
    children: ReactNode
    source: WhatsAppSource
}

type WhatsAppCtaProps = {
    source: WhatsAppSource
    surface?: "cream" | "green"
    onClick?: MouseEventHandler<HTMLAnchorElement>
}

export default function WhatsAppLink({
    children,
    onClick,
    source,
    ...props
}: WhatsAppLinkProps) {
    const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
        trackWhatsAppClick(source)
        onClick?.(event)
    }

    return (
        <a
            {...props}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            onClick={handleClick}
        >
            {children}
        </a>
    )
}

export function WhatsAppCta({
    source,
    surface = "cream",
    onClick,
}: WhatsAppCtaProps) {
    const isGreenSurface = surface === "green"

    return (
        <WhatsAppLink
            source={source}
            onClick={onClick}
            className={cn(
                "cta-interactive flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full py-4 font-satoshi text-sm font-medium tracking-[0.04em] sm:w-auto sm:px-10",
                isGreenSurface ? "text-[#1E3A20]" : "text-[#F7F4EF]",
                isGreenSurface ? "bg-[#F0EBE1]" : "bg-[#1E3A20]",
                isGreenSurface
                    ? "border border-solid border-[rgba(30,58,32,0.12)]"
                    : "border border-solid border-[transparent]",
            )}
        >
            <FaWhatsapp aria-hidden="true" className="h-5 w-5" />
            WhatsApp Marsha
        </WhatsAppLink>
    )
}
