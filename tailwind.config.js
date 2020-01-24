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
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"]
  },
  plugins: [require("tailwindcss-gradients")()]
};
