"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const Submenu = () => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

    const toggleSubmenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen)
    }

    const submenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    }

    return (
        <div className="md:hidden">
            {/* Button to toggle submenu */}
            <button
                onClick={toggleSubmenu}
                className="flex items-center justify-center rounded-full bg-black p-2 text-white transition-colors hover:bg-gray-800"
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

            {/* Submenu */}
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
    )
}

export default Submenu
