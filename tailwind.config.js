/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { google: ["Playfair Display", "serif"] },
      aspectRatio: {
        "4/3": "4 / 3",
        "16/9": "16 / 9",
      },
    },
  },
  plugins: [],
};
