/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],

  theme: {
    extend: {
      screens: {
        // default is min-width
        mobile: { max: "601px" },

        tablet: "600px",

        desktop: "1200px",
      },
    },
  },
  plugins: [],
};
