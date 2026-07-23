import Image from "next/image"
import Link from "next/link"
import { authorProfile } from "@/app/lib/seo"
import { Section, Container, Divider } from "../ui/Layout"
import { Heading, Text, Eyebrow } from "../ui/Typography"

const credentials = [
    "I am listed in the Association for the Treatment of Neuroplastic Symptoms (ATNS) Practitioner & Coach Directory.",
    "I work as a chronic pain therapist, with online sessions across Ireland and limited in-person availability in Rochestown, Cork.",
]

const CredentialsSection = () => {
    return (
        <Section variant="cream" className="py-16 md:py-24">
            <Container size="wide">
                <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
                    <div>
                        <Eyebrow>Practitioner information</Eyebrow>
                        <Heading className="mb-6">
                            Chronic pain support
                            <br />
                            <em>with a public directory profile.</em>
                        </Heading>
                        <Text className="max-w-md">
                            I describe my work as educational and
                            recovery-oriented. Please ask me directly to confirm
                            the training and scope relevant to your needs before
                            deciding whether to work with me.
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
                            className="mt-8 flex max-w-xl items-center gap-4 border-b py-5 transition-opacity hover:opacity-80"
                            style={{
                                borderColor: "rgba(30,58,32,0.12)",
                            }}
                        >
                            <Image
                                src="/atns-logo.webp"
                                alt="Association for the Treatment of Neuroplastic Symptoms logo"
                                width={72}
                                height={72}
                                className="h-16 w-16 shrink-0 object-contain"
                            />
                            <span className="min-w-0">
                                <span
                                    className="block text-xs font-medium uppercase tracking-[0.16em]"
                                    style={{
                                        color: "#1E3A20",
                                        fontFamily: "var(--font-dm-sans)",
                                    }}
                                >
                                    View my ATNS directory profile
                                </span>
                                <span
                                    className="mt-1 block text-sm leading-relaxed"
                                    style={{
                                        color: "rgba(30,58,32,0.55)",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontWeight: 300,
                                    }}
                                >
                                    Listed in the Practitioner & Coach
                                    Directory.
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default CredentialsSection
