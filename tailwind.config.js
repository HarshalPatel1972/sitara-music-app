/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        surface: "#0f172a",
        primary: "#8b5cf6",
        secondary: "#ec4899",
        accent: {
          DEFAULT: "#38bdf8",
          glow: "#06b6d4",
        },
        muted: "#64748b",
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
      }

    },
  },
  plugins: [],
};
