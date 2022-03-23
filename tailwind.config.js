const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        bg_match: "#FAFAFA",
        PeNi_black: "#262626",
        PeNi_grey: "#878787",
        PeNi_grey_light: "#DEDEDE",
        PeNi_pink: "#FDAAA2",
        bg: "#F8F8F8",
        PeNi_blue: "70D4F4",
      },
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        btnShadow: "0px 2px 7px rgba(10, 10, 10, 0.07)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
