/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#0060E6',
        'hover-primary': '#1E7CFF',
        'text-primary': '#333333',
        'text-secondary': '#666666',
        'text-muted': '#999999',
      },
    },
  },
  plugins: [],
}
