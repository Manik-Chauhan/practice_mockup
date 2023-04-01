/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      "dark-purple":"#1E296A",
      "dash-color":"#F2F3F7",
      "light-white":"rgba(255,255,255,0.18)"
      }
    },
  },
  plugins: [],
}

