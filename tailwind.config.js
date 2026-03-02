/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx,html}'],
  theme: {
    container: { center: true, padding: { DEFAULT: '1rem', lg: '2rem' } },
    extend: {
      colors: {
        brand: {
          cyan: '#00D4FF',
          blue: '#3B82F6',
        },
      },
      fontVariantNumeric: { tabular: 'tabular-nums' },
    },
  },
  plugins: [],
};
