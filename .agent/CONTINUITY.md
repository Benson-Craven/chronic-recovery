# Project Continuity

[PLANS]

-   2026-07-23: Standardise public owner-spoken copy around Marsha's first-person voice while preserving named identity contexts, legal organisational voice, service facts, cautious health language, and protected hero copy.
-   2026-07-23: Keep paired WhatsApp and consultation CTAs side by side when their container can support both, use one global CTA hover treatment, remove the unnatural public-address disclaimer, and preserve page position when the contact modal locks scrolling.
-   2026-07-23: Implement the agreed SEO audit triage: keep established PRT and location URLs, separate PRT service/article intent, strengthen truthful Cork and online service details, remove unsupported health/professional claims and hidden FAQ schema, add the self-assessment education/diagnosis disclosure without changing its questions or scoring, and preserve the homepage and About hero language.
-   2026-07-23: Remove decorative `01` labels from editorial rows that have no subsequent numbered row, while preserving genuine numbered sequences.
-   2026-07-23: Standardise site-wide closing CTA sections around the two-column editorial layout, with one primary action and at most one secondary action.
-   2026-07-21: Remove em dashes from public-facing site copy while leaving internal comments and planning documents unchanged.
-   2026-07-23: Keep the restored Turnstile implementation available but disabled by default until it can be confirmed in production; preserve the honeypot, field validation, and Brevo delivery path while protection is off.
-   2026-07-17: Make direct WhatsApp contact the primary action across the header, mobile menu, footer, main consultation CTA sections, and contact page; retain smaller contextual consultation links unchanged.
-   2026-07-17: Selectively introduce two-column editorial splits on text-heavy marketing and educational pages, normally using two or three illustrations per long page.

[DECISIONS]

-   2026-07-23: Public owner-spoken copy uses `I`, `me`, and `my`. Keep Marsha named in formal introductions, author credits, WhatsApp labels, accessibility text, metadata, structured data, and other identity-critical contexts; retain organisational voice in legal and categorical safety copy.
-   2026-07-23: Paired closing CTAs remain full-width and stacked below `sm`; from `sm` upward they use a wrapping row, so constrained two-column layouts can fall back to two rows without squeezing either label.
-   2026-07-23: Button-style CTAs share the global `cta-interactive` scale-and-shadow treatment. It only animates hover on fine pointers, keeps active feedback, skips disabled controls, and removes transforms for reduced-motion users.
-   2026-07-23: Body scroll locking records the current vertical offset, applies it as a negative fixed-body top value, then restores both the original inline styles and scroll position on unlock.
-   2026-07-23: Keep truthful `Organization` and `Person` JSON-LD. An ATNS Practitioner & Coach Directory listing does not by itself substantiate medical licensure, clinic status, or `MedicalOrganization`; reconsider the subtype only with exact documented scope.
-   2026-07-23: Treat the national online route as the primary Ireland-wide service, keep the two established PRT URLs separate, and preserve both protected homepage/About hero statements.
-   2026-07-23: Keep the homepage conditions carousel at `lg` and above. Below 1024px, show the same six categories as an always-expanded, normal-flow vertical list with photographic headers and solid dark-green condition panels.
-   Treat numbering as sequence navigation rather than decoration: omit it from singleton rows, but retain it when the surrounding content continues with `02` or beyond.
-   Keep the existing self-assessment scoring thresholds and result copy unchanged. Before completion, retain a locked results panel without rendering the score, likelihood label, or interpretation. After question 22, offer a “See my result” action rather than revealing automatically or moving the viewport.
-   Once revealed, keep the self-assessment result visible and update it immediately if a completed answer changes. Keep the separate WhatsApp and consultation section available regardless of questionnaire completion.
-   Keep WhatsApp as the primary closing CTA and Book Consultation as the secondary CTA. Treat phone details as supporting text rather than a third button, and remove tertiary navigation buttons from closing CTA groups.
-   Use `https://wa.me/353871025108` with no pre-filled message for the primary WhatsApp action.
-   Keep the exact “Book Consultation” language as the secondary action. Keep WhatsApp visible in the sticky header on desktop and mobile; show the mobile consultation CTA only when it fits without squeezing the logo or tap targets, with the existing menu CTA as fallback.
-   Use the site’s dark-green and cream palette for WhatsApp controls rather than WhatsApp brand green. Use an icon plus “WhatsApp Marsha” on desktop and an accessible icon-only control on narrow mobile.
-   Replace misleading combined call/WhatsApp behavior on the main contact surfaces: WhatsApp opens the direct chat, while the phone number remains an explicit click-to-call fallback in places such as the footer and contact page.
-   Track anonymous WhatsApp clicks by CTA source using the existing Google Analytics setup. Do not add a pre-chat health-information or response-time guardrail as part of this change.
-   Turnstile is an explicit opt-in controlled by `NEXT_PUBLIC_TURNSTILE_ENABLED=true`; when the flag is absent or has any other value, the client does not load Cloudflare and the server skips token verification. Keep the restored implementation and existing stash until production confirmation is complete.
-   Preserve the original checkerboard PNGs and place cleaned transparent versions under `public/images/illustrations/`.
-   Use deterministic alpha extraction for the final illustration assets; reject generated edits that redraw or rescale the source artwork.
-   Preserve the homepage forest image, homepage condition-card photos, About therapy reveal, Marsha and Cork photography, homepage Lottie animation, blog imagery, and contact page composition.
-   Keep contact, blog, legal, navigation, footer, forms, dense lists, and final CTAs outside the editorial-layout refactor.
-   Use one shared `EditorialSplit` component with text-first mobile order, alternating desktop placement, and cream illustration wells on dark-green sections.
-   Sticky editorial illustrations are desktop-only. They remain within their section, release when the accompanying text ends, and stack normally below `lg`.
-   Keep `/resources` text-only and keep the questionnaire introduction on `/self-assessment` free of illustration; retain the self-assessment results illustration.
-   Closing editorial CTAs use one introductory divider only; omit decorative rules beneath the heading and at the bottom of the section.
-   Blog-post closing CTAs use the cream palette so the adjacent dark-green footer reads as a separate region.

