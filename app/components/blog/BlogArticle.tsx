import BlogAuthorBio from "./BlogAuthorBio"
import BlogMedicalDisclaimer from "./BlogMedicalDisclaimer"

type BlogArticleProps = {
    contentHtml: string
}

export default function BlogArticle({ contentHtml }: BlogArticleProps) {
    return (
        <section className="w-full bg-[#F7F4EF] px-6 py-20 md:py-28">
            <div className="mx-auto max-w-2xl">
                <article
                    className="blog-prose prose prose-lg max-w-none font-satoshi font-light prose-headings:font-normal"
                    dangerouslySetInnerHTML={{
                        __html: contentHtml,
                    }}
                />

                <BlogMedicalDisclaimer />

                <BlogAuthorBio />
            </div>
        </section>
    )
}
