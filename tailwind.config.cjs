module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#FCF390",
        "gray-50": "#ECEFF4",
        "gray-100": "#D3DCE6",
        "gray-500": "#4A5568",
        "primary-100": "#8BD8BD",
        "primary-300": "#62BBA5",
        "primary-500": "#182441",
        "secondary-400": "#F29191",
        "secondary-500": "#D23F57",
      },
      backgroundImage: (theme) => ({
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        optimumtext: "url('@/assets/optimumText.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
