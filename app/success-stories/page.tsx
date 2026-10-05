import Link from "next/link"
import Breadcrumbs from "../components/Breadcrumbs"
import { SuccessStoriesCtas } from "../components/SuccessStoriesActions"
import Testimonial from "../components/Testimonial"
import { Container, Divider, Section } from "../components/ui/Layout"
import PageHero from "../components/sections/PageHero"
import {
    absoluteUrl,
    BreadcrumbJsonLd,
    createPageMetadata,
    JsonLd,
    organizationSchema,
    personSchema,
} from "../lib/seo"
import { testimonials } from "../lib/testimonials"

const title = "Chronic Pain Recovery Success Stories"
const description =
    "Read first-hand accounts of working with Marsha Canny on chronic pain, including clients' experiences of pain reprocessing and ongoing recovery."
const path = "/success-stories"
const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Success Stories", path },
]

export const metadata = createPageMetadata({
    title: `${title} | Marsha Canny`,
    description,
    path,
})

export default function SuccessStoriesPage() {
    return (
        <main className="bg-[#F7F4EF]">
            <BreadcrumbJsonLd
                id="success-stories-breadcrumbs"
                items={breadcrumbs}
            />
            <JsonLd
                id="success-stories-schema"
                data={{
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "@id": absoluteUrl(path),
                    name: title,
                    description,
                    url: absoluteUrl(path),
                    inLanguage: "en-IE",
                    about: { "@id": personSchema["@id"] },
                    publisher: { "@id": organizationSchema["@id"] },
                }}
            />
            <Breadcrumbs items={breadcrumbs} />

            <PageHero eyebrow="Chronic Pain Recovery Success Stories">
                First-hand accounts <br /> from people{" "}
                <em>I&apos;ve worked with</em>.
            </PageHero>

            <Section variant="cream" className="pt-8 md:pt-10">
                <Container className="lg:max-w-5xl">
                    <h2 className="sr-only">Client experiences</h2>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {testimonials.map((testimonial) => (
                            <Testimonial
                                key={testimonial.id}
                                testimonial={testimonial}
                            />
                        ))}
                    </div>
                    <p className="mt-8 font-satoshi text-sm font-light leading-relaxed text-light-supporting">
                        If you&apos;d like to explore whether this approach
                        could be right for you, try my{" "}
                        <Link
                            href="/self-assessment"
                            className="text-[#1E3A20] underline underline-offset-4"
                        >
                            self-assessment
                        </Link>
                        .
                    </p>
                    <Divider className="my-10" />
                    <SuccessStoriesCtas position="closing" />
                </Container>
            </Section>
        </main>
    )
}
