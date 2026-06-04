# SEO Action Plan — chronicpainrecovery.ie

> Next.js codebase. All changes are code-level fixes unless noted otherwise.

---

## Clinical claim guardrails

All SEO copy, metadata, schema, page content, ads, and blog recommendations must stay aligned with the clinical boundaries stated in `app/conditions/page.tsx`.

**Do not claim to cure, treat, reverse, or resolve the following:**

-   Structural abnormalities requiring surgical intervention
-   Acute injuries
-   Oncology / cancer
-   Active infections, including HIV, Lyme disease, and other active infections
-   CNS conditions, including Parkinson's disease, dementia, and ALS
-   ENT conditions, including hearing loss and Ménière's disease

**Required wording standard:**

-   Use "may help", "may benefit", "can support", "can be appropriate for", or "recovery may be possible" when discussing chronic or neuroplastic pain.
-   Avoid absolute cure language such as "guaranteed", "permanent cure", "eliminates pain at its source", or "switches off pain signals permanently".
-   Avoid using the word "holistic".
-   Be cautious claiming to cure or help fibromyalgia.
-   Make clear that structural abnormalities, disease, infection, and acute injury should be assessed by a doctor before beginning this approach.
-   It is acceptable to say people with structural or disease-related issues alongside chronic pain may still benefit from this treatment, matching the note on `/conditions`.

### Preferred wording for condition pages and blog copy

Use conservative, defensible wording across condition pages, blog posts, CTAs, metadata, schema, and internal links.

Prefer:

-   "Conditions this approach may support"
-   "Conditions where this approach may be relevant"
-   "Recovery may be possible for some people"
-   "This approach may be worth exploring"
-   "Persistent post-surgical pain after appropriate medical review"
-   "Learned pain pathways may be retrained over time"

Avoid:

-   "Conditions we treat"
-   "Treatable conditions"
-   "Recovery is possible" as a standalone guarantee-style claim
-   "This approach may be the answer"
-   "Post-surgical pain that hasn't resolved" without medical review context
-   "What's learned can be unlearned" when used as a broad clinical promise

### Blog content rules

Every blog post must follow the clinical claim guardrails above.

-   Include a medical assessment caveat where relevant, especially for new, worsening, unexplained, severe, or changing symptoms.
-   Use cautious language: "may help", "can support", "may be appropriate", "may benefit", and "recovery may be possible".
-   Avoid cure, reversal, guaranteed recovery, permanent pain elimination, and "switching off pain signals" claims.
-   Do not present Pain Reprocessing Therapy, pain neuroscience education, coaching, counselling, or brain-body work as a replacement for medical care.
-   For fibromyalgia, CRPS, Long Covid, chronic fatigue, post-surgical pain, structural findings, and overlapping medical conditions, write educationally and cautiously.
-   Prefer titles that match search intent without overstating clinical benefit.
-   Frontmatter excerpts are metadata and must follow the same claim standard as visible page copy.

---

## Priority 1 — Critical (fix immediately)

### 1.1 Fix duplicate `<title>` tags across all pages

**Problem:** Every page shares the same title tag: `"Chronic Pain Recovery | Trusted Chronic Pain Treatment in Cork, Ireland"`. Google cannot differentiate pages and will likely canonicalise them all to one.

**Fix:** Use Next.js `Metadata` API to set a unique `title` and `description` on every page file.

```ts
// app/science/page.tsx
export const metadata: Metadata = {
    title: "The Science of Chronic Pain | Pain Reprocessing Therapy Cork",
    description:
        "Learn how neuroplasticity and pain reprocessing therapy may help retrain chronic pain signals. Evidence-informed support available in Cork and online.",
}

// app/blog/[slug]/page.tsx — generate dynamically from post data
export async function generateMetadata({ params }): Promise<Metadata> {
    const post = await getPost(params.slug)
    return {
        title: `${post.title} | Chronic Pain Recovery`,
        description: post.excerpt,
    }
}
```

**Required unique titles for all current pages:**

| Route              | Suggested `<title>`                                             |
| ------------------ | --------------------------------------------------------------- |
| `/`                | `Chronic Pain Treatment Cork \| Biopsychosocial Approach`       |
| `/science`         | `The Science of Chronic Pain \| Pain Reprocessing Therapy Cork` |
| `/conditions`      | `Conditions We May Support \| Chronic Pain Recovery Cork`       |
| `/info`            | `About \| Chronic Pain Recovery Cork`                           |
| `/blog`            | `Journal \| Chronic Pain Recovery Insights`                     |
| `/resources`       | `Chronic Pain Resources \| Chronic Pain Recovery Cork`          |
| `/self-assessment` | `Neuroplastic Pain Self-Assessment \| Chronic Pain Recovery`    |
| `/contact`         | `Book a Consultation \| Chronic Pain Recovery Cork`             |

