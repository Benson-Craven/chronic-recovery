import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { modalScale } from "@/app/lib/animations"
import { trackContactFormSubmission } from "@/app/lib/analytics"
import { PHONE_DISPLAY, PHONE_HREF } from "@/app/lib/contact"
import { useContactForm } from "@/app/hooks/useContactForm"
import {
    ContactFormFeedback,
    ContactFormHoneypot,
} from "./ContactFormProtection"
import Turnstile from "./Turnstile"

const MAX_CHARS = 500

type ContactModalProps = {
    isOpen: boolean
    onClose: () => void
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
    fontSize: "0.95rem",
}

const labelStyles: React.CSSProperties = {
    display: "block",
    marginBottom: "6px",
    fontSize: "0.65rem",
    fontFamily: "var(--font-dm-sans)",
    fontWeight: 500,
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "rgba(30,58,32,0.4)",
}

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
                        className="absolute inset-0"
                        style={{
                            backgroundColor: "rgba(30,58,32,0.6)",
                            backdropFilter: "blur(4px)",
                        }}
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Modal */}
                    <motion.div
                        className="relative z-10 max-h-[calc(100dvh-2rem)] w-full max-w-4xl overflow-y-auto"
                        style={{ borderRadius: "24px" }}
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
                                    className="flex min-h-[360px] flex-col items-start justify-center p-12 md:p-16"
                                    style={{ backgroundColor: "#1E3A20" }}
                                >
                                    <p
                                        className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                                        style={{
                                            color: "#C8E6C9",
                                            fontFamily: "var(--font-dm-sans)",
                                        }}
                                    >
                                        Message sent
                                    </p>
                                    <h2
                                        className="text-4xl leading-[1.1] text-white md:text-5xl"
                                        style={{
                                            fontFamily: "var(--font-dm-serif)",
                                        }}
                                    >
                                        Thank you for
                                        <br />
                                        <em>reaching out.</em>
                                    </h2>
                                    <div
                                        className="mt-8 h-px w-full"
                                        style={{
                                            backgroundColor:
                                                "rgba(200,230,201,0.15)",
                                        }}
                                    />
                                    <p
                                        className="mt-6 text-base"
                                        style={{
                                            color: "rgba(200,230,201,0.6)",
                                            fontFamily: "var(--font-dm-sans)",
                                            fontWeight: 300,
                                        }}
                                    >
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
                                    <div
                                        className="hidden flex-col justify-between p-10 md:flex md:w-5/12"
                                        style={{ backgroundColor: "#1E3A20" }}
                                    >
                                        <div>
                                            <p
                                                className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                                                style={{
                                                    color: "#C8E6C9",
                                                    fontFamily:
                                                        "var(--font-dm-sans)",
                                                }}
                                            >
                                                Get in touch
                                            </p>
                                            <h2
                                                className="mb-10 text-3xl leading-[1.1] text-white lg:text-4xl"
                                                style={{
                                                    fontFamily:
                                                        "var(--font-dm-serif)",
                                                }}
                                            >
                                                Let's start your
                                                <br />
                                                <em>recovery together</em>
                                            </h2>

                                            <div
                                                className="h-px w-full"
                                                style={{
                                                    backgroundColor:
                                                        "rgba(200,230,201,0.15)",
                                                }}
                                            />

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
                                                        <span
                                                            className="mt-0.5 shrink-0 text-xs tabular-nums opacity-30"
                                                            style={{
                                                                color: "#C8E6C9",
                                                                fontFamily:
                                                                    "var(--font-dm-sans)",
                                                                fontWeight: 300,
                                                            }}
                                                        >
                                                            {String(
                                                                index + 1,
                                                            ).padStart(2, "0")}
                                                        </span>
                                                        <div>
                                                            <p
                                                                className="mb-1 text-xs uppercase tracking-[0.15em] opacity-40"
                                                                style={{
                                                                    color: "#C8E6C9",
                                                                    fontFamily:
                                                                        "var(--font-dm-sans)",
                                                                    fontWeight: 500,
                                                                }}
                                                            >
                                                                {item.label}
                                                            </p>
                                                            <p
                                                                className="text-sm leading-relaxed"
                                                                style={{
                                                                    color: "rgba(200,230,201,0.65)",
                                                                    fontFamily:
                                                                        "var(--font-dm-sans)",
                                                                    fontWeight: 300,
                                                                }}
                                                            >
                                                                {item.value}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div className="mt-10">
                                            <p
                                                className="mb-1 text-xs uppercase tracking-[0.15em] opacity-40"
                                                style={{
                                                    color: "#C8E6C9",
                                                    fontFamily:
                                                        "var(--font-dm-sans)",
                                                    fontWeight: 500,
                                                }}
                                            >
                                                Phone
                                            </p>
                                            <a
                                                href={PHONE_HREF}
                                                className="text-sm underline underline-offset-2 transition-opacity hover:opacity-60"
                                                style={{
                                                    color: "#C8E6C9",
                                                    fontFamily:
                                                        "var(--font-dm-sans)",
                                                    fontWeight: 300,
                                                }}
                                            >
                                                {PHONE_DISPLAY}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Right — cream form panel */}
                                    <div
                                        className="flex w-full flex-col justify-center p-8 md:w-7/12 md:p-10"
                                        style={{ backgroundColor: "#F7F4EF" }}
                                    >
                                        {/* Close button */}
                                        <div className="mb-8 flex items-center justify-between">
                                            <p
                                                className="text-xs font-medium uppercase tracking-[0.25em] opacity-40 md:hidden"
                                                style={{
                                                    color: "#1E3A20",
                                                    fontFamily:
                                                        "var(--font-dm-sans)",
                                                }}
                                            >
                                                Contact
                                            </p>
                                            <button
                                                type="button"
                                                onClick={onClose}
                                                className="ml-auto flex h-8 w-8 items-center justify-center rounded-full transition-opacity hover:opacity-50"
                                                style={{
                                                    border: "1px solid rgba(30,58,32,0.2)",
                                                }}
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
                                                    style={labelStyles}
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
                                                    style={inputStyles}
                                                />
                                            </div>

                                            {/* Email */}
                                            <div>
                                                <label
                                                    htmlFor="modal-email"
                                                    style={labelStyles}
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
                                                    style={inputStyles}
                                                />
                                            </div>

                                            {/* Phone */}
                                            <div>
                                                <label
                                                    htmlFor="modal-phone"
                                                    style={labelStyles}
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
                                                    style={inputStyles}
                                                />
                                            </div>

                                            {/* Message */}
                                            <div>
                                                <label
                                                    htmlFor="modal-message"
                                                    style={labelStyles}
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
                                                    style={{
                                                        ...inputStyles,
                                                        resize: "none",
                                                    }}
                                                />
                                                <p
                                                    className="mt-1 text-right text-xs tabular-nums"
                                                    style={{
                                                        color: "rgba(30,58,32,0.3)",
                                                        fontFamily:
                                                            "var(--font-dm-sans)",
                                                        fontWeight: 300,
                                                    }}
                                                >
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
                                                errorColor="rgba(180,60,60,0.8)"
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
                                                    whileHover={{
                                                        scale: canSubmit
                                                            ? 1.03
                                                            : 1,
                                                    }}
                                                    whileTap={{ scale: 0.98 }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 300,
                                                        damping: 20,
                                                    }}
                                                    className="w-full rounded-full py-3.5 text-sm font-medium tracking-wide transition-shadow disabled:cursor-not-allowed disabled:opacity-50"
                                                    style={{
                                                        backgroundColor:
                                                            "#1E3A20",
                                                        color: "#F7F4EF",
                                                        fontFamily:
                                                            "var(--font-dm-sans)",
                                                        fontWeight: 500,
                                                        letterSpacing: "0.04em",
                                                    }}
                                                >
                                                    {isSubmitting
                                                        ? "Sending..."
                                                        : "Send Message"}
                                                </motion.button>

                                                <p
                                                    className="text-center text-xs leading-relaxed"
                                                    style={{
                                                        color: "rgba(30,58,32,0.3)",
                                                        fontFamily:
                                                            "var(--font-dm-sans)",
                                                        fontWeight: 300,
                                                    }}
                                                >
                                                    By continuing, you agree to
                                                    our{" "}
                                                    <Link
                                                        href="/terms-and-conditions"
                                                        className="underline underline-offset-2 transition-opacity hover:opacity-60"
                                                        style={{
                                                            color: "#1E3A20",
                                                        }}
                                                    >
                                                        Terms & Conditions
                                                    </Link>{" "}
                                                    and{" "}
                                                    <Link
                                                        href="/privacy-policy"
                                                        className="underline underline-offset-2 transition-opacity hover:opacity-60"
                                                        style={{
                                                            color: "#1E3A20",
                                                        }}
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
