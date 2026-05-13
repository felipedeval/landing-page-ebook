/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f0e0d',
        paper: '#f4f1ec',
        brand: {
          red: '#d43a0a',
          'red-dim': '#7a2106',
        },
        mid: '#6b6460',
        line: '#e3dfd9',
        surface: '#edeae4',
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
