import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { modalScale } from "@/app/lib/animations"
import { trackContactFormSubmission } from "@/app/lib/analytics"
import { PHONE_DISPLAY } from "@/app/lib/contact"
import { useContactForm } from "@/app/hooks/useContactForm"
import {
    ContactFormFeedback,
    ContactFormHoneypot,
} from "./ContactFormProtection"
import Turnstile from "./Turnstile"
import TrackedPhoneLink from "./TrackedPhoneLink"

const MAX_CHARS = 500

type ContactModalProps = {
    isOpen: boolean
    onClose: () => void
}

const inputClassName =
    "w-full rounded-none border-x-0 border-t-0 border-b border-solid border-b-[rgba(30,58,32,0.2)] bg-transparent px-0 py-[10px] [outline:none] font-satoshi text-[0.95rem] font-light text-[#1E3A20]"

const labelClassName =
    "mb-[6px] block font-satoshi text-[0.65rem] font-medium uppercase tracking-[0.2em] text-light-supporting"

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [messageLength, setMessageLength] = useState(0)
    const [isSuccess, setIsSuccess] = useState(false)
    const {
        canSubmit,
        formError,
        handleSubmit,
        handleTokenChange,
        isSubmitting,
        setTurnstileState,
        turnstileRef,
        turnstileState,
    } = useContactForm("contact_modal", () => {
        setMessageLength(0)
        setIsSuccess(true)
        trackContactFormSubmission("contact_modal")

        setTimeout(() => {
            onClose()
            setTimeout(() => setIsSuccess(false), 300)
        }, 2500)
    })

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value
        if (text.length > MAX_CHARS) {
            e.target.value = text.slice(0, MAX_CHARS)
        }
        setMessageLength(Math.min(text.length, MAX_CHARS))
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-[rgba(30,58,32,0.6)] backdrop-blur-sm"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Modal */}
                    <motion.div
                        className="relative z-10 max-h-[calc(100dvh-2rem)] w-full max-w-4xl overflow-y-auto rounded-[24px]"
                        variants={modalScale}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <AnimatePresence mode="wait">
                            {isSuccess ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -16 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex min-h-[360px] flex-col items-start justify-center bg-[#1E3A20] p-12 md:p-16"
                                >
                                    <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-dark-supporting">
                                        Message sent
                                    </p>
                                    <h2 className="font-satoshi text-4xl leading-[1.1] text-white md:text-5xl">
                                        Thank you for
                                        <br />
                                        <em>reaching out.</em>
                                    </h2>
                                    <div className="mt-8 h-px w-full bg-[rgba(200,230,201,0.15)]" />
                                    <p className="mt-6 font-satoshi text-base font-light text-dark-supporting">
                                        I'll be in touch as soon as possible,
                                        usually within 24 hours.
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col md:flex-row"
                                >
                                    {/* Left — green info panel */}
                                    <div className="hidden flex-col justify-between bg-[#1E3A20] p-10 md:flex md:w-5/12">
                                        <div>
                                            <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-dark-supporting">
                                                Get in touch
                                            </p>
                                            <h2 className="mb-10 font-satoshi text-3xl leading-[1.1] text-white lg:text-4xl">
                                                Let's start your
                                                <br />
                                                <em>recovery together</em>
                                            </h2>

                                            <div className="h-px w-full bg-[rgba(200,230,201,0.15)]" />

                                            <div className="mt-8 space-y-7">
                                                {[
                                                    {
                                                        label: "Response time",
                                                        value: "Usually within 24 hours.",
                                                    },
                                                    {
                                                        label: "Sessions",
                                                        value: "In-person in Cork, or online anywhere.",
                                                    },
                                                ].map((item, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-start gap-4"
                                                    >
                                                        <span className="mt-0.5 shrink-0 font-satoshi text-xs font-light tabular-nums text-dark-supporting">
                                                            {String(
                                                                index + 1,
                                                            ).padStart(2, "0")}
                                                        </span>
                                                        <div>
                                                            <p className="mb-1 font-satoshi text-xs font-medium uppercase tracking-[0.15em] text-dark-supporting">
                                                                {item.label}
                                                            </p>
                                                            <p className="font-satoshi text-sm font-light leading-relaxed text-dark-body">
                                                                {item.value}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div className="mt-10">
                                            <p className="mb-1 font-satoshi text-xs font-medium uppercase tracking-[0.15em] text-dark-supporting">
                                                Phone
                                            </p>
                                            <TrackedPhoneLink
                                                source="contact_modal"
                                                className="font-satoshi text-sm font-light text-[#C8E6C9] underline underline-offset-2"
                                            >
                                                {PHONE_DISPLAY}
                                            </TrackedPhoneLink>
                                        </div>
                                    </div>

                                    {/* Right — cream form panel */}
                                    <div className="flex w-full flex-col justify-center bg-[#F7F4EF] p-8 md:w-7/12 md:p-10">
                                        {/* Close button */}
                                        <div className="mb-8 flex items-center justify-between">
                                            <p className="font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting md:hidden">
                                                Contact
                                            </p>
                                            <button
                                                type="button"
                                                onClick={onClose}
                                                className="ml-auto flex h-8 w-8 items-center justify-center rounded-full border border-solid border-[rgba(30,58,32,0.2)] transition-opacity hover:opacity-50"
                                                aria-label="Close"
                                            >
                                                <svg
                                                    width="10"
                                                    height="10"
                                                    viewBox="0 0 10 10"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M1 1L9 9M9 1L1 9"
                                                        stroke="#1E3A20"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>

                                        <form
                                            onSubmit={handleSubmit}
                                            aria-busy={isSubmitting}
                                            className="space-y-7"
                                        >
                                            {/* Name */}
                                            <div>
                                                <label
                                                    htmlFor="modal-name"
                                                    className={labelClassName}
                                                >
                                                    Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="modal-name"
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
                                                    htmlFor="modal-email"
                                                    className={labelClassName}
                                                >
                                                    Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="modal-email"
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
                                                    htmlFor="modal-phone"
                                                    className={labelClassName}
                                                >
                                                    Phone *
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="modal-phone"
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
                                                    htmlFor="modal-message"
                                                    className={labelClassName}
                                                >
                                                    Message *
                                                </label>
                                                <textarea
                                                    id="modal-message"
                                                    name="message"
                                                    rows={3}
                                                    required
                                                    minLength={10}
                                                    maxLength={MAX_CHARS}
                                                    onChange={
                                                        handleMessageChange
                                                    }
                                                    placeholder="Tell me a little about what you're experiencing..."
                                                    className={`${inputClassName} resize-none`}
                                                />
                                                <p className="mt-1 text-right font-satoshi text-xs font-light tabular-nums text-light-supporting">
                                                    {messageLength}/{MAX_CHARS}
                                                </p>
                                            </div>

                                            <ContactFormHoneypot id="modal-website" />

                                            <Turnstile
                                                ref={turnstileRef}
                                                action="contact_modal"
                                                onTokenChange={
                                                    handleTokenChange
                                                }
                                                onStateChange={
                                                    setTurnstileState
                                                }
                                            />

                                            <ContactFormFeedback
                                                error={formError}
                                                errorId="modal-contact-form-error"
                                                errorClassName="text-xs leading-relaxed"
                                                turnstileState={turnstileState}
                                            />

                                            {/* Submit */}
                                            <div className="flex flex-col gap-3 pt-1">
                                                <motion.button
                                                    type="submit"
                                                    disabled={!canSubmit}
                                                    aria-describedby={
                                                        formError
                                                            ? "modal-contact-form-error"
                                                            : undefined
                                                    }
                                                    className={`cta-interactive w-full rounded-full py-3.5 font-satoshi text-sm font-medium tracking-[0.04em] text-[#F7F4EF] disabled:cursor-not-allowed ${canSubmit ? "bg-[#1E3A20]" : "bg-[#5B6E5A]"}`}
                                                >
                                                    {isSubmitting
                                                        ? "Sending..."
                                                        : "Send Message"}
                                                </motion.button>

                                                <p className="text-center font-satoshi text-xs font-light leading-relaxed text-light-supporting">
                                                    By continuing, you agree to
                                                    our{" "}
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
                                        </form>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
