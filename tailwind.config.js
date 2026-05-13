/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#e8edf5',
        paper: '#060c18',
        brand: {
          red: '#38bdf8',
          'red-dim': '#0284c7',
        },
        mid: '#7a8fa8',
        line: '#1a2a45',
        surface: '#0d1628',
        card: '#132039',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        brand: '3px',
      },
      letterSpacing: {
        tightest: '-.05em',
        tighter: '-.04em',
        tight: '-.035em',
      },
    },
  },
  plugins: [],
}
