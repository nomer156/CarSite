// postcss.config.cjs
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},   // ← здесь используем именно этот плагин
    autoprefixer: {},
  },
}
