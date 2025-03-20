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
                            Chronic Pain Recovery
                        </h3>
                        <ul className="space-y-2">
                            {[
                                {
                                    name: "Treatment Options",
                                    url: "/#treatment",
                                },
                                { name: "Pain Types", url: "/#illness" },
                                { name: "Resources", url: "/resources" },
                            ].map(({ name, url }) => (
                                <li key={name}>
                                    <Link href={url}>
                                        <ShineUnderlineEffect>
                                            {name}
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
                            {[
                                { name: "Our Mission", url: "/#mission" },
                                { name: "About Me", url: "/info" },
                            ].map(({ name, url }) => (
                                <li key={name}>
                                    <Link href={url}>
                                        <ShineUnderlineEffect>
                                            {name}
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
                                {
                                    name: "Facebook",
                                    url: "https://facebook.com",
                                    icon: FaFacebook,
                                },
                                {
                                    name: "Instagram",
                                    url: "https://instagram.com",
                                    icon: FaInstagram,
                                },
                                {
                                    name: "LinkedIn",
                                    url: "https://linkedin.com",
                                    icon: FaLinkedin,
                                },
                            ].map(({ name, url, icon: Icon }) => (
                                <li key={name}>
                                    <a
                                        href={url}
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
                        © {new Date().getFullYear()}{" "}
                        <Link href="/" className="underline">
                            Chronic Pain Recovery
                        </Link>
                    </p>

                    <nav className="mt-4 md:mt-0">
                        <ul className="flex space-x-4">
                            {[
                                {
                                    name: "Privacy Policy",
                                },
                                {
                                    name: "Terms of Service",
                                },
                            ].map(({ name }) => (
                                <li key={name}>
                                    <Link href={"/"} className="text-sm">
                                        <ShineUnderlineEffect>
                                            {name}
                                        </ShineUnderlineEffect>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Code by Benson */}
                <div className="mt-6 text-center text-sm text-gray-400">
                    Made by{" "}
                    <Link href="https://benson.codes">
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
