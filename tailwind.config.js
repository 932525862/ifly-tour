/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      mono:["Poppins", "system-ui"]
    },
    extend: {
      backdropBlur: {
        md: '10px',
      },
    },
  },
  variants: {
    backdropFilter: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}