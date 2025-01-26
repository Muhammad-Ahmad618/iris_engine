/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, rgba(18,17,17,1) 50%, rgba(129,45,189,1) 91%)',
        'custom-gradient2': 'linear-gradient(126deg, rgba(105,39,190,1) 27%, rgba(164,101,241,1) 68%)'

      },
      backgroundColor: {
        'custom-black-80': 'rgba(13, 13, 13, 0.8)',
      },
      maxWidth: {
        'screen-llg': '1300px', 
        'screen-ultra': '1700px', // Another custom screen size
      },

    },
  },
  plugins: [],
}

