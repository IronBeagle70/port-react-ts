/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'bg-general':'#222831',
      'color-text':'#eee',
      'color-border':'#ededed1a',
      'main-color-text':'#00adb5',
      'bg-second-btn': '#393e46b3'
    }
  },
  plugins: [],
}
