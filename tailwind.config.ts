import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1280px',
    },
    colors: {
      white: '#FFFFFF',
      gray: '#D9D9D9',
      orange: '#FF5757',
    },
    fontFamily: {
      serif: ['Inter', 'serif'],
    },
  },
  plugins: [],
};
export default config;
