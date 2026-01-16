import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#38bdf8",
          dark: "#0ea5e9"
        }
      }
    }
  },
  plugins: []
};

export default config;
