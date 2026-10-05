import PageHero from "../components/sections/PageHero"

const SECTIONS = [
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
        body: "The user assumes all responsibility and risk for the use of this website. Under no circumstances shall Chronic Pain Recovery Project or anyone else involved in creating or maintaining this website be liable for any direct, indirect, incidental, special, or consequential damages, or lost profits that result directly or indirectly from the use or inability to use the website and/or any other websites linked to this site, or that result directly or indirectly from mistakes, omissions, interruptions, deletion of files, viruses, errors, defects, or any failure of performance, communications failure, theft, destruction, or unauthorised access.",
    },
]

export default function DisclaimerPage() {
    return (
        <div className="min-h-screen bg-[#F7F4EF]">
            <PageHero
                eyebrow="Legal"
                description=" Please read this agreement carefully before using this
                        website. By continuing to use the site, you agree to be
                        bound by the terms below."
            >
                Disclaimer
                <br />
                <em>&amp; terms of use</em>
            </PageHero>

            {/* Disclaimer content — cream */}
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

                                {section.body && (
                                    <p className="font-satoshi text-base font-light leading-relaxed text-light-body md:text-lg">
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
                                                <span className="mt-1 shrink-0 font-satoshi text-xs font-light tabular-nums text-light-supporting">
                                                    {String(i + 1).padStart(
                                                        2,
                                                        "0",
                                                    )}
                                                </span>
                                                <p className="font-satoshi text-base font-light leading-relaxed text-light-body">
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
