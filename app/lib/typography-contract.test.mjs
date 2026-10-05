import assert from "node:assert/strict"
import { readFileSync, readdirSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import test from "node:test"
import ts from "typescript"

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "../..")
const appRoot = join(repoRoot, "app")

const auditedFiles = [
    "app/blog/[slug]/page.tsx",
    "app/blog/page.tsx",
    "app/components/Breadcrumbs.tsx",
    "app/components/CallToActionSection.tsx",
    "app/components/Card.tsx",
    "app/components/ContactFormProtection.tsx",
    "app/components/ContactModal.tsx",
    "app/components/Custom404Page.tsx",
    "app/components/Footer.tsx",
    "app/components/MobileMenu.tsx",
    "app/components/Navbar.tsx",
    "app/components/SeoContentPage.tsx",
    "app/components/WhatsAppLink.tsx",
    "app/components/sections/CredentialsSection.tsx",
    "app/components/sections/IllnessSection.tsx",
    "app/components/sections/RevealInfoSection.tsx",
    "app/components/info/InfoIntroSection.tsx",
    "app/components/info/InfoEmpathySection.tsx",
    "app/components/info/InfoJourneySection.tsx",
    "app/components/info/InfoApproachSection.tsx",
    "app/components/info/InfoAudienceSection.tsx",
    "app/components/info/InfoSessionsSection.tsx",
    "app/components/info/InfoCommitmentSection.tsx",
    "app/components/info/InfoMedicalNoteSection.tsx",
    "app/components/info/InfoWhyNowSection.tsx",
    "app/components/info/InfoLocationSection.tsx",
    "app/components/info/InfoClosingCtaSection.tsx",
    "app/components/sections/SVGPathScienceSection.tsx",
    "app/components/sections/Services.tsx",
    "app/components/sections/WhatWeDoSection.tsx",
    "app/components/ui/CtaButton.tsx",
    "app/components/ui/NumberRow.tsx",
    "app/components/ui/Typography.tsx",
    "app/conditions/page.tsx",
    "app/contact/page.tsx",
    "app/disclaimer/page.tsx",
    "app/privacy-policy/page.tsx",
    "app/research/page.tsx",
    "app/resources/page.tsx",
    "app/science/page.tsx",
    "app/self-assessment/page.tsx",
    "app/terms-and-conditions/page.tsx",
]

const textElements = new Set([
    "a",
    "button",
    "em",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "label",
    "li",
    "p",
    "span",
    "strong",
    "Link",
    "TrackedPhoneLink",
    "WhatsAppLink",
    "motion.a",
    "motion.button",
    "motion.h1",
    "motion.p",
    "motion.span",
])

function read(relativePath) {
    return readFileSync(join(repoRoot, relativePath), "utf8")
}

function sourceFiles(directory) {
    return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
        const entryPath = join(directory, entry.name)

        if (entry.isDirectory()) return sourceFiles(entryPath)
        if (!entry.name.endsWith(".tsx")) return []

        return [entryPath]
    })
}

test("app typography uses Tailwind classes instead of legacy inline styles", () => {
    const prohibitedInlineProperties =
        /\b(?:fontFamily|fontWeight|fontSize|fontStyle|letterSpacing|textTransform)\s*:/
    const legacyFontVariables = /--font-dm-(?:sans|serif)/

    for (const path of sourceFiles(appRoot)) {
        const source = readFileSync(path, "utf8")

        assert.doesNotMatch(
            source,
            legacyFontVariables,
            `${path} uses a DM font variable`,
        )
        assert.doesNotMatch(
            source,
            prohibitedInlineProperties,
            `${path} uses an inline typography property`,
        )
    }
})

test("audited text elements do not use inline colour styles", () => {
    for (const relativePath of auditedFiles) {
        const source = read(relativePath)
        const sourceFile = ts.createSourceFile(
            relativePath,
            source,
            ts.ScriptTarget.Latest,
            true,
            ts.ScriptKind.TSX,
        )
        const failures = []

        function visit(node) {
            if (
                ts.isJsxOpeningElement(node) ||
                ts.isJsxSelfClosingElement(node)
            ) {
                const tagName = node.tagName.getText(sourceFile)
                const style = node.attributes.properties.find(
                    (attribute) =>
                        ts.isJsxAttribute(attribute) &&
                        attribute.name.text === "style",
                )

                if (
                    textElements.has(tagName) &&
                    style?.initializer &&
                    ts.isJsxExpression(style.initializer) &&
                    style.initializer.expression &&
                    ts.isObjectLiteralExpression(style.initializer.expression)
                ) {
                    const inlineColour =
                        style.initializer.expression.properties.find(
                            (property) =>
                                ts.isPropertyAssignment(property) &&
                                property.name.getText(sourceFile) === "color",
                        )

                    if (inlineColour) {
                        const { line } =
                            sourceFile.getLineAndCharacterOfPosition(
                                inlineColour.getStart(sourceFile),
                            )
                        failures.push(
                            `${relativePath}:${line + 1} <${tagName}>`,
                        )
                    }
                }
            }

            ts.forEachChild(node, visit)
        }

        visit(sourceFile)
        assert.deepEqual(
            failures,
            [],
            `Move text colour styles into complete Tailwind classes:\n${failures.join("\n")}`,
        )
    }
})

test("shared typography components keep their class-only interface", () => {
    const typography = read("app/components/ui/Typography.tsx")

    assert.match(typography, /font-satoshi/)
    assert.doesNotMatch(typography, /\bstyle\s*(?:\?|:|=)/)
})