---

### 1.2 Add `robots.txt` and `sitemap.xml`

**Problem:** Neither file could be confirmed as present. Without a sitemap, Google has to discover pages by crawling links alone — slow and incomplete for a new domain.

**Fix (Next.js App Router):**

```ts
// app/sitemap.ts
import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://chronicpainrecovery.ie",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://chronicpainrecovery.ie/science",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://chronicpainrecovery.ie/conditions",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://chronicpainrecovery.ie/info",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: "https://chronicpainrecovery.ie/resources",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: "https://chronicpainrecovery.ie/self-assessment",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: "https://chronicpainrecovery.ie/contact",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: "https://chronicpainrecovery.ie/blog",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        // Add each blog post URL dynamically here
    ]
}

// app/robots.ts
import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: { userAgent: "*", allow: "/" },
        sitemap: "https://chronicpainrecovery.ie/sitemap.xml",
    }
}
```

**After deploying:** Submit `https://chronicpainrecovery.ie/sitemap.xml` to Google Search Console manually.

---

### 1.3 Add canonical tags to every page

**Problem:** Next.js can produce duplicate URL variants (trailing slash, query strings). Canonical tags prevent Google treating these as separate pages.

**Fix:** Add `alternates.canonical` to every page's metadata export.

```ts
// app/page.tsx
export const metadata: Metadata = {
    title: "Chronic Pain Treatment Cork | Biopsychosocial Approach",
    alternates: {
        canonical: "https://chronicpainrecovery.ie",
    },
}
```

Apply the same pattern to every route, pointing to the preferred URL.

---

## Priority 2 — Important (within 30 days)

### 2.1 Add JSON-LD structured data

**Problem:** No schema markup detected on any page. This is a significant missed opportunity for rich results and E-E-A-T signals on a YMYL health site.

**Fix:** Add a `<Script>` block in the root layout for site-wide business schema, and add `Article` schema to blog post pages.

```tsx
// app/layout.tsx — add inside <head> or as a next/script with strategy="beforeInteractive"
import Script from 'next/script'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Chronic Pain Recovery',
  url: 'https://chronicpainrecovery.ie',
  telephone: '+353871025108',
  description: 'Biopsychosocial chronic pain support in Cork, Ireland. Pain Reprocessing Therapy may be appropriate for suitable people with neuroplastic pain.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rochestown',
    addressRegion: 'Cork',
    addressCountry: 'IE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.8695,
    longitude: -8.4047,
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  sameAs: ['https://www.facebook.com/chronicpainrecoveryireland'],
  serviceType: 'Chronic pain recovery support',
}

// In the layout JSX:
<Script
  id="local-business-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
/>
```

Use `MedicalBusiness` or a more specific healthcare schema type only if it accurately reflects the legal, clinical, and regulatory status of the service. Do not imply a regulated medical clinic if the service is not operating as one.

