const sections = [
    {
        number: "01",
        heading: "Web use legal agreement",
        body: "Please read this agreement entirely and carefully before using this website. By using the site, you agree to be bound by the terms and conditions below and in the Privacy Policy. If you do not wish to be bound by these terms and conditions, you may not use this site.",
    },
    {
        number: "02",
        heading: "Disclaimer about medical information",
        body: "All visitors to this site and any and all related media agree to read and abide by the complete terms of this Agreement. The information and reference materials contained here are intended solely for the general information of the reader. It is neither to be used for treatment purposes nor to diagnose health problems. It should not take the place of professional medical care, but rather may be used to begin a discussion with the site visitor's own physician.",
    },
    {
        number: "03",
        heading: "Legal disclaimers",
        items: [
            "This site does not constitute an attempt to practice medicine.",
            "Use of the site does not establish a doctor-patient relationship.",
            "Individuals should consult a qualified health care provider for medical advice and answers to personal health questions.",
            "While the site attempts to be as accurate as possible, it should not be relied upon as being comprehensive or error-free.",
            "The site reserves the right to change its disclaimer or Privacy Policy, so users should review these periodically.",
        ],
    },
    {
        number: "04",
        heading: "No medical advice",
        body: "The information posted here by Chronic Pain Recovery Project is not to be considered medical advice and is not intended to replace consultation with a qualified medical professional. We do not answer specific medical questions.",
    },
    {
        number: "05",
        heading: "No warranties",
        body: 'This website is provided on an "as is", "as available" basis without warranties of any kind, express or implied, including but not limited to those of title, merchantability, fitness for a particular purpose, or non-infringement. No oral advice or written information provided by Chronic Pain Recovery Project, its employees, or affiliate organisations shall create a warranty; nor shall members or visitors to the site rely on any such information or advice.',
    },
    {
        number: "06",
        heading: "Disclaimer of liability",
        body: "The user assumes all responsibility and risk for the use of this website. Under no circumstances shall Chronic Pain Recovery Project or anyone else involved in creating or maintaining this website be liable for any direct, indirect, incidental, special, or consequential damages, or lost profits that result directly or indirectly from the use or inability to use the website and/or any other websites linked to this site — or that result directly or indirectly from mistakes, omissions, interruptions, deletion of files, viruses, errors, defects, or any failure of performance, communications failure, theft, destruction, or unauthorised access.",
    },
]

const DisclaimerPage = () => {
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
                        Disclaimer
                        <br />
                        <em>&amp; terms of use</em>
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
                        Please read this agreement carefully before using this
                        website. By continuing to use the site, you agree to be
                        bound by the terms below.
                    </p>
                </div>
            </section>

            {/* Disclaimer content — cream */}
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

                                {section.body && (
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
                                )}

                                {section.items && (
                                    <div className="flex flex-col gap-3">
                                        {section.items.map((item, i) => (
                                            <div
                                                key={i}
                                                className="flex items-start gap-4"
                                            >
                                                <span
                                                    className="mt-1 shrink-0 text-xs tabular-nums opacity-25"
                                                    style={{
                                                        color: "#1E3A20",
                                                        fontFamily:
                                                            "var(--font-dm-sans)",
                                                        fontWeight: 300,
                                                    }}
                                                >
                                                    {String(i + 1).padStart(
                                                        2,
                                                        "0",
                                                    )}
                                                </span>
                                                <p
                                                    className="text-base leading-relaxed"
                                                    style={{
                                                        color: "rgba(30,58,32,0.65)",
                                                        fontFamily:
                                                            "var(--font-dm-sans)",
                                                        fontWeight: 300,
                                                    }}
                                                >
                                                    {item}
                                                </p>
                                            </div>
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

export default DisclaimerPage
