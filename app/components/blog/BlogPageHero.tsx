import Link from "next/link"
import Image from "next/image"

type BlogPageHeroProps = {
    title: string
    authorName: string
    publishedDate: string
    displayDate: string
    coverImage?: string
}

export default function BlogPageHero({
    title,
    authorName,
    publishedDate,
    displayDate,
    coverImage,
}: BlogPageHeroProps) {
    return (
        <>
            <section className="w-full bg-[#1E3A20] px-6 py-24 md:py-36">
                <div className="mx-auto max-w-3xl">
                    <Link
                        href="/blog"
                        className="mb-10 inline-flex items-center gap-2 font-satoshi text-xs font-light uppercase tracking-[0.2em] text-dark-supporting"
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

                    <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-satoshi text-xs font-medium uppercase tracking-[0.2em] text-dark-supporting">
                        <span>By {authorName}</span>
                        <span aria-hidden="true">/</span>
                        <time dateTime={publishedDate}>{displayDate}</time>
                    </div>

                    <h1 className="mb-8 font-satoshi text-4xl leading-[1.05] text-white md:text-5xl lg:text-6xl">
                        {title}
                    </h1>

                    <div className="h-px w-full bg-[#C8E6C9]/20" />
                </div>
            </section>

            {coverImage && (
                <div className="w-full bg-[#1E3A20]">
                    <div className="mx-auto max-w-5xl">
                        <div className="overflow-hidden">
                            <Image
                                src={coverImage}
                                alt={`${title} article cover image`}
                                width={1200}
                                height={600}
                                priority
                                className="max-h-[480px] w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
