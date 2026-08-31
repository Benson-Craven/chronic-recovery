import assert from "node:assert/strict"
import { readFileSync, readdirSync } from "node:fs"
import { dirname, join, relative } from "node:path"
import { fileURLToPath } from "node:url"
import test from "node:test"
import ts from "typescript"

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

function publicText(path) {
    const source = readFileSync(path, "utf8")

    if (path.endsWith(".md")) return source

    const sourceFile = ts.createSourceFile(
        path,
        source,
        ts.ScriptTarget.Latest,
        true,
        ts.ScriptKind.TSX,
    )
    const text = []

    function visit(node) {
        if (ts.isJsxText(node)) text.push(node.getText(sourceFile))
        if (
            ts.isStringLiteral(node) ||
            ts.isNoSubstitutionTemplateLiteral(node)
        ) {
            text.push(node.text)
        }
        ts.forEachChild(node, visit)
    }

    visit(sourceFile)
    return text.join("\n")
}

const publicCopySources = [
    ...sourceFiles(join(repoRoot, "app")),
    ...sourceFiles(join(repoRoot, "content", "blog")),
]

test("approved restored wording remains on shared public surfaces", () => {
    assert.match(
        read("app/page.tsx"),
        /Based in Ireland, supporting clients online\s+worldwide\./,
    )
    assert.match(
        read("app/components/sections/Approach.tsx"),
        /The treatment I provide can support chronic pain\s+recovery, not just coping with symptoms\./,
    )
    assert.match(
        read("app/components/sections/CredentialsSection.tsx"),
        /<Eyebrow>Credentials & training<\/Eyebrow>/,
    )
    assert.match(read("app/components/Footer.tsx"), /Helping you recover,/)
    assert.match(read("app/components/Custom404Page.tsx"), /Get in touch/)
    assert.match(read("app/contact/page.tsx"), /Contact us/)
    assert.match(read("app/blog/[slug]/page.tsx"), /About Marsha/)
})

test("approved page-specific exceptions remain explicit", () => {
    const about = read("app/components/sections/RevealInfoSection.tsx")
    const credentials = read("app/components/sections/CredentialsSection.tsx")
    const homepageConditions = read(
        "app/components/sections/IllnessSection.tsx",
    )
    const homepageScience = read(
        "app/components/sections/SVGPathScienceSection.tsx",
    )
    const longCovid = read("app/conditions/long-covid/page.tsx")
    const prt = read("app/treatments/pain-reprocessing-therapy/page.tsx")
    const science = read("app/science/page.tsx")

    assert.doesNotMatch(
        about,
        /trainingItems|id="credentials-training"|A careful fit|Clear expectations/,
    )
    assert.match(homepageConditions, /Still unsure\?/)
    assert.match(homepageConditions, /source="homepage_conditions"/)
    assert.match(credentials, /View my ATNS directory profile/)
    assert.doesNotMatch(homepageScience, /Biopsychosocial method/)
    assert.match(
        homepageScience,
        /title="Pain Reprocessing Therapy"[\s\S]*?colSpan=\{4\}/,
    )
    assert.doesNotMatch(longCovid, /Long covid needs medical oversight/i)
    assert.match(longCovid, /Your next step/)
    assert.match(
        prt,
        /Pain Reprocessing Therapy may help suitable people of all ages with neuroplastic chronic pain/,
    )
    assert.match(prt, /title: "The Boulder Chronic Back Pain Study"/)
    assert.match(
        prt,
        /title: "Pain Reprocessing Therapy vs Placebo and Usual Care: 5-Year Follow-Up"/,
    )
    assert.match(science, /Evidence-based[\s\S]*treatment approaches/)
    assert.match(
        science,
        /I have specialised training in methods developed by Dr Howard Schubiner and I am listed in the Association for the Treatment of Neuroplastic Symptoms Practitioner & Coach Directory\./,
    )
})

test("public copy omits packages, free calls, pacing language and dash characters", () => {
    const disallowed = [
        /€\s?360/i,
        /\b(?:six|6)[ -]session package\b/i,
        /\bpackage of (?:six|6) sessions\b/i,
        /\bfree (?:consultation|discovery call|call)\b/i,
        /\b(?:pacing|paced)\b/i,
        /[—–]/,
    ]

    for (const path of publicCopySources) {
        const source = publicText(path)
        const relativePath = relative(repoRoot, path)

        for (const pattern of disallowed) {
            assert.doesNotMatch(
                source,
                pattern,
                `${relativePath} contains disallowed public copy`,
            )
        }
    }
})

test("article and practitioner identity keep the approved named contexts", () => {
    assert.match(read("app/components/WhatsAppLink.tsx"), /WhatsApp Marsha/)
    assert.match(read("app/blog/[slug]/page.tsx"), /By \{authorProfile\.name\}/)
    assert.match(
        read("app/components/sections/RevealInfoSection.tsx"),
        /alt="Marsha Canny of Chronic Pain Recovery Cork"/,
    )

    const seo = read("app/lib/seo.tsx")
    assert.match(seo, /name: "Marsha Canny"/)
    assert.match(seo, /"@type": "Person"/)
})
