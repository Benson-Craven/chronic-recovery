import type { ComponentPropsWithoutRef } from "react"
import { cn } from "@/utils/cn"

export default function CtaActionRow({
    className,
    ...props
}: ComponentPropsWithoutRef<"div">) {
    return (
        <div
            {...props}
            className={cn(
                "flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center",
                className,
            )}
        />
    )
}
