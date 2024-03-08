/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        DarkCyan: "hsl(158, 36%, 37%)",
        Cream: "hsl(30, 38%, 92%)",
        VeryDarkBlue: "hsl(212, 21%, 14%)",
        DarkGrayishBlue: "hsl(228,12%,48%)",
        White: "hsl(0,0%,100%)",
      },
      fontFamily: {
        Montserrat: "Montserrat, sans-serif",
        Fraunces: "Fraunces, serif",
      },
    },
  },
  plugins: [],
};
