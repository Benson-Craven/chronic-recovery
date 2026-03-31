const sections = [
    {
        number: "01",
        heading: "Online conduct",
        body: "Visitors agree to use the site only for lawful purposes and are prohibited from posting on the web site any unlawful, harmful, threatening, harassing, abusive, defamatory or obscene material of any kind, including, but not limited to, any material which encourages conduct that would constitute a criminal offense, give rise to civil liability or otherwise violate any applicable local, state, national or international law. This is applicable to any posting that could be termed as Sexual Harassment and or Discrimination.",
    },
    {
        number: "02",
        heading: "Disclaimer of endorsements",
        body: "Reference to any products, services, third-party links or other information by trade name, trademark, supplier or otherwise does not constitute or imply its endorsement, sponsorship or recommendation by Chronic Pain Recovery, but are merely for convenience.",
    },
    {
        number: "03",
        heading: "Disclaimer of links",
        body: "Links are provided only as an informational resource. The links provided are typically not on our servers and are not maintained by us or affiliated with any services provided by us. These links are provided simply as a service, and it should not be implied that we recommend, endorse or approve of the content therein and nor are we responsible for their security, accuracy, availability or content.",
    },
    {
        number: "04",
        heading: "Copyright notice",
        body: `Copyright © Chronic Pain Recovery ${new Date().getFullYear()}. All rights are reserved. The website, its text, graphics, audio/video files and all media affixed with Chronic Pain Recovery's name, belongs to Chronic Pain Recovery and is registered and protected under the law. Users may print or download information from this site for personal non-commercial use only. Permission to otherwise reprint, reproduce, redistribute or resell any content herein, in whole or in part, is prohibited unless prior written consent is obtained from the copyright holder.`,
    },
    {
        number: "05",
        heading: "Updates to this agreement",
        body: "Chronic Pain Recovery shall reserve the right to update this User Agreement from time to time.",
    },
]

const TermsAndConditionsPage = () => {
    return (
        <div className="min-h-screen" style={{ backgroundColor: "#F7F4EF" }}>
            {/* Hero — green */}
            <section
                style={{ backgroundColor: "#1E3A20" }}
                className="w-full px-6 py-24 md:py-36"
            >
                <div className="mx-auto max-w-3xl">
                    <p
                        className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                        style={{
                            color: "#C8E6C9",
                            fontFamily: "var(--font-dm-sans)",
                        }}
                    >
                        Legal
                    </p>
                    <h1
                        className="mb-8 text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        Terms &amp;
                        <br />
                        <em>conditions</em>
                    </h1>
                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(200,230,201,0.2)" }}
                    />
                    <p
                        className="mt-8 max-w-xl text-base leading-relaxed md:text-lg"
                        style={{
                            color: "rgba(200,230,201,0.65)",
                            fontFamily: "var(--font-dm-sans)",
                            fontWeight: 300,
                        }}
                    >
                        The terms governing your use of the Chronic Pain
                        Recovery website and its content.
                    </p>
                </div>
            </section>

            {/* Terms content — cream */}
            <section
                style={{ backgroundColor: "#F7F4EF" }}
                className="w-full px-6 py-20 md:py-28"
            >
                <div className="mx-auto max-w-3xl">
                    <p
                        className="mb-6 text-xs font-medium uppercase tracking-[0.25em] opacity-50"
                        style={{
                            color: "#1E3A20",
                            fontFamily: "var(--font-dm-sans)",
                        }}
                    >
                        {sections.length} sections
                    </p>

                    <div
                        className="h-px w-full"
                        style={{ backgroundColor: "rgba(30,58,32,0.12)" }}
                    />

                    {sections.map((section) => (
                        <div
                            key={section.number}
                            className="flex items-start gap-6 border-b py-10"
                            style={{ borderColor: "rgba(30,58,32,0.12)" }}
                        >
                            {/* Number */}
                            <span
                                className="mt-1 shrink-0 text-xs tabular-nums opacity-30"
                                style={{
                                    color: "#1E3A20",
                                    fontFamily: "var(--font-dm-sans)",
                                    fontWeight: 300,
                                }}
                            >
                                {section.number}
                            </span>

                            {/* Content */}
                            <div className="flex flex-col gap-4">
                                <p
                                    className="text-base font-medium md:text-lg"
                                    style={{
                                        color: "#1E3A20",
                                        fontFamily: "var(--font-dm-sans)",
                                    }}
                                >
                                    {section.heading}
                                </p>
                                <p
                                    className="text-base leading-relaxed md:text-lg"
                                    style={{
                                        color: "rgba(30,58,32,0.65)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    {section.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default TermsAndConditionsPage
