import { useEffect } from "react"

export function useBodyScrollLock(isLocked: boolean) {
    useEffect(() => {
        if (!isLocked) return

        const originalStyle = {
            overflow: document.body.style.overflow,
            position: document.body.style.position,
            width: document.body.style.width,
        }

        document.body.style.overflow = "hidden"
        document.body.style.position = "fixed"
        document.body.style.width = "100%"

        return () => {
            document.body.style.overflow = originalStyle.overflow
            document.body.style.position = originalStyle.position
            document.body.style.width = originalStyle.width
        }
    }, [isLocked])
}
