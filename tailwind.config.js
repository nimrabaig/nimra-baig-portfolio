/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "first-clr": "#666",
        "second-clr": "#42446e",
        "thirdh-clr": "#a7a7a7",
        "fourth-clr": "018c0f",
        "fifth-clr": "#d7ffe0",
      },
    },
  },
  variants: {},
  plugins: [],
};
