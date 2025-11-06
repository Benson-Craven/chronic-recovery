import axios from "axios"
import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
    const json = await req.json()

    const data = {
        sender: {
            name: "Chronic Pain Recovery",
            email: "hello@benson.codes",
        },
        to: [{ email: "bensoncraven@hotmail.co.uk", name: "Benson" }],
        subject: `New Enquiry Submission from ${json.name}`,
        htmlContent: `
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                    <h1 style="font-size: 24px; color: #333; margin-bottom: 20px;">New Enquiry Received</h1>
                    <p style="font-size: 16px; margin-bottom: 10px;"><strong>Name:</strong> ${json.name}</p>
                    <p style="font-size: 16px; margin-bottom: 10px;"><strong>Email:</strong> ${json.email}</p>
                    <p style="font-size: 16px; margin-bottom: 10px;"><strong>Phone:</strong> ${json.phone}</p>
                    <p style="font-size: 16px; margin-bottom: 20px;"><strong>Message:</strong></p>
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 4px; border: 1px solid #eee;">
                        <p style="font-size: 16px; margin: 0;">${json.message}</p>
                    </div>
                    <p style="font-size: 14px; color: #777; margin-top: 20px;">
                        This is an automated message. Please do not reply to this email.
                    </p>
                </div>
            </body>
        </html>
    `,
    }

    try {
        const res = await axios.post(
            "https://api.sendinblue.com/v3/smtp/email",
            data,
            {
                headers: {
                    accept: "application/json",
                    "api-key": process.env.NEXT_BREVO_API_KEY as string,
                    "content-type": "application/json",
                },
            },
        )
        return new Response(JSON.stringify(res.data, null, 2), {
            status: res.status,
        })
    } catch (error) {
        console.log(error)
        return new Response(error as unknown as any, { status: 500 })
    }
}
