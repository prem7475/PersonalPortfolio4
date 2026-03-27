/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050608",
          900: "#0A0C10",
          850: "#0E1118",
        },
        gold: {
          50: "#FBF6E9",
          200: "#E9D8A6",
          400: "#D2B56E",
          500: "#C8A85A",
          700: "#9A7A36",
        },
      },
      fontFamily: {
        sans: [
          "Plus Jakarta Sans",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
        display: ["Cormorant Garamond", "ui-serif", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,.06), 0 10px 40px rgba(0,0,0,.55), 0 0 60px rgba(200,168,90,.12)",
        gold: "0 0 0 1px rgba(200,168,90,.25), 0 0 55px rgba(200,168,90,.18)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-10px,0)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
        aurora: {
          "0%": { transform: "translate3d(-8%, -6%, 0) scale(1)" },
          "50%": { transform: "translate3d(6%, 4%, 0) scale(1.05)" },
          "100%": { transform: "translate3d(-8%, -6%, 0) scale(1)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 1.8s ease-in-out infinite",
        aurora: "aurora 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

