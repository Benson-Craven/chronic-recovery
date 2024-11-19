import type { Config } from "tailwindcss"

const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

/** @type {import('tailwindcss').Config} */

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#F1E8DE",
                secondary: "#323629",
                textPrimary: "#595358",
                textSecondary: "#A4AC96",
                textThird: "#CFDDA5",
                "custom-green": "#c9fd74", // Added for the Button component
            },
            fontFamily: {
                PlayfairDisplay: ["Playfair Display", "serif"],
                Jost: ["Jost", "sans-serif"],
                butler: ["Butler", "serif"],
                satoshi: ["Satoshi", "sans-serif"],
            },
            transitionTimingFunction: {
                "custom-ease": "cubic-bezier(0.76, 0, 0.24, 1)", // Added for the Button component
            },
        },
    },
    variants: {
        extend: {
            transform: ["group-hover"],
            translate: ["group-hover"],
            rotate: ["group-hover"],
            opacity: ["group-hover"],
        },
    },
    plugins: [addVariablesForColors],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"))
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
    )

    addBase({
        ":root": newVars,
    })
}

export default config
