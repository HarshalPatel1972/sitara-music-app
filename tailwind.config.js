/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#030712", // A very dark, near-black blue
        primary: "#1f2937", // A slightly lighter dark gray for surfaces
        secondary: "#374151", // A medium gray for borders/dividers
        accent: {
          DEFAULT: "#8b5cf6", // A vibrant violet for highlights
          hover: "#7c3aed", // A slightly darker violet for hover states
        },
        "text-primary": "#f9fafb", // Off-white for main text
        "text-secondary": "#9ca3af", // Gray for secondary text
      },
    },
  },
  plugins: [],
};
