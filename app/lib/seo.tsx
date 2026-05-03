import type { Metadata } from "next"
import Script from "next/script"

export const siteUrl = "https://chronicpainrecovery.ie"
export const siteName = "Chronic Pain Recovery"
export const defaultOgImage = "/og-image.jpg"

export const authorProfile = {
    name: "Marsha Canny",
    role: "Chronic pain therapist",
    url: "/info",
    image: "/images/marsha-new.jpg",
    location: "Rochestown, Cork, Ireland",
    atnsUrl:
        "https://www.symptomatic.me/practitioner-directory#!biz/id/6931943a34afb87d36038b44",
    credentials:
        "Listed in the ATNS Practitioner & Coach Directory and trained in pain neuroscience, Pain Reprocessing Therapy, and Dr. Howard Schubiner's mind-body methods.",
    bio: "Marsha Canny is a chronic pain therapist based in Rochestown, Cork. Her work draws on pain neuroscience education, Pain Reprocessing Therapy, Dr. Howard Schubiner's mind-body methods, and a biopsychosocial approach to support people with persistent pain when serious medical causes have been assessed.",
    personalExperience:
        "Marsha also brings lived experience of recovering from long-term migraines and neck pain, which informs her compassionate, practical approach to chronic pain recovery work.",
}

type PageMetadata = {
    title: string
    description: string
    path?: string
    type?: "website" | "article"
    image?: string
}

export type BreadcrumbItem = {
    name: string
    path: string
}

export function absoluteUrl(path = "") {
    if (!path || path === "/") return siteUrl
    return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`
}

export function createPageMetadata({
    title,
    description,
    path = "/",
    type = "website",
    image = defaultOgImage,
}: PageMetadata): Metadata {
    const url = absoluteUrl(path)
    const imageUrl = image.startsWith("http") ? image : absoluteUrl(image)

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: `${siteName} in Cork`,
                },
            ],
            locale: "en_IE",
            type,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [imageUrl],
        },
    }
}

export function JsonLd({
    id,
    data,
}: {
    id: string
    data: Record<string, unknown>
}) {
    return (
        <Script
            id={id}
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    )
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: absoluteUrl(item.path),
        })),
    }
}

export function BreadcrumbJsonLd({
    id,
    items,
}: {
    id: string
    items: BreadcrumbItem[]
}) {
    return <JsonLd id={id} data={breadcrumbSchema(items)} />
}

export function faqSchema(
    questions: { question: string; answer: string }[],
) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: questions.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    }
}

export function FAQJsonLd({
    id,
    questions,
}: {
    id: string
    questions: { question: string; answer: string }[]
}) {
    return <JsonLd id={id} data={faqSchema(questions)} />
}

export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: siteName,
    url: siteUrl,
    telephone: "+353871025108",
    image: absoluteUrl(defaultOgImage),
    logo: absoluteUrl("/logos/logo-removebg-preview.png"),
    description:
        "Biopsychosocial chronic pain support in Cork, Ireland. Pain Reprocessing Therapy and related approaches may help people with persistent pain when serious medical causes have been assessed.",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Rochestown",
        addressRegion: "Cork",
        addressCountry: "IE",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 51.8695,
        longitude: -8.4047,
    },
    openingHours: "Mo-Fr 09:00-18:00",
    sameAs: [
        "https://www.facebook.com/chronicpainrecoveryireland",
        authorProfile.atnsUrl,
    ],
    medicalSpecialty: "Pain Management",
    founder: {
        "@type": "Person",
        name: authorProfile.name,
        jobTitle: authorProfile.role,
        image: absoluteUrl(authorProfile.image),
        url: absoluteUrl(authorProfile.url),
        sameAs: [authorProfile.atnsUrl],
        knowsAbout: [
            "Pain neuroscience education",
            "Pain Reprocessing Therapy",
            "Neuroplastic symptoms",
            "Biopsychosocial chronic pain support",
        ],
    },
    areaServed: [
        {
            "@type": "AdministrativeArea",
            name: "Cork",
        },
        {
            "@type": "Country",
            name: "Ireland",
        },
    ],
}
