import PageHero from "../components/sections/PageHero"

const SECTIONS = [
    {
        number: "01",
        heading: "Our commitment to privacy",
        body: "This website is wholly funded by Chronic Pain Recovery Project for the purpose of informing potential readers about our clinical and educational work and to sell products related to this work. We make the following assurances of privacy for visitors to the site.",
    },
    {
        number: "02",
        heading: "Information we collect",
        body: "We may, at our option, keep track of visits to our website via an automatic monitoring programme that tells us, among other things, how many visits are made to the site; the time of day and date of those visits; and the areas visited. This information may be used to evaluate the effectiveness of our site and any promotion of our site. It helps us determine whether we are distributing information that is useful, helps us identify which information is most useful, and where and how users have found our site. This process does not provide us with personal information about a visitor. We cannot discern the name, address, or any other personal information about visitors to our site. If we were to gather personal information, it would be directly requested through a form you provide voluntarily, and each form will describe the manner in which information will be used.",
    },
    {
        number: "03",
        heading: "How we use information",
        body: "We use the information you provide about yourself when placing an order only to complete that order. We do not share this information with outside parties except to the extent necessary to complete that order. We use return email addresses to answer the email we receive. Such addresses are not used for any other purpose and are not shared with outside parties. We use non-identifying and aggregate information to better design our website and to share with advertisers. For example, we may tell an advertiser that X number of individuals visited a certain area on our website, but we would not disclose anything that could be used to identify those individuals.",
    },
    {
        number: "04",
        heading: "Our commitment to data security",
        body: "To prevent unauthorised access, maintain data accuracy, and ensure the correct use of information, we have put in place appropriate physical, electronic, and managerial procedures to safeguard and secure the information we collect online.",
    },
    {
        number: "05",
        heading: "Contact form service providers",
        body: "When Turnstile protection is enabled on a contact form, Cloudflare Turnstile processes technical signals about your browser and device to distinguish people from automated abuse. Brevo processes the name, email address, phone number, message, and any health details you choose to submit so that your enquiry can be delivered to us. This is a focused description of the providers used by the contact forms, not a complete review of every privacy or data-protection issue on this website.",
        links: [
            {
                href: "https://www.cloudflare.com/turnstile-privacy-policy/",
                label: "Cloudflare Turnstile Privacy Addendum",
            },
            {
                href: "https://www.brevo.com/legal/privacypolicy/",
                label: "Brevo Privacy Policy",
            },
        ],
    },
    {
        number: "06",
        heading: "Changes to our privacy policy",
        body: "Chronic Pain Recovery Project reserves the right to update this Disclosures and Privacy Policy from time to time.",
    },
]

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-[#F7F4EF]">
            <PageHero
                eyebrow="Legal"
                description="How Chronic Pain Recovery Project collects, uses, and
                        protects your information."
            >
                Privacy
                <br />
                <em>policy</em>
            </PageHero>

            {/* Policy content — cream */}
            <section className="w-full bg-[#F7F4EF] px-6 py-20 md:py-28">
                <div className="mx-auto max-w-3xl">
                    <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                        {SECTIONS.length} sections
                    </p>

                    <div className="h-px w-full bg-[rgba(30,58,32,0.12)]" />

                    {SECTIONS.map((section) => (
                        <div
                            key={section.number}
                            className="flex items-start gap-6 border-b border-[rgba(30,58,32,0.12)] py-10"
                        >
                            {/* Number */}
                            <span className="mt-1 shrink-0 font-satoshi text-xs font-light tabular-nums text-light-supporting">
                                {section.number}
                            </span>

                            {/* Content */}
                            <div className="flex flex-col gap-4">
                                <p className="font-satoshi text-base font-medium text-[#1E3A20] md:text-lg">
                                    {section.heading}
                                </p>
                                <p className="font-satoshi text-base font-light leading-relaxed text-light-body md:text-lg">
                                    {section.body}
                                </p>
                                {"links" in section && section.links && (
                                    <div className="flex flex-col gap-2 text-sm md:flex-row md:gap-5">
                                        {section.links.map((link) => (
                                            <a
                                                key={link.href}
                                                href={link.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="font-satoshi font-normal text-[#1E3A20] underline underline-offset-4"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
