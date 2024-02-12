/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      '2sm': {'max': '500px'},
      // => @media (max-width: 500px) { ... }
      
      'min2sm': '501px',
      // => @media (min-width: 500px) { ... }

      'minsm': '640px',
      // => @media (min-width: 640px) { ... }

      'minmd': '768px',
      // => @media (min-width: 768px) { ... }

      'minlg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'minxl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'min2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
});