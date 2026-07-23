"use client"

import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react"

export type TurnstileAction = "contact_modal" | "contact_page"
export type TurnstileState = "loading" | "ready" | "unavailable"

export type TurnstileHandle = {
    reset: () => void
}

type TurnstileWidgetOptions = {
    sitekey: string
    action: TurnstileAction
    appearance: "interaction-only"
    size: "flexible"
    theme: "light"
    retry: "auto"
    "refresh-expired": "auto"
    "refresh-timeout": "auto"
    "response-field": false
    callback: (token: string) => void
    "error-callback": () => void
    "expired-callback": () => void
    "timeout-callback": () => void
}

type TurnstileApi = {
    render: (container: HTMLElement, options: TurnstileWidgetOptions) => string
    reset: (widgetId: string) => void
    remove: (widgetId: string) => void
}

declare global {
    interface Window {
        turnstile?: TurnstileApi
    }
}

const TURNSTILE_SCRIPT_URL =
    "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"

export const TURNSTILE_ENABLED =
    process.env.NEXT_PUBLIC_TURNSTILE_ENABLED === "true"

let turnstileLoadPromise: Promise<TurnstileApi> | null = null

function loadTurnstile() {
    if (window.turnstile) {
        return Promise.resolve(window.turnstile)
    }

    if (turnstileLoadPromise) {
        return turnstileLoadPromise
    }

    turnstileLoadPromise = new Promise<TurnstileApi>((resolve, reject) => {
        const existingScript = document.querySelector<HTMLScriptElement>(
            `script[src="${TURNSTILE_SCRIPT_URL}"]`,
        )
        const script = existingScript ?? document.createElement("script")

        const handleLoad = () => {
            if (!window.turnstile) {
                turnstileLoadPromise = null
                reject(new Error("Turnstile API did not load"))
                return
            }

            // The load event is the readiness signal for an async explicit-render script.
            // Calling turnstile.ready() here makes Cloudflare reject this loading pattern.
            resolve(window.turnstile)
        }
        const handleError = () => {
            script.remove()
            turnstileLoadPromise = null
            reject(new Error("Turnstile script failed to load"))
        }

        script.addEventListener("load", handleLoad, { once: true })
        script.addEventListener("error", handleError, { once: true })

        if (!existingScript) {
            script.src = TURNSTILE_SCRIPT_URL
            script.async = true
            script.defer = true
            document.head.appendChild(script)
        }
    })

    return turnstileLoadPromise
}

type TurnstileProps = {
    action: TurnstileAction
    onStateChange: (state: TurnstileState) => void
    onTokenChange: (token: string) => void
}

const Turnstile = forwardRef<TurnstileHandle, TurnstileProps>(
    function Turnstile({ action, onStateChange, onTokenChange }, ref) {
        const containerRef = useRef<HTMLDivElement>(null)
        const apiRef = useRef<TurnstileApi | null>(null)
        const widgetIdRef = useRef<string | null>(null)
        const callbacksRef = useRef({ onStateChange, onTokenChange })
        const [announcement, setAnnouncement] = useState(
            TURNSTILE_ENABLED ? "Security verification is loading." : "",
        )

        callbacksRef.current = { onStateChange, onTokenChange }

        useImperativeHandle(ref, () => ({
            reset() {
                if (!TURNSTILE_ENABLED) {
                    callbacksRef.current.onTokenChange("")
                    callbacksRef.current.onStateChange("ready")
                    return
                }

                callbacksRef.current.onTokenChange("")
                callbacksRef.current.onStateChange("loading")
                setAnnouncement("Security verification is loading.")

                if (apiRef.current && widgetIdRef.current) {
                    apiRef.current.reset(widgetIdRef.current)
                }
            },
        }))

        useEffect(() => {
            if (!TURNSTILE_ENABLED) {
                callbacksRef.current.onTokenChange("")
                callbacksRef.current.onStateChange("ready")
                return
            }

            const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
            let active = true

            callbacksRef.current.onTokenChange("")
            callbacksRef.current.onStateChange("loading")
            setAnnouncement("Security verification is loading.")

            if (!sitekey) {
                callbacksRef.current.onStateChange("unavailable")
                setAnnouncement("Security verification is unavailable.")
                return () => {
                    active = false
                }
            }

            void loadTurnstile()
                .then((api) => {
                    if (!active || !containerRef.current) return

                    apiRef.current = api
                    widgetIdRef.current = api.render(containerRef.current, {
                        sitekey,
                        action,
                        appearance: "interaction-only",
                        size: "flexible",
                        theme: "light",
                        retry: "auto",
                        "refresh-expired": "auto",
                        "refresh-timeout": "auto",
                        "response-field": false,
                        callback: (token) => {
                            if (!active) return
                            callbacksRef.current.onTokenChange(token)
                            callbacksRef.current.onStateChange("ready")
                            setAnnouncement(
                                "Security verification is complete. You can send the form.",
                            )
                        },
                        "error-callback": () => {
                            if (!active) return
                            callbacksRef.current.onTokenChange("")
                            callbacksRef.current.onStateChange("unavailable")
                            setAnnouncement(
                                "Security verification is unavailable.",
                            )
                        },
                        "expired-callback": () => {
                            if (!active) return
                            callbacksRef.current.onTokenChange("")
                            callbacksRef.current.onStateChange("loading")
                            setAnnouncement(
                                "Security verification expired and is refreshing.",
                            )
                        },
                        "timeout-callback": () => {
                            if (!active) return
                            callbacksRef.current.onTokenChange("")
                            callbacksRef.current.onStateChange("loading")
                            setAnnouncement(
                                "Security verification timed out and is refreshing.",
                            )
                        },
                    })
                })
                .catch(() => {
                    if (!active) return
                    callbacksRef.current.onTokenChange("")
                    callbacksRef.current.onStateChange("unavailable")
                    setAnnouncement("Security verification is unavailable.")
                })

            return () => {
                active = false
                if (apiRef.current && widgetIdRef.current) {
                    apiRef.current.remove(widgetIdRef.current)
                }
                apiRef.current = null
                widgetIdRef.current = null
                callbacksRef.current.onTokenChange("")
                callbacksRef.current.onStateChange("loading")
            }
        }, [action])

        if (!TURNSTILE_ENABLED) {
            return null
        }

        return (
            <div className="w-full">
                <div ref={containerRef} className="w-full" />
                <p className="sr-only" aria-live="polite">
                    {announcement}
                </p>
            </div>
        )
    },
)

export default Turnstile
