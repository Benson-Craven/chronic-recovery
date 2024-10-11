"use client"

import Link from "next/link"
import ShineUnderlineEffect from "./UnderlineEffect"

const Footer = () => {
    return (
        <footer className="relative z-20 bg-secondary pb-6 pt-12 font-Satoshi text-[#fafafa]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Newsletter Section */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <h3 className="mb-4 text-lg font-bold">
                            Stay Informed
                        </h3>
                        <form
                            action="#"
                            method="post"
                            id="newsletter-form"
                            name="newsletter-form"
                            className="validate"
                            target="_self"
                        >
                            <div className="mb-4">
                                <label htmlFor="email" className="mb-2 block">
                                    Email address{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="EMAIL"
                                    placeholder="Keep up to date"
                                    id="email"
                                    required
                                    className="w-full border-b-2 border-gray-300 bg-transparent px-2 py-2"
                                />
                            </div>
                            <button
                                type="submit"
                                className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-4 text-sm">
                            Subscribe for updates on chronic pain management and
                            relief strategies.
                        </p>
                    </div>

                    {/* Navigation Sections */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold">
                            Pain Management
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#">
                                    <ShineUnderlineEffect>
                                        Treatment Options{" "}
                                    </ShineUnderlineEffect>
                                </Link>
                            </li>

                            <li>
                                <Link href="#">
                                    <ShineUnderlineEffect>
                                        Pain Types{" "}
                                    </ShineUnderlineEffect>
                                </Link>
                            </li>

                            <li>
                                <Link href="#">
                                    <ShineUnderlineEffect>
                                        Resources
                                    </ShineUnderlineEffect>
                                </Link>
                            </li>

                            <li>
                                <Link href="#">
                                    <ShineUnderlineEffect>
                                        Support Groups
                                    </ShineUnderlineEffect>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-bold">About Us</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#">
                                    <ShineUnderlineEffect>
                                        Our Mission{" "}
                                    </ShineUnderlineEffect>
                                </Link>
                            </li>

                            <li>
                                <Link href="#">
                                    <ShineUnderlineEffect>
                                        Team{" "}
                                    </ShineUnderlineEffect>
                                </Link>
                            </li>

                            <li>
                                <Link href="#">
                                    <ShineUnderlineEffect>
                                        Testimonials{" "}
                                    </ShineUnderlineEffect>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-bold">Connect</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <ShineUnderlineEffect>
                                        Facebook
                                    </ShineUnderlineEffect>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <ShineUnderlineEffect>
                                        Instagram
                                    </ShineUnderlineEffect>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <ShineUnderlineEffect>
                                        LinkedIn
                                    </ShineUnderlineEffect>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-12 flex flex-col items-center justify-between border-t pt-6 md:flex-row">
                    <p className="text-sm">
                        © <Link href="/">Chronic Pain Relief</Link> 2024
                    </p>
                    <nav className="mt-4 md:mt-0">
                        <ul className="flex space-x-4">
                            <li>
                                <Link href="#" className="text-sm">
                                    <ShineUnderlineEffect>
                                        Privacy Policy
                                    </ShineUnderlineEffect>
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className="text-sm">
                                    <ShineUnderlineEffect>
                                        Terms of Service
                                    </ShineUnderlineEffect>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer
