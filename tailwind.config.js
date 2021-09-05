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
      // => @media (min-width: 768px) { ... }
    },
    extend: {},
    colors: {
      'light': '#E4F0D0',
      gray: colors.gray,
      lime: colors.lime,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
