import Link from "next/link"
import { formatBlogDate, getSortedPostsData, parseBlogDate } from "../lib/posts"
import Image from "next/image"
import { BreadcrumbJsonLd } from "../lib/seo"
import Breadcrumbs from "../components/Breadcrumbs"

export default function Blog() {
    const allPostsData = getSortedPostsData()
    const breadcrumbs = [
        { name: "Home", path: "/" },
        { name: "Journal", path: "/blog" },
    ]

    return (
        <div className="min-h-screen" style={{ backgroundColor: "#F7F4EF" }}>
            <BreadcrumbJsonLd id="blog-breadcrumb-schema" items={breadcrumbs} />
            <Breadcrumbs items={breadcrumbs} />
            {/* Hero — green */}
            <section
                style={{ backgroundColor: "#1E3A20" }}
                className="w-full px-6 py-24 md:py-36"
            >
                <div className="mx-auto max-w-3xl">
                    <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-dark-supporting">
                        Journal
                    </p>
                    <h1 className="mb-8 font-satoshi text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl">
                        Insights on pain,
                        <br />
                        <em>healing, and the brain</em>
                    </h1>
                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(200,230,201,0.2)" }}
                    />
                    <p className="mt-8 max-w-xl font-satoshi text-base font-light leading-relaxed text-dark-body md:text-lg">
                        Articles exploring the neuroscience of chronic pain,
                        recovery stories, and practical tools for healing.
                    </p>
                </div>
            </section>

            {/* Posts grid — cream */}
            <section
                style={{ backgroundColor: "#F7F4EF" }}
                className="w-full px-6 py-20 md:py-28"
            >
                <div className="mx-auto max-w-6xl">
                    <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                        {allPostsData.length} articles
                    </p>

                    <div
                        className="mb-14 h-px w-full"
                        style={{ backgroundColor: "rgba(30,58,32,0.12)" }}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {allPostsData.map(
                            (
                                { id, date, title, excerpt, coverImage },
                                index,
                            ) => (
                                <Link key={id} href={`/blog/${id}`}>
                                    <article
                                        className="group flex flex-col border-b border-r"
                                        style={{
                                            backgroundColor: "#F7F4EF",
                                            borderColor: "rgba(30,58,32,0.08)",
                                        }}
                                    >
                                        {/* Cover image */}
                                        <div className="overflow-hidden">
                                            <Image
                                                src={coverImage}
                                                alt={title}
                                                width={500}
                                                height={300}
                                                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-1 flex-col gap-3 p-7">
                                            <span className="font-satoshi text-xs font-light tabular-nums text-light-supporting">
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0",
                                                )}
                                            </span>

                                            <h2 className="font-satoshi text-xl leading-snug text-[#1E3A20] md:text-2xl">
                                                {title}
                                            </h2>

                                            <time
                                                dateTime={parseBlogDate(date)}
                                                className="font-satoshi text-xs font-light uppercase tracking-[0.15em] text-light-supporting"
                                            >
                                                {formatBlogDate(date)}
                                            </time>

                                            <p className="mt-1 font-satoshi text-base font-light leading-relaxed text-light-body">
                                                {excerpt}
                                            </p>

                                            <div className="mt-auto flex items-center gap-2 pt-4">
                                                <span className="font-satoshi text-xs font-medium uppercase tracking-[0.15em] text-light-supporting">
                                                    Read
                                                </span>
                                                <svg
                                                    className="opacity-30 transition-opacity group-hover:opacity-70"
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 12 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2 10L10 2M10 2H4M10 2V8"
                                                        stroke="#1E3A20"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ),
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}
