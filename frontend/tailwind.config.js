/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'main':'40% 1fr',
        'main2':'25% 1fr'
      },
      backgroundColor:{
        'magic':'#435C51',
        'magic2':'#F0F2F1'
      },
      textColor:{
        'm22':'#435C51',
        'm33':'#6A6A6A'
      }
    },
  },
  plugins: [],
}
