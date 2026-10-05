"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import PageHero from "./sections/PageHero"

export default function Custom404Page() {
    const router = useRouter()
    const [countdown, setCountdown] = useState(10)

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer)
                    router.push("/")
                    return 0
                }
                return prev - 1
            })
        }, 1000)
        return () => clearInterval(timer)
    }, [router])

    const links = [
        { href: "/", label: "Home", description: "Start from the beginning" },
        {
            href: "/info",
            label: "About me",
            description: "Learn about my approach",
        },
        {
            href: "/science",
            label: "The science",
            description: "Understanding chronic pain",
        },
        {
            href: "/contact",
            label: "Contact",
            description: "Get in touch",
        },
    ]

    return (
        <div className="min-h-screen bg-[#F7F4EF]">
            <PageHero
                eyebrow="Error 404"
                description="Just like chronic pain, sometimes things don't end up
                        where they should. Unlike chronic pain, this one is easy
                        to fix."
            >
                <div className="relative mb-4 select-none">
                    <motion.p
                        aria-hidden="true"
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="select-none font-satoshi text-[120px] italic leading-none text-[rgba(200,230,201,0.08)] md:text-[160px]"
                    >
                        404
                    </motion.p>
                    {/* Overlaid headline */}
                    <div className="absolute inset-0 flex items-center">
                        <h1 className="font-satoshi text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl">
                            This page has
                            <br />
                            <em>wandered off.</em>
                        </h1>
                    </div>
                </div>
            </PageHero>

            {/* Quick links — cream */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full bg-[#F7F4EF] px-6 py-20 md:py-28"
            >
                <div className="mx-auto max-w-3xl">
                    <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                        Where to go
                    </p>
                    <h2 className="mb-14 font-satoshi text-4xl leading-[1.1] text-[#1E3A20] md:text-5xl">
                        Let's get you
                        <br />
                        <em>back on track</em>
                    </h2>

                    <div className="h-px w-full bg-[rgba(30,58,32,0.12)]" />

                    {links.map((link, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.3 + index * 0.07,
                                ease: "easeOut",
                            }}
                        >
                            <Link href={link.href}>
                                <div className="group flex items-start gap-6 border-b border-[rgba(30,58,32,0.12)] py-8">
                                    <span className="mt-0.5 shrink-0 font-satoshi text-xs font-light tabular-nums text-light-supporting">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <div className="flex flex-1 items-center justify-between">
                                        <div>
                                            <p className="mb-1 font-satoshi text-base font-medium text-[#1E3A20] md:text-lg">
                                                {link.label}
                                            </p>
                                            <p className="font-satoshi text-sm font-light text-light-supporting">
                                                {link.description}
                                            </p>
                                        </div>
                                        <svg
                                            className="shrink-0 opacity-20 transition-opacity group-hover:opacity-60"
                                            width="14"
                                            height="14"
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
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
            {/* Countdown + CTA — green */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="w-full bg-[#1E3A20] px-6 py-20 md:py-28"
            >
                <div className="mx-auto max-w-3xl">
                    <div className="mb-12 h-px w-full bg-[rgba(200,230,201,0.15)]" />

                    <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
                        {/* Countdown */}
                        <div>
                            <p className="mb-3 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-dark-supporting">
                                Auto-redirecting
                            </p>
                            <div className="flex items-baseline gap-3">
                                <motion.span
                                    key={countdown}
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="font-satoshi text-6xl leading-none text-white"
                                >
                                    {countdown}
                                </motion.span>
                                <span className="font-satoshi text-base font-light text-dark-supporting">
                                    seconds to home
                                </span>
                            </div>
                        </div>

                        {/* CTA buttons */}
                        <div className="flex flex-col gap-3">
                            <Link
                                href="/"
                                className="cta-interactive w-full rounded-full bg-[#F0EBE1] py-4 text-center font-satoshi text-sm font-medium tracking-[0.04em] text-[#1E3A20] md:w-auto md:px-10"
                            >
                                Go to Homepage
                            </Link>
                            <p className="font-satoshi text-sm font-light text-dark-supporting">
                                or call / WhatsApp{" "}
                                <a
                                    href="tel:+353871025108"
                                    className="text-dark-supporting underline underline-offset-2"
                                >
                                    +353 (0) 87-102-5108
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Pull quote */}
                    <div className="mt-16 h-px w-full bg-[rgba(200,230,201,0.15)]" />
                    <p className="mt-12 max-w-xl font-satoshi text-2xl italic leading-snug text-dark-body md:text-3xl">
                        "Still experiencing chronic pain?
                        <br />
                        Unlike this error, it has a solution."
                    </p>
                    <Link
                        href="/contact"
                        className="mt-6 inline-flex items-center gap-2 font-satoshi text-xs font-light uppercase tracking-[0.2em] text-dark-supporting"
                    >
                        Book a consultation
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                        >
                            <path
                                d="M2 10L10 2M10 2H4M10 2V8"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </div>
            </motion.section>
        </div>
    )
}
