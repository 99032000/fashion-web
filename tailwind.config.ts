import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        base: {
          "100": "var(--color-text-base-secondary)",
          "200": "var(--color-text-base-primary)",
        },
      },
      backgroundColor: {
        primary: "var(--color-background-primary)",
        secondary: "var(--color-primary)",
      },
      borderColor: {
        primary: "var(--color-primary)",
      },
    },
  },
  plugins: [],
};
export default config;
