/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1c1d21",
        gray: "#30333b",
        lightestGray: "#f8f8f8",
        lighterGray: "#dadada",
        green: "#00a76f",
        darkGreen: "#25443c",
        blue: "#078dee",
        yellow: "#fda92d",
        violet: "#7635dc",
        pink: "#f45577",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
