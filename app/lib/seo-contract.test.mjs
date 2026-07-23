import assert from "node:assert/strict"
import { readFileSync, readdirSync } from "node:fs"
import { dirname, join } from "node:path"
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
        if (!/\.(?:ts|tsx)$/.test(entry.name)) return []

        return [entryPath]
    })
}

test("PRT service and article have distinct, protected search intent", () => {
    const servicePage = read(
        "app/treatments/pain-reprocessing-therapy/page.tsx",
    )
    const article = read("content/blog/pain-reprocessing-therapy-ireland.md")

    assert.match(servicePage, /eyebrow: "Retraining pain signals"/)
    assert.match(servicePage, /title: "Pain Reprocessing Therapy in Ireland"/)
    assert.match(article, /title: "What Is Pain Reprocessing Therapy\?"/)
    assert.match(
        article,
        /seoTitle: "What Is Pain Reprocessing Therapy\? Evidence, Safety and Access"/,
    )
    assert.match(
        article,
        /\[Pain Reprocessing Therapy in Ireland\]\(\/treatments\/pain-reprocessing-therapy\)/,
    )
})

test("service routes keep their URLs and include practical access details", () => {
    const sitemap = read("app/sitemap.ts")
    const generatedSitemap = read("next-sitemap.config.js")
    const prtPage = read("app/treatments/pain-reprocessing-therapy/page.tsx")
    const corkPage = read("app/locations/chronic-pain-management-cork/page.tsx")
    const seoContentPage = read("app/components/SeoContentPage.tsx")
    const serviceCopy = `${prtPage}\n${corkPage}\n${seoContentPage}`

    for (const path of [
        "/treatments/pain-reprocessing-therapy",
        "/locations/chronic-pain-management-cork",
        "/locations/chronic-pain-management-ireland-online",
        "/locations/chronic-pain-management-dublin-online",
    ]) {
        assert.match(`${sitemap}\n${generatedSitemap}`, new RegExp(path))
    }

    assert.ok(sitemap.includes("getSortedPostsData"))
    assert.ok(sitemap.includes("url: `${baseUrl}/blog/${post.id}`"))
    assert.match(
        read("content/blog/pain-reprocessing-therapy-ireland.md"),
        /title: "What Is Pain Reprocessing Therapy\?"/,
    )

    for (const detail of [
        "Marsha Canny",
        "Rochestown",
        "60-minute",
        "€70",
        "6 sessions",
        "€360",
        "online",
        "/contact",
    ]) {
        assert.ok(
            serviceCopy.includes(detail),
            `missing service detail: ${detail}`,
        )
    }

    assert.doesNotMatch(
        `${sitemap}\n${generatedSitemap}`,
        /pain-rehabilitation/,
    )
})

test("structured data stays visible-content aligned and avoids unsupported medical status", () => {
    const appSource = sourceFiles(join(repoRoot, "app"))
        .map((file) => readFileSync(file, "utf8"))
        .join("\n")
    const seo = read("app/lib/seo.tsx")

    assert.doesNotMatch(appSource, /FAQJsonLd|faqSchema|"@type": "FAQPage"/)
    assert.doesNotMatch(
        seo,
        /MedicalBusiness|MedicalOrganization|medicalSpecialty/,
    )
    assert.match(seo, /"@type": "Organization"/)
    assert.match(seo, /"@type": "Person"/)
    assert.doesNotMatch(seo, /streetAddress|GeoCoordinates/)
})

test("article review dates come from frontmatter rather than filesystem timestamps", () => {
    const posts = read("app/lib/posts.ts")
    const sitemap = read("app/sitemap.ts")
    const generatedSitemap = read("next-sitemap.config.js")

    assert.doesNotMatch(posts, /statSync/)
    assert.doesNotMatch(generatedSitemap, /\.mtime/)
    assert.match(posts, /modifiedDate\?: string/)
    assert.match(sitemap, /post\.modifiedDate \|\| parseBlogDate\(post\.date\)/)
    assert.match(generatedSitemap, /frontmatter\.modifiedDate/)
})

test("self-assessment disclosure is visible without changing the established contract", () => {
    const assessment = read("app/self-assessment/page.tsx")
    const trackedPhoneLink = read("app/components/TrackedPhoneLink.tsx")

    assert.match(
        assessment,
        /for educational purposes and is\s+not diagnostic/i,
    )
    assert.match(assessment, /does not replace medical assessment/i)
    assert.match(assessment, /const questions = \[/)
    assert.match(assessment, /if \(count <= 2\)/)
    assert.match(assessment, /if \(count <= 7\)/)
    assert.match(assessment, /if \(count <= 12\)/)
    assert.match(assessment, /const showResult = complete && resultRevealed/)
    assert.doesNotMatch(assessment, /trackPhoneClick/)
    assert.match(trackedPhoneLink, /pathname !== "\/self-assessment"/)
})

test("qualified enquiry signals include forms, WhatsApp and phone clicks", () => {
    const analytics = read("app/lib/analytics.ts")

    for (const event of [
        '"generate_lead"',
        '"whatsapp_click"',
        '"phone_click"',
    ]) {
        assert.ok(
            analytics.includes(event),
            `missing analytics event: ${event}`,
        )
    }
})

test("protected editorial heroes remain in place", () => {
    const home = read("app/page.tsx")
    const about = read("app/info/page.tsx")

    assert.match(home, /The <i>Biopsychosocial Approach <\/i> to/)
    assert.match(about, /The <i>Brain & Body <\/i> can/)
    assert.match(about, /work together beautifully/)
})

test("known unsupported outcome copy is removed from audited surfaces", () => {
    const auditedCopy = [
        "app/components/CallToActionSection.tsx",
        "app/components/sections/CredentialsSection.tsx",
        "app/components/sections/RevealInfoSection.tsx",
        "app/components/sections/Services.tsx",
        "app/components/sections/SVGPathScienceSection.tsx",
        "app/research/page.tsx",
        "app/science/page.tsx",
        "content/blog/chronic-pain-cork.md",
    ]
        .map(read)
        .join("\n")

    for (const unsupportedClaim of [
        "fantastic results",
        "helped thousands recover",
        "has helped thousands recover",
        "life-changing treatment",
        "Most people start noticing changes within 4-6 weeks",
        "reducing medication reliance",
        "One client said",
    ]) {
        assert.ok(
            !auditedCopy.includes(unsupportedClaim),
            `unsupported claim remains: ${unsupportedClaim}`,
        )
    }
})
