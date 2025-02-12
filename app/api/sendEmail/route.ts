import { cn } from "@/utils/cn"
import axios from "axios"
import { NextRequest } from "next/server"

interface SendEmailBody {
    body: {
        email: string
        name: string
        message: string
    }
}

export async function POST(req: NextRequest) {
    const json = await req.json()

    console.log(">>>>>>>>>>req", json)

    const data = {
        sender: {
            name: "Chronic Pain Recovery",
            email: "hello@benson.codes",
        },
        to: [{ email: "bensoncraven@hotmail.co.uk", name: "Benson" }],
        subject: `Enquiry Submission from ${json.name}`,
        htmlContent: `
            <html><body>
                <h1>Website Form Submission</h1>
                <p>Email: ${json.email}</p>
                <p>Name: ${json.name}</p>
                <p>Enquiry: ${json.message}</p>
                <p>Please do not reply to this email.</p>
            </body></html>
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
