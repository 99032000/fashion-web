import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
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
      maxWidth: {
        content: "1800px",
      },
    },
  },
  plugins: [],
};
export default config;
