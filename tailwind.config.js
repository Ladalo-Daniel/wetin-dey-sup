import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
module.exports = {
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
      //orange 500
      darkOrange: "#ea580c",
      //orange 600
      lightOrange: "#fb923c",
      //orange 400
      slate: "#0f172a",
      //slate 800
      lightSlate: "#475569",
      darkSlate:'#020617',
      //slate 200
      white: "rgb(255, 255, 255)",
      black:'rgb(0,0,0)'
    },
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
      // this is the fontFamily we are using pls if you have any other let the team know before making any changes
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
};

//incase you have any changes to make let the team know before doing so pls....
