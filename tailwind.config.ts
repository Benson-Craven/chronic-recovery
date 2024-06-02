import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F1E8DE',
        secondary: '#323629',
        textPrimary: '#595358',
        textSecondary: '#A4AC96',
        textThird: '#CFDDA5',
      },
      fontFamily: {
        // customFont: ['"Custom Font"', 'sans-serif'],
        // Add more custom font families as needed
        PlayfairDisplay: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
