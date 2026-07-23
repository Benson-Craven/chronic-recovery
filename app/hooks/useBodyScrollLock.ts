import { useEffect } from "react"
import { lockBodyScroll } from "../lib/body-scroll-lock.mjs"

export function useBodyScrollLock(isLocked: boolean) {
    useEffect(() => {
        if (!isLocked) return

        return lockBodyScroll(document.body, window.scrollY, (scrollY) => {
            window.scrollTo(0, scrollY)
        })
    }, [isLocked])
}
