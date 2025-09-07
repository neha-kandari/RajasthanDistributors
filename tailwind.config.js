/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "white": "#fff",
        "silver": {
          100: "#bfbfbf",
          200: "#c4c4c4",
          300: "#a8a8a8"
        },
        "firebrick": "#c50000",
        "gray": {
          100: "#2a2929",
          200: "#222",
          300: "#1b1b1b",
          400: "#595959"
        },
        "crimson": {
          100: "#ec1763",
          200: "#d11b1e",
          300: "#d21114",
          400: "rgba(197, 2, 72, 0.5)"
        },
        "darkgray": {
          100: "rgba(149, 149, 149, 0.38)",
          200: "#2c2c2c"
        },
        "dimgray": "#595959",
        "darkslategray": "#2f4f4f"
      },
      fontFamily: {
        "roboto": ["Roboto", "sans-serif"],
        "oxanium": ["Oxanium", "sans-serif"]
      }
    }
  },
  plugins: [],
}

