import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          hero: 'url("/images/bg-stars.svg"), url("/images/pattern-hills.svg"), linear-gradient(to bottom, hsl(251, 19%, 12%), hsl(268, 22%, 13%), hsl(271, 23%, 18%))',
        'corner-t':
          'radial-gradient(circle at 0 100%,hsl(234, 17%, 12%) 4px, hsl(240, 21%, 22%) 5px),radial-gradient(circle at 100% 100%,hsl(234, 17%, 12%) 4px, hsl(240, 21%, 22%) 5px)',
        'corner-t-md':
          'radial-gradient(circle at 0 100%,hsl(234, 17%, 12%) 6px, hsl(240, 21%, 22%) 7px),radial-gradient(circle at 100% 100%,hsl(234, 17%, 12%) 6px, hsl(240, 21%, 22%) 7px)',
        'corner-b':
          'radial-gradient(circle at 0 0,hsl(234, 17%, 12%) 4px, hsl(236, 21%, 26%) 5px),radial-gradient(circle at 100% 0,hsl(234, 17%, 12%) 4px, hsl(236, 21%, 26%) 5px)',
        'corner-b-md':
          'radial-gradient(circle at 0 0,hsl(234, 17%, 12%) 6px, hsl(236, 21%, 26%) 7px),radial-gradient(circle at 100% 0,hsl(234, 17%, 12%) 6px, hsl(236, 21%, 26%) 7px)',
      },
      colors: {
        indigo: {
          400: 'hsl(237, 18%, 59%)',
          700: 'hsl(236, 21%, 26%)',
          800: 'hsl(240, 21%, 22%)',
          850: 'hsl(235, 16%, 14%)',
          900: 'hsl(234, 17%, 12%)',
        },
        rose: {
          300: 'hsl(345, 95%, 68%)',
        },
        GrayishBlue: "hsl(237, 18%, 59%)",
        SoftRed: "hsl(345, 95%, 68%)",
        DarkDesaturatedBlue: "hsl(236, 21%, 26%)",
        DarkBlue: "hsl(235, 16%, 14%)",
        VeryDarkBlue: "hsl(234, 17%, 12%)",
      },
      keyframes: {
        flip: {
          '0%, 100%': { transform: 'rotateX(0)' },
          '50%': { transform: 'rotateX(-180deg)' },
        },
      },
      animation: {
        flip: 'flip 1s ease-in-out',
      },
      backgroundPosition: {
        hero: 'top center, bottom center',
        'corner-t': 'bottom left, bottom right',
        'corner-b': 'top left, top right',
      },
      backgroundSize: {
        'hero-size': '100% auto, 100% auto',
        'corner-size': '50% 100%',
      },
      width: {
        timer: '4.25rem',
        'timer-lg': '9.25rem',
      },
      height: {
        timer: '4rem',
        'timer-lg': '8.75rem',
      },
      boxShadow: {
        timer: '0 5px 2px hsl(234, 17%, 12%)',
        'timer-lg': '0 10px 2px hsl(234, 17%, 12%)',
      },
      screens: {
        xs: '375px',
      },
      borderRadius: {
        sm: '0.25rem',
      },
    },
  },
  plugins: [],
};
export default config;
