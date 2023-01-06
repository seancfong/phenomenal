const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aqua: '#437A90',
        terra: '#79915c'
      },
      fontFamily: {
        raleway: ['var(--font-raleway)', ...fontFamily.sans],
        orbitron: ['var(--font-orbitron)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
