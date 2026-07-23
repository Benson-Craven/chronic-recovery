# SEO Measurement Handoff

## Baseline status

A fresh page-filtered Google Search Console baseline is pending. No Search
Console connector or export was available in the workspace on 2026-07-23, so
no clicks, impressions, CTR, or average-position values have been inferred or
copied from an older aggregate report.

Capture both the most recent 28 days and most recent 3 months before an
authorised deployment. Use an exact page filter for each URL and record the
date range with the export.

| Page                                                | 28-day baseline    | 3-month baseline   |
| --------------------------------------------------- | ------------------ | ------------------ |
| `/treatments/pain-reprocessing-therapy`             | Pending GSC export | Pending GSC export |
| `/blog/pain-reprocessing-therapy-ireland`           | Pending GSC export | Pending GSC export |
| `/locations/chronic-pain-management-cork`           | Pending GSC export | Pending GSC export |
| `/blog/chronic-pain-cork`                           | Pending GSC export | Pending GSC export |
| `/`                                                 | Pending GSC export | Pending GSC export |
| `/locations/chronic-pain-management-ireland-online` | Pending GSC export | Pending GSC export |
| `/locations/chronic-pain-management-dublin-online`  | Pending GSC export | Pending GSC export |

For each cell, record clicks, impressions, CTR, average position, and the top
queries for that exact page.

## Qualified enquiry signals

Use these GA events as the primary enquiry measures:

-   `generate_lead`: successful contact-form submission
-   `whatsapp_click`: WhatsApp click, segmented by `contact_location`
-   `phone_click`: phone click, segmented by `contact_location`

The self-assessment exclusion remains in place: its existing content, scoring,
reveal behaviour, and analytics contract are unchanged.

## Comparison schedule

-   Week 0, after an authorised deployment: verify the production URLs,
    canonicals, sitemap inclusion, rendered structured data, and indexing status.
-   Week 4: compare exact-page GSC data and qualified enquiry events with the
    recorded baseline. Treat early ranking movement as directional.
-   Weeks 8 to 12: compare the same exact pages and enquiry events again. Review
    the Cork article title only with page-filtered query evidence.

Preserve the established URLs during measurement. Do not merge or redirect the
two PRT pages, create more city pages, or introduce a second national online
page in response to aggregate site-wide CTR alone.
