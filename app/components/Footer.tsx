"use client"

import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaPhone, FaWhatsapp } from "react-icons/fa"
import { authorProfile } from "../lib/seo"
import { PHONE_DISPLAY } from "../lib/contact"
import TrackedPhoneLink from "./TrackedPhoneLink"
import WhatsAppLink from "./WhatsAppLink"

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
    {
        name: "Online Support Dublin",
        url: "/locations/chronic-pain-management-dublin-online",
    },
    { name: "Resources", url: "/resources" },
    { name: "Journal", url: "/blog" },
    { name: "About Me", url: "/info" },
    { name: "Success Stories", url: "/success-stories" },
    { name: "The Science", url: "/science" },
    { name: "Self-Assessment", url: "/self-assessment" },
    { name: "Contact", url: "/contact" },
]

const LEGAL_LINKS = [
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Terms of Service", url: "/terms-and-conditions" },
    { name: "Disclaimer", url: "/disclaimer" },
]

export default function Footer() {
    return (
        <footer className="relative z-20 w-full bg-[#1E3A20]">
            {/* Main footer body */}
            <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
                {/* Top — brand statement */}
                <div className="mb-16">
                    <p className="mb-4 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-dark-supporting">
                        Chronic Pain Recovery
                    </p>
                    <p className="max-w-md font-satoshi text-3xl leading-snug text-white md:text-4xl">
                        Helping you recover,
                        <br />
                        <em>not just cope.</em>
                    </p>
                </div>

                <div className="h-px w-full bg-[rgba(200,230,201,0.12)]" />

                {/* Middle — links + connect */}
                <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-3">
                    {/* Site links */}
                    <div className="md:col-span-2">
                        <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-dark-supporting">
                            Pages
                        </p>
                        <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
                            {SITE_LINKS.map(({ name, url }) => (
                                <li key={name}>
                                    <Link
                                        href={url}
                                        className="font-satoshi text-sm font-light text-dark-body"
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-dark-supporting">
                            Connect
                        </p>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="https://www.facebook.com/chronicpainrecoveryireland"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="flex items-center gap-3"
                                >
                                    <FaFacebook className="h-[16px] w-[16px] shrink-0 text-dark-supporting" />
                                    <span className="font-satoshi text-sm font-light text-dark-body">
                                        Facebook
                                    </span>
                                </a>
                            </li>
                            <li>
                                <WhatsAppLink
                                    source="footer_connect"
                                    className="flex items-center gap-3"
                                >
                                    <FaWhatsapp
                                        aria-hidden="true"
                                        className="h-[16px] w-[16px] shrink-0 text-dark-supporting"
                                    />
                                    <span className="font-satoshi text-sm font-light text-dark-body">
                                        WhatsApp Marsha
                                    </span>
                                </WhatsAppLink>
                            </li>
                            <li>
                                <TrackedPhoneLink
                                    source="footer_connect"
                                    className="flex items-center gap-3"
                                >
                                    <FaPhone
                                        aria-hidden="true"
                                        className="h-[14px] w-[14px] shrink-0 rotate-90 text-dark-supporting"
                                    />
                                    <span className="font-satoshi text-sm font-light text-dark-body">
                                        {PHONE_DISPLAY}
                                    </span>
                                </TrackedPhoneLink>
                            </li>
                            <li>
                                <Link
                                    href={authorProfile.atnsUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="flex items-center gap-3"
                                >
                                    <Image
                                        src="/atns-logo.webp"
                                        alt="Association for the Treatment of Neuroplastic Symptoms logo"
                                        width={32}
                                        height={32}
                                        className="h-8 w-8 shrink-0 object-contain"
                                    />
                                    <span className="font-satoshi text-sm font-light text-dark-body">
                                        My ATNS profile
                                    </span>
                                </Link>
                            </li>
                        </ul>

                        {/* CTA */}
                        <div className="mt-8 space-y-3">
                            <WhatsAppLink
                                source="footer_cta"
                                className="cta-interactive flex w-full items-center justify-center gap-2 rounded-full bg-[#F0EBE1] py-3 font-satoshi text-xs font-medium uppercase tracking-[0.08em] text-[#1E3A20]"
                            >
                                <FaWhatsapp
                                    aria-hidden="true"
                                    className="h-4 w-4"
                                />
                                WhatsApp Marsha
                            </WhatsAppLink>
                            <Link
                                href="/contact"
                                className="cta-interactive flex w-full items-center justify-center rounded-full border border-[rgba(240,235,225,0.65)] py-3 font-satoshi text-xs font-medium uppercase tracking-[0.08em] text-[#F0EBE1]"
                            >
                                Book Consultation
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="h-px w-full bg-[rgba(200,230,201,0.12)]" />

                {/* Bottom bar */}
                <div className="flex flex-col gap-4 pt-8 md:flex-row md:items-center md:justify-between">
                    {/* Copyright */}
                    <p className="font-satoshi text-xs font-light text-dark-supporting">
                        © {new Date().getFullYear()}{" "}
                        <Link
                            href="/"
                            className="text-dark-supporting transition-opacity"
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
                                        className="font-satoshi text-xs font-light text-dark-supporting"
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Made by */}
                    <p className="font-satoshi text-xs font-light text-dark-supporting">
                        Made by{" "}
                        <Link
                            href="https://benson.codes"
                            className="text-dark-supporting transition-opacity"
                        >
                            Code by Benson
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}
