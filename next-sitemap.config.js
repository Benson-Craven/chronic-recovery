/** @type {import('next-sitemap').IConfig} */
const fs = require("fs")
const path = require("path")

const staticLastModified = "2026-04-30T00:00:00.000Z"

function getPostLastModified(routePath) {
    const slug = routePath.replace("/blog/", "")
    const postPath = path.join(process.cwd(), "content/blog", `${slug}.md`)

    if (!fs.existsSync(postPath)) return staticLastModified

    return fs.statSync(postPath).mtime.toISOString()
}

module.exports = {
    siteUrl: "https://chronicpainrecovery.ie",
    generateRobotsTxt: true,

    // Remove sitemap index for small sites (optional)
    generateIndexSitemap: false,

    // Exclude pages that shouldn't be indexed
    exclude: ["/api/*", "/robots.txt", "/sitemap.xml"],

    // Custom transform for priorities and changefreq
    transform: async (config, path) => {
        // High priority pages
        if (path === "/") {
            return {
                loc: path,
                changefreq: "monthly",
                priority: 1.0,
                lastmod: staticLastModified,
            }
        }

        // Core pages
        if (path === "/science") {
            return {
                loc: path,
                changefreq: "monthly",
                priority: 0.8,
                lastmod: staticLastModified,
            }
        }

        // Key content pages
        if (path === "/conditions") {
            return {
                loc: path,
                changefreq: "monthly",
                priority: 0.8,
                lastmod: staticLastModified,
            }
        }

        if (path === "/blog") {
            return {
                loc: path,
                changefreq: "weekly",
                priority: 0.9,
                lastmod: staticLastModified,
            }
        }

        if (path === "/self-assessment") {
            return {
                loc: path,
                changefreq: "monthly",
                priority: 0.7,
                lastmod: staticLastModified,
            }
        }

        if (path === "/contact") {
            return {
                loc: path,
                changefreq: "yearly",
                priority: 0.5,
                lastmod: staticLastModified,
            }
        }

        // Supporting content
        if (["/info", "/research", "/resources"].includes(path)) {
            return {
                loc: path,
                changefreq: "monthly",
                priority: 0.6,
                lastmod: staticLastModified,
            }
        }

        // Legal pages
        if (
            [
                "/privacy-policy",
                "/terms-and-conditions",
                "/disclaimer",
            ].includes(path)
        ) {
            return {
                loc: path,
                changefreq: "yearly",
                priority: 0.2,
                lastmod: staticLastModified,
            }
        }

        if (path.startsWith("/blog/")) {
            return {
                loc: path,
                changefreq: "monthly",
                priority: 0.7,
                lastmod: getPostLastModified(path),
            }
        }

        // Default for any other pages
        return {
            loc: path,
            changefreq: "monthly",
            priority: 0.5,
            lastmod: staticLastModified,
        }
    },

    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/*"],
            },
        ],
    },
}
