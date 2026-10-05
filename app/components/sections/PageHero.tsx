type PageHeroProps = {
    eyebrow: string
    children: React.ReactNode
    description?: React.ReactNode
}

export default function PageHero({
    eyebrow,
    children,
    description,
}: PageHeroProps) {
    return (
        <section className="w-full bg-[#1E3A20] px-6 py-24 md:py-36">
            <div className="mx-auto max-w-3xl">
                <p className="mb-6 font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-dark-supporting">
                    {eyebrow}
                </p>

                <h1 className="mb-8 font-satoshi text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl">
                    {children}
                </h1>

                <div className="h-px w-full bg-[rgba(200,230,201,0.2)]" />

                {description && (
                    <p className="mt-8 max-w-xl font-satoshi text-base font-light leading-relaxed text-dark-body md:text-lg">
                        {description}
                    </p>
                )}
            </div>
        </section>
    )
}
