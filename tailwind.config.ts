import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#171310",
        char: "#231d18",
        cream: "#F7EFDE",
        gold: "#E8A93B",
        ember: "#C1401F",
        pickle: "#7A8450",
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        body: ["var(--font-work)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
