const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['var(--font-raleway)', ...fontFamily.sans],
        orbitron: ['var(--font-orbitron)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
