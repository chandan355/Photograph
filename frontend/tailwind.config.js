/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enables dark mode using a class
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#0b0b0b",
        darkCard: "#1a1a1a",
        lightBg: "#ffffff",
        lightCard: "#f4efe9",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
}
