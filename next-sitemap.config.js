/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://chronicpainrecovery.ie",
    generateRobotsTxt: true,

    // Remove sitemap index for small sites (optional)
    generateIndexSitemap: false,

    // Exclude pages that shouldn't be indexed
    exclude: ["/api/*"],

    // Custom transform for priorities and changefreq
    transform: async (config, path) => {
        // High priority pages
        if (path === "/") {
            return {
                loc: path,
                changefreq: "weekly",
                priority: 1.0,
                lastmod: new Date().toISOString(),
            }
        }

        // Core pages
        if (["/info", "/science", "/contact"].includes(path)) {
            return {
                loc: path,
                changefreq: "monthly",
                priority: 0.9,
                lastmod: new Date().toISOString(),
            }
        }

        // Key content pages
        if (["/conditions", "/self-assessment"].includes(path)) {
            return {
                loc: path,
                changefreq: "monthly",
                priority: 0.8,
                lastmod: new Date().toISOString(),
            }
        }

        // Supporting content
        if (["/research", "/resources", "/blog"].includes(path)) {
            return {
                loc: path,
                changefreq: "weekly",
                priority: 0.7,
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
                priority: 0.3,
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
