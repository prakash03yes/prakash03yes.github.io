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
      sm: "clamp(0.8rem, 0.08vw + 0.78rem, 0.84rem)",
      base: "clamp(1rem, 0.23vw + 0.94rem, 1.13rem)",
      md: "clamp(1.25rem, 0.45vw + 1.14rem, 1.5rem)",
      lg: "clamp(1.56rem, 0.79vw + 1.36rem, 2rem)",
      xl: "clamp(1.95rem, 1.29vw + 1.63rem, 2.66rem)",
      xxl: "clamp(2.44rem, 2.02vw + 1.94rem, 3.55rem)",
      xxxl: "clamp(3.05rem, 3.06vw + 2.29rem, 4.73rem)",
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
      },
      boxShadow: {
        elevation24bp: "0px 11px 15px 0px rgba(255, 255, 255, 0.20), 0px 9px 46px 0px rgba(255, 255, 255, 0.12), 0px 24px 38px 0px rgba(255, 255, 255, 0.14)",
        elevation16bp: "0px 8px 10px 0px rgba(255, 255, 255, 0.20), 0px 6px 30px 0px rgba(255, 255, 255, 0.12), 0px 16px 24px 0px rgba(255, 255, 255, 0.14)",
        elevation12bp: "0px 7px 8px 0px rgba(255, 255, 255, 0.20), 0px 5px 22px 0px rgba(255, 255, 255, 0.12), 0px 12px 17px 0px rgba(255, 255, 255, 0.14)",
        elevation08bp: "0px 5px 5px 0px rgba(255, 255, 255, 0.20), 0px 3px 14px 0px rgba(255, 255, 255, 0.12), 0px 8px 10px 0px rgba(255, 255, 255, 0.14)",
        elevation06bp: "0px 3px 5px 0px rgba(255, 255, 255, 0.20), 0px 1px 18px 0px rgba(255, 255, 255, 0.12), 0px 6px 10px 0px rgba(255, 255, 255, 0.14)",
        elevation04bp: "0px 2px 4px 0px rgba(255, 255, 255, 0.20), 0px 1px 10px 0px rgba(255, 255, 255, 0.12), 0px 4px 5px 0px rgba(255, 255, 255, 0.14)",
        elevation03bp: "0px 1px 8px 0px rgba(255, 255, 255, 0.20), 0px 3px 3px 0px rgba(255, 255, 255, 0.12), 0px 3px 4px 0px rgba(255, 255, 255, 0.14)",
        elevation02bp: "0px 1px 5px 0px rgba(255, 255, 255, 0.20), 0px 3px 1px 0px rgba(255, 255, 255, 0.12), 0px 2px 2px 0px rgba(255, 255, 255, 0.14)",
        elevation01bp: "0px 1px 3px 0px rgba(255, 255, 255, 0.20), 0px 2px 1px 0px rgba(255, 255, 255, 0.12), 0px 1px 1px 0px rgba(255, 255, 255, 0.14)",
        elevation00bp: "0px 4px 4px 0px rgba(255, 255, 255, 0.25)",
      }
    },
  },
  plugins: [],
}

