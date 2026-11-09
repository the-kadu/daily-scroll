import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        parchment: "#F4EBD0",
        obsidian: "#12130F",
        mana: "#3A86FF",
        wood: "#5C4033",
      },
      fontFamily: {
        pixel: ["var(--font-pixel)", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
