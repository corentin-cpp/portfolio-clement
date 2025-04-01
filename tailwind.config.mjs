/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#000000',
        'dark-surface': '#1a1a1a',
        'accent': '#ffffff',
        'gray-light': '#f5f5f5',
        'gray-dark': '#333333',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 