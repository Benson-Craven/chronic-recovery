"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react"
import Button from "./Button"
import { motion, AnimatePresence } from "framer-motion"
import ShineUnderlineEffect from "./UnderlineEffect"
import Image from "next/image"

type NavbarProps = {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    const [isActive, setIsActive] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

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
                    message: formData.get("message"),
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })

            const json = await res.json()

            console.log(json)

            form.reset()
        } catch (error) {
            console.log(error)
        }

        alert("Thank you for submiting your enquiry!")
    }

    const navbarClassName = `duration-700 sticky top-0 z-50 flex items-center justify-between bg-[#fafafa] p-4 text-textPrimary transition-transform font-Satoshi h-16 translate-y-0"
    } ${className}`

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

    const submenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    }

    const toggleSubmenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen)
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
                        width={70}
                        height={20}
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden flex-grow items-center justify-center md:flex">
                    <ul className="flex space-x-10 uppercase">
                        <li>
                            <ShineUnderlineEffect>
                                <Link href="/#science">The Science</Link>
                            </ShineUnderlineEffect>
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

                {/* Mobile Submenu */}
                <div className="md:hidden">
                    <button
                        onClick={toggleSubmenu}
                        className="flex items-center justify-center rounded-full bg-textSecondary p-2 text-white transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>

                    <AnimatePresence>
                        {isSubmenuOpen && (
                            <motion.div
                                className="absolute right-4 top-16 z-50 rounded-lg bg-white shadow-lg"
                                variants={submenuVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                            >
                                <ul className="space-y-2 p-4">
                                    <li>
                                        <Link
                                            href="/#science"
                                            className="block rounded-md px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                                            onClick={toggleSubmenu}
                                        >
                                            The Science
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/#services"
                                            className="block rounded-md px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                                            onClick={toggleSubmenu}
                                        >
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/info"
                                            className="block rounded-md px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                                            onClick={toggleSubmenu}
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/contact"
                                            className="block rounded-md px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                                            onClick={toggleSubmenu}
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </motion.div>
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
                            <motion.form
                                className="h-full w-full space-y-4"
                                onSubmit={handleSubmit}
                                variants={formVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
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
                                            Please fill out the form to learn
                                            more about Chronic Pain Recovery and
                                            how it can be applied to your
                                            everyday life.
                                        </p>
                                        <p className="mb-4">
                                            We will get back to you as quickly
                                            as we can.
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
                                                ></textarea>
                                            </div>
                                            <button
                                                type="submit"
                                                className="transition-color rounded-full bg-textSecondary px-6 py-2 text-white"
                                            >
                                                Submit
                                            </button>
                                            <p>
                                                By continuing, you agree to our
                                                Terms & Conditions and our
                                                Privacy Policy.
                                            </p>
                                        </span>
                                    </div>
                                </div>
                            </motion.form>
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
