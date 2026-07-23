"use client"

import { useRef, useState, type FormEvent } from "react"
import {
    TURNSTILE_ENABLED,
    type TurnstileAction,
    type TurnstileHandle,
    type TurnstileState,
} from "@/app/components/Turnstile"

export type ContactFormError =
    | "invalid"
    | "verification"
    | "unavailable"
    | "delivery"

type ContactApiResult = {
    success?: boolean
    error?: string
}

function readApiResult(value: unknown): ContactApiResult {
    if (typeof value !== "object" || value === null) return {}

    return {
        success: "success" in value ? value.success === true : undefined,
        error:
            "error" in value && typeof value.error === "string"
                ? value.error
                : undefined,
    }
}

function mapApiError(error?: string): ContactFormError {
    if (error === "INVALID_SUBMISSION") return "invalid"
    if (error === "VERIFICATION_FAILED") return "verification"
    if (error === "VERIFICATION_UNAVAILABLE") return "unavailable"
    return "delivery"
}

export function useContactForm(source: TurnstileAction, onSuccess: () => void) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formError, setFormError] = useState<ContactFormError | null>(null)
    const [turnstileToken, setTurnstileToken] = useState("")
    const [turnstileState, setTurnstileState] = useState<TurnstileState>(
        TURNSTILE_ENABLED ? "loading" : "ready",
    )
    const turnstileRef = useRef<TurnstileHandle>(null)
    const submissionInFlight = useRef(false)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (submissionInFlight.current) return

        if (
            TURNSTILE_ENABLED &&
            (turnstileState !== "ready" || !turnstileToken)
        ) {
            setFormError(
                turnstileState === "unavailable"
                    ? "unavailable"
                    : "verification",
            )
            return
        }

        submissionInFlight.current = true
        setIsSubmitting(true)
        setFormError(null)

        const form = event.currentTarget
        const formData = new FormData(form)

        try {
            const response = await fetch("/api/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: String(formData.get("name") ?? ""),
                    email: String(formData.get("email") ?? ""),
                    phone: String(formData.get("phone") ?? ""),
                    message: String(formData.get("message") ?? ""),
                    website: String(formData.get("website") ?? ""),
                    turnstileToken,
                    source,
                }),
            })
            const result = readApiResult(
                await response.json().catch(() => null),
            )

            if (!response.ok || result.success !== true) {
                setFormError(mapApiError(result.error))
                turnstileRef.current?.reset()
                return
            }

            form.reset()
            onSuccess()
        } catch {
            setFormError("delivery")
            turnstileRef.current?.reset()
        } finally {
            submissionInFlight.current = false
            setIsSubmitting(false)
        }
    }

    const handleTokenChange = (token: string) => {
        setTurnstileToken(token)
        if (token) {
            setFormError((current) =>
                current === "verification" || current === "unavailable"
                    ? null
                    : current,
            )
        }
    }

    return {
        canSubmit:
            !isSubmitting &&
            (!TURNSTILE_ENABLED ||
                (turnstileState === "ready" && Boolean(turnstileToken))),
        formError:
            formError ??
            (TURNSTILE_ENABLED && turnstileState === "unavailable"
                ? "unavailable"
                : null),
        handleSubmit,
        handleTokenChange,
        isSubmitting,
        setTurnstileState,
        turnstileRef,
        turnstileState,
    }
}
