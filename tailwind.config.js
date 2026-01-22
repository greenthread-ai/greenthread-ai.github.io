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
          primary: '#10b981',
          'primary-hover': '#059669',
          'primary-light': '#34d399',
          orange: '#ea580c',
          dark: '#0b0b0c',
          surface: '#161616',
          border: '#27272a',
        },
        beige: {
          50: '#fdfcfb',
          100: '#f8f6f2',
          200: '#f1ede5',
          300: '#e8e2d7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Crimson Pro"', 'serif'],
      },
      animation: {
        'float-1': 'float1 20s ease-in-out infinite',
        'float-2': 'float2 25s ease-in-out infinite',
        'float-3': 'float3 30s ease-in-out infinite',
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -30px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        float2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-40px, 30px) scale(1.08)' },
          '66%': { transform: 'translate(25px, -25px) scale(0.92)' },
        },
        float3: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '33%': { transform: 'translate(calc(-50% + 35px), calc(-50% + 35px)) scale(1.1)' },
          '66%': { transform: 'translate(calc(-50% - 30px), calc(-50% - 30px)) scale(0.9)' },
        },
      },
    },
  },
  plugins: [],
}
