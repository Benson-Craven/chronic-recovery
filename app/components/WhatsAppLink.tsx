"use client"

import type {
    ComponentPropsWithoutRef,
    MouseEventHandler,
    ReactNode,
} from "react"
import { FaWhatsapp } from "react-icons/fa"
import { trackWhatsAppClick } from "@/app/lib/analytics"
import { WHATSAPP_URL, type WhatsAppSource } from "@/app/lib/contact"

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

export function WhatsAppCta({ source, surface = "cream" }: WhatsAppCtaProps) {
    const isGreenSurface = surface === "green"

    return (
        <WhatsAppLink
            source={source}
            className="flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-medium tracking-wide transition-transform hover:scale-[1.03] hover:shadow-lg active:scale-[0.98] md:w-auto md:px-10"
            style={{
                backgroundColor: isGreenSurface ? "#F0EBE1" : "#1E3A20",
                border: isGreenSurface
                    ? "1px solid rgba(30,58,32,0.12)"
                    : "1px solid transparent",
                color: isGreenSurface ? "#1E3A20" : "#F7F4EF",
                fontFamily: "var(--font-dm-sans)",
                letterSpacing: "0.04em",
            }}
        >
            <FaWhatsapp aria-hidden="true" className="h-5 w-5" />
            WhatsApp Marsha
        </WhatsAppLink>
    )
}
