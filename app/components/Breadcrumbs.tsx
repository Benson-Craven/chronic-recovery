import Link from "next/link"
import { ChevronRight } from "lucide-react"
import type { BreadcrumbItem } from "../lib/seo"

type BreadcrumbsProps = {
    items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    if (items.length < 2) return null

    return (
        <nav
            aria-label="Breadcrumb"
            className="w-full px-6"
            style={{ backgroundColor: "#F7F4EF" }}
        >
            <ol className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto py-4 text-xs uppercase tracking-[0.14em]">
                {items.map((item, index) => {
                    const isCurrent = index === items.length - 1

                    return (
                        <li
                            key={item.path}
                            className="flex shrink-0 items-center gap-2"
                            style={{
                                color: isCurrent
                                    ? "#1E3A20"
                                    : "rgba(30,58,32,0.52)",
                                fontFamily: "var(--font-dm-sans)",
                                fontWeight: 400,
                            }}
                        >
                            {index > 0 && (
                                <ChevronRight
                                    aria-hidden="true"
                                    className="h-3 w-3"
                                    strokeWidth={1.5}
                                    style={{ color: "rgba(30,58,32,0.28)" }}
                                />
                            )}
                            {isCurrent ? (
                                <span aria-current="page">{item.name}</span>
                            ) : (
                                <Link
                                    href={item.path}
                                    className="transition-opacity hover:opacity-70"
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
