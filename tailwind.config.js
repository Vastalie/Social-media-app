/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        'text': '#f3dee3',
        'background': '#120709',
        'primary': '#d895a3',
        'secondary': '#82612f',
        'accent': '#c6b061',
        'googleBlue': '#4285F4',
      },
      fontFamily: {
        body: ["Poppins"]
      },
    },
  },
  plugins: [],
}

