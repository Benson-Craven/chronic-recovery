# Project Continuity

[PLANS]

-   2026-07-17: Selectively introduce two-column editorial splits on text-heavy marketing and educational pages, normally using two or three illustrations per long page.

[DECISIONS]

-   The completed contact-form anti-spam implementation is paused in the named Git stash `wip: contact form anti-spam protection` because the current Cloudflare account lacks Turnstile permissions.
-   Preserve the original checkerboard PNGs and place cleaned transparent versions under `public/images/illustrations/`.
-   Use deterministic alpha extraction for the final illustration assets; reject generated edits that redraw or rescale the source artwork.
-   Preserve the homepage forest image, homepage condition-card photos, About therapy reveal, Marsha and Cork photography, homepage Lottie animation, blog imagery, and contact page composition.
-   Keep contact, blog, legal, navigation, footer, forms, dense lists, and final CTAs outside the editorial-layout refactor.
-   Use one shared `EditorialSplit` component with text-first mobile order, alternating desktop placement, and cream illustration wells on dark-green sections.

[PROGRESS]

-   2026-07-16: Converted all 22 supplied `cprie-icon-*.png` files to true-alpha PNGs at their original 1254 by 1254 dimensions.
-   2026-07-17: Added semantic aliases for the selected illustrations and applied the shared split layout across the homepage Approach section, About, Science, Conditions, Research, Resources, Self-assessment, and five shared SEO/location pages.
-   2026-07-17: Replaced the homepage science bento stock image with the group-education illustration while retaining the protected homepage photography.

[DISCOVERIES]

-   2026-07-16: The supplied PNGs had baked checkerboard pixels and no alpha channel.
-   2026-07-16: The black illustrations are clear on the site's cream background but have low contrast on dark green surfaces.
-   2026-07-17: Five SEO/location pages share `app/components/SeoContentPage.tsx`; its section visual is now a discriminated photo-or-illustration union rendered through the shared split component.

[OUTCOMES]

-   2026-07-17: Illustration layout implementation is complete locally. `npx tsc --noEmit`, `npm run lint`, `npm run build`, targeted Prettier checking, and `git diff --check` passed.
-   2026-07-17: Browser-based responsive visual verification was skipped at the user's request. No commit, push, or deployment was performed.
