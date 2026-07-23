import type { Metadata } from "next"

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
        "https://www.symptomatic.me/practitioner-directory#!biz/id/6931943a34afb87d36038b44/About",
    credentials:
        "Marsha has a public profile in the ATNS Practitioner & Coach Directory. Please use that directory profile and ask Marsha directly to verify the training and scope relevant to your needs.",
    bio: "Marsha Canny is a chronic pain therapist based in Rochestown, Cork. She provides educational, recovery-oriented support for people exploring persistent pain and possible neuroplastic symptoms after appropriate medical assessment.",
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
    const json = JSON.stringify(data).replace(/</g, "\\u003c")

    return (
        <script
            id={id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: json }}
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

const organizationId = `${siteUrl}/#organization`
const personId = `${siteUrl}/#marsha-canny`

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: siteName,
    url: siteUrl,
    telephone: "+353871025108",
    image: absoluteUrl(defaultOgImage),
    logo: absoluteUrl("/logos/logo-removebg-preview.png"),
    description:
        "Online-first educational and recovery-oriented support for people in Ireland exploring persistent pain and possible neuroplastic symptoms after appropriate medical assessment, with limited in-person availability in Rochestown, Cork.",
    sameAs: ["https://www.facebook.com/chronicpainrecoveryireland"],
    areaServed: {
        "@type": "Country",
        name: "Ireland",
    },
}

export const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: authorProfile.name,
    jobTitle: authorProfile.role,
    image: absoluteUrl(authorProfile.image),
    url: absoluteUrl(authorProfile.url),
    sameAs: [authorProfile.atnsUrl],
    worksFor: {
        "@id": organizationId,
    },
}

type ArticleSchema = {
    headline: string
    description: string
    path: string
    datePublished: string
    dateModified?: string
    image?: string
}

export function articleSchema({
    headline,
    description,
    path,
    datePublished,
    dateModified,
    image,
}: ArticleSchema) {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline,
        description,
        image: image ? absoluteUrl(image) : undefined,
        datePublished,
        dateModified: dateModified || datePublished,
        inLanguage: "en-IE",
        author: {
            "@type": "Person",
            "@id": personId,
            name: authorProfile.name,
            url: absoluteUrl(authorProfile.url),
            image: absoluteUrl(authorProfile.image),
            jobTitle: authorProfile.role,
            sameAs: [authorProfile.atnsUrl],
        },
        publisher: {
            "@type": "Organization",
            "@id": organizationId,
            name: siteName,
            url: siteUrl,
            logo: {
                "@type": "ImageObject",
                url: absoluteUrl("/logos/logo-removebg-preview.png"),
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": absoluteUrl(path),
        },
    }
}
