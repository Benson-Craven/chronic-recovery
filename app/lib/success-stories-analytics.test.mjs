import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { runInNewContext } from "node:vm"
import ts from "typescript"

function loadModule(path, globals = {}) {
    const source = readFileSync(new URL(path, import.meta.url), "utf8")
    const compiled = ts.transpileModule(source, {
        compilerOptions: { module: ts.ModuleKind.CommonJS },
    }).outputText
    const exports = {}
    runInNewContext(compiled, { exports, ...globals })
    return exports
}

function analyticsContext() {
    const events = []
    const contact = loadModule("./contact.ts")
    const analytics = loadModule("./analytics.ts", {
        require: () => contact,
        window: {
            gtag: (...args) => events.push(JSON.parse(JSON.stringify(args))),
        },
    })
    return { analytics, events }
}

test("success-story events send only fixed public CTA and location data", () => {
    const { analytics, events } = analyticsContext()
    analytics.trackSuccessStoriesView()
    analytics.trackHomepageSuccessStoriesClick()
    for (const position of ["intro", "closing"]) {
        for (const cta of ["whatsapp", "consultation"])
            analytics.trackSuccessStoriesCtaClick(cta, position)
    }
    assert.deepEqual(events, [
        [
            "event",
            "success_stories_view",
            {
                location: "success_stories_page",
                destination: "/success-stories",
            },
        ],
        [
            "event",
            "homepage_success_stories_click",
            {
                location: "homepage_testimonials",
                cta_text: "Read more success stories",
                destination: "/success-stories",
                position: "after_services",
            },
        ],
        ...["intro", "closing"].flatMap((position) => [
            [
                "event",
                "success_stories_cta_click",
                {
                    location: "success_stories_page",
                    cta_text: "WhatsApp Marsha",
                    destination: "https://wa.me/353871025108",
                    position,
                },
            ],
            [
                "event",
                "success_stories_cta_click",
                {
                    location: "success_stories_page",
                    cta_text: "Book Consultation",
                    destination: "/contact",
                    position,
                },
            ],
        ]),
    ])
    analytics.trackWhatsAppClick("success_stories_intro")
    analytics.trackContactFormSubmission("contact_page")
    assert.equal(events[6][1], "whatsapp_click")
    assert.equal(events[7][1], "generate_lead")
})

test("the root observer counts entries and returns, but skips rerenders and effect replay", () => {
    const { analytics, events } = analyticsContext()
    let pathname = "/success-stories"
    let effect
    const previousPath = { current: null }
    const { default: Observer } = loadModule(
        "../components/SuccessStoriesTracking.tsx",
        {
            require: (name) => {
                if (name === "react")
                    return {
                        useRef: () => previousPath,
                        useEffect: (callback) => {
                            effect = callback
                        },
                    }
                if (name === "next/navigation")
                    return { usePathname: () => pathname }
                return analytics
            },
        },
    )
    const visit = (path) => {
        pathname = path
        Observer()
        effect()
        effect()
    }
    visit("/success-stories")
    visit("/success-stories")
    assert.equal(events.length, 1)
    visit("/info")
    visit("/success-stories")
    assert.equal(events.length, 2)
    visit("/")
    visit("/success-stories")
    assert.equal(events.length, 3)
})

test("analytics tolerate SSR or an unavailable queue and keep one GA configuration", () => {
    for (const globals of [{}, { window: {} }]) {
        const analytics = loadModule("./analytics.ts", {
            require: () => loadModule("./contact.ts"),
            ...globals,
        })
        assert.doesNotThrow(() => {
            analytics.trackSuccessStoriesView()
            analytics.trackHomepageSuccessStoriesClick()
            analytics.trackSuccessStoriesCtaClick("whatsapp", "intro")
        })
    }
    const layout = readFileSync(
        new URL("../layout.tsx", import.meta.url),
        "utf8",
    )
    assert.equal((layout.match(/<SuccessStoriesTracking \/>/g) || []).length, 1)
    assert.match(layout, /id="google-analytics"\s+strategy="beforeInteractive"/)
    assert.match(
        layout,
        /src="https:\/\/www.googletagmanager.com[^\"]+"\s+strategy="afterInteractive"/,
    )
    assert.equal((layout.match(/gtag\('config'/g) || []).length, 1)
    assert.doesNotMatch(layout, /page_view/)
})
