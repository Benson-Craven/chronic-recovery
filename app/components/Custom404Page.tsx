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

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    }

    const floatAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    }

    return (
        <div className="font-Satoshi flex min-h-screen items-center justify-center bg-gradient-to-b from-[#fafafa] to-gray-100 px-4 py-12">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    {/* Animated 404 Number */}
                    <motion.div variants={fadeInUp} animate={floatAnimation}>
                        <h1 className="text-[150px] font-bold leading-none text-textSecondary opacity-20 md:text-[200px]">
                            404
                        </h1>
                    </motion.div>

                    {/* Main Message */}
                    <motion.div variants={fadeInUp} className="space-y-4">
                        <h2 className="text-3xl font-bold text-textPrimary md:text-4xl lg:text-5xl">
                            This Page Seems to Have Wandered Off
                        </h2>
                        <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-700">
                            Just like chronic pain, sometimes things don't end
                            up where they should be. But unlike chronic pain,
                            this is easy to fix!
                        </p>
                    </motion.div>

                    {/* Helpful Message Card */}
                    <motion.div
                        variants={fadeInUp}
                        className="mx-auto max-w-2xl rounded-[25px] border-2 border-black bg-white p-8 shadow-lg md:p-10"
                    >
                        <h3 className="mb-6 text-2xl font-semibold text-textPrimary">
                            Let's Get You Back on Track
                        </h3>

                        <div className="mb-8 space-y-4 text-left">
                            <p className="text-lg text-gray-700">
                                The page you're looking for might have been:
                            </p>
                            <ul className="space-y-2 pl-6 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1">•</span>
                                    <span>Moved to a different location</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1">•</span>
                                    <span>Removed from our site</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1">•</span>
                                    <span>Or the URL might be mistyped</span>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className="mb-8 grid gap-4 md:grid-cols-2">
                            {[
                                {
                                    href: "/",
                                    label: "Home",

                                    description: "Start from the beginning",
                                },
                                {
                                    href: "/info",
                                    label: "About Me",

                                    description: "Learn about my approach",
                                },
                                {
                                    href: "/science",
                                    label: "The Science",

                                    description: "Understanding chronic pain",
                                },
                                {
                                    href: "/contact",
                                    label: "Contact",

                                    description: "Get in touch with me",
                                },
                            ].map((link, index) => (
                                <Link key={index} href={link.href}>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="cursor-pointer rounded-lg border-2 border-gray-200 bg-gray-50 p-4 text-left transition-all hover:border-textSecondary hover:bg-white hover:shadow-md"
                                    >
                                        <div className="mb-2 flex items-center gap-2">
                                            <span className="font-semibold text-textPrimary">
                                                {link.label}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            {link.description}
                                        </p>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>

                        {/* Auto-redirect Notice */}
                        <motion.div
                            variants={fadeInUp}
                            className="rounded-lg bg-gradient-to-r from-textSecondary to-gray-700 p-4 text-white"
                        >
                            <p className="text-sm">
                                Redirecting to home page in{" "}
                                <span className="text-xl font-bold">
                                    {countdown}
                                </span>{" "}
                                seconds...
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Main CTA */}
                    <motion.div variants={fadeInUp} className="space-y-4">
                        <Link href="/">
                            <button className="rounded-full bg-textSecondary px-10 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg">
                                Go to Homepage
                            </button>
                        </Link>

                        <p className="text-gray-600">
                            Or call me directly:{" "}
                            <a
                                href="tel:+353892335106"
                                className="font-bold text-textSecondary hover:underline"
                            >
                                +353 (0) 89-233-5106
                            </a>
                        </p>
                    </motion.div>

                    {/* Helpful Message */}
                    <motion.div
                        variants={fadeInUp}
                        className="mx-auto max-w-xl rounded-lg border-l-4 border-textSecondary bg-white p-6 text-left"
                    >
                        <h4 className="mb-2 font-semibold text-textPrimary">
                            Still experiencing chronic pain?
                        </h4>
                        <p className="mb-3 text-gray-700">
                            Don't let a wrong turn stop you from finding relief.
                            Unlike this 404 error, your chronic pain has a
                            solution.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center font-semibold text-textSecondary hover:underline"
                        >
                            Book a free consultation
                            <svg
                                className="ml-2 h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Custom404Page
