import { NextResponse } from "next/server"

export async function OPTIONS() {
    return NextResponse.json(
        {},
        {
            headers: {
                "Access-Control-Allow-Origin": "https://chronicpainrecovery.ie",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
            },
        },
    )
}

export async function GET() {
    return NextResponse.json(
        { message: "Hello from Next.js API" },
        {
            headers: {
                "Access-Control-Allow-Origin": "https://chronicpainrecovery.ie",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
            },
        },
    )
}
