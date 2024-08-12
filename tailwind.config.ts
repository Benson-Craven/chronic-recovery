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
            },
            fontFamily: {
                // customFont: ['"Custom Font"', 'sans-serif'],
                // Add more custom font families as needed
                PlayfairDisplay: ["Playfair Display", "serif"],
                Jost: ["Jost", "sans-serif"],
            },
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
