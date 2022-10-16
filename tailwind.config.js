/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'input-border': '#DFDFDF',
        'custom-bg': '#F8F8F8',
        'main-blue': '#0F4471',
        'blue-container': '#EEF5FF',
        'help-blue': '#093078',
      },
    },
  },
  plugins: [],
}
