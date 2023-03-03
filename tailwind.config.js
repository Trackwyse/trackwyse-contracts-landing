tailwind.config.js;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#DEE7FE",
          200: "#BED1FF",
          300: "#A4B6FF",
          400: "#4377F2",
          500: "#314E9C",
        },
      },
    },
  },
  plugins: [],
};
