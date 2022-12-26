/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
    },
    extend: {
      colors: {
        babyBlue: "#89CFF0",
        titanWhite: "#EEEEFF",
        forestGreen: "#228b22",
        charcoalBlack: "#36454f",
      },
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],
};
