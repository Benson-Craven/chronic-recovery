/**
 * @param {HTMLElement} body
 * @param {number} scrollY
 * @param {(scrollY: number) => void} restoreScroll
 */
export function lockBodyScroll(body, scrollY, restoreScroll) {
    const originalStyle = {
        overflow: body.style.overflow,
        position: body.style.position,
        top: body.style.top,
        width: body.style.width,
    }

    body.style.overflow = "hidden"
    body.style.position = "fixed"
    body.style.top = `-${scrollY}px`
    body.style.width = "100%"

    return () => {
        body.style.overflow = originalStyle.overflow
        body.style.position = originalStyle.position
        body.style.top = originalStyle.top
        body.style.width = originalStyle.width
        restoreScroll(scrollY)
    }
}
