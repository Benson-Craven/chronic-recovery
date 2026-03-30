"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { slideInMenu, fadeOverlay } from "@/app/lib/animations"

type NavLink = {
    href: string
    label: string
    number: string
    children?: { href: string; label: string; number: string }[]
}

const NAV_LINKS: NavLink[] = [
    { href: "/", label: "Home", number: "00" },
    {
        href: "/science",
        label: "The Science",
        number: "01",
        children: [
            { href: "/science", label: "The Science", number: "01" },
            { href: "/research", label: "Research Studies", number: "02" },
            { href: "/resources", label: "Useful Links", number: "03" },
            { href: "/conditions", label: "Conditions", number: "04" },
            {
                href: "/self-assessment",
                label: "Self-Assessment",
                number: "05",
            },
        ],
    },
    { href: "/#services", label: "Services", number: "02" },
    { href: "/info", label: "About", number: "03" },
    { href: "/blog", label: "Journal", number: "04" },
    { href: "/contact", label: "Contact", number: "05" },
]

type MobileMenuProps = {
    isOpen: boolean
    onToggle: () => void
}

export default function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
    return (
        <div className="md:hidden">
            {/* Animated hamburger toggle */}
            <button
                onClick={onToggle}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
            >
                <motion.span
                    animate={
                        isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.25 }}
                    className="block h-px w-6 origin-center"
                    style={{ backgroundColor: "#1E3A20" }}
                />
                <motion.span
                    animate={
                        isOpen
                            ? { opacity: 0, scaleX: 0 }
                            : { opacity: 1, scaleX: 1 }
                    }
                    transition={{ duration: 0.15 }}
                    className="block h-px w-6 origin-center"
                    style={{ backgroundColor: "#1E3A20" }}
                />
                <motion.span
                    animate={
                        isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.25 }}
                    className="block h-px w-6 origin-center"
                    style={{ backgroundColor: "#1E3A20" }}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 z-40"
                            style={{
                                backgroundColor: "rgba(30,58,32,0.5)",
                                backdropFilter: "blur(4px)",
                            }}
                            variants={fadeOverlay}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={onToggle}
                        />

                        {/* Drawer */}
                        <motion.nav
                            className="fixed inset-y-0 right-0 z-40 flex w-full max-w-sm flex-col"
                            style={{ backgroundColor: "#F7F4EF" }}
                            variants={slideInMenu}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Mobile navigation"
                        >
                            {/* Drawer header */}
                            <div
                                className="flex items-center justify-between px-8 py-6"
                                style={{
                                    borderBottom:
                                        "1px solid rgba(30,58,32,0.1)",
                                }}
                            >
                                <p
                                    className="text-xs font-medium uppercase tracking-[0.25em] opacity-40"
                                    style={{
                                        color: "#1E3A20",
                                        fontFamily: "var(--font-dm-sans)",
                                    }}
                                >
                                    Menu
                                </p>
                            </div>

                            {/* Nav links */}
                            <div className="flex flex-1 flex-col overflow-y-auto">
                                <ul
                                    className="divide-y"
                                    style={{
                                        borderColor: "rgba(30,58,32,0.08)",
                                    }}
                                >
                                    {NAV_LINKS.map((link, index) => (
                                        <MobileNavItem
                                            key={link.href}
                                            link={link}
                                            index={index}
                                            onNavigate={onToggle}
                                        />
                                    ))}
                                </ul>
                            </div>

                            {/* Drawer footer */}
                            <div
                                className="px-8 py-8"
                                style={{
                                    borderTop: "1px solid rgba(30,58,32,0.1)",
                                }}
                            >
                                <Link href="/contact" onClick={onToggle}>
                                    <motion.button
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full rounded-full py-4 text-xs font-medium uppercase tracking-wide"
                                        style={{
                                            backgroundColor: "#1E3A20",
                                            color: "#F7F4EF",
                                            fontFamily: "var(--font-dm-sans)",
                                            fontWeight: 500,
                                            letterSpacing: "0.08em",
                                        }}
                                    >
                                        Book Consultation
                                    </motion.button>
                                </Link>
                                <a
                                    href="tel:+353892335106"
                                    className="mt-4 block text-center text-xs transition-opacity hover:opacity-60"
                                    style={{
                                        color: "rgba(30,58,32,0.4)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    +353 (0) 89-233-5106
                                </a>
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
    index: number
    onNavigate: () => void
}

function MobileNavItem({ link, index, onNavigate }: MobileNavItemProps) {
    const hasChildren = link.children && link.children.length > 0

    return (
        <motion.li
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
        >
            <Link
                href={link.href}
                onClick={onNavigate}
                className="flex items-center gap-5 px-8 py-5 transition-opacity hover:opacity-60"
            >
                <span
                    className="shrink-0 text-xs tabular-nums opacity-25"
                    style={{
                        color: "#1E3A20",
                        fontFamily: "var(--font-dm-sans)",
                        fontWeight: 300,
                    }}
                >
                    {link.number}
                </span>
                <span
                    className="text-lg"
                    style={{
                        color: "#1E3A20",
                        fontFamily: "var(--font-dm-serif)",
                        fontStyle: "italic",
                    }}
                >
                    {link.label}
                </span>
            </Link>

            {/* Children — indented sub-rows */}
            {hasChildren && (
                <ul
                    className="divide-y"
                    style={{
                        borderColor: "rgba(30,58,32,0.06)",
                        backgroundColor: "rgba(30,58,32,0.02)",
                    }}
                >
                    {link.children!.map((child) => (
                        <li key={child.href}>
                            <Link
                                href={child.href}
                                onClick={onNavigate}
                                className="flex items-center gap-5 py-3.5 pl-20 pr-8 transition-opacity hover:opacity-60"
                            >
                                <span
                                    className="shrink-0 text-xs tabular-nums opacity-20"
                                    style={{
                                        color: "#1E3A20",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    {child.number}
                                </span>
                                <span
                                    className="text-sm"
                                    style={{
                                        color: "rgba(30,58,32,0.65)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    {child.label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </motion.li>
    )
}
