import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "./components/SmoothScroller";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Chronic Pain Recovery | Trusted Chronic Pain Treatment in Cork, Ireland",
  description:
    "I provide expert chronic pain recovery treatments in Cork, Ireland. These treatments will help you cure your chronic pain. Start your recovery journey today!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8EWZ9GXF1T"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8EWZ9GXF1T');
            `,
          }}
        />

        {/* SEO Meta Tags */}
        <meta name="keywords" content="chronic pain recovery, chronic pain management Cork, chronic pain relief Ireland, holistic healing, pain treatment Cork, physiotherapy Ireland, natural pain relief, chronic pain solutions" />
        <meta name="author" content="Chronic Pain Recovery Cork" />
        <meta property="og:title" content={String(metadata.title)} />
        <meta property="og:description" content={String(metadata.description)} />
        <meta property="og:image" content="https://chronicpainrecovery.ie/path-to-image.jpg" />
        <meta property="og:url" content="https://chronicpainrecovery.ie" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IE" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              name: "Chronic Pain Recovery Cork",
              url: "https://chronicpainrecovery.ie",
              logo: "/logos/Mending_Mindets.png",
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
            }),
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="font-satoshi">
        <Navbar />
        {children}
        {/* <LenisProvider>{children}</LenisProvider> */}
        <Footer />
      </body>
    </html>
  );
}
