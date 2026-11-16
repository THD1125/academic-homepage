import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17201e",
        muted: "#66716e",
        line: "#dbe2df",
        paper: "#f7f9f8",
        mist: "#edf2f0",
        forest: "#174a3d",
        brick: "#9a473d",
        ivory: "#ffffff",
        graphite: "#2e3835"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Noto Sans CJK SC",
          "Noto Sans SC",
          "Microsoft YaHei",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        serif: [
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Noto Serif CJK SC",
          "Songti SC",
          "SimSun",
          "serif"
        ]
      },
      boxShadow: {
        subtle: "0 8px 24px rgba(23, 32, 30, 0.05)",
        lift: "0 14px 34px rgba(23, 32, 30, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
