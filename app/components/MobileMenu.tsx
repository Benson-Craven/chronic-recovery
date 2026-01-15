"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { slideInMenu, fadeOverlay } from "@/app/lib/animations"

type NavLink = {
    href: string
    label: string
    children?: NavLink[]
}

const NAV_LINKS: NavLink[] = [
    { href: "/", label: "Home" },
    {
        href: "/science",
        label: "The Science",
        children: [
            { href: "/research", label: "Research Studies" },
            { href: "/resources", label: "Useful Links" },
            { href: "/conditions", label: "Conditions" },
            { href: "/self-assessment", label: "Self-Assessment" },
        ],
    },
    { href: "/#services", label: "Services" },
    { href: "/info", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
]

type MobileMenuProps = {
    isOpen: boolean
    onToggle: () => void
}

export default function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
    return (
        <div className="md:hidden">
            <button
                onClick={onToggle}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                className="fixed right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-textSecondary text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
                {isOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <Menu className="h-6 w-6" />
                )}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 z-40 bg-black"
                            variants={fadeOverlay}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={onToggle}
                        />

                        <motion.nav
                            className="fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-white shadow-xl"
                            variants={slideInMenu}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Mobile navigation"
                        >
                            <div className="flex h-full flex-col overflow-y-auto p-6 pt-20">
                                <ul className="space-y-1">
                                    {NAV_LINKS.map((link) => (
                                        <MobileNavItem
                                            key={link.href}
                                            link={link}
                                            onNavigate={onToggle}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

type MobileNavItemProps = {
    link: NavLink
    onNavigate: () => void
}

function MobileNavItem({ link, onNavigate }: MobileNavItemProps) {
    const hasChildren = link.children && link.children.length > 0

    return (
        <li>
            <Link
                href={link.href}
                onClick={onNavigate}
                className="block rounded-lg px-4 py-3 text-lg font-medium text-gray-900 transition-colors hover:bg-gray-100"
            >
                {link.label}
            </Link>

            {hasChildren && (
                <ul className="ml-4 border-l border-gray-200 pl-4">
                    {link.children!.map((child) => (
                        <li key={child.href}>
                            <Link
                                href={child.href}
                                onClick={onNavigate}
                                className="block py-2 text-base text-gray-600 transition-colors hover:text-gray-900"
                            >
                                {child.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    )
}
