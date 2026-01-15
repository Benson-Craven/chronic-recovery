"use client"

import React from "react"

type Item = {
    title: string
    url: string
    note?: string
}

type LinkSection = {
    category: string
    items: Item[]
}

const links: LinkSection[] = [
    {
        category: "Podcasts",
        items: [
            {
                title: "What The Latest Study on Chronic Back Pain Means For You (Yoni Ashar, PhD)",
                url: "https://www.curablehealth.com/podcast/back-pain-study",
                note: "Available on Apple Podcasts",
            },
        ],
    },
    {
        category: "Videos",
        items: [
            {
                title: "TEDxAdelaide - Lorimer Moseley - Why Things Hurt",
                url: "https://youtu.be/gwd-wLdIHjs?si=UdLKtB6KXBQbjMnV",
            },
            {
                title: "New Hope for Back Pain",
                url: "https://youtu.be/_S7w2eg0DYw",
            },
            {
                title: "Trauma and the Nervous System",
                url: "https://youtu.be/ZdIQRxwT1I0",
            },
            {
                title: "Changing Your Mind: Chronic Pain and The Brain",
                url: "https://youtu.be/u1NiU_k5jT0",
            },
            {
                title: "Chronic Symptoms and the Nervous System",
                url: "https://youtu.be/r5V4hRm39RI",
            },
            {
                title: "In Search of a Unified Theory for Pain Relief | Howard Schubiner, MD",
                url: "https://youtu.be/ukrgiyoKfB8?si=GRxeoSRDK7Gszqbw",
            },
            {
                title: "How Your Nervous System Works & Changes",
                url: "https://youtu.be/H-XfCl-HpRM?si=GnZRqVpSAHC7ToMt",
            },
            {
                title: "How Placebo Effects Work to Change Our Biology & Psychology",
                url: "https://www.youtube.com/watch?v=gdUNjPijwA8",
            },
            {
                title: "A Science-Supported Journaling Protocol to Improve Mental & Physical Health",
                url: "https://www.youtube.com/watch?v=wAZn9dF3XTo",
            },
            {
                title: "Chronic Pain: A New Perspective | Georgie Oldfield | TEDxUniversityofManchester",
                url: "https://www.youtube.com/watch?v=BxsBJgMKHrw",
            },
        ],
    },
]

const UsefulLinks: React.FC = () => {
    return (
        <main className="min-h-screen bg-background py-16 text-primary-text">
            <section className="container mx-auto max-w-5xl px-6 md:px-12 lg:px-24">
                <div className="overflow-hidden rounded-2xl border border-foreground bg-background p-8 shadow-xl md:p-12">
                    <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-primary-text sm:text-4xl md:text-7xl">
                        Useful Links
                    </h1>
                    <p className="mb-8 text-lg leading-relaxed">
                        Explore these curated resources to learn more about
                        chronic pain, the nervous system, and effective
                        management strategies.
                    </p>
                    {links.map((section, index) => (
                        <div key={index} className="mb-10">
                            <h2 className="mb-4 border-b border-foreground pb-2 text-2xl font-bold text-primary-text">
                                {section.category}
                            </h2>
                            <ul className="space-y-4">
                                {section.items.map((item, idx) => (
                                    <li key={idx} className="group">
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block transform rounded-xl border border-tertiary-text bg-[#C4D199] p-4 transition-all duration-300 ease-in-out will-change-transform hover:-translate-y-1 hover:scale-[1.02] hover:border-secondary-text hover:bg-[#B7C48C] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary-text"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="font-semibold text-primary-text group-hover:text-primary-text">
                                                    {item.title}
                                                </span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 text-secondary-text opacity-0 transition-opacity group-hover:opacity-100"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    />
                                                </svg>
                                            </div>
                                            {item.note && (
                                                <p className="mt-1 text-sm">
                                                    {item.note}
                                                </p>
                                            )}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default UsefulLinks
