import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Section background tones (≥4 distinct, S2 Luxury Dark)
        ink: "#08090B",
        bg: "#0A0B0D",
        surface: "#101216",
        surface2: "#15181E",
        steel: "#0C1014",
        // Brand
        primary: "#C9A24B", // elite gold accent
        accent: "#7C8B9C", // tactical steel
        fg: "#F4F2EC",
        line: "rgba(244,242,236,0.10)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Oswald", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        shell: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
