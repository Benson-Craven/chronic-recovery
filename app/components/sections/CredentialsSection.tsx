import Link from "next/link"
import { authorProfile } from "@/app/lib/seo"
import { Section, Container, Divider } from "../ui/Layout"
import { Heading, Text, Eyebrow } from "../ui/Typography"

const credentials = [
    "Listed in the Association for the Treatment of Neuroplastic Symptoms (ATNS) Practitioner & Coach Directory.",
    "Specialised training in Pain Reprocessing Therapy and Dr. Howard Schubiner's mind-body methods.",
    "Lived experience of recovery from long-term migraines and neck pain, alongside professional chronic pain recovery work.",
]

const CredentialsSection = () => {
    return (
        <Section variant="cream" className="py-16 md:py-24">
            <Container size="wide">
                <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
                    <div>
                        <Eyebrow>Credentials & training</Eyebrow>
                        <Heading className="mb-6">
                            Practitioner support
                            <br />
                            <em>with recognised training.</em>
                        </Heading>
                        <Text className="max-w-md">
                            Marsha Canny's work is grounded in pain
                            neuroscience education, Pain Reprocessing Therapy,
                            and a biopsychosocial approach to persistent pain
                            and neuroplastic symptoms.
                        </Text>
                    </div>

                    <div>
                        <Divider className="mb-0" />
                        {credentials.map((item, index) => (
                            <div
                                key={item}
                                className="grid gap-5 border-b py-8 sm:grid-cols-[3rem_1fr]"
                                style={{
                                    borderColor: "rgba(30,58,32,0.12)",
                                }}
                            >
                                <span
                                    className="text-xs tabular-nums opacity-35"
                                    style={{
                                        color: "#1E3A20",
                                        fontFamily: "var(--font-dm-sans)",
                                    }}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <p
                                    className="text-base leading-relaxed md:text-lg"
                                    style={{
                                        color: "rgba(30,58,32,0.68)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    {item}
                                </p>
                            </div>
                        ))}
                        <Link
                            href={authorProfile.atnsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex text-xs font-medium uppercase tracking-[0.16em] transition-opacity hover:opacity-65"
                            style={{
                                color: "#1E3A20",
                                fontFamily: "var(--font-dm-sans)",
                            }}
                        >
                            View Marsha's ATNS directory profile
                        </Link>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default CredentialsSection
