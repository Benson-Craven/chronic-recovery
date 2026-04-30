import { getPostData, getAllPostIds } from "../../lib/posts"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
    BreadcrumbJsonLd,
    JsonLd,
    absoluteUrl,
    createPageMetadata,
    siteName,
    siteUrl,
} from "../../lib/seo"

export async function generateStaticParams() {
    const paths = getAllPostIds()
    return paths
}

function parsePostDate(date: string) {
    const [day, month, year] = date.split("-")
    if (!day || !month || !year) return date
    return `${year}-${month}-${day}`
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string }
}): Promise<Metadata> {
    try {
        const postData = await getPostData(params.slug)

        return createPageMetadata({
            title: `${postData.title} | Chronic Pain Recovery`,
            description: postData.excerpt,
            path: `/blog/${params.slug}`,
            type: "article",
            image: postData.coverImage || undefined,
        })
    } catch {
        return createPageMetadata({
            title: "Article Not Found | Chronic Pain Recovery",
            description:
                "This Chronic Pain Recovery article could not be found.",
            path: `/blog/${params.slug}`,
        })
    }
}

export default async function Post({ params }: { params: { slug: string } }) {
    let postData

    try {
        postData = await getPostData(params.slug)
    } catch {
        notFound()
    }

    const articleUrl = absoluteUrl(`/blog/${params.slug}`)
    const publishedDate = parsePostDate(postData.date)
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: postData.title,
        description: postData.excerpt,
        image: postData.coverImage ? absoluteUrl(postData.coverImage) : undefined,
        datePublished: publishedDate,
        dateModified: publishedDate,
        author: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/info"),
        },
        publisher: {
            "@type": "Organization",
            name: siteName,
            url: siteUrl,
            logo: {
                "@type": "ImageObject",
                url: absoluteUrl("/logos/Mending_Mindets.png"),
            },
        },
        mainEntityOfPage: articleUrl,
    }

    return (
        <div className="min-h-screen" style={{ backgroundColor: "#F7F4EF" }}>
            <BreadcrumbJsonLd
                id="blog-post-breadcrumb-schema"
                items={[
                    { name: "Home", path: "/" },
                    { name: "Journal", path: "/blog" },
                    { name: postData.title, path: `/blog/${params.slug}` },
                ]}
            />
            <JsonLd id="article-schema" data={articleSchema} />
            {/* Hero — green */}
            <section
                style={{ backgroundColor: "#1E3A20" }}
                className="w-full px-6 py-24 md:py-36"
            >
                <div className="mx-auto max-w-3xl">
                    {/* Back link */}
                    <Link
                        href="/blog"
                        className="mb-10 inline-flex items-center gap-2 transition-opacity hover:opacity-60"
                        style={{
                            color: "rgba(200,230,201,0.5)",
                            fontFamily: "var(--font-dm-sans)",
                            fontWeight: 300,
                            fontSize: "0.75rem",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                        }}
                    >
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                        >
                            <path
                                d="M10 2L2 10M2 10H8M2 10V4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Journal
                    </Link>

                    <p
                        className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-40"
                        style={{
                            color: "#C8E6C9",
                            fontFamily: "var(--font-dm-sans)",
                        }}
                    >
                        {postData.date}
                    </p>

                    <h1
                        className="mb-8 text-4xl leading-[1.05] text-white md:text-5xl lg:text-6xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        {postData.title}
                    </h1>

                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(200,230,201,0.2)" }}
                    />
                </div>
            </section>

            {/* Cover image — full bleed between hero and content */}
            {postData.coverImage && (
                <div className="w-full" style={{ backgroundColor: "#1E3A20" }}>
                    <div className="mx-auto max-w-5xl">
                        <div className="overflow-hidden">
                            <Image
                                src={postData.coverImage}
                                alt={`${postData.title} article cover image`}
                                width={1200}
                                height={600}
                                priority
                                className="w-full object-cover"
                                style={{ maxHeight: "480px" }}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Article body — cream */}
            <section
                style={{ backgroundColor: "#F7F4EF" }}
                className="w-full px-6 py-20 md:py-28"
            >
                <div className="mx-auto max-w-2xl">
                    <article
                        className="prose prose-lg max-w-none"
                        style={
                            {
                                "--tw-prose-body": "rgba(30,58,32,0.7)",
                                "--tw-prose-headings": "#1E3A20",
                                "--tw-prose-links": "#1E3A20",
                                "--tw-prose-bold": "#1E3A20",
                                "--tw-prose-counters": "rgba(30,58,32,0.4)",
                                "--tw-prose-bullets": "rgba(30,58,32,0.3)",
                                "--tw-prose-hr": "rgba(30,58,32,0.12)",
                                "--tw-prose-quotes": "#1E3A20",
                                "--tw-prose-quote-borders":
                                    "rgba(30,58,32,0.2)",
                                "--tw-prose-captions": "rgba(30,58,32,0.4)",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 300,
                            } as React.CSSProperties
                        }
                        dangerouslySetInnerHTML={{
                            __html: postData.contentHtml,
                        }}
                    />
                </div>
            </section>

            {/* Footer CTA — green */}
            <section
                style={{ backgroundColor: "#1E3A20" }}
                className="w-full px-6 py-20 md:py-28"
            >
                <div className="mx-auto max-w-3xl">
                    <div
                        className="mb-12 h-px w-full"
                        style={{ backgroundColor: "rgba(200,230,201,0.15)" }}
                    />

                    <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p
                                className="mb-4 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                                style={{
                                    color: "#C8E6C9",
                                    fontFamily: "var(--font-dm-sans)",
                                }}
                            >
                                Ready to begin?
                            </p>
                            <p
                                className="text-3xl leading-snug text-white md:text-4xl"
                                style={{ fontFamily: "var(--font-dm-serif)" }}
                            >
                                Recovery is possible.
                                <br />
                                <em>Let's talk.</em>
                            </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <Link href="/contact">
                                <button
                                    className="w-full rounded-full py-4 text-sm font-medium tracking-wide transition-opacity hover:opacity-90 md:w-auto md:px-10"
                                    style={{
                                        backgroundColor: "#F0EBE1",
                                        color: "#1E3A20",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 500,
                                        letterSpacing: "0.04em",
                                    }}
                                >
                                    Book Your Consultation
                                </button>
                            </Link>
                            <Link
                                href="/blog"
                                className="text-center text-xs uppercase tracking-[0.15em] transition-opacity hover:opacity-60"
                                style={{
                                    color: "rgba(200,230,201,0.45)",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 300,
                                }}
                            >
                                Back to Journal
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
