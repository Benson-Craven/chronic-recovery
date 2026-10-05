import Link from "next/link"
import CtaActionRow from "../CtaActionRow"
import { WhatsAppCta } from "../WhatsAppLink"

export default function BlogClosingCta() {
    return (
        <section className="w-full bg-[#F7F4EF] px-6 py-20 md:py-28">
            <div className="mx-auto max-w-5xl">
                <div className="mb-12 h-px w-full bg-[#1E3A20]/[0.15]" />

                <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
                    <div>
                        <p className="mb-4 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-light-supporting">
                            Ready to begin?
                        </p>

                        <h2 className="font-satoshi text-5xl leading-[1.05] text-[#1E3A20] md:text-6xl">
                            Recovery is possible.
                            <br />
                            <em>Let&apos;s talk.</em>
                        </h2>
                    </div>

                    <CtaActionRow className="gap-3">
                        <WhatsAppCta source="blog_closing_cta" />

                        <Link
                            href="/contact"
                            className="cta-interactive w-full whitespace-nowrap rounded-full border border-[#1E3A20]/30 bg-transparent py-4 text-center font-satoshi text-sm font-medium tracking-[0.04em] text-[#1E3A20] sm:w-auto sm:px-10"
                        >
                            Book Consultation
                        </Link>
                    </CtaActionRow>
                </div>
            </div>
        </section>
    )
}
