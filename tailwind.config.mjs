/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        kiber: {
          dark: '#0B1530',
          deep: '#142353',
          blue: '#1E40AF',
          accent: '#3DDC97',
          lime: '#C6F432',
          sand: '#F7F4EF',
          ink: '#1A1F36',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '72ch',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
