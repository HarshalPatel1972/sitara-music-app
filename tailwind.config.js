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
        'nebula-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #0f172a 100%)',
        'ethereal-glow': 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
};
