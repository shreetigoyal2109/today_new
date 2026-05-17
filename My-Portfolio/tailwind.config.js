/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          50: '#f7fbff',
          100: '#eef8ff',
          200: '#d6f0ff',
          300: '#bfe8ff',
          400: '#9fe0ff',
          500: '#7fd7ff',
          600: '#5fc0ea',
          700: '#3b99c7',
          800: '#2b6b92',
          900: '#183f5f',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        darkAccent: {
          50: '#f7fbff',
          100: '#eef8ff',
          200: '#d6f0ff',
          300: '#bfe8ff',
          400: '#9fe0ff',
          500: '#7fd7ff',
          600: '#5fc0ea',
          700: '#3b99c7',
          800: '#2b6b92',
          900: '#183f5f',
        },
      },
      
    },
  },
  plugins: [],
}
