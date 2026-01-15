"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useBodyScrollLock } from "@/app/hooks/useBodyScrollLock"
import { dropdown } from "@/app/lib/animations"
import ShineUnderlineEffect from "./UnderlineEffect"
import Button from "./Button"
import MobileMenu from "./MobileMenu"
import ContactModal from "./ContactModal"

type NavbarProps = {
    className?: string
}

const SCIENCE_LINKS = [
    { href: "/research", label: "Research Studies" },
    { href: "/resources", label: "Useful Links" },
    { href: "/conditions", label: "Conditions" },
    { href: "/self-assessment", label: "Self-Assessment" },
]

export default function Navbar({ className = "" }: NavbarProps) {
    const [isContactOpen, setIsContactOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScienceDropdownOpen, setIsScienceDropdownOpen] = useState(false)

    // Lock body scroll when any overlay is open
    useBodyScrollLock(isContactOpen || isMobileMenuOpen)

    return (
        <nav
            className={`font-Satoshi sticky top-0 z-50 flex h-16 items-center justify-between bg-[#fafafa] px-6 text-textPrimary md:h-16 ${className}`}
        >
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
                <Image
                    src="/logos/Mending_Mindets.png"
                    alt="Mending Mindsets"
                    width={80}
                    height={80}
                    className="h-auto w-16 md:w-20"
                    priority
                />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden flex-1 justify-center md:flex">
                <ul className="flex items-center gap-10 uppercase">
                    {/* Science Dropdown */}
                    <li
                        className="relative"
                        onMouseEnter={() => setIsScienceDropdownOpen(true)}
                        onMouseLeave={() => setIsScienceDropdownOpen(false)}
                    >
                        <Link href="/science">
                            <ShineUnderlineEffect>
                                <span className="cursor-pointer">
                                    The Science
                                </span>
                            </ShineUnderlineEffect>
                        </Link>

                        <AnimatePresence>
                            {isScienceDropdownOpen && (
                                <motion.ul
                                    className="absolute left-0 top-full z-50 mt-2 min-w-[200px] overflow-hidden rounded-lg bg-white py-2 shadow-lg"
                                    variants={dropdown}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    {SCIENCE_LINKS.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="block px-4 py-2 text-sm normal-case text-gray-700 transition-colors hover:bg-gray-100"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </li>

                    <li>
                        <ShineUnderlineEffect>
                            <Link href="/#services">Services</Link>
                        </ShineUnderlineEffect>
                    </li>

                    <li>
                        <ShineUnderlineEffect>
                            <Link href="/info">About</Link>
                        </ShineUnderlineEffect>
                    </li>
                </ul>
            </div>

            {/* Desktop Contact Button */}
            <div className="hidden md:block">
                <Button
                    isActive={isContactOpen}
                    toggleMenu={() => setIsContactOpen(!isContactOpen)}
                />
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
    )
}
