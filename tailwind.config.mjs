/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        hagens: {
          bg:           '#151515',
          card:         '#0a0a0a',
          'card-hover': '#111111',
          border:       'rgba(255,255,255,0.10)',
          magenta:      '#E6007E',
          'magenta-dim':'rgba(230,0,126,0.15)',
          cyan:         '#00BCD4',
          'cyan-dim':   'rgba(0,188,212,0.15)',
          green:        '#00E676',
          orange:       '#fc6423',
          muted:        '#b3b3b3',
        },
      },
      backgroundImage: {
        'magenta-glow': 'radial-gradient(circle at 30% 50%, rgba(230,0,126,0.12) 0%, transparent 60%)',
        'cyan-glow':    'radial-gradient(circle at 70% 50%, rgba(0,188,212,0.10) 0%, transparent 60%)',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
