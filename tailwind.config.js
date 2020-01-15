module.exports = {
  theme: {
    linearGradients: theme => ({
      colors: theme("colors")
    }),
    radialGradients: theme => ({
      colors: theme("colors")
    }),
    conicGradients: theme => ({
      colors: theme("colors")
    }),
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      }
    }
  },
  variants: {},
  plugins: [require("tailwindcss-gradients")()]
};
