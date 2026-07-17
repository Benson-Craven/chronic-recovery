"use client"

import type {
    ComponentPropsWithoutRef,
    MouseEventHandler,
    ReactNode,
} from "react"
import { trackWhatsAppClick } from "@/app/lib/analytics"
import { WHATSAPP_URL } from "@/app/lib/contact"

type WhatsAppLinkProps = Omit<
    ComponentPropsWithoutRef<"a">,
    "href" | "rel" | "target"
> & {
    children: ReactNode
    source: string
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
