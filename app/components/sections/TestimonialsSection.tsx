import { testimonials } from "@/app/lib/testimonials"
import Testimonial from "../Testimonial"
import { HomepageSuccessStoriesLink } from "../SuccessStoriesActions"
import { Section, Container } from "../ui/Layout"
import { Heading, Text } from "../ui/Typography"

export default function TestimonialsSection({
    variant = "cream",
}: {
    variant?: "cream" | "green"
}) {
    return (
        <Section id="client-stories" variant={variant}>
            <Container size="wide">
                <Heading className="mb-6">Real stories from clients</Heading>
                <Text
                    className={
                        variant === "green" ? "text-dark-body" : undefined
                    }
                >
                    A few words from people I&apos;ve worked with.
                </Text>
                <div className="mt-10 grid auto-rows-fr grid-cols-1 gap-6 lg:grid-cols-3">
                    {testimonials
                        .filter(
                            (testimonial) =>
                                testimonial.homepageExcerptParagraphIndex !==
                                undefined,
                        )
                        .map((testimonial) => (
                            <Testimonial
                                key={testimonial.id}
                                testimonial={testimonial}
                                variant={variant}
                                excerpt
                            />
                        ))}
                </div>
                <div className="mt-10">
                    <HomepageSuccessStoriesLink />
                </div>
            </Container>
        </Section>
    )
}
