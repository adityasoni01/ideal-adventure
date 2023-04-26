/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('D:\majorproject\ideal-adventure\public\desert.jpg')",
      }, 
      colors: {
        'custom-yellow' : '#fefee4',
        'footer-color' : '#f4f4d3',
        'body-color' : '#ffd987',
      },
    },
  },
  plugins: [],
}
