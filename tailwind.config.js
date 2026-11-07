/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#060608',
          900: '#0a0a0c',
          800: '#111116',
          700: '#1a1a22',
        },
        crimson: {
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          glow: 'rgba(220, 38, 38, 0.45)',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          glow: 'rgba(245, 158, 11, 0.4)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-crimson': '0 0 25px rgba(220, 38, 38, 0.35)',
        'glow-gold': '0 0 25px rgba(245, 158, 11, 0.35)',
        'glow-card': '0 8px 32px 0 rgba(0, 0, 0, 0.7), inset 0 0 0 1px rgba(220, 38, 38, 0.15)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
