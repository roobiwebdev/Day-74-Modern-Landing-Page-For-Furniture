/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Alegreya: ["Alegreya", "serif"],
        Merriweather: ["Merriweather", "serif"],
        Georgian: ["Noto Serif Georgian", "serif"],
      },
      colors: {
        customBlue: "#1889CB",
      },
    },
  },
  plugins: [],
};
