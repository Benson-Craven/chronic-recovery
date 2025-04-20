"use client"

import React from "react"
import Lottie from "lottie-react"
import type { LottieComponentProps } from "lottie-react"

export default function LottieClientWrapper(props: LottieComponentProps) {
    return <Lottie {...props} />
}
