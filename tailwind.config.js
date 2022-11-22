/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{html,jpg,ico,svg}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
      },
      backgroundImage: {
        "hero-img": "url('/bg.jpg')",
      },
      height: {
        128: "40rem",
        124: "30rem",
        100: "25rem",
        47: "160rem",
        tab: "160rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
