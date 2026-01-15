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
                background: "#fafafa", // pearl white
                foreground: "#323629", // dark dark green
                "primary-text": "#595358", // moody mauve colour
                "secondary-text": "#A4AC96", // dark mellow green
                "tertiary-text": "#CFDDA5", // mellow green
                accent: "#c9fd74", // neon green
            },
            fontFamily: {
                butler: ["Butler", "serif"],
                satoshi: ["Satoshi", "sans-serif"],
            },
            transitionTimingFunction: {
                "ease-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
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
    plugins: [addVariablesForColors, require("@tailwindcss/typography")],
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
