module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 10px 30px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'nunito': ['Nunito'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
