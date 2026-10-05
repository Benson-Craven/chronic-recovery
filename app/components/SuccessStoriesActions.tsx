"use client"

import {
    trackHomepageSuccessStoriesClick,
    trackSuccessStoriesCtaClick,
    type SuccessStoriesPosition,
} from "@/app/lib/analytics"
import CtaActionRow from "./CtaActionRow"
import { CtaButton } from "./ui/CtaButton"
import { WhatsAppCta } from "./WhatsAppLink"

export function HomepageSuccessStoriesLink() {
    return (
        <CtaButton
            href="/success-stories"
            variant="outline"
            onClick={trackHomepageSuccessStoriesClick}
        >
            Read more success stories
        </CtaButton>
    )
}

export function SuccessStoriesCtas({
    position,
}: {
    position: SuccessStoriesPosition
}) {
    return (
        <CtaActionRow>
            <WhatsAppCta
                source={
                    position === "intro"
                        ? "success_stories_intro"
                        : "success_stories_closing"
                }
                onClick={() =>
                    trackSuccessStoriesCtaClick("whatsapp", position)
                }
            />
            <CtaButton
                href="/contact"
                variant="outline"
                onClick={() =>
                    trackSuccessStoriesCtaClick("consultation", position)
                }
            >
                Book Consultation
            </CtaButton>
        </CtaActionRow>
    )
}
