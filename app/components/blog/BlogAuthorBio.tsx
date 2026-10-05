import Image from "next/image"
import Link from "next/link"
import { authorProfile } from "../../lib/seo"

export default function BlogAuthorBio() {
    return (
        <aside
            className="mt-16 border-t border-[#1E3A20]/[0.14] pt-10"
            aria-labelledby="author-bio-heading"
        >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <Image
                    src={authorProfile.image}
                    alt={`${authorProfile.name}, ${authorProfile.role} at Chronic Pain Recovery`}
                    width={112}
                    height={112}
                    className="h-28 w-28 shrink-0 rounded-full object-cover"
                />

                <div>
                    <p className="mb-3 font-satoshi text-xs font-medium uppercase tracking-[0.22em] text-light-supporting">
                        Written by
                    </p>

                    <h2
                        id="author-bio-heading"
                        className="mb-2 font-satoshi text-2xl leading-tight text-[#1E3A20] md:text-3xl"
                    >
                        {authorProfile.name}
                    </h2>

                    <p className="mb-4 font-satoshi text-sm font-medium text-light-body">
                        {authorProfile.role} in {authorProfile.location}
                    </p>

                    <p className="mb-4 font-satoshi text-base font-light leading-relaxed text-light-body">
                        Marsha Canny is a chronic pain therapist based in
                        Rochestown, Cork. Her work draws on pain neuroscience
                        education, Pain Reprocessing Therapy, Dr Howard
                        Schubiner&apos;s mind-body methods, and a
                        biopsychosocial approach to support people with
                        persistent pain when serious medical causes have been
                        assessed.
                    </p>

                    <p className="mb-4 font-satoshi text-base font-light leading-relaxed text-light-body">
                        Listed in the ATNS Practitioner & Coach Directory and
                        trained in pain neuroscience, Pain Reprocessing Therapy,
                        and Dr Howard Schubiner&apos;s mind-body methods.
                    </p>

                    <p className="mb-5 font-satoshi text-base font-light leading-relaxed text-light-body">
                        Marsha also brings lived experience of recovering from
                        long-term migraines and neck pain, which informs her
                        compassionate, practical approach to chronic pain
                        recovery work.
                    </p>

                    <Link
                        href={authorProfile.url}
                        className="inline-flex font-satoshi text-xs font-medium uppercase tracking-[0.16em] text-[#1E3A20]"
                    >
                        About Marsha
                    </Link>
                </div>
            </div>
        </aside>
    )
}
