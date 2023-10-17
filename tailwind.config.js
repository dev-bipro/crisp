/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Oswald': ['Oswald', "sans-serif"],
        'Roboto': ['Roboto', "sans-serif"],
      },
      colors: {
        'mainColor'           : '#E6F1FA',
        'mainColor2'          : '#EB5757',
        'advancedColor'       : '#57A4EB',
        'blackColor2'         : '#3F3F3F',
        'grayColor'           : '#828282',
        'grayColorFour'           : '#828282',
        'lightBlueHoverColor' : '#F0F2F2',
        'dividerColor'        : '#C4C4C4',
        'linkColor'           : '#0F6DB1',
      },
      maxWidth: {
        "maxContainer" : "1920px" ,
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 8px 35px rgba(0, 0, 0, 0.25)',
            '0 8px 35px rgba(0, 0, 0, 0.15)'
        ]
      }
      // width: {
      //   '40': '40px',
      // }
    },
  },
  plugins: [],
}

