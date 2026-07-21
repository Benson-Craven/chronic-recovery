# Chronic Pain Recovery Project

Next.js website for Chronic Pain Recovery Ireland, focused on chronic pain recovery, mind-body education, resources, blog content, self-assessment, and contact enquiries for the Cork practice.

## Tech Stack

-   Next.js 14 with the App Router
-   React 18 and TypeScript
-   Tailwind CSS
-   Framer Motion and Lenis for motion and scrolling
-   Markdown blog posts via `gray-matter`, `remark`, and `remark-html`
-   Brevo for contact form email delivery
-   `next-sitemap` for sitemap and robots.txt generation

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

Create a local `.env.local` file with the values needed by the contact form:

```bash
BREVO_API_KEY=your_brevo_api_key
EMAIL_TO=recipient@example.com
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
TURNSTILE_SECRET_KEY=your_turnstile_secret_key
# Optional, defaults shown:
BREVO_SENDER_EMAIL=noreply@chronicpainrecovery.ie
BREVO_SENDER_NAME="Chronic Pain Recovery"
```

The API route sends enquiries from `noreply@chronicpainrecovery.ie` by default, so that sender domain or address must be registered and authenticated in Brevo before production email delivery will work reliably.

### Turnstile setup

In the Cloudflare dashboard, create one production Turnstile widget with:

-   Name: `Chronic Pain Recovery Contact Forms`
-   Widget mode: Managed
-   Allowed hostname: `chronicpainrecovery.ie`

Use the resulting site key for `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and the secret key for `TURNSTILE_SECRET_KEY`. The app renders the widget explicitly with interaction-only appearance and uses the `contact_modal` and `contact_page` actions. Production keys must not be committed or reused as test fixtures.

For local testing, use Cloudflare's official dummy key pairs:

| Scenario            | `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | `TURNSTILE_SECRET_KEY`                |
| ------------------- | -------------------------------- | ------------------------------------- |
| Always passes       | `1x00000000000000000000AA`       | `1x0000000000000000000000000000000AA` |
| Always fails        | `2x00000000000000000000AB`       | `2x0000000000000000000000000000000AA` |
| Token already spent | `1x00000000000000000000AA`       | `3x0000000000000000000000000000000AA` |

Dummy keys work on localhost and must be paired together; production secrets reject dummy tokens. See [Cloudflare's Turnstile testing guidance](https://developers.cloudflare.com/turnstile/troubleshooting/testing/).

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Builds the production app and runs `next-sitemap` through the `postbuild` script.

```bash
npm run start
```

Starts the production server after a successful build.

```bash
npm run lint
```

Runs the Next.js lint command.

```bash
npm test
```

Runs the contact endpoint contract tests with Node's built-in test runner.

## Project Structure

-   `app/page.tsx` - homepage composition
-   `app/layout.tsx` - shared layout, metadata, Google Analytics, and structured data
-   `app/components/` - shared UI, navigation, footer, CTAs, and homepage sections
-   `app/api/sendEmail/route.ts` - Brevo-backed contact form endpoint
-   `app/blog/` - blog index and dynamic blog post route
-   `content/blog/` - markdown blog posts
-   `public/images/`, `public/logos/`, `public/videos/`, `public/fonts/` - static assets
-   `next-sitemap.config.js` - sitemap, robots.txt, route priority, and indexing rules

## Content Editing

Pages are defined in the `app/` directory. Core public pages include:

-   `/`
-   `/info`
-   `/science`
-   `/conditions`
-   `/self-assessment`
-   `/research`
-   `/resources`
-   `/blog`
-   `/contact`
-   `/privacy-policy`
-   `/terms-and-conditions`
-   `/disclaimer`

Blog posts live in `content/blog` as markdown files. Each post should include front matter for:

```markdown
---
title: "Post title"
date: "2026-01-01"
excerpt: "Short summary shown on the blog index."
coverImage: "/images/example.avif"
---
```

The slug is derived from the markdown filename.

## SEO And Indexing

Global metadata, Open Graph data, Google Analytics, and Schema.org structured data are configured in `app/layout.tsx`.

Sitemap and robots.txt behavior is configured in `next-sitemap.config.js`. API routes are excluded from indexing, while core content pages are assigned custom priorities and change frequencies.

## Contact Form

The contact page posts to `/api/sendEmail`, which expects:

-   `name`
-   `email`
-   `phone`
-   `message`
-   `website` (the honeypot; legitimate submissions leave it empty)
-   `turnstileToken`
-   `source` (`contact_modal` or `contact_page`)

The server validates field bounds and the Turnstile token before making any Brevo request. It uses `BREVO_API_KEY`, `EMAIL_TO`, and `TURNSTILE_SECRET_KEY` only on the server. Keep all secrets out of source control.

## Deployment

The app can be deployed to any platform that supports Next.js. For production:

1. Configure the required environment variables.
2. Verify the Brevo sender/domain used by the contact API.
3. Run `npm run build`.
4. Serve with `npm run start` or deploy through the chosen hosting provider.
