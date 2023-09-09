/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'VelaSans' : 'Vela Sans',
        'Chava' : 'Chava',
      },
      backgroundImage: {
        'paperBackground' : "url('pages/MainPage/assets/paperBackground.png')"
      }
    },
  },
  plugins: [],
}