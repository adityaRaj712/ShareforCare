/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
        colors: {
          'glossy-black': '#0a0a0a', // Dark black with a glossy feel
        },
    },
  },
  plugins: [],
};
