/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-pastel": "#C8E2BC",
        "salmon-pastel": "#FAA290",
        "lavender-pastel": "#B7AFFF",
        "red-pastel": "#FF6961",
      },
    },
  },
  plugins: [],
}

