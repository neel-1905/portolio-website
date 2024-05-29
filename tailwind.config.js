/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-primary": "var(--theme-primary)",

        background: "var(--background)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        placeholder: "var(--placeholder)",
        "btn-primary": "var(--btn-primary)",
        "btn-secondary": "var(--btn-secondary)",
        "btn-danger": "var(--btn-danger)",
        "text-link": "var(--btn-text-link)",
        "border-primary": "var(--border-primary)",
        "nav-link": "var(--nav-link)",
        "nav-link-hover": "var(--nav-link-hover)",
        "btn-text-primary": "var(--btn-text-primary)",
        "btn-hover-primary": "var(--btn-hover-primary)",

        "card-bg": "var(--card-bg)",
      },
      fontFamily: {
        "reddit-mono": ["Reddit Mono", "monospace"],
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
};
