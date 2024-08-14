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
        notWhite: '#fafafa',
        pinkiest: '#F0A8D0',
        notBlack: '#1b1b1b',
      },
      height: {
        '50px': '50px',
      },
    },
  },
  plugins: [],
}
