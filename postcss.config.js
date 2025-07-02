// postcss.config.js (Corrected)
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // <--- CHANGED THIS LINE
    autoprefixer: {},
  },
};