/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      offWhite: "#EEEEEE",
      navy: "#3f4760",
      darkpurple: "#615586",
      periwinkle: "#AA95d1",
      greenTeal: "#7DD1C1",
      sage: "#8a9a5b",
    },
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
