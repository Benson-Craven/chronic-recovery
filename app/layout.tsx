import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import {
    JsonLd,
    authorProfile,
    createPageMetadata,
    localBusinessSchema,
    siteUrl,
} from "./lib/seo"

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    ...createPageMetadata({
        title: "Chronic Pain Treatment Cork | Biopsychosocial Approach",
        description:
            "Evidence-informed chronic pain support in Cork and online. Learn how a biopsychosocial approach may help persistent pain when medical causes are ruled out.",
        path: "/",
    }),
    keywords: [
        "chronic pain recovery",
        "chronic pain management Cork",
        "chronic pain relief Ireland",
        "mind body support",
        "pain treatment Cork",
        "pain reprocessing therapy Ireland",
        "PRT Ireland",
        "neuroplastic pain",
        "TMS therapy Cork",
    ],
    authors: [{ name: authorProfile.name, url: authorProfile.url }],
    icons: {
        icon: "/favicon.ico",
    },
}

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="font-satoshi">
                {/* 2. Google Analytics (stays here, Next.js handles placement) */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-8EWZ9GXF1T"
                    strategy="afterInteractive"
                />
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8EWZ9GXF1T');
            `,
                    }}
                />

                <JsonLd id="local-business-schema" data={localBusinessSchema} />

                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
