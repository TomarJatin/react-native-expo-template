/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        main: '#E9B126',
        'primary-black': '#111',
        'secondary-black': '#2B2B2B',
        'text-secondary': '#686868',
        'text-white': '#FFFFFF',
      },
      fontFamily: {
        sans: [
          "PlusJakartaSans_400Regular",
          "PlusJakartaSans_300Light",
          "PlusJakartaSans_500Medium",
          "PlusJakartaSans_600SemiBold",
          "PlusJakartaSans_700Bold",
        ],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
