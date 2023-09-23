import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        unica: ["var(--font-unica)"],
        montserrat: ["var(--font-montserrat)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#903AFF",
          100: "#FE34B9",
        },
        secondary: "#150E28",
        tertiary: "#903AFF", 
        abstract: "#D434FE",
        bottom: "#100B20",
      },
      fonts: {
        heroheader: [
          "80px",
          {
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
          },
        ],
        navheader: [
          "36px",
          {
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
          },
        ],
        sectionheader: [
          "32px",
          {
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "0%",
          },
        ],
        
      },
    },
  },
  plugins: [],
};
export default config;
