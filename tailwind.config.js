/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#191919",
        violet: "#6750A4",
        blue: "#00FFF2",
        pink: "#B200FF",
        yellow: { 500: "#FF9113", 900: "#4E2C06" },
      },
    },
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
    },
  },
  plugins: [],
};
