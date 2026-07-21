import Image from "next/image"
import type { ReactNode } from "react"
import { cn } from "@/utils/cn"

export type EditorialVisual =
    | {
          kind: "illustration"
          src: string
          alt: ""
      }
    | {
          kind: "photo"
          src: string
          alt: string
      }

interface EditorialSplitProps {
    children: ReactNode
    visual: EditorialVisual
    reverse?: boolean
    surface?: "cream" | "green"
}

export function EditorialSplit({
    children,
    visual,
    reverse = false,
    surface = "cream",
}: EditorialSplitProps) {
    const isIllustration = visual.kind === "illustration"

    return (
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className={cn(reverse && "lg:order-2")}>{children}</div>

            <div className={cn(reverse && "lg:order-1")}>
                <div
                    aria-hidden={isIllustration ? true : undefined}
                    className={cn(
                        "overflow-hidden rounded-3xl",
                        isIllustration &&
                            "mx-auto flex aspect-square w-full max-w-[30rem] items-center justify-center p-8 sm:p-12",
                    )}
                    style={
                        isIllustration
                            ? {
                                  backgroundColor:
                                      surface === "green"
                                          ? "#F7F4EF"
                                          : "#EDE9E0",
                              }
                            : undefined
                    }
                >
                    <Image
                        src={visual.src}
                        alt={visual.alt}
                        width={isIllustration ? 1254 : 900}
                        height={isIllustration ? 1254 : 680}
                        className={cn(
                            "w-full",
                            isIllustration
                                ? "h-full object-contain"
                                : "aspect-[4/3] object-cover",
                        )}
                        sizes="(max-width: 1023px) 100vw, 50vw"
                    />
                </div>
            </div>
        </div>
    )
}
