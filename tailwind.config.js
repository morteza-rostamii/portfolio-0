/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      /* blob animation */
      animation: {
        blob: 'blob 6s infinite',
      },
      /* translate(0px, 0px) */
      keyframes: {
        blob: {
          '0%': {
            transform: ' scale(1)',
          },

          '33%': {
            transform: ' scale(1.08)',
          },

          '66%': {
            transform: ' scale(0.98)',
          },

          '100%': {
            transform: ' scale(1)',
          },
        }
      },
    },
  },
  plugins: [],
}

