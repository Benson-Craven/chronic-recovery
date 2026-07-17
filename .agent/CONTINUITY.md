# Project Continuity

[PLANS]

-   2026-07-17: Make direct WhatsApp contact the primary action across the header, mobile menu, footer, main consultation CTA sections, and contact page; retain smaller contextual consultation links unchanged.
-   2026-07-17: Selectively introduce two-column editorial splits on text-heavy marketing and educational pages, normally using two or three illustrations per long page.

[DECISIONS]

-   Use `https://wa.me/353871025108` with no pre-filled message for the primary WhatsApp action.
-   Keep the exact “Book Consultation” language as the secondary action. Keep WhatsApp visible in the sticky header on desktop and mobile; show the mobile consultation CTA only when it fits without squeezing the logo or tap targets, with the existing menu CTA as fallback.
-   Use the site’s dark-green and cream palette for WhatsApp controls rather than WhatsApp brand green. Use an icon plus “WhatsApp Marsha” on desktop and an accessible icon-only control on narrow mobile.
-   Replace misleading combined call/WhatsApp behavior on the main contact surfaces: WhatsApp opens the direct chat, while the phone number remains an explicit click-to-call fallback in places such as the footer and contact page.
-   Track anonymous WhatsApp clicks by CTA source using the existing Google Analytics setup. Do not add a pre-chat health-information or response-time guardrail as part of this change.
-   The completed contact-form anti-spam implementation is paused in the named Git stash `wip: contact form anti-spam protection` because the current Cloudflare account lacks Turnstile permissions.
-   Preserve the original checkerboard PNGs and place cleaned transparent versions under `public/images/illustrations/`.
-   Use deterministic alpha extraction for the final illustration assets; reject generated edits that redraw or rescale the source artwork.
-   Preserve the homepage forest image, homepage condition-card photos, About therapy reveal, Marsha and Cork photography, homepage Lottie animation, blog imagery, and contact page composition.
-   Keep contact, blog, legal, navigation, footer, forms, dense lists, and final CTAs outside the editorial-layout refactor.
-   Use one shared `EditorialSplit` component with text-first mobile order, alternating desktop placement, and cream illustration wells on dark-green sections.

[PROGRESS]

-   2026-07-17: Implemented the shared direct WhatsApp link and anonymous source tracking across the responsive header, mobile drawer, footer, contact page, contact modal labelling, homepage approach, and all main closing consultation CTAs.
-   2026-07-16: Converted all 22 supplied `cprie-icon-*.png` files to true-alpha PNGs at their original 1254 by 1254 dimensions.
-   2026-07-17: Added semantic aliases for the selected illustrations and applied the shared split layout across the homepage Approach section, About, Science, Conditions, Research, Resources, Self-assessment, and five shared SEO/location pages.
-   2026-07-17: Replaced the homepage science bento stock image with the group-education illustration while retaining the protected homepage photography.

[DISCOVERIES]

-   2026-07-16: The supplied PNGs had baked checkerboard pixels and no alpha channel.
-   2026-07-16: The black illustrations are clear on the site's cream background but have low contrast on dark green surfaces.
-   2026-07-17: Five SEO/location pages share `app/components/SeoContentPage.tsx`; its section visual is now a discriminated photo-or-illustration union rendered through the shared split component.

[OUTCOMES]

-   2026-07-17: WhatsApp-first contact UX is implemented locally. Typecheck, lint, production build, targeted Prettier, diff checks, and rendered `/contact` HTML passed; responsive visual inspection remains unverified because in-app browser control was unavailable.
-   2026-07-17: Illustration layout implementation is complete locally. `npx tsc --noEmit`, `npm run lint`, `npm run build`, targeted Prettier checking, and `git diff --check` passed.
-   2026-07-17: Browser-based responsive visual verification was skipped at the user's request. No commit, push, or deployment was performed.
