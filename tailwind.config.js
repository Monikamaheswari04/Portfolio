/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        primary: "#6366F1", // Indigo-500
        secondary: "#8B5CF6", // Purple-500
        darkBg: "#0f0f11",
      },

      animation: {
        fadeIn: "fadeIn 1.2s ease-in-out",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(15px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },

      boxShadow: {
        soft: "0 8px 20px rgba(0,0,0,0.15)",
      },

      borderRadius: {
        xl2: "1.2rem",
      },
    },
  },
  plugins: [],
}
