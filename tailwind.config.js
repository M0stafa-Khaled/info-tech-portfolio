/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        white: "hsl(var(--white))",
        muted: "hsl(var(--muted))",
        "section-title": "hsl(var(--section-title))",
        "section-back-title": "hsl(var(--section-back-title))",
        background: "hsl(var(--background))",
        "btn-primary": "hsl(var(--btn-primary))",
        "btn-primary-hover": "hsl(var(--btn-primary-hover))",
        "btn-secondary": "hsl(var(--btn-secondary))",
        "btn-secondary-hover": "hsl(var(--btn-secondary-hover))",
        blue: "hsl(var(--blue))",
        yellow: "hsl(var(--yellow))",
      },
      backgroundImage: {
        "background-gradient": "var(--background-gradient)",
      },
    },
  },
  plugins: [],
};
