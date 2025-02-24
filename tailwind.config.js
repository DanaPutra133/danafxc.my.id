/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ba5253",
        secondary: "#fab3b3",
        background: "#e1bf97",
      },
    },
  },
  plugins: [],
}

