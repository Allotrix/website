/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      "allotrix-bg": "#09090B",
      "allotrix-text": "#CDCDCD",
      "allotrix-std": "#EF4036"
    },

    fontFamily: {
      "allotrix-font": ['Poppins', 'sans-serif'],
      "allotrix-font-secondary": ['Montserrat', 'sans-serif']
    },

  },
  plugins: [require('tailwind-scrollbar')],
}

