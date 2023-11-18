import { nextui } from "@nextui-org/react";
import { withUt } from "uploadthing/tw";
/** @type {import('tailwindcss').Config} */
module.exports = withUt({
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      orange: "#f97316",
      darkOrange: "#ea580c",
      lightOrange: "#fb923c",
      slate: "#0f172a",
      lightSlate: "#475569",
      darkSlate: "#020617",
      darkSlate: "#020617",
      white: "rgb(255, 255, 255)",
      black: "rgb(0,0,0)",
      gray: "#1f2937",
      gray4: "rgb(75,85,99)",
      formbackground: "#e2e8f0",
      red: "#ff0000",
      lightRed: "rgba(233,0,0,0.6)",
      transparent: "rgba(0,0,0,0)",
      indigo: "#4f46e5",
    },
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
    },
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [nextui()],
});
