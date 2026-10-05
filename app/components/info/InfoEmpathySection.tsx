"use client"

import { motion } from "framer-motion"
import { Section, Divider } from "../ui/Layout"
import { Heading, Text, Eyebrow, ItalicQuote } from "../ui/Typography"
import { EditorialSplit } from "../ui/EditorialSplit"

export default function InfoEmpathySection() {
    return (
        <Section variant="cream" id="know-what-its-like">
            <EditorialSplit
                stickyVisual
                visual={{
                    kind: "illustration",
                    src: "/images/illustrations/compassionate-support.png",
                    alt: "",
                }}
            >
                <div>
                    <Eyebrow>You are not alone</Eyebrow>

                    <Heading className="mb-14">
                        I know what it&apos;s like
                        <br />
                        to be told there&apos;s nothing
                        <br />
                        <em>more we can do.</em>
                    </Heading>

                    <Divider className="mb-0" />

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                        }}
                        className="border-b border-[#1E3A20]/[0.12] py-10"
                    >
                        <Text>
                            If you&apos;re reading this, you&apos;ve probably
                            heard those words before. You&apos;ve seen multiple
                            specialists. You&apos;ve had the scans, the x-rays,
                            the blood tests. Everything comes back
                            &quot;normal&quot; or you&apos;ve even been given a
                            &quot;diagnosis&quot;, but you&apos;re still in
                            pain. Day after day. Month after month. Maybe even
                            year after year.
                        </Text>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: 0.15,
                            ease: "easeOut",
                        }}
                    >
                        <ItalicQuote className="mt-12">
                            "Your pain is real.
                            <br />
                            And there is hope."
                        </ItalicQuote>
                    </motion.div>
                </div>
            </EditorialSplit>
        </Section>
    )
}
