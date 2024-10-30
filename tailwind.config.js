/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#27AE60",
        secondary: "#E3E3E1",
        darkPrimary: "#1E1E1E",
        darkSecondary: "#111111",
        danger: "#FF0000",
        dangerOpacity: "#FEF3F2",
        dangerOutline: "#FBDAD7",
        warning: "#F1C40F",
        warningOpacity: "#FFF7ED",
        warningOutline: "#FAE3C5",
        good: "#27AE60",
        goodOpacity: "#F4FBF6",
        goodOutline: "#D5EEDB",
        textSecondary: "#6C7278",
        notification: "#E74C3C",
        outlineLight: "#ECF0F1",
      },
    },
  },
  plugins: [],
};
