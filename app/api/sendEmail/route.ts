import { NextRequest, NextResponse } from "next/server"

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email"
const SENDER_EMAIL =
    process.env.BREVO_SENDER_EMAIL ?? "noreply@chronicpainrecovery.ie"
const SENDER_NAME = process.env.BREVO_SENDER_NAME ?? "Chronic Pain Recovery"

function escapeHtml(value: unknown) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;")
}

export async function POST(req: NextRequest) {
    try {
        const { name, email, phone, message } = await req.json()

        if (!process.env.BREVO_API_KEY || !process.env.EMAIL_TO) {
            console.error("Brevo Error: missing BREVO_API_KEY or EMAIL_TO")
            return NextResponse.json({ success: false }, { status: 500 })
        }

        const res = await fetch(BREVO_API_URL, {
            method: "POST",
            headers: {
                accept: "application/json",
                "api-key": process.env.BREVO_API_KEY,
                "content-type": "application/json",
            },
            body: JSON.stringify({
                sender: {
                    name: SENDER_NAME,
                    email: SENDER_EMAIL,
                },
                to: [
                    {
                        email: process.env.EMAIL_TO,
                        name: SENDER_NAME,
                    },
                ],
                replyTo: {
                    email,
                    name,
                },
                subject: `New enquiry from ${name}`,
                htmlContent: `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                    <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
                    <p><strong>Message:</strong><br>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
                `,
            }),
        })

        if (!res.ok) {
            const errorBody = await res.json().catch(() => null)
            console.error("Brevo Error:", {
                status: res.status,
                body: errorBody,
            })
            return NextResponse.json({ success: false }, { status: 500 })
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Email Error:", error)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
