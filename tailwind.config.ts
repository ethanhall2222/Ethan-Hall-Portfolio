import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./lib/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        card: "var(--card)",
        ink: "var(--ink)",
        "muted-ink": "var(--muted-ink)",
        accent: "var(--accent)",
        "accent-strong": "var(--accent-strong)",
        ring: "var(--ring)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-light":
          "radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.08) 1px, transparent 0)",
      },
      boxShadow: {
        subtle: "0 10px 30px -12px rgba(15, 23, 42, 0.25)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.5rem",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;
