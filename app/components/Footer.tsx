import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-textSecondary pb-6 pt-12">
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
                                    id="email"
                                    required
                                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                                />
                            </div>
                            <button
                                type="submit"
                                className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-4 text-sm text-gray-600">
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
                                <Link href="#" className="hover:underline">
                                    Treatment Options
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline">
                                    Pain Types
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline">
                                    Resources
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline">
                                    Support Groups
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-bold">About Us</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="hover:underline">
                                    Our Mission
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline">
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline">
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline">
                                    Careers
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
                                    className="hover:underline"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="hover:underline"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="hover:underline"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="hover:underline"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-200 pt-6 md:flex-row">
                    <p className="text-sm text-gray-600">
                        © <Link href="/">Chronic Pain Relief</Link> 2024
                    </p>
                    <nav className="mt-4 md:mt-0">
                        <ul className="flex space-x-4">
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-gray-600 hover:underline"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-gray-600 hover:underline"
                                >
                                    Terms of Service
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