[PROGRESS]

-   2026-07-23: Rewrote the four location/PRT landing pages, shared About and credentials copy, Conditions, Contact forms and modal, footer, 404, article author biography, and practitioner references in the Cork article to first person; added the focused public-copy voice contract to `npm test`.
-   2026-07-23: Added a default-off Turnstile gate to the shared client form flow and server contact handler; the disabled path still validates fields and the honeypot before delivering through Brevo.
-   2026-07-23: Converted the paired WhatsApp and Book Consultation groups across blog, homepage, Info, Conditions, Research, Resources, Science, Self-assessment, and shared service pages to responsive wrapping rows; retained stacked mobile controls.
-   2026-07-23: Added the shared CTA interaction to reusable, navigation, footer, contact, modal, closing, assessment-result, and supporting button-style CTA surfaces; removed conflicting local hover implementations and invalid nested link/button markup in shared CTA and 404 controls.
-   2026-07-23: Removed “No home street address is published on this website.” from the Cork service page while retaining natural availability wording.
-   2026-07-23: Fixed modal/mobile-menu body locking so opening an overlay no longer visually jumps the page to the top; added an isolated red-to-green regression test for scroll preservation.
-   2026-07-23: Implemented the SEO audit triage across PRT, Cork, national online, Dublin, About, Science, Research, homepage conversion copy, Conditions, and the Cork article; removed hidden FAQ schema and unsupported credential, condition, outcome, testimonial, timeline, and personal-recovery assertions.
-   2026-07-23: Added exact self-assessment disclosure without changing its questions, thresholds, result copy, scoring, completion gating, or reveal behaviour; phone analytics explicitly skip the self-assessment route.
-   2026-07-23: Added truthful Organization/Person and BlogPosting schema, explicit frontmatter review-date handling, phone-click enquiry tracking, SEO/content contract tests, a 20-route rendered SEO validator, and the GSC measurement handoff.
-   2026-07-23: Split the homepage conditions section into desktop carousel and mobile/tablet list presentations backed by the existing card data; added the conditions enquiry WhatsApp action with its own analytics source.
-   2026-07-23: Removed singleton `01` labels from the locked assessment state, single-row Science and Info sections, and the one-item Resources podcast group; retained numbering for every multi-item sequence.
-   2026-07-23: Gated the self-assessment score and interpretation behind completion of all 22 questions and an explicit “See my result” action; the result remains live after being revealed.
-   2026-07-23: Standardised closing CTA hierarchy across the homepage, blog posts, Info, Conditions, Research, Resources, Science, Self-assessment, and shared SEO/location pages; reduced action groups to WhatsApp plus Book Consultation and kept phone contact as supporting text.
-   2026-07-21: Restored the Turnstile, honeypot, shared contact handler, focused tests, setup documentation, and privacy disclosure from `wip: contact form anti-spam protection`; resolved contact-page and modal conflicts by retaining both the anti-spam flow and current WhatsApp UI.
-   2026-07-17: Implemented the shared direct WhatsApp link and anonymous source tracking across the responsive header, mobile drawer, footer, contact page, contact modal labelling, homepage approach, and all main closing consultation CTAs.
-   2026-07-16: Converted all 22 supplied `cprie-icon-*.png` files to true-alpha PNGs at their original 1254 by 1254 dimensions.
-   2026-07-17: Added semantic aliases for the selected illustrations and applied the shared split layout across the homepage Approach section, About, Science, Conditions, Research, Resources, Self-assessment, and five shared SEO/location pages.
-   2026-07-17: Replaced the homepage science bento stock image with the group-education illustration while retaining the protected homepage photography.
-   2026-07-17: Added optional sticky-visual behavior to `EditorialSplit`; applied it to all illustrated `/info` and `/science` sections and moved each section's long-form content into the same sticky containing block.
-   2026-07-17: Removed the first `/self-assessment` illustration and both `/resources` illustrations.
-   2026-07-17: Removed redundant internal and bottom rules from the closing CTAs on Info, Conditions, Research, Resources, Science, and Self-assessment.
-   2026-07-17: Restyled the blog-post closing CTA from dark green to cream with a dark-green primary action.

