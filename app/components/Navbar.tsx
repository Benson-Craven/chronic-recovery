"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useBodyScrollLock } from "@/app/hooks/useBodyScrollLock"
import ShineUnderlineEffect from "./UnderlineEffect"
import Button from "./Button"
import MobileMenu from "./MobileMenu"
import ContactModal from "./ContactModal"

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
    {
        href: "/treatments/pain-rehabilitation",
        label: "Pain Rehabilitation",
        number: "05",
    },
    { href: "/conditions", label: "Conditions", number: "06" },
    { href: "/self-assessment", label: "Self-Assessment", number: "07" },
]

const NAV_LINKS = [
    { href: "/#services", label: "Services" },
    { href: "/info", label: "About" },
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
                className={`sticky top-0 z-50 flex h-16 items-center justify-between px-6 md:h-16 ${className}`}
                style={{
                    backgroundColor: "#F7F4EF",
                    borderBottom: "1px solid rgba(30,58,32,0.08)",
                }}
            >
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/logos/Mending_Mindets.png"
                        alt="Mending Mindsets"
                        width={80}
                        height={80}
                        className="h-auto w-14 md:w-16"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden flex-1 justify-center md:flex">
                    <ul className="flex items-center gap-10">
                        {/* Science Dropdown */}
                        <li
                            className="relative"
                            onMouseEnter={() => setIsScienceDropdownOpen(true)}
                            onMouseLeave={() => setIsScienceDropdownOpen(false)}
                        >
                            <button
                                className="flex items-center gap-1.5 transition-opacity hover:opacity-60"
                                style={{
                                    color: "#1E3A20",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 300,
                                    fontSize: "0.75rem",
                                    letterSpacing: "0.15em",
                                    textTransform: "uppercase",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                }}
                            >
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
                                    style={{ opacity: 0.4 }}
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
                                        className="absolute left-0 top-full z-50 mt-3 overflow-hidden"
                                        style={{
                                            backgroundColor: "#F7F4EF",
                                            border: "1px solid rgba(30,58,32,0.12)",
                                            borderRadius: "12px",
                                            minWidth: "220px",
                                            boxShadow:
                                                "0 8px 32px rgba(30,58,32,0.08)",
                                        }}
                                    >
                                        {SCIENCE_LINKS.map((link, index) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className="group flex items-center gap-4 px-5 py-3.5 transition-opacity hover:opacity-60"
                                                style={{
                                                    borderBottom:
                                                        index <
                                                        SCIENCE_LINKS.length - 1
                                                            ? "1px solid rgba(30,58,32,0.08)"
                                                            : "none",
                                                }}
                                            >
                                                <span
                                                    className="shrink-0 text-xs tabular-nums opacity-30"
                                                    style={{
                                                        color: "#1E3A20",
                                                        fontFamily:
                                                            "var(--font-dm-sans)",
                                                        fontWeight: 300,
                                                    }}
                                                >
                                                    {link.number}
                                                </span>
                                                <span
                                                    className="text-sm"
                                                    style={{
                                                        color: "#1E3A20",
                                                        fontFamily:
                                                            "var(--font-dm-sans)",
                                                        fontWeight: 300,
                                                    }}
                                                >
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
                                    className="transition-opacity hover:opacity-60"
                                    style={{
                                        color: "#1E3A20",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                        fontSize: "0.75rem",
                                        letterSpacing: "0.15em",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <motion.button
                        onClick={() => setIsContactOpen(!isContactOpen)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                        }}
                        className="rounded-full px-6 py-2.5 text-xs font-medium tracking-wide transition-shadow hover:shadow-md"
                        style={{
                            backgroundColor: "#1E3A20",
                            color: "#F7F4EF",
                            fontFamily: "var(--font-dm-sans)",
                            fontWeight: 500,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                        }}
                    >
                        Book Consultation
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <MobileMenu
                    isOpen={isMobileMenuOpen}
                    onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />

                {/* Contact Modal */}
                <ContactModal
                    isOpen={isContactOpen}
                    onClose={() => setIsContactOpen(false)}
                />
            </nav>
        </>
    )
}
