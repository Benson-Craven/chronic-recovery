import assert from "node:assert/strict"
import { createHash } from "node:crypto"
import { readFileSync } from "node:fs"
import test from "node:test"
import ts from "typescript"

const source = readFileSync(
    new URL("./testimonials.ts", import.meta.url),
    "utf8",
)
const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext },
}).outputText
const { testimonials } = await import(
    `data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`
)

test("the four supplied testimonials retain their text, paragraphs and order", () => {
    assert.deepEqual(
        testimonials.map(({ name }) => name),
        ["D Bolger", "M Sweeney", "N O'Mahony", "KC"],
    )
    assert.deepEqual(
        testimonials.map(({ condition }) => condition),
        [
            "Chronic back pain",
            "Chronic migraine",
            "Chronic pain",
            "CF and pain",
        ],
    )
    assert.equal(new Set(testimonials.map(({ id }) => id)).size, 4)
    assert.deepEqual(
        testimonials.map(({ text }) => text.split("\n\n").length),
        [4, 3, 3, 2],
    )
    // Hashes captured from the user's supplied text before implementation.
    assert.deepEqual(
        testimonials.map(({ text }) =>
            createHash("sha256").update(text).digest("hex"),
        ),
        [
            "83dd8255e6b22eb2f39cd7fc9143d2aeaca8dda68c8bb5f5ae08979faea1c590",
            "8f48bbc4ab4bd99ca3a570a66b91d89be2bd1ffe6d9c36dab732c15efd38fcfc",
            "aa1ce260baf9860f8df41c42f3403d069262fadcc84d851453aee39822619016",
            "e11eac8bff37a9dd507c9ab7b4fdc98faec064a271853660a0fe7566a4188234",
        ],
    )
})

test("homepage excerpts select the agreed complete source paragraphs", () => {
    assert.deepEqual(
        testimonials.map(
            ({ homepageExcerptParagraphIndex }) =>
                homepageExcerptParagraphIndex,
        ),
        [3, 2, 1, undefined],
    )
    for (const testimonial of testimonials.slice(0, 3)) {
        assert.ok(
            testimonial.text.split("\n\n")[
                testimonial.homepageExcerptParagraphIndex
            ],
        )
    }
    const home = readFileSync(new URL("../page.tsx", import.meta.url), "utf8")
    const section = readFileSync(
        new URL(
            "../components/sections/TestimonialsSection.tsx",
            import.meta.url,
        ),
        "utf8",
    )
    const quote = readFileSync(
        new URL("../components/Testimonial.tsx", import.meta.url),
        "utf8",
    )
    for (const serverSource of [home, section, quote])
        assert.doesNotMatch(serverSource, /use client/)
    assert.match(
        home,
        /<Services \/>\s+<TestimonialsSection \/>\s+<SVGPathScienceSection \/>/,
    )
    assert.match(section, /grid-cols-1.*lg:grid-cols-3/)
    assert.match(
        quote,
        /paragraphs\[testimonial.homepageExcerptParagraphIndex\]/,
    )
})
