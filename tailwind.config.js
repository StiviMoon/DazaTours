/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'magenta' : "#AF2D47",
        'mostaza' : "#DEB626",
        'scuba_blue' : "#1A92A5",
        'azul_o' : "#16133A",
        'verde_o' : "#7A9A01",
      },
      backgroundImage: {
        'patron': "url('/Img/daza/Patron.png')",
        
      }
    },
  },
  plugins: [],
});

