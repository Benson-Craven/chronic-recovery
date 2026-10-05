import type { TestimonialRecord } from "@/app/lib/testimonials"
import { cn } from "@/utils/cn"

export default function Testimonial({
    testimonial,
    excerpt = false,
    variant = "cream",
}: {
    testimonial: TestimonialRecord
    excerpt?: boolean
    variant?: "cream" | "green"
}) {
    const isGreen = variant === "green"
    const paragraphs = testimonial.text.split("\n\n")
    const visibleParagraphs =
        excerpt && testimonial.homepageExcerptParagraphIndex !== undefined
            ? [paragraphs[testimonial.homepageExcerptParagraphIndex]]
            : paragraphs

    return (
        <figure
            className={cn(
                "flex flex-col rounded-2xl border p-6 md:p-8",
                isGreen ? "border-[#C8E6C9]/15" : "border-[#1E3A20]/15",
            )}
        >
            <blockquote
                className={cn(
                    "flex-1 space-y-5 font-satoshi text-base font-light leading-relaxed md:text-lg",
                    isGreen ? "text-dark-body" : "text-light-body",
                )}
            >
                {visibleParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </blockquote>
            <figcaption
                className={cn(
                    "mt-6 border-t pt-5 font-satoshi",
                    isGreen ? "border-[#C8E6C9]/10" : "border-[#1E3A20]/10",
                )}
            >
                <span
                    className={cn(
                        "block text-sm font-medium",
                        isGreen ? "text-[#F7F4EF]" : "text-[#1E3A20]",
                    )}
                >
                    {testimonial.name}
                </span>
                {testimonial.condition && (
                    <span
                        className={cn(
                            "mt-1 block text-sm font-light",
                            isGreen
                                ? "text-dark-supporting"
                                : "text-light-supporting",
                        )}
                    >
                        {testimonial.condition}
                    </span>
                )}
            </figcaption>
        </figure>
    )
}
