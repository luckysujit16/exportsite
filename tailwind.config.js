/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00B98E",
          dark: "#009472",
          light: "#80DCC7",
        },
        secondary: {
          DEFAULT: "#FF6922",
          dark: "#993F14",
        },
        surface: {
          DEFAULT: "#EFFDF5",
          alt: "#F1FDF6",
        },
        ink: {
          DEFAULT: "#0E2E50",
          soft: "#0B2540",
          muted: "#666565",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      backgroundImage: {
        "route-grid":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
