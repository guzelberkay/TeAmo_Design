/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f7f4',
          100: '#f1eee7',
          200: '#e6e0d4',
          300: '#d5c9b5',
          400: '#c2ad91',
          500: '#b29274',
          600: '#a47e5f',
          700: '#8b6950',
          800: '#745646',
          900: '#61483c',
          950: '#33241e',
        },
        accent: {
          50: '#fdf7f5',
          100: '#fbede9',
          200: '#f7d9d2',
          300: '#f1bbad',
          400: '#e89380',
          500: '#de7358',
          600: '#cb5337',
          700: '#aa422b',
          800: '#8c3927',
          900: '#733424',
          950: '#3d1911',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
    },
  },
  plugins: [],
};