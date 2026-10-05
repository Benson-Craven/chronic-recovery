import { Section, Divider } from "../ui/Layout"
import { Heading, Eyebrow } from "../ui/Typography"
import { NumberRow } from "../ui/NumberRow"
import { EditorialSplit } from "../ui/EditorialSplit"

export default function InfoJourneySection() {
    return (
        <Section variant="green">
            <EditorialSplit
                reverse
                surface="green"
                stickyVisual
                visual={{
                    kind: "illustration",
                    src: "/images/illustrations/walking-together.png",
                    alt: "",
                }}
            >
                <div>
                    <Eyebrow className="text-dark-supporting">
                        My background
                    </Eyebrow>

                    <Heading className="mb-14 text-white">
                        My journey to
                        <br />
                        <em>chronic pain recovery work</em>
                    </Heading>

                    <Divider variant="cream" className="mb-0" />

                    <NumberRow number={1} variant="green">
                        I didn't start out in this field by chance. Like many
                        practitioners working with chronic pain, I've walked a
                        path that's led me to understand something profound
                        about how pain actually works, and more importantly, how
                        recovery may be possible.
                    </NumberRow>

                    <NumberRow number={2} variant="green" index={1}>
                        My work centres on the biopsychosocial approach to
                        chronic pain recovery. I&apos;ve completed specialised
                        training in the methods developed by Dr Howard
                        Schubiner, one of the world&apos;s leading pioneers in
                        mind-body medicine, whose groundbreaking research has
                        helped thousands recover from conditions conventional
                        medicine often labels as incurable.
                    </NumberRow>

                    <NumberRow number={3} variant="green" index={2}>
                        I am listed in the Association for the Treatment of
                        Neuroplastic Symptoms (ATNS) Practitioner & Coach
                        Directory, which helps people find practitioners and
                        coaches working with neuroplastic symptoms.
                    </NumberRow>
                </div>
            </EditorialSplit>
        </Section>
    )
}
