module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        blue: '2px solid #3b82f6',
        'blue-4': '4px solid #3b82f6'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true
}
