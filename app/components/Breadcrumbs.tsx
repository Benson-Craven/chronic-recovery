import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/utils/cn"
import type { BreadcrumbItem } from "../lib/seo"

type BreadcrumbsProps = {
    items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    if (items.length < 2) return null

    return (
        <nav aria-label="Breadcrumb" className="w-full bg-[#F7F4EF] px-6">
            <ol className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto py-4 text-xs uppercase tracking-[0.14em]">
                {items.map((item, index) => {
                    const isCurrent = index === items.length - 1

                    return (
                        <li
                            key={item.path}
                            className={cn(
                                "flex shrink-0 items-center gap-2 font-satoshi font-normal",
                                isCurrent
                                    ? "text-[#1E3A20]"
                                    : "text-light-supporting",
                            )}
                        >
                            {index > 0 && (
                                <ChevronRight
                                    aria-hidden="true"
                                    className="h-3 w-3 text-light-supporting"
                                    strokeWidth={1.5}
                                />
                            )}
                            {isCurrent ? (
                                <span aria-current="page">{item.name}</span>
                            ) : (
                                <Link
                                    href={item.path}
                                    className="underline-offset-4 hover:underline focus-visible:underline"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}
