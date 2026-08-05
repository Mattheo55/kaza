/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "sn": "snpro-medium",
        "sn-bold": "snpro-bold"
      }
    },
  },
  plugins: [],
}

