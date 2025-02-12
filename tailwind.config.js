/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abril: ["Abril Fatface", "serif"],
        tenor: ["Tenor Sans", "serif"],
        ruthie: ["Ruthie", "serif"],
        adamina: ["Adamina", "serif"],
        times: ["Times New Roman", "serif"],
        rozha: ["Rozha One", "serif"],
        ultra: ["Ultra", "serif"],
        rubik: ["Rubik Mono One", "serif"],
      },
    },
  },
  plugins: [],
};


