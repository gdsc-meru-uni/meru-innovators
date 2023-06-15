/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('./src/assets/images/group-2.jpg')"
      },
      container: {
        center: true
      }
    },
    colors: {
      yellow: '#fddd17',
      green: '#06a77d',
      blue: '#177fb8',
      grey: '#b6c9bb',
      white: '#f8f9fa',
      maroon: '#e51368',
      dark: '#01161e'
    }
  }
};
