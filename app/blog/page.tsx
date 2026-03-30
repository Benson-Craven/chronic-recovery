import Link from "next/link"
import { getSortedPostsData } from "../lib/posts"
import Image from "next/image"

export default function Blog() {
    const allPostsData = getSortedPostsData()

    return (
        <div className="min-h-screen" style={{ backgroundColor: "#F7F4EF" }}>
            {/* Hero — green */}
            <section
                style={{ backgroundColor: "#1E3A20" }}
                className="w-full px-6 py-24 md:py-36"
            >
                <div className="mx-auto max-w-3xl">
                    <p
                        className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                        style={{
                            color: "#C8E6C9",
                            fontFamily: "var(--font-dm-sans)",
                        }}
                    >
                        Journal
                    </p>
                    <h1
                        className="mb-8 text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        Insights on pain,
                        <br />
                        <em>healing, and the brain</em>
                    </h1>
                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(200,230,201,0.2)" }}
                    />
                    <p
                        className="mt-8 max-w-xl text-base leading-relaxed md:text-lg"
                        style={{
                            color: "rgba(200,230,201,0.65)",
                            fontFamily: "var(--font-dm-sans)",
                            fontWeight: 300,
                        }}
                    >
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
                    <p
                        className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                        style={{
                            color: "#1E3A20",
                            fontFamily: "var(--font-dm-sans)",
                        }}
                    >
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
                                            <span
                                                className="text-xs tabular-nums opacity-30"
                                                style={{
                                                    color: "#1E3A20",
                                                    fontFamily:
                                                        "var(--font-dm-sans)",
                                                    fontWeight: 300,
                                                }}
                                            >
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0",
                                                )}
                                            </span>

                                            <h2
                                                className="text-xl leading-snug transition-opacity group-hover:opacity-70 md:text-2xl"
                                                style={{
                                                    fontFamily:
                                                        "var(--font-dm-serif)",
                                                    color: "#1E3A20",
                                                }}
                                            >
                                                {title}
                                            </h2>

                                            <p
                                                className="text-xs uppercase tracking-[0.15em] opacity-35"
                                                style={{
                                                    color: "#1E3A20",
                                                    fontFamily:
                                                        "var(--font-dm-sans)",
                                                    fontWeight: 300,
                                                }}
                                            >
                                                {date}
                                            </p>

                                            <p
                                                className="mt-1 text-sm leading-relaxed"
                                                style={{
                                                    color: "rgba(30,58,32,0.6)",
                                                    fontFamily:
                                                        "var(--font-dm-sans)",
                                                    fontWeight: 300,
                                                }}
                                            >
                                                {excerpt}
                                            </p>

                                            <div className="mt-auto flex items-center gap-2 pt-4">
                                                <span
                                                    className="text-xs uppercase tracking-[0.15em] opacity-50 transition-opacity group-hover:opacity-100"
                                                    style={{
                                                        color: "#1E3A20",
                                                        fontFamily:
                                                            "var(--font-dm-sans)",
                                                        fontWeight: 500,
                                                    }}
                                                >
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
