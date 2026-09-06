import type { ContactFormError } from "@/app/hooks/useContactForm"
import { cn } from "@/utils/cn"
import type { TurnstileState } from "./Turnstile"
import TrackedPhoneLink from "./TrackedPhoneLink"

const ERROR_MESSAGES: Record<ContactFormError, string> = {
    invalid:
        "Please check that every field meets the requirements, then try again. You can also ",
    verification:
        "Security verification failed or expired. Wait for it to refresh, then try again. If it still does not work, ",
    unavailable:
        "Security verification is temporarily unavailable. Reload the page and try again, or ",
    delivery: "Your message could not be delivered. Please try again, or ",
}

type ContactFormFeedbackProps = {
    error: ContactFormError | null
    errorId: string
    errorClassName: string
    turnstileState: TurnstileState
}

export function ContactFormFeedback({
    error,
    errorId,
    errorClassName,
    turnstileState,
}: ContactFormFeedbackProps) {
    return (
        <>
            {turnstileState === "loading" && (
                <p
                    role="status"
                    className="font-satoshi text-xs font-light text-light-supporting"
                >
                    Preparing security verification…
                </p>
            )}

            {error && (
                <p
                    id={errorId}
                    role="alert"
                    className={cn(
                        "font-satoshi font-light text-[rgba(150,45,45,0.9)]",
                        errorClassName,
                    )}
                >
                    {ERROR_MESSAGES[error]}
                    <TrackedPhoneLink
                        source="contact_form_error"
                        className="underline underline-offset-2"
                    >
                        call
                    </TrackedPhoneLink>{" "}
                    or{" "}
                    <a
                        href="https://wa.me/353871025108"
                        className="underline underline-offset-2"
                    >
                        WhatsApp
                    </a>{" "}
                    +353 (0) 87-102-5108.
                </p>
            )}
        </>
    )
}

export function ContactFormHoneypot({ id }: { id: string }) {
    return (
        <div
            className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
            aria-hidden="true"
        >
            <label htmlFor={id}>Website</label>
            <input
                type="text"
                id={id}
                name="website"
                tabIndex={-1}
                autoComplete="off"
            />
        </div>
    )
}
