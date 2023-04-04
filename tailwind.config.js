/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#9df2d1",
          "secondary": "#4bf24b",
          "accent": "#2e344e",
          "neutral": "#10121b",
          "pure": "#fff",
          "info": "#A2D4F1",
          "success": "#037fff",
          "warning": "#BA8003",
          "error": "#F57091",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}