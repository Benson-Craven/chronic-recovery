import type { Metadata } from "next"
import "./globals.css"
import LenisProvider from "./components/SmoothScroller"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

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
            <body className="font-satoshi">
                <Navbar />
                {children}
                {/* <LenisProvider>{children}</LenisProvider> */}
                <Footer />
            </body>
        </html>
    )
}
