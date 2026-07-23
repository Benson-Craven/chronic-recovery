import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { join } from "node:path"

const root = process.cwd()
const baseUrl = "https://chronicpainrecovery.ie"

const priorityRoutes = [
    {
        path: "/",
        file: ".next/server/app/index.html",
        title: "Chronic Pain Treatment Cork | Biopsychosocial Approach",
        h1: "The Biopsychosocial Approach to chronic pain recovery",
    },
    {
        path: "/info",
        file: ".next/server/app/info.html",
        title: "About | Chronic Pain Recovery Cork",
        h1: "The Brain & Body can work together beautifully",
    },
    {
        path: "/treatments/pain-reprocessing-therapy",
        file: ".next/server/app/treatments/pain-reprocessing-therapy.html",
        title: "Pain Reprocessing Therapy in Ireland | Chronic Pain Recovery",
        h1: "Pain Reprocessing Therapy in Ireland",
    },
    {
        path: "/blog/pain-reprocessing-therapy-ireland",
        file: ".next/server/app/blog/pain-reprocessing-therapy-ireland.html",
        title: "What Is Pain Reprocessing Therapy? Evidence, Safety and Access",
        h1: "What Is Pain Reprocessing Therapy?",
    },
    {
        path: "/locations/chronic-pain-management-cork",
        file: ".next/server/app/locations/chronic-pain-management-cork.html",
        title: "Chronic Pain Management Cork | Chronic Pain Recovery",
        h1: "Chronic pain management in Cork",
    },
    {
        path: "/blog/chronic-pain-cork",
        file: ".next/server/app/blog/chronic-pain-cork.html",
        title: "Chronic Pain Management Cork: Your Path to Recovery | Chronic Pain Recovery",
        h1: "Chronic Pain Management Cork: Your Path to Recovery",
    },
    {
        path: "/locations/chronic-pain-management-ireland-online",
        file: ".next/server/app/locations/chronic-pain-management-ireland-online.html",
        title: "Online Chronic Pain Support Ireland | Chronic Pain Recovery",
        h1: "Chronic pain support wherever you are",
    },
    {
        path: "/locations/chronic-pain-management-dublin-online",
        file: ".next/server/app/locations/chronic-pain-management-dublin-online.html",
        title: "Online Chronic Pain Support for Dublin | Chronic Pain Recovery",
        h1: "Chronic pain support for Dublin clients online",
    },
]

