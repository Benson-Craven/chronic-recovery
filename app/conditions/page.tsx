import Link from "next/link"
import React from "react"

const ConditionsPage = () => {
    const treatable = [
        "Fibromyalgia",
        "Long covid",
        "Tension headaches & migraine",
        "Back pain (including herniated discs, slipped discs, degenerative discs, degenerative disc disease, stenosis, sciatica and pinched nerves.)",
        "Neck pain",
        "Whiplash",
        "Knee pain",
        "Patellofemoral syndrome",
        "Temporomandibular joint (TMJ) syndrome",
        "Chronic abdominal and pelvic pain syndromes",
        "Chronic tendonitis (in any joint)",
        "Vulvodynia",
        "Piriformis syndrome",
        "Repetitive strain injury",
        "Foot pain syndromes",
        "Myofascial pain syndrome",
        "Amplified Musculoskeletal Pain Syndrome (AMPS)",
        "IBS",
        "CRPS",
        "Gastric Issues",
        "Skin problems",
        "Chronic fatigue syndrome",
        "Facial pain",
        "Chronic sleep issues",
        "Chronic dizziness",
        "Palpitations",
        "Tinnitus",
        "RSI",
    ]

    const nonTreatable = [
        "Structural",
        "Acute injuries",
        "Oncology: cancer",
        "Infections: HIV, lyme disease, other infections",
        "CNS: parkinsons disease, dementia, ALS",
        "ENT: hearing loss, menieres disease",
        "Musculo-skeletal: neurogenic findings of ruptured discs, arthritis causing significant limitations in movement",
    ]

    return (
        <section className="bg-[#fafafa]">
            <div className="mx-auto max-w-6xl space-y-8 p-6">
                <div className="overflow-hidden">
                    <div className="p-6">
                        <h1 className="mb-8 text-3xl font-bold text-[#323629] md:text-5xl lg:text-6xl">
                            Chronic Pain Conditions
                        </h1>
                        <div className="space-y-6">
                            <div>
                                <h2 className="mb-4 text-xl font-semibold text-[#595358]">
                                    Conditions We Treat
                                </h2>
                                <p className="mb-4 text-[#595358]">
                                    Some conditions that are treatable and often
                                    associated with chronic pain:
                                </p>
                                <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                                    {treatable.map((condition, index) => (
                                        <li
                                            key={index}
                                            className="rounded-md bg-[#CFDDA5] bg-opacity-20 p-3 text-[#595358] transition-colors duration-200 hover:bg-[#CFDDA5] hover:bg-opacity-30"
                                        >
                                            {condition}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-4 text-xl font-semibold text-[#595358]">
                                    Conditions We Don't Treat
                                </h2>
                                <ul className="space-y-2">
                                    {nonTreatable.map((condition, index) => (
                                        <li
                                            key={index}
                                            className="rounded-md bg-[#A4AC96] bg-opacity-10 p-3 text-[#595358] transition-colors duration-200 hover:bg-opacity-20"
                                        >
                                            {condition}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8 rounded-lg border border-[#c9fd74] border-opacity-30 bg-[#c9fd74] bg-opacity-20 p-4">
                                <p className="font-medium text-[#323629]">
                                    <strong>NOTE:</strong> Please consult your
                                    doctor to rule out a structural abnormality,
                                    disease or infection.
                                </p>
                                <Link href="/self-assessment">
                                    <p className="mt-2 italic text-[#595358]">
                                        Please take the self assessment
                                        questionnaire to help determine whether
                                        this approach is a good fit for you.
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConditionsPage
