/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg) scale(1.05)' },
          '50%': { transform: 'rotate(3deg) scale(1.05)' },
        }
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out',
      }
    },
  },
  plugins: [],
} 