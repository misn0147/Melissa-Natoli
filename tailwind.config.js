module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'md': '768px'
      // => @media (min-width: 768px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
