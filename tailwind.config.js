/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        "autofit": "repeat(auto-fit, minmax(200px, 1fr))"
      },
      gridTemplateRows:{
        "3": "100px 100px 100em "
      },
      
    },
  },
  plugins: [],
}
