/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '192': '48rem'
      },
      spacing: {
        '50vw': '50vw'
      }
    },
  },
  plugins: [],
}

