/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          500: '#0066ff',
          600: '#0052cc',
          900: '#002966',
        }
      }
    },
  },
  plugins: [],
}