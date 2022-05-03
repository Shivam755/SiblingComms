module.exports = {
  mode:'jit',
  content: [
    './assets/**/*.{css}',
    './components/**/*.{vue,js}',
    './components/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './pages/*.{vue,js}',
    './plugins/**/*.{ts,js}',
    './*.{vue,js,ts}'

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
