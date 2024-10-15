/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // inclure tous les fichiers dans le dossier src
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({addUtilities}){
      addUtilities({
        '.transform-style-3d':{
          'transform-style':'preserve-3d',
        },
        '.backface-hidden':{
          'backface-visibility':'hidden',
        },
        '.rotate-y-180':{
          transform:'rotateY(180deg)',
        },
        '.perspective-1000':{
          perspective:'1000px',
        },
      })
    }
  ],
}
