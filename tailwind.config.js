/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        MainColor: {
          accent: '#F74D66',
        },
      },
    },
  },
  plugins: [],
}
