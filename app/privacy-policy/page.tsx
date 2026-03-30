const sections = [
    {
        number: "01",
        heading: "Our commitment to privacy",
        body: "This website is wholly funded by Chronic Pain Recovery Project for the purpose of informing potential readers about our clinical and educational work and to sell products related to this work. We make the following assurances of privacy for visitors to the site.",
    },
    {
        number: "02",
        heading: "Information we collect",
        body: "We may, at our option, keep track of visits to our website via an automatic monitoring programme that tells us, among other things, how many visits are made to the site; the time of day and date of those visits; and the areas visited. This information may be used to evaluate the effectiveness of our site and any promotion of our site. It helps us determine whether we are distributing information that is useful, helps us identify which information is most useful, and where and how users have found our site. This process does not provide us with personal information about a visitor. We cannot discern the name, address, or any other personal information about visitors to our site. If we were to gather personal information, it would be directly requested through a form you provide voluntarily — and each form will describe the manner in which information will be used.",
    },
    {
        number: "03",
        heading: "How we use information",
        body: "We use the information you provide about yourself when placing an order only to complete that order. We do not share this information with outside parties except to the extent necessary to complete that order. We use return email addresses to answer the email we receive. Such addresses are not used for any other purpose and are not shared with outside parties. We use non-identifying and aggregate information to better design our website and to share with advertisers. For example, we may tell an advertiser that X number of individuals visited a certain area on our website — but we would not disclose anything that could be used to identify those individuals.",
    },
    {
        number: "04",
        heading: "Our commitment to data security",
        body: "To prevent unauthorised access, maintain data accuracy, and ensure the correct use of information, we have put in place appropriate physical, electronic, and managerial procedures to safeguard and secure the information we collect online.",
    },
    {
        number: "05",
        heading: "Changes to our privacy policy",
        body: "Chronic Pain Recovery Project reserves the right to update this Disclosures and Privacy Policy from time to time.",
    },
]

const PrivacyPolicyPage = () => {
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
                        Privacy
                        <br />
                        <em>policy</em>
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
                        How Chronic Pain Recovery Project collects, uses, and
                        protects your information.
                    </p>
                </div>
            </section>

            {/* Policy content — cream */}
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

export default PrivacyPolicyPage
