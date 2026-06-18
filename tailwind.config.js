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
        background: "#030303",
        card: "rgba(10, 15, 30, 0.7)",
        cardBorder: "rgba(255, 255, 255, 0.08)",
        primary: {
          DEFAULT: "#0084FF", // Poster Vibrant Blue
          dark: "#0066CC",
          glow: "rgba(0, 132, 255, 0.25)",
        },
        secondary: {
          DEFAULT: "#0B61D8", // Logo Deep Blue
          dark: "#084aab",
          glow: "rgba(11, 97, 216, 0.25)",
        },
        accent: {
          DEFAULT: "#4F46E5", // Indigo
          pink: "#EC4899",
          orange: "#F97316",
        },
        dark: {
          900: "#030303",
          800: "#080b11",
          700: "#0f1420",
          600: "#182030",
          500: "#222d42",
          400: "#384762",
          300: "#718096",
        }
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-glow': '0 8px 32px 0 rgba(0, 132, 255, 0.15)',
        'neon-cyan': '0 0 15px rgba(0, 132, 255, 0.4)',
        'neon-blue': '0 0 15px rgba(11, 97, 216, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}
