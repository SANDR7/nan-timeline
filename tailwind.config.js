module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        background: "#101010",
        red: "#FF005F"
      },
    },
    fontFamily: {
      montserrat: ["Montserrat"],
      roboto: ["Roboto"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
