import type { Metadata } from "next"
import "./globals.css"
import LenisProvider from "./components/SmoothScroller"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Head from "next/head"

export const metadata: Metadata = {
    title: "Chronic Pain Recovery | Trusted Chronic Pain Management in Cork, Ireland",
    description:
        "Find expert chronic pain recovery solutions in Cork, Ireland. Our personalised treatments will help you cure your chronic pain. Start your recovery journey today!",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <Head>
                <meta
                    name="keywords"
                    content="chronic pain recovery, chronic pain management Cork, chronic pain relief Ireland, holistic healing, pain treatment Cork, physiotherapy Ireland, natural pain relief, chronic pain solutions"
                />
                <meta name="author" content="Chronic Pain Recovery Cork" />

                {/* Open Graph Metadata for Social Sharing */}
                <meta
                    property="og:title"
                    content="Chronic Pain Recovery | Trusted Chronic Pain Management in Cork, Ireland"
                />
                <meta
                    property="og:description"
                    content="Find expert chronic pain recovery solutions in Cork, Ireland. Personalised treatments and holistic pain management strategies to cure your chronic pain"
                />
                <meta
                    property="og:image"
                    content="https://yourwebsite.com/path-to-image.jpg"
                />
                <meta property="og:url" content="https://yourwebsite.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_IE" />

                {/* Structured Data (Schema Markup) */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalOrganization",
                        name: "Chronic Pain Recovery Cork",
                        url: "https://chronicpainrecovery.netlify.app",
                        logo: "public/logos/Mending_Mindets.png",
                        description:
                            "Expert chronic pain recovery solutions in Cork, Ireland. Personalised treatments and holistic pain management strategies to help you cure your chronic pain",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "",
                            addressLocality: "Cork",
                            addressRegion: "Munster",
                            postalCode: "",
                            addressCountry: "Ireland",
                        },
                        sameAs: [
                            "https://www.facebook.com/chronicpainrecoveryireland",
                            "https://www.instagram.com/yourpage/",
                        ],
                    })}
                </script>

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <body className="font-satoshi">
                <Navbar />
                {children}
                {/* <LenisProvider>{children}</LenisProvider> */}
                <Footer />
            </body>
        </html>
    )
}
