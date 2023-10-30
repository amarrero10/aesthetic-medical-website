/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      offWhite: "#EEEEEE",
      navy: "#3f4760",
      darkpurple: "#015657",
      periwinkle: "#00BFFF",
      greenTeal: "#7DD1C1",
      sage: "#8a9a5b",
    },
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        garamond: ['"Cormorant Garamond", "sans-serif"'],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
