"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react"
import Button from "./Button"
import { motion, AnimatePresence } from "framer-motion"
import ShineUnderlineEffect from "./UnderlineEffect"

type NavbarProps = {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)
    const [isActive, setIsActive] = useState(false)

    const handleScroll = () => {
        const currentScrollPos = window.scrollY
        const isScrollingDown = currentScrollPos > prevScrollPos

        setVisible(!isScrollingDown || currentScrollPos < 10)
        setPrevScrollPos(currentScrollPos)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [prevScrollPos])

    const navbarClassName = `duration-700 sticky top-0 z-50 flex items-center justify-between bg-[#fafafa] p-4 text-textPrimary transition-transform font-Satoshi h-16     ${
        visible ? "translate-y-0" : "-translate-y-full"
    } ${className}`

    const menu = {
        open: {
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

    return (
        <nav
            className={navbarClassName}
            style={{
                transitionTimingFunction: "cubic-bezier(0.64, 0, 0.35, 1)",
            }}
        >
            <div className="flex w-full items-center justify-between">
                <ShineUnderlineEffect>
                    <Link href="/" className="flex-shrink-0">
                        <p>CPR</p>
                    </Link>
                </ShineUnderlineEffect>

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
                <motion.div
                    className="fixed z-50 flex flex-col items-center justify-center rounded-[25px] border-2 border-black bg-white shadow-lg md:bg-textSecondary"
                    variants={menu}
                    animate={isActive ? "open" : "closed"}
                    initial="closed"
                >
                    <AnimatePresence>
                        {isActive && (
                            <motion.form
                                className="h-full w-full space-y-4"
                                variants={formVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                onWheel={(e) => e.preventDefault()}
                            >
                                <div className="flex h-full w-full rounded-[25px] bg-textSecondary">
                                    {/* Left side */}
                                    <div className="hidden flex-col justify-center p-12 text-[#3C3C3C] md:flex md:w-1/2">
                                        <h1 className="mb-6 text-6xl font-bold">
                                            Contact us today
                                        </h1>
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
                                        <p className="mb-2">
                                            hello@cprhealth.com
                                        </p>
                                    </div>

                                    {/* Right side */}
                                    <div className="flex w-full flex-col justify-center rounded-[25px] bg-white p-12 md:w-1/2">
                                        <form className="space-y-6">
                                            <h1 className="mb-6 text-3xl font-bold md:hidden">
                                                Contact us today
                                            </h1>

                                            <div className="h-[1px] bg-black opacity-10"></div>

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
                                                    id="email"
                                                    required
                                                    className="w-full rounded border border-gray-300 p-2"
                                                />
                                            </div>
                                            {/* <div>
                                                <label
                                                    htmlFor="role"
                                                    className="mb-2 block"
                                                >
                                                    I am a *
                                                </label>
                                                <select
                                                    id="role"
                                                    required
                                                    className="w-full appearance-none rounded border border-gray-300 bg-white p-2"
                                                >
                                                    <option value="">
                                                        Select an option
                                                    </option>
                                                    <option value="patient">
                                                        Patient
                                                    </option>
                                                    <option value="doctor">
                                                        Doctor
                                                    </option>
                                                    <option value="other">
                                                        Other
                                                    </option>
                                                </select>
                                            </div> */}
                                            <div>
                                                <label
                                                    htmlFor="message"
                                                    className="mb-2 block"
                                                >
                                                    Message
                                                </label>
                                                <textarea
                                                    id="message"
                                                    rows={4}
                                                    className="w-full rounded border border-gray-300 p-2"
                                                ></textarea>
                                            </div>
                                            <button
                                                type="submit"
                                                className="rounded-full bg-teal-600 px-6 py-2 text-white transition-colors hover:bg-teal-700"
                                            >
                                                Submit
                                            </button>
                                            <p>
                                                By continuing, you agree to our
                                                Terms & Conditions and our
                                                Privacy Policy.
                                            </p>
                                        </form>
                                    </div>
                                </div>

                                {/* <motion.input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full rounded-md border border-gray-300 p-2"
                                />
                                <motion.input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full rounded-md border border-gray-300 p-2"
                                />
                                <motion.textarea
                                    placeholder="Your enquiry"
                                    className="w-full rounded-md border border-gray-300 p-2"
                                    rows={4}
                                ></motion.textarea>
                                <motion.button
                                    type="submit"
                                    className="w-full rounded-md bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600"
                                >
                                    Submit
                                </motion.button> */}
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
                <span className="z-50">
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
