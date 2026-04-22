"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Custom404Page = () => {
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
        { href: "/contact", label: "Contact", description: "Get in touch" },
    ]

    return (
        <div className="min-h-screen" style={{ backgroundColor: "#F7F4EF" }}>
            {/* Hero — green */}
            <section
                style={{ backgroundColor: "#1E3A20" }}
                className="w-full px-6 py-24 md:py-36"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-3xl"
                >
                    <p
                        className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                        style={{
                            color: "#C8E6C9",
                            fontFamily: "var(--font-dm-sans)",
                        }}
                    >
                        Error 404
                    </p>

                    {/* Ghost 404 number */}
                    <div className="relative mb-4 select-none">
                        <motion.p
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="text-[120px] leading-none md:text-[160px]"
                            style={{
                                fontFamily: "var(--font-dm-serif)",
                                fontStyle: "italic",
                                color: "rgba(200,230,201,0.08)",
                                userSelect: "none",
                            }}
                        >
                            404
                        </motion.p>
                        {/* Overlaid headline */}
                        <div className="absolute inset-0 flex items-center">
                            <h1
                                className="text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl"
                                style={{ fontFamily: "var(--font-dm-serif)" }}
                            >
                                This page has
                                <br />
                                <em>wandered off.</em>
                            </h1>
                        </div>
                    </div>

                    <div
                        className="mt-6 h-px w-full"
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
                        Just like chronic pain, sometimes things don't end up
                        where they should. Unlike chronic pain — this one is
                        easy to fix.
                    </p>
                </motion.div>
            </section>

            {/* Quick links — cream */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ backgroundColor: "#F7F4EF" }}
                className="w-full px-6 py-20 md:py-28"
            >
                <div className="mx-auto max-w-3xl">
                    <p
                        className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                        style={{
                            color: "#1E3A20",
                            fontFamily: "var(--font-dm-sans)",
                        }}
                    >
                        Where to go
                    </p>
                    <h2
                        className="mb-14 text-4xl leading-[1.1] md:text-5xl"
                        style={{
                            fontFamily: "var(--font-dm-serif)",
                            color: "#1E3A20",
                        }}
                    >
                        Let's get you
                        <br />
                        <em>back on track</em>
                    </h2>

                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(30,58,32,0.12)" }}
                    />

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
                                <div
                                    className="group flex items-start gap-6 border-b py-8 transition-opacity hover:opacity-70"
                                    style={{
                                        borderColor: "rgba(30,58,32,0.12)",
                                    }}
                                >
                                    <span
                                        className="mt-0.5 shrink-0 text-xs tabular-nums opacity-30"
                                        style={{
                                            color: "#1E3A20",
                                            fontFamily: "var(--font-dm-sans)",
                                            fontWeight: 300,
                                        }}
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <div className="flex flex-1 items-center justify-between">
                                        <div>
                                            <p
                                                className="mb-1 text-base font-medium md:text-lg"
                                                style={{
                                                    color: "#1E3A20",
                                                    fontFamily:
                                                        "var(--font-dm-sans)",
                                                }}
                                            >
                                                {link.label}
                                            </p>
                                            <p
                                                className="text-sm"
                                                style={{
                                                    color: "rgba(30,58,32,0.5)",
                                                    fontFamily:
                                                        "var(--font-dm-sans)",
                                                    fontWeight: 300,
                                                }}
                                            >
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
                style={{ backgroundColor: "#1E3A20" }}
                className="w-full px-6 py-20 md:py-28"
            >
                <div className="mx-auto max-w-3xl">
                    <div
                        className="mb-12 h-px w-full"
                        style={{ backgroundColor: "rgba(200,230,201,0.15)" }}
                    />

                    <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
                        {/* Countdown */}
                        <div>
                            <p
                                className="mb-3 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                                style={{
                                    color: "#C8E6C9",
                                    fontFamily: "var(--font-dm-sans)",
                                }}
                            >
                                Auto-redirecting
                            </p>
                            <div className="flex items-baseline gap-3">
                                <motion.span
                                    key={countdown}
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-6xl leading-none text-white"
                                    style={{
                                        fontFamily: "var(--font-dm-serif)",
                                    }}
                                >
                                    {countdown}
                                </motion.span>
                                <span
                                    className="text-base opacity-40"
                                    style={{
                                        color: "#C8E6C9",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    seconds to home
                                </span>
                            </div>
                        </div>

                        {/* CTA buttons */}
                        <div className="flex flex-col gap-3">
                            <Link href="/">
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                    }}
                                    className="w-full rounded-full py-4 text-sm font-medium tracking-wide transition-shadow hover:shadow-lg md:w-auto md:px-10"
                                    style={{
                                        backgroundColor: "#F0EBE1",
                                        color: "#1E3A20",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 500,
                                        letterSpacing: "0.04em",
                                    }}
                                >
                                    Go to Homepage
                                </motion.button>
                            </Link>
                            <p
                                className="text-sm"
                                style={{
                                    color: "rgba(200,230,201,0.35)",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 300,
                                }}
                            >
                                or call / WhatsApp{" "}
                                <a
                                    href="tel:+353871025108"
                                    className="underline underline-offset-2 transition-opacity hover:opacity-100"
                                    style={{ color: "rgba(200,230,201,0.6)" }}
                                >
                                    +353 (0) 87-102-5108
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Pull quote */}
                    <div
                        className="mt-16 h-px w-full"
                        style={{ backgroundColor: "rgba(200,230,201,0.15)" }}
                    />
                    <p
                        className="mt-12 max-w-xl text-2xl leading-snug md:text-3xl"
                        style={{
                            fontFamily: "var(--font-dm-serif)",
                            fontStyle: "italic",
                            color: "rgba(200,230,201,0.7)",
                        }}
                    >
                        "Still experiencing chronic pain?
                        <br />
                        Unlike this error — that has a solution."
                    </p>
                    <Link
                        href="/contact"
                        className="mt-6 inline-flex items-center gap-2 transition-opacity hover:opacity-60"
                        style={{
                            color: "rgba(200,230,201,0.5)",
                            fontFamily: "var(--font-dm-sans)",
                            fontWeight: 300,
                            fontSize: "0.75rem",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                        }}
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

export default Custom404Page
