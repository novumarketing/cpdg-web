import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E0303F", "primary-hover": "#C41E2E",
        "primary-tint": "#FDEDEF", "primary-border": "#FBD7DB",
        ink: { 900:"#1A1413", 700:"#3F3531", 500:"#756861", 400:"#978A82", 200:"#E4DAD2", 100:"#F5EFE9" },
        paper: "#FBF7F2", "paper-2": "#F5EEE6", surface: "#FFFFFF",
        gold: { DEFAULT:"#C19A3E", 100:"#F6ECD4", 300:"#E0C273", 500:"#C19A3E", 700:"#8C6E26" },
        "level-preescolar":"#F08A3C", "level-primaria":"#2E9E8F",
        "level-secundaria":"#3B6FB0", "level-prepa":"#C41E2E",
      },
      fontFamily: {
        sans:    ["var(--font-hanken)", "Hanken Grotesk", "system-ui", "sans-serif"],
        display: ["var(--font-bricolage)", "Bricolage Grotesque", "system-ui", "sans-serif"],
        serif:   ["var(--font-spectral)", "Spectral", "Georgia", "serif"],
      },
      boxShadow: {
        xs:"0 1px 2px rgba(26,20,19,.06)", sm:"0 2px 6px rgba(26,20,19,.07)",
        md:"0 8px 24px rgba(26,20,19,.09)", lg:"0 18px 48px rgba(26,20,19,.12)",
        xl:"0 30px 70px rgba(26,20,19,.16)", primary:"0 12px 30px rgba(224,48,63,.28)",
      },
      borderRadius: { sm:"10px", md:"16px", lg:"24px", xl:"32px", pill:"999px" },
      maxWidth: { container:"1200px" },
    },
  },
  plugins: [],
};
export default config;
