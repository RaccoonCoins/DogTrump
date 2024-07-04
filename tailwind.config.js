/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        milkKids: ["Milk Kids"],
        babyFat: ["Baby Fat Demo"],
        pangolin: ["Pangolin", "cursive"],
      },
    },
  },
  plugins: [],
};
