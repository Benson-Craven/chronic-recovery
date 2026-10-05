"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import { useBodyScrollLock } from "@/app/hooks/useBodyScrollLock"
import ShineUnderlineEffect from "./UnderlineEffect"
import Button from "./Button"
import MobileMenu from "./MobileMenu"
import ContactModal from "./ContactModal"
import WhatsAppLink from "./WhatsAppLink"

type NavbarProps = {
    className?: string
}

const SCIENCE_LINKS = [
    { href: "/science", label: "The Science", number: "01" },
    { href: "/research", label: "Research Studies", number: "02" },
    { href: "/resources", label: "Useful Links", number: "03" },
    {
        href: "/treatments/pain-reprocessing-therapy",
        label: "Pain Reprocessing Therapy",
        number: "04",
    },
    { href: "/conditions", label: "Conditions", number: "05" },
    { href: "/self-assessment", label: "Self-Assessment", number: "06" },
]

const NAV_LINKS = [
    { href: "/#services", label: "Services" },
    { href: "/info", label: "About" },
    { href: "/success-stories", label: "Success Stories" },
    { href: "/blog", label: "Journal" },
]

export default function Navbar({ className = "" }: NavbarProps) {
    const [isContactOpen, setIsContactOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScienceDropdownOpen, setIsScienceDropdownOpen] = useState(false)

    useBodyScrollLock(isContactOpen || isMobileMenuOpen)

    return (
        <>
            <nav
                className={`sticky top-0 z-50 flex h-16 items-center justify-between px-6 md:h-16 ${className} border-b border-solid border-b-[rgba(30,58,32,0.08)] bg-[#F7F4EF]`}
            >
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/logos/logo-removebg-preview.png"
                        alt="Chronic Pain Recovery Logo"
                        width={796}
                        height={313}
                        sizes="(max-width: 767px) 112px, 128px"
                        className="h-auto w-28 md:w-32"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden flex-1 justify-center lg:flex">
                    <ul className="flex items-center gap-4 xl:gap-10">
                        {/* Science Dropdown */}
                        <li
                            className="relative"
                            onMouseEnter={() => setIsScienceDropdownOpen(true)}
                            onMouseLeave={() => setIsScienceDropdownOpen(false)}
                        >
                            <button className="flex cursor-pointer items-center gap-1.5 border-0 font-satoshi text-xs font-light uppercase tracking-[0.15em] text-[#1E3A20] [background:none]">
                                The Science
                                <motion.svg
                                    animate={{
                                        rotate: isScienceDropdownOpen ? 180 : 0,
                                    }}
                                    transition={{ duration: 0.2 }}
                                    width="8"
                                    height="8"
                                    viewBox="0 0 8 8"
                                    fill="none"
                                    className="opacity-40"
                                >
                                    <path
                                        d="M1 2.5L4 5.5L7 2.5"
                                        stroke="#1E3A20"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </motion.svg>
                            </button>

                            <AnimatePresence>
                                {isScienceDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        transition={{
                                            duration: 0.2,
                                            ease: "easeOut",
                                        }}
                                        className="absolute left-0 top-full z-50 mt-3 min-w-[220px] overflow-hidden rounded-[12px] border border-solid border-[rgba(30,58,32,0.12)] bg-[#F7F4EF] shadow-[0_8px_32px_rgba(30,58,32,0.08)]"
                                    >
                                        {SCIENCE_LINKS.map((link, index) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className={`group flex items-center gap-4 px-5 py-3.5 ${
                                                    index <
                                                    SCIENCE_LINKS.length - 1
                                                        ? "border-b border-solid border-b-[rgba(30,58,32,0.08)]"
                                                        : "border-b-0"
                                                }`}
                                            >
                                                <span className="shrink-0 font-satoshi text-xs font-light tabular-nums text-light-supporting">
                                                    {link.number}
                                                </span>
                                                <span className="font-satoshi text-sm font-light text-[#1E3A20]">
                                                    {link.label}
                                                </span>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>

                        {/* Standard nav links */}
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="font-satoshi text-xs font-light uppercase tracking-[0.15em] text-[#1E3A20] transition-opacity"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Desktop CTA */}
                <div className="hidden items-center gap-3 lg:flex">
                    <WhatsAppLink
                        source="navbar_desktop"
                        className="cta-interactive flex items-center gap-2 rounded-full bg-[#1E3A20] px-5 py-2.5 font-satoshi text-xs font-medium uppercase tracking-[0.08em] text-[#F7F4EF] xl:px-6"
                    >
                        <FaWhatsapp aria-hidden="true" className="h-4 w-4" />
                        <span>WhatsApp Marsha</span>
                    </WhatsAppLink>
                    <motion.button
                        onClick={() => setIsContactOpen(!isContactOpen)}
                        className="cta-interactive rounded-full border border-[#1E3A20] bg-transparent px-5 py-2.5 font-satoshi text-xs font-medium uppercase tracking-[0.08em] text-[#1E3A20] xl:px-6"
                    >
                        Book Consultation
                    </motion.button>
                </div>

                {/* Mobile actions */}
                <div className="ml-auto flex items-center gap-2 lg:hidden">
                    <Link
                        href="/contact"
                        className="cta-interactive hidden items-center justify-center rounded-full border border-[#1E3A20] px-4 py-2.5 font-satoshi text-[0.7rem] font-medium uppercase tracking-[0.08em] text-[#1E3A20] min-[460px]:inline-flex"
                    >
                        Book Consultation
                    </Link>
                    <WhatsAppLink
                        source="navbar_mobile"
                        aria-label="WhatsApp Marsha"
                        className="cta-interactive flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1E3A20] text-[#F7F4EF]"
                    >
                        <FaWhatsapp aria-hidden="true" className="h-5 w-5" />
                    </WhatsAppLink>
                    <MobileMenu
                        isOpen={isMobileMenuOpen}
                        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </div>

                {/* Contact Modal */}
                <ContactModal
                    isOpen={isContactOpen}
                    onClose={() => setIsContactOpen(false)}
                />
            </nav>
        </>
    )
}
