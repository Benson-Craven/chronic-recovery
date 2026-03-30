"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const ContactPage = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [messageLength, setMessageLength] = useState(0)
    const maxMessageLength = 500

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const formData = new FormData(form)

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
                    phone: formData.get("phone"),
                    message: formData.get("message"),
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })

            const json = await res.json()
            console.log(json)

            form.reset()
            setMessageLength(0)
            setIsFormSubmitted(true)
        } catch (error) {
            console.log(error)
        }
    }

    const inputStyles: React.CSSProperties = {
        width: "100%",
        backgroundColor: "transparent",
        borderBottom: "1px solid rgba(30,58,32,0.2)",
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
        borderRadius: 0,
        padding: "10px 0",
        outline: "none",
        color: "#1E3A20",
        fontFamily: "var(--font-dm-sans)",
        fontWeight: 300,
        fontSize: "1rem",
    }

    const labelStyles: React.CSSProperties = {
        display: "block",
        marginBottom: "6px",
        fontSize: "0.7rem",
        fontFamily: "var(--font-dm-sans)",
        fontWeight: 500,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "rgba(30,58,32,0.4)",
    }

    return (
        <div className="min-h-screen" style={{ backgroundColor: "#F7F4EF" }}>
            {/* Hero — green */}
            <section
                style={{ backgroundColor: "#1E3A20" }}
                className="w-full px-6 py-24 md:py-36"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-3xl"
                >
                    <p
                        className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                        style={{
                            color: "#C8E6C9",
                            fontFamily: "var(--font-dm-sans)",
                        }}
                    >
                        Get in touch
                    </p>
                    <h1
                        className="mb-8 text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        Let's start your
                        <br />
                        <em>recovery together</em>
                    </h1>
                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(200,230,201,0.2)" }}
                    />
                    <p
                        className="mt-8 max-w-xl text-base leading-relaxed md:text-lg"
                        style={{
                            color: "rgba(200,230,201,0.65)",
                            fontFamily: "var(--font-dm-sans)",
                            fontWeight: 300,
                        }}
                    >
                        Fill out the form and I'll get back to you as quickly as
                        possible — usually within 24 hours.
                    </p>
                </motion.div>
            </section>

            {/* Form section — cream */}
            <section
                style={{ backgroundColor: "#F7F4EF" }}
                className="w-full px-6 py-20 md:py-28"
            >
                <div className="mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
                        {/* Left — context */}
                        <div>
                            <p
                                className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                                style={{
                                    color: "#1E3A20",
                                    fontFamily: "var(--font-dm-sans)",
                                }}
                            >
                                Contact
                            </p>
                            <h2
                                className="mb-10 text-4xl leading-[1.1] md:text-5xl"
                                style={{
                                    fontFamily: "var(--font-dm-serif)",
                                    color: "#1E3A20",
                                }}
                            >
                                Contact us
                                <br />
                                <em>today</em>
                            </h2>

                            <div
                                className="mb-10 h-px w-full"
                                style={{
                                    backgroundColor: "rgba(30,58,32,0.12)",
                                }}
                            />

                            <div className="space-y-8">
                                {[
                                    {
                                        label: "Response time",
                                        value: "I typically respond within 24 hours.",
                                    },
                                    {
                                        label: "Sessions",
                                        value: "In-person in Rochestown, Cork — or online via video call.",
                                    },
                                    {
                                        label: "Tel / WhatsApp",
                                        value: "+353 (0) 89-233-5106",
                                        href: "tel:+353892335106",
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-6"
                                    >
                                        <span
                                            className="mt-0.5 shrink-0 text-xs tabular-nums opacity-30"
                                            style={{
                                                color: "#1E3A20",
                                                fontFamily:
                                                    "var(--font-dm-sans)",
                                                fontWeight: 300,
                                            }}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <div>
                                            <p
                                                className="mb-1 text-xs uppercase tracking-[0.15em] opacity-40"
                                                style={{
                                                    color: "#1E3A20",
                                                    fontFamily:
                                                        "var(--font-dm-sans)",
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {item.label}
                                            </p>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="text-base underline underline-offset-2 transition-opacity hover:opacity-60"
                                                    style={{
                                                        color: "#1E3A20",
                                                        fontFamily:
                                                            "var(--font-dm-sans)",
                                                        fontWeight: 300,
                                                    }}
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p
                                                    className="text-base leading-relaxed"
                                                    style={{
                                                        color: "rgba(30,58,32,0.65)",
                                                        fontFamily:
                                                            "var(--font-dm-sans)",
                                                        fontWeight: 300,
                                                    }}
                                                >
                                                    {item.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — form */}
                        <div>
                            <AnimatePresence mode="wait">
                                {!isFormSubmitted ? (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.5 }}
                                        className="space-y-8"
                                    >
                                        {/* Name */}
                                        <div>
                                            <label
                                                htmlFor="name"
                                                style={labelStyles}
                                            >
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                placeholder="Your full name"
                                                style={inputStyles}
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label
                                                htmlFor="email"
                                                style={labelStyles}
                                            >
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                placeholder="your@email.com"
                                                style={inputStyles}
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label
                                                htmlFor="phone"
                                                style={labelStyles}
                                            >
                                                Phone number *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                placeholder="+353..."
                                                style={inputStyles}
                                            />
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label
                                                htmlFor="message"
                                                style={labelStyles}
                                            >
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={5}
                                                required
                                                maxLength={maxMessageLength}
                                                placeholder="Tell me a little about what you're experiencing..."
                                                onChange={(e) =>
                                                    setMessageLength(
                                                        e.target.value.length,
                                                    )
                                                }
                                                style={{
                                                    ...inputStyles,
                                                    resize: "none",
                                                    borderBottom:
                                                        "1px solid rgba(30,58,32,0.2)",
                                                }}
                                            />
                                            <p
                                                className="mt-2 text-right text-xs tabular-nums"
                                                style={{
                                                    color: "rgba(30,58,32,0.3)",
                                                    fontFamily:
                                                        "var(--font-dm-sans)",
                                                    fontWeight: 300,
                                                }}
                                            >
                                                {messageLength}/
                                                {maxMessageLength}
                                            </p>
                                        </div>

                                        {/* Submit */}
                                        <div className="flex flex-col gap-4 pt-2">
                                            <motion.button
                                                type="submit"
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.98 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 20,
                                                }}
                                                className="w-full rounded-full py-4 text-sm font-medium tracking-wide transition-shadow hover:shadow-lg md:w-auto md:px-10"
                                                style={{
                                                    backgroundColor: "#1E3A20",
                                                    color: "#F7F4EF",
                                                    fontFamily:
                                                        "var(--font-dm-sans)",
                                                    fontWeight: 500,
                                                    letterSpacing: "0.04em",
                                                }}
                                            >
                                                Send Message
                                            </motion.button>

                                            {/* Legal */}
                                            <p
                                                className="text-xs leading-relaxed"
                                                style={{
                                                    color: "rgba(30,58,32,0.35)",
                                                    fontFamily:
                                                        "var(--font-dm-sans)",
                                                    fontWeight: 300,
                                                }}
                                            >
                                                By continuing, you agree to our{" "}
                                                <Link
                                                    href="/terms-and-conditions"
                                                    className="underline underline-offset-2 transition-opacity hover:opacity-60"
                                                    style={{ color: "#1E3A20" }}
                                                >
                                                    Terms & Conditions
                                                </Link>{" "}
                                                and{" "}
                                                <Link
                                                    href="/privacy-policy"
                                                    className="underline underline-offset-2 transition-opacity hover:opacity-60"
                                                    style={{ color: "#1E3A20" }}
                                                >
                                                    Privacy Policy
                                                </Link>
                                                .
                                            </p>
                                        </div>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="flex flex-col gap-6"
                                    >
                                        <div
                                            className="h-px w-full"
                                            style={{
                                                backgroundColor:
                                                    "rgba(30,58,32,0.12)",
                                            }}
                                        />
                                        <p
                                            className="text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                                            style={{
                                                color: "#1E3A20",
                                                fontFamily:
                                                    "var(--font-dm-sans)",
                                            }}
                                        >
                                            Message sent
                                        </p>
                                        <h2
                                            className="text-4xl leading-[1.1] md:text-5xl"
                                            style={{
                                                fontFamily:
                                                    "var(--font-dm-serif)",
                                                color: "#1E3A20",
                                            }}
                                        >
                                            Thank you for
                                            <br />
                                            <em>reaching out.</em>
                                        </h2>
                                        <div
                                            className="h-px w-full"
                                            style={{
                                                backgroundColor:
                                                    "rgba(30,58,32,0.12)",
                                            }}
                                        />
                                        <p
                                            className="text-base leading-relaxed"
                                            style={{
                                                color: "rgba(30,58,32,0.65)",
                                                fontFamily:
                                                    "var(--font-dm-sans)",
                                                fontWeight: 300,
                                            }}
                                        >
                                            I'll get back to you as soon as
                                            possible — usually within 24 hours.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage
