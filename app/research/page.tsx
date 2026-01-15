import React from "react"

const studies = [
    {
        title: "The Boulder Chronic Back Pain Study",
        link: "https://pubmed.ncbi.nlm.nih.gov/34586357/",
        description:
            "66% became pain or nearly pain-free with pain reprocessing therapy maintained at one year.",
    },
    {
        title: "Harvard Psychophysiologic Symptom Relief Therapy (PSRT)",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8476063/",
        description:
            "For chronic back pain, 64% of patients reported being pain-free in the PSRT arm versus 25% in the mindfulness-based stress reduction (MBSR) arm and 17% in the usual care arm.",
    },
    {
        title: "Harvard PSRT for Post-Acute Sequelae of COVID-19",
        link: "https://www.medrxiv.org/content/10.1101/2022.10.07.22280732v1.full-text",
        description:
            "A non-randomized interventional study measuring the SSS-8 symptoms found up to a 55% decrease in symptoms over 13 weeks. Mean symptom duration prior to the study was 267 days.",
    },
    {
        title: "Emotional Awareness and Expression Therapy, CBT, and Education for Fibromyalgia",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5680092/",
        description:
            "A randomized controlled trial showing significant benefit from EAET versus CBT and FM education.",
    },
]

const ResearchStudies = () => {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-12 md:px-12">
            <div className="mx-auto max-w-4xl">
                <h1 className="mb-8 text-3xl font-bold text-[#323629] md:text-5xl lg:text-6xl">
                    Research Studies
                </h1>
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <table className="min-w-full border border-gray-200 bg-white">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-left text-lg font-medium text-gray-700">
                                    Study
                                </th>
                                <th className="px-6 py-4 text-left text-lg font-medium text-gray-700">
                                    Findings
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {studies.map((study, index) => (
                                <tr
                                    key={index}
                                    className="border-t border-gray-200 transition hover:bg-gray-100"
                                >
                                    <td className="px-6 py-4">
                                        <a
                                            href={study.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary-text text-secondary-text font-semibold transition"
                                        >
                                            {study.title}
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-gray-700">
                                        {study.description}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ResearchStudies
