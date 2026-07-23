import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import test from "node:test"

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "../..")

function read(relativePath) {
    return readFileSync(join(repoRoot, relativePath), "utf8")
}

test("button-style CTAs share one motion treatment with reduced-motion support", () => {
    const globalStyles = read("app/globals.css")

    assert.match(globalStyles, /\.cta-interactive \{/)
    assert.match(globalStyles, /prefers-reduced-motion: reduce/)

    for (const path of [
        "app/components/ui/CtaButton.tsx",
        "app/components/WhatsAppLink.tsx",
        "app/components/Navbar.tsx",
        "app/components/MobileMenu.tsx",
        "app/components/Footer.tsx",
        "app/contact/page.tsx",
        "app/components/ContactModal.tsx",
    ]) {
        assert.match(read(path), /cta-interactive/, `${path} misses CTA motion`)
    }
})

test("paired closing CTAs use a wrapping horizontal layout when space allows", () => {
    assert.match(
        read("app/components/CtaActionRow.tsx"),
        /sm:flex-row sm:flex-wrap sm:items-center/,
    )

    for (const path of [
        "app/blog/[slug]/page.tsx",
        "app/components/CallToActionSection.tsx",
        "app/components/SeoContentPage.tsx",
        "app/components/sections/RevealInfoSection.tsx",
        "app/components/sections/WhatWeDoSection.tsx",
        "app/conditions/page.tsx",
        "app/research/page.tsx",
        "app/resources/page.tsx",
        "app/science/page.tsx",
        "app/self-assessment/page.tsx",
    ]) {
        assert.match(
            read(path),
            /<CtaActionRow/,
            `${path} does not use the responsive CTA row`,
        )
    }
})

test("Cork service copy avoids the unnatural street-address disclaimer", () => {
    assert.doesNotMatch(
        read("app/locations/chronic-pain-management-cork/page.tsx"),
        /No home street address is published on this website\./,
    )
})
