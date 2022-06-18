/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'cursive'],
        'Open-Sans': ['Open+Sans', 'cursive']
      },
      colors: {
        'pink': 'hsl(322, 100%, 66%)',
        'light-pink': 'hsl(321, 100%, 78%)',
        'light-red': 'hsl(0, 100%, 63%)',
        'very-dark-cyan': 'hsl(192, 100%, 9%)',
        'very-pale-blue': 'hsl(207, 100%, 98%)',
        'ancla': 'hsl(228, 45%, 44%)'
      }
    },
  },
  plugins: [],
}