```tsx
// app/blog/[slug]/page.tsx — Article schema per post
const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: {
        "@type": "Person",
        name: "Chronic Pain Recovery",
        url: "https://chronicpainrecovery.ie/info",
    },
    publisher: {
        "@type": "Organization",
        name: "Chronic Pain Recovery",
        url: "https://chronicpainrecovery.ie",
    },
    mainEntityOfPage: `https://chronicpainrecovery.ie/blog/${post.slug}`,
}
```

---

### 2.2 Add per-page `meta description` tags

**Problem:** Meta descriptions are not confirmed on inner pages. Google auto-generates them when absent, usually poorly.

**Fix:** Every `metadata` export must include a `description`. Target 150–160 characters with a natural CTA.

```ts
// Example — app/science/page.tsx
export const metadata: Metadata = {
    title: "The Science of Chronic Pain | Pain Reprocessing Therapy Cork",
    description:
        "Learn how neuroplasticity and Pain Reprocessing Therapy may help retrain chronic pain signals. Evidence-informed support available in Cork and online.",
}
```

Write unique descriptions for every page. Do not duplicate wording between pages.

---

### 2.3 Add Open Graph and Twitter card meta tags

**Problem:** No OG tags detected. Social shares will render with no image or description, reducing click-through.

**Fix:** Extend the `metadata` export on each page.

```ts
export const metadata: Metadata = {
    title: "...",
    description: "...",
    openGraph: {
        title: "...",
        description: "...",
        url: "https://chronicpainrecovery.ie",
        siteName: "Chronic Pain Recovery",
        images: [
            {
                url: "https://chronicpainrecovery.ie/og-image.jpg",
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_IE",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "...",
        description: "...",
        images: ["https://chronicpainrecovery.ie/og-image.jpg"],
    },
}
```

Create a 1200×630px `og-image.jpg` and place it in `/public`. For blog posts, generate post-specific OG images or use a default.

---

### 2.4 Add `BreadcrumbList` schema to inner pages

**Problem:** No breadcrumb structured data. Breadcrumbs appear in Google search results and improve CTR.

**Fix:** Add `BreadcrumbList` JSON-LD to each inner page.

```tsx
// Example — app/science/page.tsx
const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://chronicpainrecovery.ie",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "The Science",
            item: "https://chronicpainrecovery.ie/science",
        },
    ],
}
```

---

### 2.5 Add `FAQPage` schema to the homepage and /science

**Problem:** The homepage and /science page both contain implicit Q&A content (e.g., "Signs your pain may be neuroplastic", "What causes chronic pain?"). FAQ schema can generate rich result accordions in search.

**Fix:** Identify 3–5 question/answer pairs on each page and wrap them in `FAQPage` JSON-LD.

```tsx
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Can chronic pain improve, not just be managed?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Many chronic pain conditions can have a neuroplastic component, meaning the nervous system may be able to retrain learned pain pathways. Pain Reprocessing Therapy and related approaches can support this process when serious structural, disease, infection, or acute injury causes have been ruled out.",
            },
        },
        // Add 2–4 more Q&A pairs
    ],
}
```

---

## Priority 3 — Improvement opportunities (within 60 days)

### 3.1 Create dedicated condition pages

**Problem:** Conditions (fibromyalgia, IBS, long covid, chronic fatigue, CRPS, etc.) are listed on the homepage but have no standalone URLs. Each condition is a separate keyword cluster.

**Fix:** Create the following routes, each with unique content, metadata, and relevant schema:

```
/conditions/fibromyalgia
/conditions/ibs
/conditions/long-covid
/conditions/chronic-fatigue
/conditions/back-pain
/conditions/migraines
```

Each page should include: condition overview, how the biopsychosocial approach applies, what treatment looks like, and a CTA to book. Minimum 600 words per page.

---

### 3.2 Improve image diversity and `alt` attributes

**Problem:** The `forest.avif` image is reused as the homepage hero and as the blog post thumbnail. Unique images per page improve topical relevance signals and user experience.

**Fix:**

-   Assign a unique hero image to each major page (`/science`, `/conditions`, `/info`).
-   Ensure every `<Image>` component has a descriptive, keyword-relevant `alt` attribute (not empty, not generic).

```tsx
// Example
<Image
    src="/images/pain-reprocessing-therapy-cork.avif"
    alt="Person relaxing after pain reprocessing therapy session in Cork"
    width={1920}
    height={1080}
/>
```

---

### 3.3 Add testimonials cautiously

**Problem:** No patient testimonials exist on the site. For a YMYL health service, real experience signals can support trust when handled carefully.

**Fix:**

-   Add a testimonials section only if the quotes are real, consented, accurate, and not misleading.
-   Use anonymised quotes only when consent and privacy requirements are satisfied.
-   Avoid cure claims, guaranteed recovery claims, or statements implying the approach replaces medical care.
-   Do not add self-serving `Review` or `AggregateRating` schema unless current Google guidelines and the business's review collection process clearly support it.
-   If testimonials are used, keep them on-page as trust content first; treat review schema as a separate compliance decision.

```tsx
// Example on-page testimonial copy only. Do not use schema by default.
const testimonials = [
    {
        name: "Anonymous client",
        quote:
            "This approach helped me understand my pain differently and gradually rebuild confidence with movement.",
    },
]
```

---

### 3.4 Verify `next/image` is producing correct `<img>` output

**Problem:** All images load via `/_next/image?url=...`. Confirm that:

1. `priority` is set on the above-the-fold hero image on each page (avoids LCP penalty).
2. `width` and `height` are always explicit (prevents layout shift / CLS).
3. `loading="lazy"` is not applied to the hero image.

```tsx
// Homepage hero — must have priority prop
<Image
    src="/images/forest.avif"
    alt="Forest path representing the journey to chronic pain recovery"
    fill
    priority // <-- required for LCP image
    sizes="100vw"
/>
```

---

## Out-of-code actions (for reference)

These cannot be done in the codebase but are required for SEO success:

-   **Google Search Console:** Verify domain ownership, submit `sitemap.xml`, request indexing for all key pages.
-   **Google Business Profile:** Create and verify a GBP listing for the Cork clinic if eligible. Keep NAP (Name, Address, Phone) identical to what is in the business schema above.
-   **Link building:** Target a handful of quality Irish health/wellbeing directories and blogs for backlinks. Zero live backlinks is the single biggest bottleneck to ranking.
-   **Content calendar:** Publish a minimum of 2 blog posts per month. Priority topics based on keyword research, rewritten through the clinical claim guardrails: _"what is pain reprocessing therapy"_, _"fibromyalgia support in Ireland"_, _"can chronic pain improve"_, _"chronic fatigue and chronic pain support in Cork"_.
