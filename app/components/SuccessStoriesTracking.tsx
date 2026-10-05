"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { trackSuccessStoriesView } from "@/app/lib/analytics"

export default function SuccessStoriesTracking() {
    const pathname = usePathname()
    const previousPath = useRef<string | null>(null)

    useEffect(() => {
        if (!pathname || pathname === previousPath.current) return
        // Retain the last path through effect replay, and update it on exit too.
        previousPath.current = pathname
        if (pathname === "/success-stories") trackSuccessStoriesView()
    }, [pathname])

    return null
}
