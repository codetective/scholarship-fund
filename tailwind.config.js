/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'mage':"url('./src/assets/images/scholar2.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

