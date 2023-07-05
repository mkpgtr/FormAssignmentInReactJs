/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens:{
      'sm': {'max': '767px'},
      'md': {'max': '922px'},
      'md': {'max': '1130px'},
      
    },
    extend: {},
  },
  plugins: [],
}

