import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        wine: "#7a1726", "wine-2": "#5c111d", "wine-soft": "#f7ecee",
        gold: "#c69a4e", "gold-soft": "#f4ecdd",
        ink: "#2b1f22", muted: "#6e5f62",
        bg: "#fffdfb", "bg-2": "#faf5f0", line: "#ece2dd",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: { soft: "0 18px 50px rgba(92,17,29,.12)" },
      borderRadius: { xl2: "16px" },
    },
  },
  plugins: [],
};
export default config;
