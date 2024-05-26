/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.vue", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        blue: "#4781FF"
      },
      container: {},
      extend: {
        fontFamily: {},
        backgroundImage: {},
        backgroundColor: {},
        boxShadow: {},
        screens: {},
      },
    },
  },
  plugins: [],
};
