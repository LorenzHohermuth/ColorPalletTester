/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgColor': 'var(--bgColor)',
        'secColor': 'var(--secColor)',
        'prColor': 'var(--prColor)',
        'textColor': 'var(--textColor)'
      },
    },
  },
  plugins: [],
}