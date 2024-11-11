/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px"
    },
    extend: {},
    fontFamily: {
      Jost:["Jost", "sans-serif"],
      Itim:["Itim", "cursive"]
    },
    
  },
  plugins: [],
}

