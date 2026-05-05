import { MetadataRoute } from "next"
import { getSortedPostsData } from "./lib/posts"
import { siteUrl } from "./lib/seo"

const staticLastModified = new Date("2026-04-30")

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteUrl
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: staticLastModified,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/science`,
            lastModified: staticLastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/conditions`,
            lastModified: staticLastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/conditions/long-covid`,
            lastModified: staticLastModified,
            changeFrequency: "monthly",
            priority: 0.75,
        },
        {
            url: `${baseUrl}/treatments/pain-reprocessing-therapy`,
            lastModified: staticLastModified,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${baseUrl}/locations/chronic-pain-management-cork`,
            lastModified: staticLastModified,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${baseUrl}/locations/chronic-pain-management-ireland-online`,
            lastModified: staticLastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/locations/chronic-pain-management-dublin-online`,
            lastModified: staticLastModified,
            changeFrequency: "monthly",
            priority: 0.75,
        },
        {
            url: `${baseUrl}/info`,
            lastModified: staticLastModified,
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: staticLastModified,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/resources`,
            lastModified: staticLastModified,
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${baseUrl}/self-assessment`,
            lastModified: staticLastModified,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: staticLastModified,
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: `${baseUrl}/research`,
            lastModified: staticLastModified,
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${baseUrl}/disclaimer`,
            lastModified: staticLastModified,
            changeFrequency: "yearly",
            priority: 0.2,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: staticLastModified,
            changeFrequency: "yearly",
            priority: 0.2,
        },
        {
            url: `${baseUrl}/terms-and-conditions`,
            lastModified: staticLastModified,
            changeFrequency: "yearly",
            priority: 0.2,
        },
    ]

    const postRoutes: MetadataRoute.Sitemap = getSortedPostsData().map(
        (post) => ({
            url: `${baseUrl}/blog/${post.id}`,
            lastModified: post.modifiedDate
                ? new Date(post.modifiedDate)
                : staticLastModified,
            changeFrequency: "monthly",
            priority: 0.7,
        }),
    )

    return [...staticRoutes, ...postRoutes]
}
