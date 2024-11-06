module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scanning all JS/JSX/TS/TSX files for Tailwind classes
  ],
  theme: {
    extend: {
      keyframes: {
        'bounce-in': {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '80%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'bounce-in': 'bounce-in 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
