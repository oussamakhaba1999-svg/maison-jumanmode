/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F4',
        sand: '#E7D9C5',
        nude: '#D7C4AE',
        gold: {
          DEFAULT: '#C9A96E',
          light: '#DFC28E',
          dark: '#A88A52',
        },
        cocoa: {
          DEFAULT: '#1E1A16',
          soft: '#3A342C',
          muted: '#6B635A',
        },
        blush: '#F3EAE4',
        surface: '#FFFFFF',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.7rem', { lineHeight: '1.2' }],
      },
      boxShadow: {
        soft: '0 20px 50px rgba(30, 26, 22, 0.10)',
        card: '0 8px 28px rgba(30, 26, 22, 0.08)',
        'card-hover': '0 18px 45px rgba(30, 26, 22, 0.14)',
        drawer: '-4px 0 40px rgba(30, 26, 22, 0.12)',
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at 18% 18%, rgba(201,169,110,0.28), transparent 45%), linear-gradient(140deg, #ffffff 6%, #faf8f4 52%, #efe5d7 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(201,169,110,0.15), transparent)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.9s linear infinite',
        'fade-up': 'fade-up 0.5s ease forwards',
        'scale-in': 'scale-in 0.4s ease forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
