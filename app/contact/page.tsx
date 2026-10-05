"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"
import { trackContactFormSubmission } from "@/app/lib/analytics"
import { PHONE_DISPLAY, PHONE_HREF } from "@/app/lib/contact"
import WhatsAppLink from "@/app/components/WhatsAppLink"
import TrackedPhoneLink from "@/app/components/TrackedPhoneLink"
import {
    ContactFormFeedback,
    ContactFormHoneypot,
} from "@/app/components/ContactFormProtection"
import Turnstile from "@/app/components/Turnstile"
import { useContactForm } from "@/app/hooks/useContactForm"
import PageHero from "../components/sections/PageHero"

const MAX_MESSAGE_LENGTH = 500

export default function ContactPage() {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [messageLength, setMessageLength] = useState(0)
    const {
        canSubmit,
        formError,
        handleSubmit,
        handleTokenChange,
        isSubmitting,
        setTurnstileState,
        turnstileRef,
        turnstileState,
    } = useContactForm("contact_page", () => {
        setMessageLength(0)
        setIsFormSubmitted(true)
        trackContactFormSubmission("contact_page")
    })

    const inputClassName =
        "w-full rounded-none border-x-0 border-t-0 border-b border-solid border-b-[rgba(30,58,32,0.2)] bg-transparent px-0 py-[10px] [outline:none] font-satoshi text-base font-light text-[#1E3A20]"

    const labelClassName =
        "mb-[6px] block font-satoshi text-[0.7rem] font-medium uppercase tracking-[0.2em] text-light-supporting"

    return (
        <div className="min-h-screen bg-[#F7F4EF]">
            <PageHero
                eyebrow="Get in touch"
                description=" Message me on WhatsApp or fill out the form. I'll get
                        back to you as quickly as possible, usually within 24
                        hours."
            >
                Let's start your
                <br />
                <em>recovery together</em>
            </PageHero>

            {/* Form section — cream */}
            <section className="w-full bg-[#F7F4EF] px-6 py-20 md:py-28">
                <div className="mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
                        {/* Left — context */}
                        <div>
                            <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                                Contact
                            </p>
                            <h2 className="mb-10 font-satoshi text-4xl leading-[1.1] text-[#1E3A20] md:text-5xl">
                                Contact us
                                <br />
                                <em>today</em>
                            </h2>

                            <div className="mb-10 h-px w-full bg-[rgba(30,58,32,0.12)]" />

                            <WhatsAppLink
                                source="contact_page"
                                className="cta-interactive mb-10 flex w-fit items-center gap-2 rounded-full bg-[#1E3A20] px-8 py-4 font-satoshi text-sm font-medium tracking-[0.04em] text-[#F7F4EF]"
                            >
                                <FaWhatsapp
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                />
                                WhatsApp Marsha
                            </WhatsAppLink>

                            <div className="space-y-8">
                                {[
                                    {
                                        label: "Response time",
                                        value: "I typically respond within 24 hours.",
                                    },
                                    {
                                        label: "Sessions",
                                        value: "In-person in Rochestown, Cork, or online via video call.",
                                    },
                                    {
                                        label: "Phone",
                                        value: PHONE_DISPLAY,
                                        href: PHONE_HREF,
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-6"
                                    >
                                        <span className="mt-0.5 shrink-0 font-satoshi text-xs font-light tabular-nums text-light-supporting">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <div>
                                            <p className="mb-1 font-satoshi text-xs font-medium uppercase tracking-[0.15em] text-light-supporting">
                                                {item.label}
                                            </p>
                                            {item.href ? (
                                                <TrackedPhoneLink
                                                    source="contact_page"
                                                    className="font-satoshi text-base font-light text-[#1E3A20] underline underline-offset-2"
                                                >
                                                    {item.value}
                                                </TrackedPhoneLink>
                                            ) : (
                                                <p className="font-satoshi text-base font-light leading-relaxed text-light-body">
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
                                        aria-busy={isSubmitting}
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
                                                className={labelClassName}
                                            >
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                minLength={2}
                                                maxLength={100}
                                                autoComplete="name"
                                                placeholder="Your full name"
                                                className={inputClassName}
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className={labelClassName}
                                            >
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                maxLength={254}
                                                autoComplete="email"
                                                placeholder="your@email.com"
                                                className={inputClassName}
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className={labelClassName}
                                            >
                                                Phone number *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                minLength={7}
                                                maxLength={50}
                                                autoComplete="tel"
                                                placeholder="+353..."
                                                className={inputClassName}
                                            />
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label
                                                htmlFor="message"
                                                className={labelClassName}
                                            >
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={5}
                                                required
                                                minLength={10}
                                                maxLength={MAX_MESSAGE_LENGTH}
                                                placeholder="Tell me a little about what you're experiencing..."
                                                onChange={(e) =>
                                                    setMessageLength(
                                                        e.target.value.length,
                                                    )
                                                }
                                                className={`${inputClassName} resize-none`}
                                            />
                                            <p className="mt-2 text-right font-satoshi text-xs font-light tabular-nums text-light-supporting">
                                                {messageLength}/
                                                {MAX_MESSAGE_LENGTH}
                                            </p>
                                        </div>

                                        <ContactFormHoneypot id="website" />

                                        <Turnstile
                                            ref={turnstileRef}
                                            action="contact_page"
                                            onTokenChange={handleTokenChange}
                                            onStateChange={setTurnstileState}
                                        />

                                        <ContactFormFeedback
                                            error={formError}
                                            errorId="contact-form-error"
                                            errorClassName="text-sm leading-relaxed"
                                            turnstileState={turnstileState}
                                        />

                                        {/* Submit */}
                                        <div className="flex flex-col gap-4 pt-2">
                                            <motion.button
                                                type="submit"
                                                disabled={!canSubmit}
                                                aria-describedby={
                                                    formError
                                                        ? "contact-form-error"
                                                        : undefined
                                                }
                                                className={`cta-interactive w-full rounded-full py-4 font-satoshi text-sm font-medium tracking-[0.04em] text-[#F7F4EF] disabled:cursor-not-allowed md:w-auto md:px-10 ${canSubmit ? "bg-[#1E3A20]" : "bg-[#5B6E5A]"}`}
                                            >
                                                {isSubmitting
                                                    ? "Sending..."
                                                    : "Send Message"}
                                            </motion.button>

                                            {/* Legal */}
                                            <p className="font-satoshi text-xs font-light leading-relaxed text-light-supporting">
                                                By continuing, you agree to our{" "}
                                                <Link
                                                    href="/terms-and-conditions"
                                                    className="text-[#1E3A20] underline underline-offset-2"
                                                >
                                                    Terms & Conditions
                                                </Link>{" "}
                                                and{" "}
                                                <Link
                                                    href="/privacy-policy"
                                                    className="text-[#1E3A20] underline underline-offset-2"
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
                                        <div className="h-px w-full bg-[rgba(30,58,32,0.12)]" />
                                        <p className="font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                                            Message sent
                                        </p>
                                        <h2 className="font-satoshi text-4xl leading-[1.1] text-[#1E3A20] md:text-5xl">
                                            Thank you for
                                            <br />
                                            <em>reaching out.</em>
                                        </h2>
                                        <div className="h-px w-full bg-[rgba(30,58,32,0.12)]" />
                                        <p className="font-satoshi text-base font-light leading-relaxed text-light-body">
                                            I'll get back to you as soon as
                                            possible, usually within 24 hours.
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
