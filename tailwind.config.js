/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0071e3', // Apple blue
          foreground: '#ffffff',
          50: '#e6f2ff',
          100: '#cce5ff',
          200: '#99cbff',
          300: '#66b0ff',
          400: '#3396ff',
          500: '#0071e3',
          600: '#005bb6',
          700: '#004489',
          800: '#002e5c',
          900: '#00172f',
        },
        secondary: {
          DEFAULT: '#f5f5f7', // Apple light gray
          foreground: '#1d1d1f', // Apple dark text
        },
        background: '#ffffff',
        foreground: '#1d1d1f',
        muted: {
          DEFAULT: '#f5f5f7',
          foreground: '#86868b', // Apple secondary text
        },
        border: '#d2d2d7', // Apple border color
        success: '#34c759', // Apple green
        warning: '#ff9500', // Apple orange
        error: '#ff3b30', // Apple red
      },
      borderRadius: {
        'apple': '12px', // Apple's typical rounded corners
        'xl': '16px',
        '2xl': '20px',
      },
      boxShadow: {
        'apple': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'apple-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'card': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 30px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} 