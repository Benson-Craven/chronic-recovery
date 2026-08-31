import {
    formatBlogDate,
    getAllPostIds,
    getPostData,
    parseBlogDate,
} from "../../lib/posts"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Breadcrumbs from "../../components/Breadcrumbs"
import CtaActionRow from "../../components/CtaActionRow"
import { WhatsAppCta } from "../../components/WhatsAppLink"
import {
    BreadcrumbJsonLd,
    JsonLd,
    articleSchema,
    authorProfile,
    createPageMetadata,
} from "../../lib/seo"

export async function generateStaticParams() {
    const paths = getAllPostIds()
    return paths
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string }
}): Promise<Metadata> {
    try {
        const postData = await getPostData(params.slug)

        return createPageMetadata({
            title:
                postData.seoTitle ??
                `${postData.title} | Chronic Pain Recovery`,
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

    const publishedDate = parseBlogDate(postData.date)
    const displayDate = formatBlogDate(postData.date)
    const breadcrumbs = [
        { name: "Home", path: "/" },
        { name: "Journal", path: "/blog" },
        { name: postData.title, path: `/blog/${params.slug}` },
    ]
    const articleData = articleSchema({
        headline: postData.title,
        description: postData.excerpt,
        path: `/blog/${params.slug}`,
        image: postData.coverImage || undefined,
        datePublished: publishedDate,
        dateModified: postData.modifiedDate || publishedDate,
    })

    return (
        <div className="min-h-screen" style={{ backgroundColor: "#F7F4EF" }}>
            <BreadcrumbJsonLd
                id="blog-post-breadcrumb-schema"
                items={breadcrumbs}
            />
            <JsonLd id="article-schema" data={articleData} />
            <Breadcrumbs items={breadcrumbs} />
            {/* Hero — green */}
            <section
                style={{ backgroundColor: "#1E3A20" }}
                className="w-full px-6 py-24 md:py-36"
            >
                <div className="mx-auto max-w-3xl">
                    {/* Back link */}
                    <Link
                        href="/blog"
                        className="mb-10 inline-flex items-center gap-2"
                        style={{
                            color: "var(--text-dark-supporting)",
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

                    <div
                        className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-[0.2em]"
                        style={{
                            color: "var(--text-dark-supporting)",
                            fontFamily: "var(--font-dm-sans)",
                        }}
                    >
                        <span>By {authorProfile.name}</span>
                        <span aria-hidden="true">/</span>
                        <time dateTime={publishedDate}>{displayDate}</time>
                    </div>

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
                        className="prose prose-lg max-w-none prose-headings:font-normal"
                        style={
                            {
                                "--tw-prose-body": "var(--text-light-body)",
                                "--tw-prose-headings": "#1E3A20",
                                "--tw-prose-links": "#1E3A20",
                                "--tw-prose-bold": "#1E3A20",
                                "--tw-prose-counters":
                                    "var(--text-light-supporting)",
                                "--tw-prose-bullets":
                                    "var(--text-light-supporting)",
                                "--tw-prose-hr": "rgba(30,58,32,0.12)",
                                "--tw-prose-quotes": "#1E3A20",
                                "--tw-prose-quote-borders":
                                    "rgba(30,58,32,0.2)",
                                "--tw-prose-captions":
                                    "var(--text-light-supporting)",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 300,
                            } as React.CSSProperties
                        }
                        dangerouslySetInnerHTML={{
                            __html: postData.contentHtml,
                        }}
                    />

                    <aside
                        className="mt-14 border-l px-6 py-5"
                        style={{
                            borderColor: "rgba(30,58,32,0.24)",
                            backgroundColor: "rgba(30,58,32,0.04)",
                        }}
                        aria-labelledby="medical-disclaimer-heading"
                    >
                        <h2
                            id="medical-disclaimer-heading"
                            className="mb-3 text-base font-medium"
                            style={{
                                color: "#1E3A20",
                                fontFamily: "var(--font-dm-sans)",
                            }}
                        >
                            Medical disclaimer
                        </h2>
                        <p
                            className="text-sm leading-relaxed md:text-base"
                            style={{
                                color: "var(--text-light-body)",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 300,
                            }}
                        >
                            This article is for general education only and is
                            not a substitute for medical advice, diagnosis, or
                            treatment. Please speak with your GP, consultant, or
                            relevant health professional about new, worsening,
                            unexplained, or urgent symptoms before using a pain
                            recovery approach.
                        </p>
                    </aside>

                    <aside
                        className="mt-16 border-t pt-10"
                        style={{ borderColor: "rgba(30,58,32,0.14)" }}
                        aria-labelledby="author-bio-heading"
                    >
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                            <Image
                                src={authorProfile.image}
                                alt={`${authorProfile.name}, ${authorProfile.role} at Chronic Pain Recovery`}
                                width={112}
                                height={112}
                                className="h-28 w-28 shrink-0 rounded-full object-cover"
                            />
                            <div>
                                <p
                                    className="mb-3 text-xs font-medium uppercase tracking-[0.22em]"
                                    style={{
                                        color: "var(--text-light-supporting)",
                                        fontFamily: "var(--font-dm-sans)",
                                    }}
                                >
                                    Written by
                                </p>
                                <h2
                                    id="author-bio-heading"
                                    className="mb-2 text-2xl leading-tight md:text-3xl"
                                    style={{
                                        color: "#1E3A20",
                                        fontFamily: "var(--font-dm-serif)",
                                    }}
                                >
                                    {authorProfile.name}
                                </h2>
                                <p
                                    className="mb-4 text-sm font-medium"
                                    style={{
                                        color: "var(--text-light-body)",
                                        fontFamily: "var(--font-dm-sans)",
                                    }}
                                >
                                    {authorProfile.role} in{" "}
                                    {authorProfile.location}
                                </p>
                                <p
                                    className="mb-4 text-base leading-relaxed"
                                    style={{
                                        color: "var(--text-light-body)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    Marsha Canny is a chronic pain therapist
                                    based in Rochestown, Cork. Her work draws on
                                    pain neuroscience education, Pain
                                    Reprocessing Therapy, Dr Howard Schubiner's
                                    mind-body methods, and a biopsychosocial
                                    approach to support people with persistent
                                    pain when serious medical causes have been
                                    assessed.
                                </p>
                                <p
                                    className="mb-4 text-base leading-relaxed"
                                    style={{
                                        color: "var(--text-light-body)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    Listed in the ATNS Practitioner & Coach
                                    Directory and trained in pain neuroscience,
                                    Pain Reprocessing Therapy, and Dr Howard
                                    Schubiner's mind-body methods.
                                </p>
                                <p
                                    className="mb-5 text-base leading-relaxed"
                                    style={{
                                        color: "var(--text-light-body)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    Marsha also brings lived experience of
                                    recovering from long-term migraines and neck
                                    pain, which informs her compassionate,
                                    practical approach to chronic pain recovery
                                    work.
                                </p>
                                <Link
                                    href={authorProfile.url}
                                    className="inline-flex text-xs font-medium uppercase tracking-[0.16em]"
                                    style={{
                                        color: "#1E3A20",
                                        fontFamily: "var(--font-dm-sans)",
                                    }}
                                >
                                    About Marsha
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* Closing CTA — cream */}
            <section
                style={{ backgroundColor: "#F7F4EF" }}
                className="w-full px-6 py-20 md:py-28"
            >
                <div className="mx-auto max-w-5xl">
                    <div
                        className="mb-12 h-px w-full"
                        style={{ backgroundColor: "rgba(30,58,32,0.15)" }}
                    />

                    <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
                        <div>
                            <p
                                className="mb-4 text-xs font-medium uppercase tracking-[0.25em]"
                                style={{
                                    color: "var(--text-light-supporting)",
                                    fontFamily: "var(--font-dm-sans)",
                                }}
                            >
                                Ready to begin?
                            </p>
                            <h2
                                className="text-5xl leading-[1.05] md:text-6xl"
                                style={{
                                    color: "#1E3A20",
                                    fontFamily: "var(--font-dm-serif)",
                                }}
                            >
                                Recovery is possible.
                                <br />
                                <em>Let&apos;s talk.</em>
                            </h2>
                        </div>

                        <CtaActionRow className="gap-3">
                            <WhatsAppCta source="blog_closing_cta" />
                            <Link
                                href="/contact"
                                className="cta-interactive w-full whitespace-nowrap rounded-full py-4 text-center text-sm font-medium tracking-wide sm:w-auto sm:px-10"
                                style={{
                                    backgroundColor: "transparent",
                                    border: "1px solid rgba(30,58,32,0.3)",
                                    color: "#1E3A20",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 500,
                                    letterSpacing: "0.04em",
                                }}
                            >
                                Book Consultation
                            </Link>
                        </CtaActionRow>
                    </div>
                </div>
            </section>
        </div>
    )
}