function decodeText(value) {
    return value
        .replace(/<[^>]+>/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&#x27;|&#39;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/\s+/g, " ")
        .trim()
}

function extractOne(html, pattern, label) {
    const matches = [...html.matchAll(pattern)]
    assert.equal(
        matches.length,
        1,
        `expected one ${label}, found ${matches.length}`,
    )
    return decodeText(matches[0][1])
}

function jsonLdItems(html) {
    return [
        ...html.matchAll(
            /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
        ),
    ].map((match) => JSON.parse(match[1]))
}

function validateJsonLd(schema, routePath) {
    assert.equal(schema["@context"], "https://schema.org", routePath)
    assert.equal(typeof schema["@type"], "string", routePath)

    switch (schema["@type"]) {
        case "Organization":
            assert.equal(typeof schema.name, "string", routePath)
            assert.equal(typeof schema.url, "string", routePath)
            assert.equal(typeof schema.logo, "string", routePath)
            assert.equal(typeof schema.areaServed, "object", routePath)
            break
        case "Person":
            assert.equal(typeof schema.name, "string", routePath)
            assert.equal(typeof schema.url, "string", routePath)
            assert.equal(typeof schema.jobTitle, "string", routePath)
            assert.ok(Array.isArray(schema.sameAs), routePath)
            assert.equal(typeof schema.worksFor?.["@id"], "string", routePath)
            break
        case "BreadcrumbList":
            assert.ok(Array.isArray(schema.itemListElement), routePath)
            for (const item of schema.itemListElement) {
                assert.equal(item["@type"], "ListItem", routePath)
                assert.equal(typeof item.position, "number", routePath)
                assert.equal(typeof item.name, "string", routePath)
                assert.equal(typeof item.item, "string", routePath)
            }
            break
        case "BlogPosting":
            assert.equal(typeof schema.headline, "string", routePath)
            assert.equal(typeof schema.description, "string", routePath)
            assert.equal(typeof schema.datePublished, "string", routePath)
            assert.equal(schema.author?.["@type"], "Person", routePath)
            assert.equal(schema.publisher?.["@type"], "Organization", routePath)
            assert.equal(
                schema.mainEntityOfPage?.["@type"],
                "WebPage",
                routePath,
            )
            break
        default:
            assert.fail(
                `unexpected JSON-LD type on ${routePath}: ${schema["@type"]}`,
            )
    }
}

function renderedFile(pathname) {
    return pathname === "/"
        ? ".next/server/app/index.html"
        : `.next/server/app${pathname}.html`
}

function canonicalUrl(pathname) {
    return `${baseUrl}${pathname === "/" ? "" : pathname}`
}

function assertCanonical(html, pathname) {
    const canonical = canonicalUrl(pathname)

    assert.match(
        html,
        new RegExp(
            `<link rel="canonical" href="${canonical.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`,
        ),
        `${pathname} canonical`,
    )
}

const publicSitemap = readFileSync(join(root, "public/sitemap.xml"), "utf8")
const indexedPaths = [
    ...publicSitemap.matchAll(
        /<loc>(https:\/\/chronicpainrecovery\.ie[^<]*)<\/loc>/g,
    ),
].map((match) => new URL(match[1]).pathname)

const indexedRendered = indexedPaths.map((pathname) => {
    const html = readFileSync(join(root, renderedFile(pathname)), "utf8")
    const title = extractOne(html, /<title>([\s\S]*?)<\/title>/g, "title")
    const h1 = extractOne(html, /<h1[^>]*>([\s\S]*?)<\/h1>/g, "H1")

    assertCanonical(html, pathname)

    const schemas = jsonLdItems(html)
    assert.ok(schemas.length >= 2, `${pathname} JSON-LD`)
    schemas.forEach((schema) => validateJsonLd(schema, pathname))

    assert.doesNotMatch(
        html,
        /FAQPage|MedicalBusiness|MedicalOrganization|streetAddress|PostalAddress|GeoCoordinates/,
        `${pathname} unsupported structured data`,
    )

    return { path: pathname, html, title, h1 }
})

assert.equal(
    new Set(indexedRendered.map((route) => route.title)).size,
    indexedRendered.length,
    "indexed titles must be unique",
)
assert.equal(
    new Set(indexedRendered.map((route) => route.h1)).size,
    indexedRendered.length,
    "indexed H1s must be unique",
)

const rendered = priorityRoutes.map((route) => {
    const html = readFileSync(join(root, route.file), "utf8")
    const title = extractOne(html, /<title>([\s\S]*?)<\/title>/g, "title")
    const h1 = extractOne(html, /<h1[^>]*>([\s\S]*?)<\/h1>/g, "H1")

    assert.equal(title, route.title, `${route.path} title`)
    assert.equal(h1, route.h1, `${route.path} H1`)
    assertCanonical(html, route.path)

    return { ...route, html, title, h1 }
})

assert.equal(
    new Set(rendered.map((route) => route.title)).size,
    priorityRoutes.length,
)
assert.equal(
    new Set(rendered.map((route) => route.h1)).size,
    priorityRoutes.length,
)

const homeSchemas = jsonLdItems(rendered[0].html)
assert.ok(homeSchemas.some((schema) => schema["@type"] === "Organization"))
assert.ok(homeSchemas.some((schema) => schema["@type"] === "Person"))

const prtArticle = rendered.find(
    (route) => route.path === "/blog/pain-reprocessing-therapy-ireland",
)
assert.ok(prtArticle)
assert.ok(
    jsonLdItems(prtArticle.html).some(
        (schema) => schema["@type"] === "BlogPosting",
    ),
)
assert.match(prtArticle.html, /href="\/treatments\/pain-reprocessing-therapy"/)

const assessment = readFileSync(
    join(root, ".next/server/app/self-assessment.html"),
    "utf8",
)
assert.match(
    decodeText(assessment),
    /for educational purposes and is not diagnostic/i,
)
assert.match(decodeText(assessment), /does not replace medical assessment/i)

for (const sitemapFile of [
    ".next/server/app/sitemap.xml.body",
    "public/sitemap.xml",
]) {
    const sitemap = readFileSync(join(root, sitemapFile), "utf8")

    for (const route of priorityRoutes) {
        const canonical = canonicalUrl(route.path)
        assert.ok(sitemap.includes(`<loc>${canonical}</loc>`), canonical)
    }

    assert.doesNotMatch(sitemap, /pain-rehabilitation/)
}

console.log(
    `Verified ${indexedRendered.length} indexed routes and ${priorityRoutes.length} priority SEO contracts.`,
)
