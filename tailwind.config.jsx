/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/download.jpg')",
      },
      height: {
        146: '36.5rem',
      },
    },
  },
  plugins: [],
}