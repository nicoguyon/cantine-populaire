import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage:    "#8B9D77",
        wood:    "#C4A882",
        cream:   "#FAF8F5",
        mustard: "#D4A843",
        charcoal:"#2C2C2C",
        slate:   "#1A1A1A",
        ardoise: "#1c1e1a",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans:  ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to bottom, rgba(28,30,26,0.35) 0%, rgba(28,30,26,0.6) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
