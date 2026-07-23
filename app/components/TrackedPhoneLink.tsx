"use client"

import type { AnchorHTMLAttributes } from "react"
import { usePathname } from "next/navigation"
import { trackPhoneClick } from "@/app/lib/analytics"
import { PHONE_HREF, type PhoneSource } from "@/app/lib/contact"

type TrackedPhoneLinkProps = Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "href"
> & {
    source: PhoneSource
}

export default function TrackedPhoneLink({
    source,
    onClick,
    ...props
}: TrackedPhoneLinkProps) {
    const pathname = usePathname()

    return (
        <a
            {...props}
            href={PHONE_HREF}
            onClick={(event) => {
                if (pathname !== "/self-assessment") {
                    trackPhoneClick(source)
                }
                onClick?.(event)
            }}
        />
    )
}
