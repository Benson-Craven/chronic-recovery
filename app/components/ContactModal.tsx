import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { modalScale } from "@/app/lib/animations"

const MAX_CHARS = 500

type ContactModalProps = {
    isOpen: boolean
    onClose: () => void
}

type FormStatus = "idle" | "submitting" | "success" | "error"

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [messageLength, setMessageLength] = useState(0)
    const [status, setStatus] = useState<FormStatus>("idle")

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value
        if (text.length > MAX_CHARS) {
            e.target.value = text.slice(0, MAX_CHARS)
        }
        setMessageLength(Math.min(text.length, MAX_CHARS))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus("submitting")

        const form = e.currentTarget
        const formData = new FormData(form)

        try {
            const res = await fetch("/api/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.get("name"),
                    email: formData.get("email"),
                    phone: formData.get("phone"),
                    message: formData.get("message"),
                }),
            })

            if (!res.ok) throw new Error("Failed to send")

            form.reset()
            setMessageLength(0)
            setStatus("success")

            setTimeout(() => {
                onClose()
                setTimeout(() => setStatus("idle"), 300)
            }, 2000)
        } catch {
            setStatus("error")
        }
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
                        className="absolute inset-0 bg-black/50"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Modal */}
                    <motion.div
                        className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border-2 border-black bg-textSecondary shadow-xl"
                        variants={modalScale}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {status === "success" ? (
                            <SuccessMessage />
                        ) : (
                            <div className="flex flex-col md:flex-row">
                                <ContactInfo />
                                <ContactForm
                                    onSubmit={handleSubmit}
                                    messageLength={messageLength}
                                    onMessageChange={handleMessageChange}
                                    isSubmitting={status === "submitting"}
                                    hasError={status === "error"}
                                />
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

function SuccessMessage() {
    return (
        <motion.div
            className="flex min-h-[400px] items-center justify-center p-12 text-center text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
        >
            <div>
                <h2 className="mb-4 text-3xl font-medium">
                    Thank you for your enquiry!
                </h2>
                <p>We&apos;ll get back to you as soon as possible.</p>
            </div>
        </motion.div>
    )
}

function ContactInfo() {
    return (
        <div className="hidden flex-col justify-center p-12 text-[#3C3C3C] md:flex md:w-1/2">
            <h1 className="mb-6 text-5xl font-medium">Contact us today</h1>
            <div className="mb-8 h-px bg-black/10" />
            <p className="mb-4">
                Fill out the form to learn more about Chronic Pain Recovery and
                how it can improve your everyday life.
            </p>
            <p className="mb-4">
                We&apos;ll get back to you as quickly as we can.
            </p>
            <p>
                Or call/WhatsApp:{" "}
                <a
                    href="tel:+353892335106"
                    className="font-bold hover:underline"
                >
                    +353 (0) 89-233-5106
                </a>
            </p>
        </div>
    )
}

type ContactFormProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    messageLength: number
    onMessageChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    isSubmitting: boolean
    hasError: boolean
}

function ContactForm({
    onSubmit,
    messageLength,
    onMessageChange,
    isSubmitting,
    hasError,
}: ContactFormProps) {
    return (
        <form
            onSubmit={onSubmit}
            className="flex w-full flex-col justify-center rounded-3xl bg-white p-8 md:w-1/2 md:p-12"
        >
            <h2 className="mb-6 text-2xl font-medium md:hidden">
                Contact us today
            </h2>
            <div className="mb-6 h-px bg-black/10 md:hidden" />

            <div className="space-y-5">
                <Field label="Name" name="name" type="text" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" required />

                <div>
                    <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        maxLength={MAX_CHARS}
                        onChange={onMessageChange}
                        className="w-full rounded-lg border border-gray-300 p-3 transition-colors focus:border-textSecondary focus:outline-none"
                    />
                    <p className="mt-1 text-sm text-gray-500">
                        {messageLength}/{MAX_CHARS} characters
                    </p>
                </div>

                {hasError && (
                    <p className="text-sm text-red-600">
                        Something went wrong. Please try again.
                    </p>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-full bg-textSecondary px-6 py-2.5 text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                    {isSubmitting ? "Sending..." : "Submit"}
                </button>

                <p className="text-xs text-gray-500">
                    By continuing, you agree to our{" "}
                    <Link href="/terms-and-conditions" className="underline">
                        Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" className="underline">
                        Privacy Policy
                    </Link>
                    .
                </p>
            </div>
        </form>
    )
}

type FieldProps = {
    label: string
    name: string
    type: string
    required?: boolean
}

function Field({ label, name, type, required }: FieldProps) {
    return (
        <div>
            <label htmlFor={name} className="mb-2 block text-sm font-medium">
                {label} {required && "*"}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                required={required}
                className="w-full rounded-lg border border-gray-300 p-3 transition-colors focus:border-textSecondary focus:outline-none"
            />
        </div>
    )
}
