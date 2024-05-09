/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CE2D4F",
        secondary: "#6B1F31",
        tertiary: "#B52845",
        dark: "#071013"
      },
    },
  },
  plugins: [],
};
