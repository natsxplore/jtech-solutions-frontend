/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Orange at Black color scheme - Para sa branding
        primary: {
          DEFAULT: '#FF6B35', // Main orange color
          dark: '#E55A2B',
          light: '#FF8C5A',
        },
        dark: {
          DEFAULT: '#000000',
          light: '#1A1A1A',
          lighter: '#2A2A2A',
        },
      },
    },
  },
  plugins: [],
}
