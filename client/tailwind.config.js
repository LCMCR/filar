/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      extend: {
          fontFamily: {
              bodyFont: 'Poppins',
              titleFont: 'Nunito Sans',
          },
          keyframes: {
            fade: {
              '0%': { opacity: 0 },
              '100%': { opacity: 1 },
            }
          },
          animation: {
            fade: 'fade 1s ease-in-out',
          },
      },
  },
  variants: {},
  plugins: [],
};

