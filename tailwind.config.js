/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      'hg-navy':'#022859',
      'hg-salmon': '#F2B28D',
    },
    fontFamily:{
      lato: ['Lato', 'sans-serif'],
    },
    extend: {
      screens:{
        '2xl':'1447px',
      },
    },
  },
  plugins: [require("daisyui")],
}
