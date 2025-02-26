/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#ffbd59",
        orange: "#f47e57",
        dark: "#1E1E1E",
        aquaGreen:'#4bf1b2',
        purple:'#4a40d9'
      }
    },
  },
  plugins: [],
}
