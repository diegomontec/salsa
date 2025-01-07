import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "amarelo": "#dcb85e",
        "black": "#000",
        "white": "#fff",
        "cinza": "#878a7f",
        "verde": "#31595e"
        },
      backgroundImage: {
        'hero': "url('/HeroImage.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
