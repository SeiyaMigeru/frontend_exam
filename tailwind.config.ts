import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        breuertextbold: ["var(--font-breuertextbold)"],
        breuerheadline: ["var(--font-breuerheadline)"],
        breuerfont: ["var(--font-breuerfont)"],
        zingrust: ["var(--font-zingrust)"],
      },
    },
  },
  plugins: [],
};
export default config;
