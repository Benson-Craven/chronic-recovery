"use client"

import Link from "next/link"
import { FaFacebook, FaWhatsapp } from "react-icons/fa"

const SITE_LINKS = [
    { name: "Treatment Options", url: "/#treatment" },
    {
        name: "Pain Reprocessing Therapy",
        url: "/treatments/pain-reprocessing-therapy",
    },
    { name: "Pain Types", url: "/conditions" },
    { name: "Long Covid", url: "/conditions/long-covid" },
    {
        name: "Chronic Pain Cork",
        url: "/locations/chronic-pain-management-cork",
    },
    {
        name: "Online Support Ireland",
        url: "/locations/chronic-pain-management-ireland-online",
    },
    { name: "Resources", url: "/resources" },
    { name: "Journal", url: "/blog" },
    { name: "About Me", url: "/info" },
    { name: "The Science", url: "/science" },
    { name: "Self-Assessment", url: "/self-assessment" },
    { name: "Contact", url: "/contact" },
]

const LEGAL_LINKS = [
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Terms of Service", url: "/terms-and-conditions" },
    { name: "Disclaimer", url: "/disclaimer" },
]

const Footer = () => {
    return (
        <footer
            style={{ backgroundColor: "#1E3A20" }}
            className="relative z-20 w-full"
        >
            {/* Main footer body */}
            <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
                {/* Top — brand statement */}
                <div className="mb-16">
                    <p
                        className="mb-4 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                        style={{
                            color: "#C8E6C9",
                            fontFamily: "var(--font-dm-sans)",
                        }}
                    >
                        Chronic Pain Recovery
                    </p>
                    <p
                        className="max-w-md text-3xl leading-snug text-white md:text-4xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        Helping you recover,
                        <br />
                        <em>not just cope.</em>
                    </p>
                </div>

                <div
                    className="h-px w-full"
                    style={{ backgroundColor: "rgba(200,230,201,0.12)" }}
                />

                {/* Middle — links + connect */}
                <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-3">
                    {/* Site links */}
                    <div className="md:col-span-2">
                        <p
                            className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-40"
                            style={{
                                color: "#C8E6C9",
                                fontFamily: "var(--font-dm-sans)",
                            }}
                        >
                            Pages
                        </p>
                        <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
                            {SITE_LINKS.map(({ name, url }) => (
                                <li key={name}>
                                    <Link
                                        href={url}
                                        className="text-sm transition-opacity hover:opacity-60"
                                        style={{
                                            color: "rgba(200,230,201,0.65)",
                                            fontFamily: "var(--font-dm-sans)",
                                            fontWeight: 300,
                                        }}
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <p
                            className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-40"
                            style={{
                                color: "#C8E6C9",
                                fontFamily: "var(--font-dm-sans)",
                            }}
                        >
                            Connect
                        </p>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="https://www.facebook.com/chronicpainrecoveryireland"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="flex items-center gap-3 transition-opacity hover:opacity-60"
                                >
                                    <FaFacebook
                                        className="shrink-0"
                                        style={{
                                            color: "rgba(200,230,201,0.5)",
                                            width: 16,
                                            height: 16,
                                        }}
                                    />
                                    <span
                                        className="text-sm"
                                        style={{
                                            color: "rgba(200,230,201,0.65)",
                                            fontFamily: "var(--font-dm-sans)",
                                            fontWeight: 300,
                                        }}
                                    >
                                        Facebook
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+353871025108"
                                    className="flex items-center gap-3 transition-opacity hover:opacity-60"
                                >
                                    <FaWhatsapp
                                        className="shrink-0"
                                        style={{
                                            color: "rgba(200,230,201,0.5)",
                                            width: 16,
                                            height: 16,
                                        }}
                                    />
                                    <span
                                        className="text-sm"
                                        style={{
                                            color: "rgba(200,230,201,0.65)",
                                            fontFamily: "var(--font-dm-sans)",
                                            fontWeight: 300,
                                        }}
                                    >
                                        +353 (0) 87-102-5108
                                    </span>
                                </a>
                            </li>
                        </ul>

                        {/* CTA */}
                        <Link href="/contact" className="mt-8 block">
                            <button
                                className="w-full rounded-full py-3 text-xs font-medium uppercase tracking-wide transition-opacity hover:opacity-90"
                                style={{
                                    backgroundColor: "#F0EBE1",
                                    color: "#1E3A20",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 500,
                                    letterSpacing: "0.08em",
                                }}
                            >
                                Book Consultation
                            </button>
                        </Link>
                    </div>
                </div>

                <div
                    className="h-px w-full"
                    style={{ backgroundColor: "rgba(200,230,201,0.12)" }}
                />

                {/* Bottom bar */}
                <div className="flex flex-col gap-4 pt-8 md:flex-row md:items-center md:justify-between">
                    {/* Copyright */}
                    <p
                        className="text-xs"
                        style={{
                            color: "rgba(200,230,201,0.35)",
                            fontFamily: "var(--font-dm-sans)",
                            fontWeight: 300,
                        }}
                    >
                        © {new Date().getFullYear()}{" "}
                        <Link
                            href="/"
                            className="transition-opacity hover:opacity-60"
                            style={{ color: "rgba(200,230,201,0.5)" }}
                        >
                            Chronic Pain Recovery
                        </Link>
                    </p>

                    {/* Legal links */}
                    <nav>
                        <ul className="flex flex-wrap gap-5">
                            {LEGAL_LINKS.map(({ name, url }) => (
                                <li key={name}>
                                    <Link
                                        href={url}
                                        className="text-xs transition-opacity hover:opacity-60"
                                        style={{
                                            color: "rgba(200,230,201,0.35)",
                                            fontFamily: "var(--font-dm-sans)",
                                            fontWeight: 300,
                                        }}
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Made by */}
                    <p
                        className="text-xs"
                        style={{
                            color: "rgba(200,230,201,0.25)",
                            fontFamily: "var(--font-dm-sans)",
                            fontWeight: 300,
                        }}
                    >
                        Made by{" "}
                        <Link
                            href="https://benson.codes"
                            className="transition-opacity hover:opacity-60"
                            style={{ color: "rgba(200,230,201,0.4)" }}
                        >
                            Code by Benson
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
