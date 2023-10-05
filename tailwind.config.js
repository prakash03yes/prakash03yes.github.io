/** @type {import('tailwindcss').Config} */
import { Colors } from './src/_constants/colors.const';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: Colors,
    fontSize: {
      sm: "clamp(12.8px, 0.52vw + 10.72px, 24.01px)",
      base: "clamp(16px, 0.74vw + 13.04px, 32px)",
      md: "clamp(20px, 1.05vw + 15.8px, 42.66px)",
      lg: "clamp(25px, 1.48vw + 19.1px, 56.86px)",
      xl: "clamp(31.25px, 2.06vw + 23px, 75.79px)",
      xxl: "clamp(39.06px, 2.87vw + 27.59px, 101.03px)",
      xxxl: "clamp(48.83px, 3.97vw + 32.93px, 134.68px)",
    },
    fontWeight: {
      400: "400",
      500: "500",
      600: "600",
      700: "700",
    },
    extend: {
      borderRadius: {
        "50%": "50%",
        "10": "10px",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
      },
      keyframes: {
        appSpin: {
          '0%': { transform: 'rotate(0turn)' },
          '100%': { transform: 'rotate(1turn)' },
        }
      },
      animation: {
        appSpin: 'appSpin 1s ease infinite',
      }
    },
  },
  plugins: [],
}

