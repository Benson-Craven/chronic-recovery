// FIXED & FULLY UPDATED Navbar.tsx — with typing, mobile submenu, no ESLint/prettier errors

"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react"
import Button from "./Button"
import { motion, AnimatePresence } from "framer-motion"
import ShineUnderlineEffect from "./UnderlineEffect"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

type NavbarProps = {
    className?: string
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
    const [isActive, setIsActive] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [isScienceDropdownOpen, setIsScienceDropdownOpen] = useState(false)
    const [isScienceMobileOpen, setIsScienceMobileOpen] = useState(false)

    const toggleSubmenu = () => setIsSubmenuOpen(!isSubmenuOpen)
    const toggleScienceMobile = () => setIsScienceMobileOpen(!isScienceMobileOpen)

    const navbarClassName = `duration-700 sticky top-0 z-50 flex items-center justify-between bg-[#fafafa] p-6 text-textPrimary transition-transform font-Satoshi h-20 md:h-16 translate-y-0 ${className || ""}`

    const menuVariants = {
        hidden: { x: "100%", opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
        exit: { x: "100%", opacity: 0, transition: { duration: 0.2 } },
    }

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 0.5 },
        exit: { opacity: 0 },
    }

    return (
        <nav className={navbarClassName}>
            <div className="flex w-full items-center justify-between">
                {/* Logo */}
                <Link href="/" className="mt-3 flex-shrink-0">
                    <Image src="/logos/Mending_Mindets.png" alt="Mending Mindsets Logo" width={80} height={80} />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden flex-grow items-center justify-center md:flex">
                    <ul className="flex space-x-10 uppercase">
                        <li
                            onMouseEnter={() => setIsScienceDropdownOpen(true)}
                            onMouseLeave={() => setIsScienceDropdownOpen(false)}
                            className="relative cursor-pointer"
                        >
                            <ShineUnderlineEffect>
                                <span>The Science</span>
                            </ShineUnderlineEffect>

                            <AnimatePresence>
                                {isScienceDropdownOpen && (
                                    <motion.ul
                                        className="absolute left-0 top-full z-50 mt-2 w-48 rounded-lg bg-white shadow-lg"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                    >
                                        <li><Link href="/research" className="block px-4 py-2 hover:bg-gray-100">Research Studies</Link></li>
                                        <li><Link href="/resources" className="block px-4 py-2 hover:bg-gray-100">Useful Links</Link></li>
                                        <li><Link href="/conditions" className="block px-4 py-2 hover:bg-gray-100">Conditions</Link></li>
                                        <li><Link href="/self-assessment" className="block px-4 py-2 hover:bg-gray-100">Self-Assessment</Link></li>
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </li>

                        <li><ShineUnderlineEffect><Link href="/#services">Services</Link></ShineUnderlineEffect></li>
                        <li><ShineUnderlineEffect><Link href="/info">About</Link></ShineUnderlineEffect></li>
                    </ul>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="sticky top-0 md:hidden">
                    <button
                        onClick={toggleSubmenu}
                        className="fixed right-4 top-4 z-50 rounded-full bg-textSecondary p-2 text-white"
                    >
                        {isSubmenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                    </button>

                    <AnimatePresence>
                        {isSubmenuOpen && (
                            <>
                                {/* Background Overlay */}
                                <motion.div
                                    className="fixed inset-0 min-h-screen bg-black"
                                    variants={overlayVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    onClick={toggleSubmenu}
                                />

                                {/* Mobile Menu */}
                                <motion.div
                                    className="fixed inset-y-0 right-0 min-h-screen w-full max-w-sm bg-white shadow-lg"
                                    variants={menuVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <div className="flex flex-col">
                                        <ul className="space-y-4 p-8 pt-12">

                                            {/* Logo */}
                                            <li className="mb-4">
                                                <Image src="/logos/Mending_Mindets.png" width={200} height={200} alt="Logo" />
                                            </li>

                                            {/* Mobile Science Dropdown */}
                                            <li>
                                                <button
                                                    onClick={toggleScienceMobile}
                                                    className="flex w-full items-center justify-between rounded-lg px-6 py-4 text-xl font-medium text-gray-900 hover:bg-gray-100"
                                                >
                                                    The Science
                                                    <ChevronDown className={`transition-transform ${isScienceMobileOpen ? "rotate-180" : "rotate-0"}`} />
                                                </button>

                                                <AnimatePresence>
                                                    {isScienceMobileOpen && (
                                                        <motion.ul
                                                            className="ml-6 mt-2 space-y-2 border-l-2 border-gray-200 pl-4"
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                        >
                                                            <li><Link href="/research" onClick={toggleSubmenu} className="block py-2 text-lg">Research Studies</Link></li>
                                                            <li><Link href="/resources" onClick={toggleSubmenu} className="block py-2 text-lg">Useful Links</Link></li>
                                                            <li><Link href="/conditions" onClick={toggleSubmenu} className="block py-2 text-lg">Conditions</Link></li>
                                                            <li><Link href="/self-assessment" onClick={toggleSubmenu} className="block py-2 text-lg">Self-Assessment</Link></li>
                                                        </motion.ul>
                                                    )}
                                                </AnimatePresence>
                                            </li>

                                            <li><Link href="/#services" onClick={toggleSubmenu} className="block rounded-lg px-6 py-4 text-xl hover:bg-gray-100">Services</Link></li>
                                            <li><Link href="/info" onClick={toggleSubmenu} className="block rounded-lg px-6 py-4 text-xl hover:bg-gray-100">About</Link></li>
                                            <li><Link href="/contact" onClick={toggleSubmenu} className="block rounded-lg px-6 py-4 text-xl hover:bg-gray-100">Contact</Link></li>
                                        </ul>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>

                {/* Contact Button */}
                <span className="z-50 hidden md:flex">
                    <Button
                        isActive={isActive}
                        toggleMenu={() => setIsActive(!isActive)}
                    />
                </span>
            </div>
        </nav>
    )
}

export default Navbar
