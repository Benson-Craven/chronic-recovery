import Image from "next/image"
import Link from "next/link"
import { authorProfile } from "@/app/lib/seo"
import { Section, Container } from "../ui/Layout"
import { Heading, Text, Eyebrow } from "../ui/Typography"
import { CtaButton } from "../ui/CtaButton"
import TrackedPhoneLink from "../TrackedPhoneLink"

export default function InfoIntroSection() {
    return (
        <Section variant="cream" className="py-12 md:py-24">
            <Container size="wide">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="mb-8 md:mb-0 md:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-4">
                                <div className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                                    <Image
                                        src="/images/marsha-new.jpg"
                                        alt="Marsha Canny of Chronic Pain Recovery Cork"
                                        width={400}
                                        height={500}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <div className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                                    <Image
                                        src="/images/cork.avif"
                                        alt="Cork, Ireland near the Chronic Pain Recovery practice"
                                        width={400}
                                        height={200}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                                <Image
                                    src="/images/cork-3.jpg"
                                    alt="Cork city and harbour area"
                                    width={400}
                                    height={716}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 md:pl-12">
                        <Eyebrow>About me</Eyebrow>

                        <Heading className="mb-6">Marsha Canny</Heading>

                        <Text className="mb-8">
                            I am a chronic pain therapist based in Rochestown,
                            Cork, Ireland. I use a multi-disciplinary approach
                            to support chronic pain recovery, not just pain
                            management. I specialise in helping people with{" "}
                            <Link
                                href="/#illness"
                                className="text-[#1E3A20] underline underline-offset-2"
                            >
                                persistent pain conditions
                            </Link>{" "}
                            and see fantastic results across all ages and
                            ailments. I recovered from chronic migraines and
                            neck pain that I suffered for over 10 years. I will
                            work with your body, nervous system and brain to get
                            you back to good health.
                        </Text>

                        <div className="space-y-4">
                            <CtaButton href="/contact">
                                Book Your Consultation
                            </CtaButton>

                            <p className="font-satoshi text-sm font-light text-light-supporting">
                                or call / WhatsApp{" "}
                                <TrackedPhoneLink
                                    source="info_intro"
                                    className="text-light-body underline underline-offset-2"
                                >
                                    +353 (0) 87-102-5108
                                </TrackedPhoneLink>
                            </p>

                            <Link
                                href={authorProfile.atnsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 flex max-w-md items-center gap-4 border-y border-[#1E3A20]/[0.12] py-5"
                            >
                                <Image
                                    src="/atns-logo.webp"
                                    alt="Association for the Treatment of Neuroplastic Symptoms logo"
                                    width={72}
                                    height={72}
                                    className="h-16 w-16 shrink-0 object-contain"
                                />

                                <span className="min-w-0">
                                    <span className="block font-satoshi text-xs font-medium uppercase tracking-[0.16em] text-[#1E3A20]">
                                        View my verified ATNS profile
                                    </span>

                                    <span className="mt-1 block font-satoshi text-sm font-light leading-relaxed text-light-supporting">
                                        I am listed in the Practitioner & Coach
                                        Directory.
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
