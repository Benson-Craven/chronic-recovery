import assert from "node:assert/strict"
import { readFileSync, readdirSync } from "node:fs"
import { dirname, join, relative } from "node:path"
import { fileURLToPath } from "node:url"
import test from "node:test"

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "../..")

function read(relativePath) {
    return readFileSync(join(repoRoot, relativePath), "utf8")
}

function sourceFiles(directory) {
    return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
        const entryPath = join(directory, entry.name)

        if (entry.isDirectory()) return sourceFiles(entryPath)
        if (!/\.(?:md|tsx)$/.test(entry.name)) return []

        return [entryPath]
    })
}

const excludedPublicCopyPaths = new Set([
    "app/disclaimer/page.tsx",
    "app/lib/seo.tsx",
    "app/privacy-policy/page.tsx",
    "app/terms-and-conditions/page.tsx",
])

const publicCopySources = [
    ...sourceFiles(join(repoRoot, "app")),
    ...sourceFiles(join(repoRoot, "content", "blog")),
].filter((path) => {
    const relativePath = relative(repoRoot, path)

    return (
        !relativePath.endsWith("/layout.tsx") &&
        !excludedPublicCopyPaths.has(relativePath)
    )
})

test("owner-spoken public copy uses Marsha's first-person voice", () => {
    const disallowedConstructions = [
        /\bMarsha then\b/i,
        /\bAsk Marsha\b/i,
        /\bMarsha(?: Canny)? offers\b/i,
        /\bMarsha(?:'|’)s scope\b/i,
        /\bMarsha Canny describes her work\b/i,
        /\bMarsha Canny is a chronic pain therapist\b/i,
        /\bSessions are provided by Marsha Canny\b/i,
        /\bHer public ATNS\b/i,
        /\btell Marsha\b/i,
        /\bcontact Marsha\b/i,
        /\bhealthcare professional or Marsha\b/i,
        /\bAbout Marsha\b/i,
        /\bView Marsha(?:'|’)s\b/i,
        /\bContact us\b/i,
        /\bOur approach\b/i,
        /\bour sessions end\b/i,
    ]

    for (const path of publicCopySources) {
        const source = readFileSync(path, "utf8")
        const relativePath = relative(repoRoot, path)

        for (const construction of disallowedConstructions) {
            assert.doesNotMatch(
                source,
                construction,
                `${relativePath} uses third-person or implied team copy`,
            )
        }
    }
})

test("approved named Marsha contexts remain explicit", () => {
    assert.match(read("app/components/WhatsAppLink.tsx"), /WhatsApp Marsha/)
    assert.match(read("app/blog/[slug]/page.tsx"), /By \{authorProfile\.name\}/)
    assert.match(
        read("app/components/sections/RevealInfoSection.tsx"),
        /alt="Marsha Canny of Chronic Pain Recovery Cork"/,
    )
    assert.match(
        read("app/locations/chronic-pain-management-ireland-online/page.tsx"),
        /description:\s+"Online chronic pain support across Ireland with Marsha Canny/,
    )
})

test("shared owner-spoken surfaces use explicit first person", () => {
    assert.match(
        read("app/components/sections/CredentialsSection.tsx"),
        /I describe my work as educational/,
    )
    assert.match(
        read("app/components/sections/WhatWeDoSection.tsx"),
        /<Eyebrow>My approach<\/Eyebrow>/,
    )
    assert.match(read("app/contact/page.tsx"), /Contact me/)
    assert.match(read("app/components/ContactFormProtection.tsx"), /call me/)
    assert.match(
        read("app/components/Footer.tsx"),
        /I help you explore recovery/,
    )
    assert.match(
        read("app/components/Custom404Page.tsx"),
        /Get in touch with me/,
    )
    assert.match(
        read("app/blog/[slug]/page.tsx"),
        /I'm a chronic pain therapist based in/,
    )
    assert.match(read("app/blog/[slug]/page.tsx"), /About me/)
})

test("service landing pages introduce Marsha once before using first person", () => {
    for (const path of [
        "app/locations/chronic-pain-management-cork/page.tsx",
        "app/locations/chronic-pain-management-ireland-online/page.tsx",
        "app/locations/chronic-pain-management-dublin-online/page.tsx",
        "app/treatments/pain-reprocessing-therapy/page.tsx",
    ]) {
        const source = read(path)

        assert.equal(
            source.match(/I'm Marsha Canny/g)?.length,
            1,
            `${path} should have one first-person introduction`,
        )
    }
})

test("structured author identity remains third person", () => {
    const seo = read("app/lib/seo.tsx")

    assert.match(seo, /name: "Marsha Canny"/)
    assert.match(seo, /"@type": "Person"/)
    assert.match(
        seo,
        /bio: "Marsha Canny is a chronic pain therapist based in Rochestown, Cork\. She provides/,
    )
})
