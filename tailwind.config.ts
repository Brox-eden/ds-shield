import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#062F21",
          light: "#0B4A34",
          dark: "#042016",
        },
        gold: {
          DEFAULT: "#B38443",
          light: "#D4AD73",
          dark: "#8C6530",
        },
        cream: "#FDFAF5",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(90deg, #062F21 0%, #062F21 30%, #B38443 70%, #B38443 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
