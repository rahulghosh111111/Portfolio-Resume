/** @type {import('tailwindcss').Config} */
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
  theme: {
    extend: {
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"], // Custom font
        poppins: ["'Poppins'", "sans-serif"], // Custom font
      },
    },
  },

}
