const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "3rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Alexandria', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        white: "hsl(var(--white))",
        dark: "hsl(var(--dark))",
        muted: "hsl(var(--muted))",
        "section-title": "hsl(var(--section-title))",
        "section-back-title": "hsl(var(--section-back-title))",
        background: "hsl(var(--background))",
        "btn-primary": "hsl(var(--btn-primary))",
        "btn-primary-hover": "hsl(var(--btn-primary-hover))",
        "btn-secondary": "hsl(var(--btn-secondary))",
        "btn-secondary-hover": "hsl(var(--btn-secondary-hover))",
        blue: "hsl(var(--blue))",
        "dark-blue": "hsl(var(--dark-blue))",
        yellow: "hsl(var(--yellow))",
      },
      backgroundImage: {
        "background-gradient": "var(--background-gradient)",
      },
    },
  },
  plugins: [],
});
