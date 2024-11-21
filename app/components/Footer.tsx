"use client"

import Link from "next/link"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import ShineUnderlineEffect from "./UnderlineEffect"

const Footer = () => {
    return (
        <footer className="font-Satoshi relative z-20 bg-secondary pb-6 pt-12 text-[#fafafa]">
            <div className="container mx-auto px-4">
                {/* Footer Content */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Pain Management Section */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold">
                            Pain Management
                        </h3>
                        <ul className="space-y-2">
                            {[
                                "Treatment Options",
                                "Pain Types",
                                "Resources",
                                ,
                            ].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase()}`}>
                                        <ShineUnderlineEffect>
                                            {item}
                                        </ShineUnderlineEffect>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About Us Section */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold">About Us</h3>
                        <ul className="space-y-2">
                            {["Our Mission", "About Me"].map((item) => (
                                <li key={item}>
                                    <Link href="#">
                                        <ShineUnderlineEffect>
                                            {item}
                                        </ShineUnderlineEffect>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Section */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold">Connect</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Facebook", icon: FaFacebook },
                                { name: "Instagram", icon: FaInstagram },
                                { name: "LinkedIn", icon: FaLinkedin },
                            ].map(({ name, icon: Icon }) => (
                                <li key={name}>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="group flex items-center gap-3"
                                    >
                                        <Icon className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
                                        <ShineUnderlineEffect>
                                            {name}
                                        </ShineUnderlineEffect>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-6 md:flex-row">
                    <p className="text-sm">
                        © 2024{" "}
                        <Link href="/" className="underline">
                            Chronic Pain Recovery
                        </Link>
                    </p>

                    <nav className="mt-4 md:mt-0">
                        <ul className="flex space-x-4">
                            {["Privacy Policy", "Terms of Service"].map(
                                (item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-sm">
                                            <ShineUnderlineEffect>
                                                {item}
                                            </ShineUnderlineEffect>
                                        </Link>
                                    </li>
                                ),
                            )}
                        </ul>
                    </nav>
                </div>

                {/* Code by Benson */}
                <div className="mt-6 text-center text-sm text-gray-400">
                    Made by{" "}
                    <Link href="https://codebybenson.netlify.app">
                        <span className="font-bold text-white underline">
                            Code by Benson
                        </span>{" "}
                    </Link>
                    ⭐️
                </div>
            </div>
        </footer>
    )
}

export default Footer
