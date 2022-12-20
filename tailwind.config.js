/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FCB700",
          secondary: "#031424",
          accent: "#EEF1F4",
          neutral: "#FFFFFF",
          "base-100": "#E4E4E4",
          info: "#0070DC",
          success: "#00A046",
          warning: "#DF7E07",
          error: "#FA5C5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
