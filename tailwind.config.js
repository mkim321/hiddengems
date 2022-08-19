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
      lora: ['Lora', 'serif'],
    },
    extend: {
      screens:{
        '2xl':'1447px',
      },
      margin:{
        '375':'3.75rem'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        'mytheme': {
          'primary': '#022859',
          'primary-focus': '#4506cb',
          'primary-content': '#ffffff',
          'secondary': '#f000b8',
          'secondary-focus': '#bd0091',
          'secondary-content': '#FFFfff',
          'accent': '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          'info': '#2094f3',
          'success': '#FFF7Ed',
          'warning': '#ff9900',
          'error': '#F2B28D',
          'hg-salmon': '#F2B28D',
        },
      },
    ],
  },
}
