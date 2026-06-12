import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {

      colors: {

        background: "#0a0a0f",
        foreground: "#e0e0e0",

        card: "#12121a",

        muted: "#1c1c2e",

        accent: "#00ff88",

        secondary: "#ff00ff",

        tertiary: "#00d4ff",

        border: "#2a2a3a",

      },

      fontFamily: {

        heading: [
          "Orbitron",
          "Share Tech Mono",
          "monospace",
        ],

        body: [
          "JetBrains Mono",
          "monospace",
        ],

      },

    },
  },

  plugins: [],
};

export default config;
