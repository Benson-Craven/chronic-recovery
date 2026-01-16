import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

// 1. All SEO Tags live here now (Cleaner & Google-friendly)
export const metadata: Metadata = {
    title: "Chronic Pain Recovery | Trusted Chronic Pain Treatment in Cork, Ireland",
    description:
        "Expert chronic pain recovery in Cork, Ireland. We provide evidence-based treatments and holistic support to help you overcome persistent pain and reclaim your life.",
    keywords: [
        "chronic pain recovery",
        "chronic pain management Cork",
        "chronic pain relief Ireland",
        "holistic healing",
        "pain treatment Cork",
        "physiotherapy Ireland",
        "natural pain relief",
        "TMS therapy cork", // Added a high-value term
    ],
    authors: [{ name: "Chronic Pain Recovery Cork" }],
    openGraph: {
        title: "Chronic Pain Recovery | Trusted Support in Cork",
        description:
            "Expert chronic pain recovery solutions in Cork. Reclaim your life today.",
        url: "https://chronicpainrecovery.ie",
        siteName: "Chronic Pain Recovery Ireland",
        images: [
            {
                url: "https://chronicpainrecovery.ie/images/forest.avif",
                width: 1200,
                height: 630,
                alt: "Peaceful forest representing pain recovery",
            },
        ],
        locale: "en_IE",
        type: "website",
    },
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

                {/* 3. Structured Data (Schema.org) */}
                {/* Telling Google exactly who you are and where you are */}
                <Script
                    id="schema-org"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "MedicalOrganization",
                            name: "Chronic Pain Recovery Cork",
                            url: "https://chronicpainrecovery.ie",
                            logo: "https://chronicpainrecovery.ie/logos/Mending_Mindets.png",
                            description:
                                "Expert chronic pain recovery solutions in Cork, Ireland. Personalised treatments and holistic pain management strategies.",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "", // Fill this if you have a specific clinic door number
                                addressLocality: "Cork",
                                addressRegion: "Rochestown",
                                postalCode: "",
                                addressCountry: "IE",
                            },
                            sameAs: [
                                "https://www.facebook.com/chronicpainrecoveryireland",
                                // Add Instagram/LinkedIn here if you have them
                            ],
                            contactPoint: {
                                "@type": "ContactPoint",
                                contactType: "customer support",
                                email: "info@chronicpainrecovery.ie", // Optional: helps Google know how to contact you
                            },
                        }),
                    }}
                />

                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
