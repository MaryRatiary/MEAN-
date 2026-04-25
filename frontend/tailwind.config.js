/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          gray: {
            100: '#f5f5f7',
            200: '#e8e8ed',
            300: '#d2d2d7',
            400: '#86868b',
            500: '#424245',
            600: '#1d1d1f',
          }
        }
      },
      backdropBlur: {
        'apple': '20px',
      }
    },
  },
  plugins: [],
}
