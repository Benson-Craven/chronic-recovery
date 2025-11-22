"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react"
import Button from "./Button"
import { motion, AnimatePresence } from "framer-motion"
import ShineUnderlineEffect from "./UnderlineEffect"
import Image from "next/image"
import { Menu, X } from "lucide-react"

type NavbarProps = {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    const [isActive, setIsActive] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [showThankYou, setShowThankYou] = useState(false)
    const [messageLength, setMessageLength] = useState(0)
    const MAX_CHARS = 500

    useEffect(() => {
        document.body.style.overflow = isSubmenuOpen || isActive ? "hidden" : "auto"
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isSubmenuOpen, isActive])

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value
        setMessageLength(text.length > MAX_CHARS ? MAX_CHARS : text.length)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const formData = new FormData(form)

        try {
            const res = await fetch("/api/sendEmail", {
                method: "POST",
                body: JSON.stringify({
                    name: formData.get("name"),
                    email: formData.get("email"),
                    phone: formData.get("phone"),
                    message: formData.get("message"),
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })

            const json = await res.json()
            console.log(json)
            form.reset()
            setMessageLength(0)

            setShowThankYou(true)
            setTimeout(() => {
                setIsActive(false)
                setTimeout(() => setShowThankYou(false), 500)
            }, 2000)
        } catch (error) {
            console.log(error)
            alert("There was an error submitting your enquiry. Please try again.")
        }
    }

    const navbarClassName = `duration-700 sticky top-0 z-50 flex items-center justify-between bg-[#fafafa] p-6 text-textPrimary transition-transform font-Satoshi h-20 md:h-16 translate-y-0 ${className}`

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

    const toggleSubmenu = () => setIsSubmenuOpen(!isSubmenuOpen)

    return (
        <nav className={navbarClassName}>
            <div className="flex w-full items-center justify-between">
                <Link href="/" className="mt-3 flex-shrink-0">
                    <Image
                        src="/logos/Mending_Mindets.png"
                        alt="Mending Mindsets Logo"
                        width={80}
                        height={80}
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden flex-grow items-center justify-center md:flex">
                    <ul className="flex space-x-10 uppercase">
                        <li className="relative">
                            <Link href="/science">
                                <ShineUnderlineEffect>
                                    <span className="cursor-pointer">The Science</span>
                                </ShineUnderlineEffect>
                            </Link>
                            <ul className="absolute left-0 top-full mt-2 w-48 rounded-lg bg-white shadow-lg">
                                <li>
                                    <Link href="/science" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        The Science
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/research" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Research Studies
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Useful Links
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/conditions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/self-assessment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Self-Assessment
                                    </Link>
                                </li>
                            </ul>
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

                {/* Mobile Menu */}
                <div className="sticky top-0 md:hidden">
                    <button
                        onClick={toggleSubmenu}
                        className="fixed right-4 top-4 z-50 flex items-center justify-center rounded-full bg-textSecondary p-2 text-white hover:bg-opacity-90"
                    >
                        {isSubmenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                    </button>

                    <AnimatePresence>
                        {isSubmenuOpen && (
                            <>
                                <motion.div
                                    className="fixed inset-0 min-h-screen bg-black"
                                    variants={overlayVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    onClick={toggleSubmenu}
                                />

                                <motion.div
                                    className="fixed inset-y-0 right-0 min-h-screen w-full max-w-sm bg-white shadow-lg"
                                    variants={menuVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <div className="flex flex-col">
                                        <div className="flex-1">
                                            <ul className="space-y-4 p-8 pt-12">
                                                <li className="mb-2">
                                                    <Image
                                                        src="/logos/Mending_Mindets.png"
                                                        alt="Mending Mindsets Logo"
                                                        width={250}
                                                        height={250}
                                                    />
                                                </li>

                                                {/* Expanded Science submenu */}
                                                <li>
                                                    <Link
                                                        href="/science"
                                                        className="block rounded-lg px-6 py-4 text-xl font-medium text-gray-900 hover:bg-gray-100"
                                                        onClick={toggleSubmenu}
                                                    >
                                                        The Science
                                                    </Link>
                                                    <ul className="ml-4 mt-2 space-y-1">
                                                        <li>
                                                            <Link
                                                                href="/science"
                                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                                                                onClick={toggleSubmenu}
                                                            >
                                                                The Science
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="/research"
                                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                                                                onClick={toggleSubmenu}
                                                            >
                                                                Research Studies
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="/resources"
                                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                                                                onClick={toggleSubmenu}
                                                            >
                                                                Useful Links
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="/conditions"
                                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                                                                onClick={toggleSubmenu}
                                                            >
                                                                Conditions
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="/self-assessment"
                                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                                                                onClick={toggleSubmenu}
                                                            >
                                                                Self-Assessment
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <Link
                                                        href="/#services"
                                                        className="block rounded-lg px-6 py-4 text-xl font-medium text-gray-900 hover:bg-gray-100"
                                                        onClick={toggleSubmenu}
                                                    >
                                                        Services
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/info"
                                                        className="block rounded-lg px-6 py-4 text-xl font-medium text-gray-900 hover:bg-gray-100"
                                                        onClick={toggleSubmenu}
                                                    >
                                                        About
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/contact"
                                                        className="block rounded-lg px-6 py-4 text-xl font-medium text-gray-900 hover:bg-gray-100"
                                                        onClick={toggleSubmenu}
                                                    >
                                                        Contact
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>

                {/* Contact Form Toggle Button */}
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
