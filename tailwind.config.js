const { highlight } = require("@code-hike/mdx");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          highlight: "#81B1E4",
          base: "#2D7DD2",
          fill: "#81B1E4",
        },
        secondary: {
          accent: "#FFFF33",
          fill: "#ffeb3b",
        },
        mygray: {
          50: "#EBEDEF",
          100: "#D4D8DE",
          200: "#A9B1BC",
          300: "#7E8A9B",
          400: "#596473",
          500: "#383F48",
          600: "#2D3239",
          700: "#21262B",
          800: "#16191D",
          900: "#0B0D0E",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
