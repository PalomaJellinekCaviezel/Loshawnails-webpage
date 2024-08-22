// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de que Tailwind esté buscando en tus archivos fuente
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#AEE2FF',
        hoverPink: '#FFEFEF',
        notWhite: '#fefaf9',
        pinkiest: '#F0A8D0',
        notBlack: '#1b1b1b',
      },
      height: {
        '50px': '50px',
      },
      fontSize: {
        'xxs': '0.63rem', // Ajusta el tamaño según tus necesidades
      },
    },
  },
  plugins: [],
}
