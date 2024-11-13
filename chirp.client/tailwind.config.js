/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#FEFDEB",
          100: "#FDFAD7",
          200: "#FCF5AF",
          300: "#FAF088",
          400: "#F9EB60",
          500: "#F7E638",
          600: "#C6B82D",
          700: "#948A22",
          800: "#635C16",
          900: "#312E0B",
          950: "#191706",
        },
        neutral: {
          50: "#FFFFFF",
          100: "#E9E9E9",
          200: "#D4D4D4",
          300: "#BEBEBE",
          400: "#A8A8A8",
          500: "#939393",
          600: "#7D7D7D",
          700: "#676767",
          800: "#515151",
          900: "#3C3C3C",
          950: "#262626",
        },
        green_accent: {
          50: "#EBFEF3",
          100: "#D7FEE8",
          200: "#AFFCD1",
          300: "#88FBB9",
          400: "#60F9A2",
          500: "#38F88B",
          600: "#2DC66F",
          700: "#229553",
          800: "#166338",
          900: "#0B321C",
          950: "#06190E",
        },
        black: "#1D1D1D",
        white: "#E7E9EA",
        red: "#f74738",
      },
    },
  },
  plugins: [],
};
