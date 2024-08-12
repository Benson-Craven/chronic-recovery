import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Lenis from "lenis"
import { useEffect } from "react"
import LenisProvider from "./components/SmoothScroller"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Chronic Pain Recovery",
    description: "Code by Benson",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <LenisProvider>{children}</LenisProvider>
                <Footer />
            </body>
        </html>
    )
}
