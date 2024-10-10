/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./dist/**/*.html'],
  darkMode: false,
  content: ['*'],
  
  theme: {
    extend: {
      colors: {

        'customgrey': '#666',
        'customblack': '#111'
    },
    fontFamily: {

      'customfont': ['Poppins', 'serif'],
  },
  },
  plugins: [],
}
}
