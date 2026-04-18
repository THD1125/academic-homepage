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
        ink: "#20262d",
        muted: "#68727f",
        line: "#d9d4ca",
        paper: "#f7f5ef",
        mist: "#e8efea",
        forest: "#25483f",
        brick: "#943f34",
        ivory: "#fffdf8",
        graphite: "#303840"
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
        subtle: "0 12px 28px rgba(32, 38, 45, 0.06)",
        lift: "0 18px 45px rgba(32, 38, 45, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
