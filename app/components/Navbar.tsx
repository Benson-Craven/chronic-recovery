"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react"

type NavbarProps = {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)

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

    const navbarClassName = `duration-700 sticky top-0 z-10 flex items-center justify-between bg-white p-4 text-textPrimary transition-transform ${
        visible ? "translate-y-0" : "-translate-y-full"
    } ${className}`

    return (
        <nav
            className={navbarClassName}
            style={{
                // Adjust the easing function to change the duration of the animation
                transitionTimingFunction: "cubic-bezier(0.64, 0, 0.35, 1)",
            }}
        >
            <Link href="/">
                <p>CPR</p>
            </Link>
            <div className="border-2 border-red-500">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/patient" className="hover:text-gray-300">
                            For Patients
                        </Link>
                    </li>
                    <li>
                        <Link href="/patient" className="hover:text-gray-300">
                            Our Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/our-plans" className="hover:text-gray-300">
                            Our Plans
                        </Link>
                    </li>
                </ul>
            </div>
            <Link
                href="/our-plans"
                className="rounded bg-textSecondary px-4 py-2 text-black duration-300 hover:bg-textThird"
            >
                Start now
            </Link>
        </nav>
    )
}

export default Navbar