[DISCOVERIES]

-   2026-07-23: `authorProfile` in `app/lib/seo.tsx` supplies both structured author identity and article-template content. The structured third-person record remains unchanged, while the visible article biography now uses first-person copy in the template.
-   2026-07-23: Turnstile is already contained in pushed commit `63016e1`, so stashing working-tree changes cannot exclude it from a deployment; a reversible default-off flag is required instead.
-   2026-07-23: The overlay jump came from setting `document.body` to `position: fixed` without a negative `top` offset or scroll restoration. The shared `useBodyScrollLock` hook affects both the contact modal and mobile menu.
-   2026-07-23: A production build cannot safely share `.next` with the currently running development server; an isolated temporary checkout produces a clean 28-page build without interrupting the active preview.
-   2026-07-23: `next/script` with `beforeInteractive` emitted JSON-LD as a hydration instruction rather than a literal static HTML JSON-LD block. The shared helper now renders a server-visible script element and the rendered validator parses it.
-   2026-07-23: No Search Console connector or page export was available in this workspace. Fresh exact-page baseline values remain pending in `.agent/SEO_MEASUREMENT.md`; prior aggregate data was not substituted.
-   2026-07-21: The Turnstile UI remained on “Preparing security verification…” because the dynamically loaded `async`/`defer` API script was followed by `turnstile.ready()`, a combination rejected by Cloudflare's current client API. Resolving directly from the script `load` event allows explicit rendering to complete.
-   2026-07-21: Cloudflare dashboard browser control is unavailable in the current Codex session, so widget creation and deployment-secret entry remain an external handoff. No production keys have been written to the repo.
-   2026-07-16: The supplied PNGs had baked checkerboard pixels and no alpha channel.
-   2026-07-16: The black illustrations are clear on the site's cream background but have low contrast on dark green surfaces.
-   2026-07-17: Five SEO/location pages share `app/components/SeoContentPage.tsx`; its section visual is now a discriminated photo-or-illustration union rendered through the shared split component.

[OUTCOMES]

