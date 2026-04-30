/** @type {import('next-sitemap').IConfig} */
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
                lastmod: new Date().toISOString(),
            }
        }

        // Core pages
        if (path === "/science") {
            return {
                loc: path,
                changefreq: "monthly",
                priority: 0.8,
                lastmod: new Date().toISOString(),
            }
        }

        // Key content pages
        if (path === "/conditions") {
            return {
                loc: path,
                changefreq: "monthly",
                priority: 0.8,
                lastmod: new Date().toISOString(),
            }
        }

        if (path === "/blog") {
            return {
                loc: path,
                changefreq: "weekly",
                priority: 0.9,
                lastmod: new Date().toISOString(),
            }
        }

        if (path === "/self-assessment") {
            return {
                loc: path,
                changefreq: "monthly",
                priority: 0.7,
                lastmod: new Date().toISOString(),
            }
        }

        if (path === "/contact") {
            return {
                loc: path,
                changefreq: "yearly",
                priority: 0.5,
                lastmod: new Date().toISOString(),
            }
        }

        // Supporting content
        if (["/info", "/research", "/resources"].includes(path)) {
            return {
                loc: path,
                changefreq: "monthly",
                priority: 0.6,
                lastmod: new Date().toISOString(),
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
                lastmod: new Date().toISOString(),
            }
        }

        if (path.startsWith("/blog/")) {
            return {
                loc: path,
                changefreq: "monthly",
                priority: 0.7,
                lastmod: new Date().toISOString(),
            }
        }

        // Default for any other pages
        return {
            loc: path,
            changefreq: "monthly",
            priority: 0.5,
            lastmod: new Date().toISOString(),
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
