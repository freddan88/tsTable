import colors from "./app_tailwind/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: colors,
      },
    },
    boxShadow: {
      heavy: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
    },
  },
  plugins: [],
};
