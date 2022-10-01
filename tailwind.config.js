/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      'purple': '#242741',
      'light-purple': '#33375A',
      'neon-cyan': '#00FFFF',
      'gray': '#C1C1C1',
      'white1': '#EBEBEB',
    },
    extend: {},
  },
  plugins: [],
}