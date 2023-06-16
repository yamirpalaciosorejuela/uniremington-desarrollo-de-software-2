/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'brand': '#F62F63',
        'darkest': '#070616',
        'dark': '#171435',
        'mid': '#8F8AC0',
        'gray-dark': '#273444',
        'light': '#D6D4E8',
        'lightest': '#FFFFFF',
      },
    },
  },
  plugins: [],
}

