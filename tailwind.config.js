/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F4F1",
        ink: "#111111",
        concrete: "#A6A6A4",
        wash: "#587A96",
        safety: "#C76A3A",
      },
      fontFamily: {
        sans: ["Inter", "Source Sans 3", "Arial", "Helvetica", "sans-serif"],
        serif: ["Georgia", "Source Serif 4", "Times New Roman", "serif"],
        display: ["Arial Narrow", "Oswald", "Impact", "sans-serif"],
      },
    },
  },
  plugins: [],
};

module.exports = config;
