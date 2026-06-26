/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          magenta: "#F10CF5",
          violet: "#7A4DFF",
          blue: "#4C7DFF",
          dark: "#0B1020",
          surface: "#12182A",
          line: "#24304A",
          light: "#F7F8FC",
          border: "#E5EAF3",
          text: "#111827",
          muted: "#5B6475",
          white: "#F8FAFC",
          soft: "#B7C0D4"
        }
      },
      boxShadow: {
        soft: "0 16px 44px rgba(11, 16, 32, 0.10)",
        glow: "0 16px 34px rgba(241, 12, 245, 0.26)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};