-   2026-07-23: First-person voice standardisation passes the 29-test suite, typecheck, lint, targeted Prettier, an isolated 28-page production build, representative rendered-copy checks, the 20-route SEO verifier, diff checks, and final review. Browser screenshot verification remains unavailable because no browser is connected.
-   2026-07-23: Turnstile now defaults off while the implementation remains available behind `NEXT_PUBLIC_TURNSTILE_ENABLED=true`. The disabled and enabled paths pass 29 tests, typecheck, lint, targeted Prettier, isolated 28-page production builds in both flag states, rendered contact-form state assertions, the 20-route SEO verifier, diff checks, and final Spec/Standards review.
-   2026-07-23: Responsive paired CTAs, global CTA motion, Cork disclaimer removal, and modal scroll preservation pass 22 tests, typecheck, lint, targeted Prettier, an isolated 28-page production build, the 20-route rendered SEO verifier, source audits, diff checks, and final Standards/Spec reviews with no findings. Browser screenshot verification remains unavailable because no browser is connected.
-   2026-07-23: SEO triage implementation passes the 18-test suite, TypeScript, lint, targeted Prettier checks, production build, 20-indexed-route rendered title/H1/canonical/schema/sitemap assertions, claim/schema source audits, diff checks, and final Standards/Spec reviews. No commit, push, deployment, or production indexing check was performed. Marsha sign-off and fresh page-filtered GSC baselines remain external handoffs.
-   2026-07-23: Responsive homepage conditions implementation passes targeted Prettier, typecheck, lint, the full test script, production build, rendered homepage HTML assertions, diff checks, and the final two-axis review. Browser viewport inspection remains unverified because no browser is available in this session.
-   2026-07-23: Singleton-number cleanup passes typecheck, lint, the full test script, an isolated production build, targeted Prettier checking, rendered HTML checks for Self-assessment, Science, Info, and Resources, source audits, diff checks, and the final two-axis review. Browser-based visual verification remains unavailable because no browser is connected.
-   2026-07-23: Self-assessment result gating passes typecheck, lint, the full test script, production build, targeted Prettier checking, the generated-HTML locked-state check, diff checks, and the final two-axis code review. The review-driven focus handoff preserves keyboard and screen-reader context without scrolling. Interactive browser verification remains unverified because no browser was connected to the session.
-   2026-07-23: Site-wide CTA cleanup passes typecheck, lint, focused tests, production build, targeted Prettier checking, and diff checks. The duplicate Info CTA and invalid nested link/button controls were removed. Browser-based visual verification remains unverified because no browser was available in this session.
-   2026-07-21: Local Turnstile testing with Cloudflare's passing dummy key now completes in a persistent headless Chrome session (`preparing=false`, `complete=true`, one issued dummy token). The fix removes the incompatible `turnstile.ready()` calls from the async script loader.
-   2026-07-21: Replaced public-facing em dashes with sentence-appropriate punctuation or connecting words; internal code comments and planning documents retain their existing punctuation.
-   2026-07-21: The restored anti-spam implementation passes all 10 focused tests, `npx tsc --noEmit`, `npm run lint`, `npm run build`, targeted Prettier checking, and `git diff --check`. Production Cloudflare widget creation, deployment environment variables, and live submission verification remain outstanding because dashboard control is unavailable in this session.
-   2026-07-17: WhatsApp-first contact UX is implemented locally. Typecheck, lint, production build, targeted Prettier, diff checks, and rendered `/contact` HTML passed; responsive visual inspection remains unverified because in-app browser control was unavailable.
-   2026-07-17: Illustration layout implementation is complete locally. `npx tsc --noEmit`, `npm run lint`, `npm run build`, targeted Prettier checking, and `git diff --check` passed.
-   2026-07-17: Browser-based responsive visual verification was skipped at the user's request. No commit, push, or deployment was performed.
-   2026-07-17: The sticky-layout refinement passes typecheck, lint, build, formatting, and diff checks. Browser verification remains intentionally skipped.
-   2026-07-17: The CTA divider cleanup and blog/footer separation pass typecheck, lint, production build, formatting, and diff checks. Browser verification remains intentionally skipped.
