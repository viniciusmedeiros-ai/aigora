/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: '#6366F1',
          'indigo-light': '#818CF8',
          cyan: '#0EA5E9',
          'cyan-light': '#38BDF8',
        },
        surface: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #6366F1 0%, #0EA5E9 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(14,165,233,0.15) 100%)',
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
