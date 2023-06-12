/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'ape-cream': '#FFF9E2',
        'ape-orange': '#F16122',
        'ape-forest': '#182916',
      },
      fontFamily: {
        cabin: ['Cabin'],
      }
    },
  },
  plugins: [],
}

