import assert from "node:assert/strict"
import test from "node:test"
import { lockBodyScroll } from "./body-scroll-lock.mjs"

test("body scroll lock preserves and restores the current page position", () => {
    const body = {
        style: {
            overflow: "auto",
            position: "relative",
            top: "2px",
            width: "80%",
        },
    }
    let restoredScrollY = null

    const unlock = lockBodyScroll(body, 840, (scrollY) => {
        restoredScrollY = scrollY
    })

    assert.equal(body.style.overflow, "hidden")
    assert.equal(body.style.position, "fixed")
    assert.equal(body.style.top, "-840px")
    assert.equal(body.style.width, "100%")

    unlock()

    assert.deepEqual(body.style, {
        overflow: "auto",
        position: "relative",
        top: "2px",
        width: "80%",
    })
    assert.equal(restoredScrollY, 840)
})
