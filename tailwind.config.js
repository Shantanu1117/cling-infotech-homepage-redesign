/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A0F1C',     // Very dark blue/black background
          primary: '#1E40AF',  // Royal blue
          accent: '#3B82F6',   // Bright blue accent
          light: '#F8FAFC',    // Slate light
          gray: '#94A3B8',     // Slate gray text
          border: '#1E293B',   // Dark border
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #1E40AF33 0deg, #3B82F633 180deg, transparent 360deg)',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        gradient: 'gradient 6s ease infinite',
        shimmer: 'shimmer 1.5s infinite'
      }
    },
  },
  plugins: [],
}
