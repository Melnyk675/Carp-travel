/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      mdOnly: { max: "767px" },
    },
    extend: {
      backgroundImage: {
        error: "url(/icons/error.svg)",
      },
   
    colors: {
      white: '#FFFFFF',
      gray: '#D9D9D9',
      orange: '#FF5757',
    },
    fontFamily: {
      serif: ['Inter', 'serif'],
      karantina: ["Karantina", "system-ui"],
    },
  },
  plugins: [],
}
};

