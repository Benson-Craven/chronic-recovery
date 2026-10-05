"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/utils/cn"
import CtaActionRow from "./CtaActionRow"
import { EditorialSplit, type EditorialVisual } from "./ui/EditorialSplit"
import { WhatsAppCta } from "./WhatsAppLink"
import type { WhatsAppSource } from "@/app/lib/contact"
import PageHero from "./sections/PageHero"

type TextBlock = {
    heading: string
    body: string[]
    eyebrow?: string
    visual?: EditorialVisual
}

type ListSection = {
    eyebrow: string
    heading: string
    intro?: string
    items: {
        title: string
        body: string
    }[]
}

type RelatedLink = {
    href: string
    label: string
}

type ResearchLink = {
    title: string
    source: string
    href: string
    summary: string
}

type SeoContentPageProps = {
    whatsAppSource: WhatsAppSource
    hero: {
        eyebrow: string
        title: ReactNode
        intro: string
    }
    sections: TextBlock[]
    listSection: ListSection
    safetyNote: {
        heading: string
        body: string
    }
    researchLinks?: ResearchLink[]
    relatedLinks: RelatedLink[]
}

const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function SeoContentPage({
    whatsAppSource,
    hero,
    sections,
    listSection,
    safetyNote,
    researchLinks,
    relatedLinks,
}: SeoContentPageProps) {
    return (
        <div className="min-h-screen bg-[#F7F4EF]">
            <PageHero eyebrow={hero.eyebrow} description={hero.intro}>
                {hero.title}
            </PageHero>

            {sections.map((section, index) => {
                const isGreen = index % 2 === 1

                const content = (
                    <div>
                        {section.eyebrow && (
                            <p
                                className={cn(
                                    "mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em]",
                                    isGreen
                                        ? "text-dark-supporting"
                                        : "text-light-supporting",
                                )}
                            >
                                {section.eyebrow}
                            </p>
                        )}
                        <h2
                            className={cn(
                                "mb-8 font-satoshi text-4xl leading-[1.1] md:text-5xl lg:text-6xl",
                                isGreen ? "text-white" : "text-[#1E3A20]",
                            )}
                        >
                            {section.heading}
                        </h2>
                        <div
                            className={`mb-8 h-px w-full ${isGreen ? "bg-[rgba(200,230,201,0.15)]" : "bg-[rgba(30,58,32,0.12)]"}`}
                        />
                        <div className="space-y-5">
                            {section.body.map((paragraph) => (
                                <p
                                    key={paragraph}
                                    className={cn(
                                        "font-satoshi text-base font-light leading-relaxed md:text-lg",
                                        isGreen
                                            ? "text-dark-body"
                                            : "text-light-body",
                                    )}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                )

                return (
                    <motion.section
                        key={section.heading}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        className={`w-full px-6 py-20 md:py-28 ${isGreen ? "bg-[#1E3A20]" : "bg-[#F7F4EF]"}`}
                    >
                        {section.visual ? (
                            <EditorialSplit
                                visual={section.visual}
                                reverse={index % 2 === 1}
                                surface={isGreen ? "green" : "cream"}
                            >
                                {content}
                            </EditorialSplit>
                        ) : (
                            <div className="mx-auto max-w-3xl">{content}</div>
                        )}
                    </motion.section>
                )
            })}

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                className="w-full bg-[#1E3A20] px-6 py-20 md:py-28"
            >
                <div className="mx-auto max-w-5xl">
                    <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-dark-supporting">
                        {listSection.eyebrow}
                    </p>
                    <h2 className="mb-6 font-satoshi text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl">
                        {listSection.heading}
                    </h2>
                    {listSection.intro && (
                        <p className="mb-14 max-w-2xl font-satoshi text-base font-light leading-relaxed text-dark-body md:text-lg">
                            {listSection.intro}
                        </p>
                    )}
                    <div className="grid grid-cols-1 gap-px bg-[rgba(200,230,201,0.1)] md:grid-cols-2">
                        {listSection.items.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.45,
                                    delay: Math.min(index * 0.06, 0.4),
                                    ease: "easeOut",
                                }}
                                className="bg-[#1E3A20] p-7"
                            >
                                <span className="mb-5 block font-satoshi text-xs font-light tabular-nums text-dark-supporting">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h3 className="mb-4 font-satoshi text-lg text-white">
                                    {item.title}
                                </h3>
                                <p className="font-satoshi text-sm font-light leading-relaxed text-dark-supporting md:text-base">
                                    {item.body}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {researchLinks && researchLinks.length > 0 && (
                <section className="w-full bg-[#F7F4EF] px-6 py-20 md:py-28">
                    <div className="mx-auto max-w-5xl">
                        <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                            Research links
                        </p>
                        <h2 className="mb-6 font-satoshi text-4xl leading-[1.1] text-[#1E3A20] md:text-5xl lg:text-6xl">
                            Evidence behind
                            <br />
                            <em>this approach</em>
                        </h2>
                        <p className="mb-12 max-w-2xl font-satoshi text-base font-light leading-relaxed text-light-body md:text-lg">
                            These external research links are included for
                            transparency. They do not replace personalised
                            medical advice or assessment.
                        </p>
                        <div className="grid grid-cols-1 gap-px bg-[rgba(30,58,32,0.1)] md:grid-cols-2">
                            {researchLinks.map((link, index) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex min-h-64 flex-col bg-[#F7F4EF] p-7 transition-colors"
                                >
                                    <span className="mb-5 block font-satoshi text-xs font-light tabular-nums text-light-supporting">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span className="mb-3 font-satoshi text-xs font-medium uppercase tracking-[0.16em] text-light-supporting">
                                        {link.source}
                                    </span>
                                    <h3 className="mb-5 font-satoshi text-xl leading-snug text-[#1E3A20] md:text-2xl">
                                        {link.title}
                                    </h3>
                                    <p className="font-satoshi text-sm font-light leading-relaxed text-light-body md:text-base">
                                        {link.summary}
                                    </p>
                                    <span className="mt-auto pt-8 font-satoshi text-xs font-medium uppercase tracking-[0.16em] text-light-supporting">
                                        View research
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="w-full bg-[#F7F4EF] px-6 py-20 md:py-28 lg:py-36">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-12 h-px w-full bg-[rgba(30,58,32,0.15)]" />
                    <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
                        <div>
                            <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                                Before you begin
                            </p>
                            <h2 className="font-satoshi text-4xl leading-[1.1] text-[#1E3A20] md:text-5xl">
                                {safetyNote.heading}
                            </h2>
                        </div>

                        <div className="flex flex-col justify-between gap-10">
                            <p className="font-satoshi text-base font-light leading-relaxed text-light-body md:text-lg">
                                {safetyNote.body}
                            </p>
                            <CtaActionRow>
                                <WhatsAppCta source={whatsAppSource} />
                                <Link
                                    href="/contact"
                                    className="cta-interactive w-full whitespace-nowrap rounded-full border border-[rgba(30,58,32,0.22)] px-8 py-4 text-center font-satoshi text-sm font-medium tracking-wide text-[#1E3A20] sm:w-auto"
                                >
                                    Book Consultation
                                </Link>
                            </CtaActionRow>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#1E3A20] px-6 py-16 md:py-20">
                <div className="mx-auto max-w-5xl">
                    <p className="mb-8 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-dark-supporting">
                        Related reading
                    </p>
                    <div className="grid grid-cols-1 gap-px md:grid-cols-3">
                        {relatedLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="border-t border-solid border-t-[rgba(200,230,201,0.12)] p-6 font-satoshi font-light text-dark-body"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
