import React from "react"
import { FadeInOnScroll } from "../animations/FadeInOnScroll"
import { Section, Container, Divider } from "../ui/Layout"
import { Heading, Text } from "../ui/Typography"
import { CtaButton } from "../ui/CtaButton"

const Approach = () => {
    return (
        <Section variant="cream">
            <Container className="text-center">
                <FadeInOnScroll threshold={0.5}>
                    <Heading className="mb-8">
                        This is not
                        <br />
                        <em>pain management.</em>
                    </Heading>
                </FadeInOnScroll>

                <FadeInOnScroll threshold={0.5}>
                    <Divider className="mx-auto mb-10 w-16" />
                </FadeInOnScroll>

                <FadeInOnScroll threshold={0.5}>
                    <Text className="mx-auto mb-12 max-w-md">
                        The treatment I provide will help you cure your chronic
                        pain — not just cope with it.
                    </Text>
                </FadeInOnScroll>

                <FadeInOnScroll threshold={0.5}>
                    <CtaButton href="/contact">
                        Book Your Consultation
                    </CtaButton>
                </FadeInOnScroll>
            </Container>
        </Section>
    )
}

export default Approach
