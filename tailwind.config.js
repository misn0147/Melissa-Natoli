const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'serif': ['Cabin Sketch']
    },
    screens: {
      'md': '768px'
    },
    extend: {},
    colors: {
      'light': '#E4F0D0',
      gray: colors.gray,
      lime: colors.lime,
      blue: colors.blue,
      purple: colors.purple
    },
    maxWidth: {
      '3/4': '75%',
      '1/2': '50%',
      '95': '95%',
    },
    boxShadow: {
      'box': '0 2px 5px 0 rgba(0, 0, 0, 0.5)',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
