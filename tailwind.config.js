/** @type {import('tailwindcss').Config} */
const colors = require("./colors");
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        interThin: ["InterThin"],
        interRegular: ["InterRegular"],
        interBold: ["InterBold"],
        interBlack: ["InterBlack"],
        interSemiBold: ["InterSemiBold"],
        interExtraBold: ["InterExtraBold"],
        interExtraLight: ["InterExtraLight"],
        interMedium: ["InterMedium"],
      },
      colors,
    },
  },
  plugins: [],
};
