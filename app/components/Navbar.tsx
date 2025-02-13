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
    const [isScienceDropdownOpen, setIsScienceDropdownOpen] = useState(false)
    const MAX_CHARS = 500

    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isActive])

    useEffect(() => {
        if (isSubmenuOpen) {
            document.documentElement.style.overflow = "hidden"
            document.body.style.overflow = "hidden"
        } else {
            document.documentElement.style.overflow = "auto"
            document.body.style.overflow = "auto"
        }

        return () => {
            document.documentElement.style.overflow = "auto"
            document.body.style.overflow = "auto"
        }
    }, [isSubmenuOpen])

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value
        setMessageLength(text.length)

        if (text.length > MAX_CHARS) {
            e.target.value = text.slice(0, MAX_CHARS)
            setMessageLength(MAX_CHARS)
        }
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
                setTimeout(() => {
                    setShowThankYou(false)
                }, 500)
            }, 2000)
        } catch (error) {
            console.log(error)
            alert(
                "There was an error submitting your enquiry. Please try again.",
            )
        }
    }

    const navbarClassName = `duration-700 sticky top-0 z-50 flex items-center justify-between bg-[#fafafa] p-6 text-textPrimary transition-transform font-Satoshi h-20 md:h-16 translate-y-0 ${className}`

    const menu = {
        open: {
            opacity: 1,
            width: "calc(100vw - 40px)",
            height: "calc(100vh - 40px)",
            top: "10px",
            right: "10px",
            transition: {
                duration: 0.75,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
            },
        },
        closed: {
            opacity: 0,
            width: "100px",
            height: "40px",
            top: "15px",
            right: "15px",
            transition: {
                duration: 0.75,
                delay: 0.35,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
            },
        },
    }

    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
            },
        },
    }

    // Updated mobile menu variants for side slide
    const menuVariants = {
        hidden: {
            x: "100%",
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
            },
        },
        exit: {
            x: "100%",
            opacity: 0,
            transition: {
                duration: 0.2,
            },
        },
    }

    // Overlay variants for background dim
    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 0.5 },
        exit: { opacity: 0 },
    }

    const toggleSubmenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen)
    }

    const toggleScienceDropdown = () => {
        setIsScienceDropdownOpen(!isScienceDropdownOpen)
    }

    return (
        <nav
            className={navbarClassName}
            style={{
                transitionTimingFunction: "cubic-bezier(0.64, 0, 0.35, 1)",
            }}
        >
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
                        <li
                            onMouseEnter={() => setIsScienceDropdownOpen(true)}
                            onMouseLeave={() => setIsScienceDropdownOpen(false)}
                            className="relative"
                        >
                            <Link href="/science">
                                <ShineUnderlineEffect>
                                    <span
                                        onClick={toggleScienceDropdown}
                                        className="cursor-pointer"
                                    >
                                        The Science
                                    </span>
                                </ShineUnderlineEffect>
                            </Link>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {isScienceDropdownOpen && (
                                    <motion.ul
                                        className="absolute left-0 top-full z-50 mt-2 w-48 rounded-lg bg-white shadow-lg"
                                        variants={menuVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                    >
                                        <li>
                                            <Link
                                                href="/research"
                                                className="block rounded-md px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                                            >
                                                Research Studies
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/resources"
                                                className="block rounded-md px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                                            >
                                                Useful Links
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/conditions"
                                                className="block rounded-md px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                                            >
                                                Conditions
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/self-assessment"
                                                className="block rounded-md px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                                            >
                                                Self-Assessment
                                            </Link>
                                        </li>
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

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <button
                        onClick={toggleSubmenu}
                        className="fixed right-4 top-4 z-50 flex items-center justify-center rounded-full bg-textSecondary p-2 text-white transition-colors hover:bg-opacity-90"
                    >
                        {isSubmenuOpen ? (
                            <X className="h-8 w-8" />
                        ) : (
                            <Menu className="h-8 w-8" />
                        )}
                    </button>

                    <AnimatePresence>
                        {isSubmenuOpen && (
                            <>
                                {/* Overlay */}
                                <motion.div
                                    className="fixed inset-0 min-h-screen bg-black"
                                    variants={overlayVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    onClick={toggleSubmenu}
                                />

                                {/* Menu */}
                                <motion.div
                                    className="fixed inset-y-0 right-0 min-h-screen w-full max-w-sm bg-white shadow-lg md:hidden"
                                    variants={menuVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <div className="flex flex-col">
                                        <div className="flex-1">
                                            <ul className="space-y-4 p-8 pt-[20vh]">
                                                <li>
                                                    <li className="mb-2">
                                                        <Image
                                                            src="/logos/Mending_Mindets.png"
                                                            alt="Mending Mindsets Logo"
                                                            width={250}
                                                            height={250}
                                                        />
                                                    </li>
                                                    <Link
                                                        href="/science"
                                                        className="block rounded-lg px-6 py-4 text-xl font-medium text-gray-900 transition-colors hover:bg-gray-100"
                                                        onClick={toggleSubmenu}
                                                    >
                                                        The Science
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/#services"
                                                        className="block rounded-lg px-6 py-4 text-xl font-medium text-gray-900 transition-colors hover:bg-gray-100"
                                                        onClick={toggleSubmenu}
                                                    >
                                                        Services
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/info"
                                                        className="block rounded-lg px-6 py-4 text-xl font-medium text-gray-900 transition-colors hover:bg-gray-100"
                                                        onClick={toggleSubmenu}
                                                    >
                                                        About
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/contact"
                                                        className="block rounded-lg px-6 py-4 text-xl font-medium text-gray-900 transition-colors hover:bg-gray-100"
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

                {/* Contact Form Modal */}
                <motion.div
                    className="fixed z-50 hidden flex-col items-center justify-center rounded-[25px] border-2 border-black bg-white shadow-lg md:flex md:bg-textSecondary"
                    variants={menu}
                    animate={isActive ? "open" : "closed"}
                    initial="closed"
                >
                    <AnimatePresence>
                        {isActive && (
                            <motion.div
                                className="h-full w-full"
                                variants={formVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                {showThankYou ? (
                                    <motion.div
                                        className="flex h-full w-full items-center justify-center rounded-[25px] bg-textSecondary p-12 text-center"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                    >
                                        <div className="text-white">
                                            <h2 className="mb-4 text-3xl font-medium">
                                                Thank you for your enquiry!
                                            </h2>
                                            <p>
                                                We'll get back to you as soon as
                                                possible.
                                            </p>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        className="h-full w-full space-y-4"
                                        onSubmit={handleSubmit}
                                        onWheel={(e) => e.preventDefault()}
                                    >
                                        <div className="flex h-full w-full rounded-[25px] bg-textSecondary">
                                            {/* Left side */}
                                            <div className="hidden flex-col justify-center p-12 text-[#3C3C3C] md:flex md:w-1/2">
                                                <h1 className="mb-6 text-6xl">
                                                    Contact us today
                                                </h1>
                                                <div className="mb-10 h-[1px] bg-black opacity-10" />
                                                <p className="mb-4">
                                                    Please fill out the form to
                                                    learn more about Chronic
                                                    Pain Recovery and how it can
                                                    be applied to your everyday
                                                    life.
                                                </p>
                                                <p className="mb-4">
                                                    We will get back to you as
                                                    quickly as we can.
                                                </p>
                                            </div>

                                            {/* Right side */}
                                            <div className="flex w-full flex-col justify-center rounded-[25px] bg-white p-12 md:w-1/2">
                                                <span className="space-y-6">
                                                    <h1 className="mb-6 text-3xl font-medium md:hidden">
                                                        Contact us today
                                                    </h1>

                                                    <div className="h-[1px] bg-black opacity-10 md:hidden"></div>

                                                    <div>
                                                        <label
                                                            htmlFor="name"
                                                            className="mb-2 block"
                                                        >
                                                            Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            required
                                                            className="w-full rounded border border-gray-300 p-2"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label
                                                            htmlFor="email"
                                                            className="mb-2 block"
                                                        >
                                                            Email *
                                                        </label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            id="email"
                                                            required
                                                            className="w-full rounded border border-gray-300 p-2"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label
                                                            htmlFor="phone"
                                                            className="mb-2 block"
                                                        >
                                                            Phone *
                                                        </label>
                                                        <input
                                                            type="tel"
                                                            id="phone"
                                                            name="phone"
                                                            required
                                                            className="w-full rounded border border-gray-300 p-2"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label
                                                            htmlFor="message"
                                                            className="mb-2 block"
                                                        >
                                                            Message
                                                        </label>
                                                        <textarea
                                                            id="message"
                                                            name="message"
                                                            rows={4}
                                                            className="w-full rounded border border-gray-300 p-2"
                                                            onChange={
                                                                handleMessageChange
                                                            }
                                                            maxLength={
                                                                MAX_CHARS
                                                            }
                                                        ></textarea>
                                                        <div className="mt-1 text-sm text-gray-500">
                                                            {messageLength}/
                                                            {MAX_CHARS}{" "}
                                                            characters
                                                        </div>
                                                    </div>
                                                    <button
                                                        type="submit"
                                                        className="transition-color rounded-full bg-textSecondary px-6 py-2 text-white"
                                                    >
                                                        Submit
                                                    </button>
                                                    <p>
                                                        By continuing, you agree
                                                        to our Terms &
                                                        Conditions and our
                                                        Privacy Policy.
                                                    </p>
                                                </span>
                                            </div>
                                        </div>
                                    </motion.form>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Contact Form Toggle Button */}
                <span className="z-50 hidden md:flex">
                    <Button
                        isActive={isActive}
                        toggleMenu={() => {
                            setIsActive(!isActive)
                        }}
                    />
                </span>
            </div>
        </nav>
    )
}

export default Navbar
