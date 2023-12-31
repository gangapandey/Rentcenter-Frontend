/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [import('@tailwindcss/aspect-ratio'), import('@tailwindcss/forms'),require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
}

