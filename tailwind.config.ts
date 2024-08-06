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
      },
      colors: {
        GrayishBlue: "hsl(237, 18%, 59%)",
        SoftRed: "hsl(345, 95%, 68%)",
        DarkDesaturatedBlue: "hsl(236, 21%, 26%)",
        DarkBlue: "hsl(235, 16%, 14%)",
        VeryDarkBlue: "hsl(234, 17%, 12%)",
      },
    },
  },
  plugins: [],
};
export default config;
