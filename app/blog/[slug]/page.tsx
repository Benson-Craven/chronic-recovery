import type { Metadata } from "next"
import { notFound } from "next/navigation"

import {
    formatBlogDate,
    getAllPostIds,
    getPostData,
    parseBlogDate,
} from "../../lib/posts"

import {
    BreadcrumbJsonLd,
    JsonLd,
    articleSchema,
    authorProfile,
    createPageMetadata,
} from "../../lib/seo"

import Breadcrumbs from "../../components/Breadcrumbs"
import BlogArticle from "@/app/components/blog/BlogArticle"
import BlogClosingCta from "@/app/components/blog/BlogClosingCta"
import BlogPageHero from "@/app/components/blog/BlogPageHero"

type BlogPostPageProps = {
    params: {
        slug: string
    }
}

export function generateStaticParams() {
    return getAllPostIds()
}

export async function generateMetadata({
    params,
}: BlogPostPageProps): Promise<Metadata> {
    const postPath = `/blog/${params.slug}`

    try {
        const postData = await getPostData(params.slug)

        return createPageMetadata({
            title:
                postData.seoTitle ??
                `${postData.title} | Chronic Pain Recovery`,
            description: postData.excerpt,
            path: postPath,
            type: "article",
            image: postData.coverImage || undefined,
        })
    } catch {
        return createPageMetadata({
            title: "Article Not Found | Chronic Pain Recovery",
            description:
                "This Chronic Pain Recovery article could not be found.",
            path: postPath,
        })
    }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    let postData

    try {
        postData = await getPostData(params.slug)
    } catch {
        notFound()
    }

    const postPath = `/blog/${params.slug}`
    const publishedDate = parseBlogDate(postData.date)
    const displayDate = formatBlogDate(postData.date)

    const breadcrumbs = [
        { name: "Home", path: "/" },
        { name: "Journal", path: "/blog" },
        { name: postData.title, path: postPath },
    ]

    const articleData = articleSchema({
        headline: postData.title,
        description: postData.excerpt,
        path: postPath,
        image: postData.coverImage || undefined,
        datePublished: publishedDate,
        dateModified: postData.modifiedDate || publishedDate,
    })

    return (
        <main className="min-h-screen bg-[#F7F4EF]">
            <BreadcrumbJsonLd
                id="blog-post-breadcrumb-schema"
                items={breadcrumbs}
            />

            <JsonLd id="article-schema" data={articleData} />

            <Breadcrumbs items={breadcrumbs} />

            <BlogPageHero
                title={postData.title}
                authorName={authorProfile.name}
                publishedDate={publishedDate}
                displayDate={displayDate}
                coverImage={postData.coverImage}
            />

            <BlogArticle contentHtml={postData.contentHtml} />

            <BlogClosingCta />
        </main>
    )
}
