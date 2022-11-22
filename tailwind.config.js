/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      base: ["Cormorant Upright"],
      alt: ["Open Sans"],
    },
    maxWidth: {
      "1/2": "50%",
      "301px": "301px",
      full: "100%",
    },
    minWidth: {
      "800px": "800px",
      "500px": "500px",
      "301px": "301px",
      "400px": "400px",
      "240px": "240px",
      full: "100%",
    },
    bottom: {
      "1/20": "5%",
    },
    extend: {},
  },
  plugins: [],
};
