"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const ContactPage = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [messageLength, setMessageLength] = useState(0) // Track message length
    const maxMessageLength = 500 // Set maximum character limit for the message

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const formData = new FormData(form)

        // Validate message length
        const message = formData.get("message") as string
        if (message.length > maxMessageLength) {
            alert(`Message must be less than ${maxMessageLength} characters.`)
            return
        }

        try {
            const res = await fetch("/api/sendEmail", {
                method: "POST",
                body: JSON.stringify({
                    name: formData.get("name"),
                    email: formData.get("email"),
                    phone: formData.get("phone"), // Include phone number
                    message: formData.get("message"),
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })

            const json = await res.json()
            console.log(json)

            form.reset()
            setIsFormSubmitted(true)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="font-Satoshi text-primary-text min-h-screen bg-[#fafafa] p-4">
            <div className="container mx-auto">
                {/* Contact Form Section */}
                <motion.section
                    className="rounded-[25px] border-2 border-black bg-white shadow-lg"
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="flex flex-col md:flex-row">
                        {/* Left Side */}
                        <div className="hidden flex-col justify-center p-12 text-[#3C3C3C] md:flex md:w-1/2">
                            <h2 className="mb-6 text-6xl">Contact us today</h2>
                            <div className="mb-10 h-[1px] bg-black opacity-10" />
                            <p className="mb-4">
                                Please fill out the form to learn more about our
                                services and how we can help you.
                            </p>
                            <p className="mb-4">
                                We will get back to you as quickly as we can.
                            </p>
                        </div>

                        {/* Right Side */}
                        <div className="flex w-full flex-col justify-center rounded-[25px] bg-white p-12 md:w-1/2">
                            <AnimatePresence>
                                {!isFormSubmitted ? (
                                    <motion.form
                                        className="space-y-6"
                                        onSubmit={handleSubmit}
                                        variants={formVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                    >
                                        <h1 className="mb-6 text-3xl font-medium md:hidden">
                                            Contact us today
                                        </h1>
                                        <div className="h-[1px] bg-black opacity-10 md:hidden"></div>

                                        {/* Name Field */}
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

                                        {/* Email Field */}
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
                                                name="email"
                                                required
                                                className="w-full rounded border border-gray-300 p-2"
                                            />
                                        </div>

                                        {/* Phone Field */}
                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="mb-2 block"
                                            >
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                className="w-full rounded border border-gray-300 p-2"
                                            />
                                        </div>

                                        {/* Message Field */}
                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="mb-2 block"
                                            >
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                required
                                                maxLength={maxMessageLength}
                                                onChange={(e) =>
                                                    setMessageLength(
                                                        e.target.value.length,
                                                    )
                                                }
                                                className="w-full rounded border border-gray-300 p-2"
                                            ></textarea>
                                            <p className="mt-1 text-sm text-gray-500">
                                                {messageLength}/
                                                {maxMessageLength} characters
                                            </p>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="bg-secondary-text rounded-full px-6 py-2 text-white transition-colors"
                                        >
                                            Submit
                                        </button>
                                        <p className="mb-4 text-sm text-gray-500">
                                            Alternatively, contact via Tel /
                                            WhatsApp:
                                            <a
                                                href="tel:+353892335106"
                                                className="font-bold hover:underline"
                                            >
                                                +353 (0) 89-233-5106
                                            </a>
                                        </p>
                                        {/* Terms and Conditions */}
                                        <p className="text-sm text-gray-500">
                                            By continuing, you agree to our{" "}
                                            <Link
                                                href="/terms-and-conditions"
                                                className="underline"
                                            >
                                                Terms & Conditions
                                            </Link>{" "}
                                            and our{" "}
                                            <Link
                                                href="/privacy-policy"
                                                className="underline"
                                            >
                                                Privacy Policy
                                            </Link>
                                            .
                                        </p>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        className="text-center"
                                        variants={formVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <h2 className="mb-4 text-2xl font-semibold">
                                            Thank you for contacting us!
                                        </h2>
                                        <p>
                                            We will get back to you as soon as
                                            possible.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    )
}

export default ContactPage
