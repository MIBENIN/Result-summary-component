/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      container:{
        padding:{
          DEFAULT: '0',
          xl: '4rem',
          '2xl': '6rem',
        }
      },
      colors:{
         'persianBlue': 'hsla(241, 72%, 46%, 1)',
         'violetBlue':'hsla(256, 72%, 46%, .1)',
         'lightSlateBlue': 'hsl(252, 100%, 67%)',
         'LightRoyalBlue': 'hsl(241, 81%, 54%)',
         'paleBlue': 'hsl(221, 100%, 96%)',
         'lightLavender': 'hsl(241, 100%, 89%)',
         'darkGrayBlue': 'hsl(224, 30%, 27%)',
         'lightRed': 'hsl(0, 100%, 67%)',
         'orangeyYellow': 'hsl(39, 100%, 56%)',
         'greenTeal': 'hsl(166, 100%, 37%)',
         'cobaltBlue': 'hsl(234, 85%, 45%)',
      },
      fontFamily:{
        'Hanken-Grotesk':'Hanken Grotesk, sans-serif',
      }
    },
  },
  plugins: [],
}
