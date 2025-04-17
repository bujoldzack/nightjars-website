/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['"Anton"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        customPrimary: '#121212',
        customSecondary: '#E6E4DF',
        customAccent: '#7E3942',
        customAltAccent: '#4A2E3F',
      },
      boxShadow: {
        subtle: '0 0 2px rgba(255,255,255,0.05)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      }
    }
  },
  plugins: [],
};
