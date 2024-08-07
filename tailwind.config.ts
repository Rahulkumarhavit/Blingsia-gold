import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '6xl': ['60px', '50px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        kalam: ["Kalam", "cursive"],
        oswald: ["Oswald", "sans-serif"],
        roboto: ["Roboto","sans-serif"]
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "wide": "1440px"
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 15s linear infinite',
        'infinite-middle-scroll': 'infinite-middle-scroll 25s linear infinite',
        'infinite-negative': 'infinite-negative 40s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-negative': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' }
        },
        'infinite-middle-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        }
      },
    },
  },
  plugins: [],
};
export default config;
