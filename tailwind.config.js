/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        scaleIn: {
          "0%": {
            opacity: 0,
            transform: "scale(0.9)"
          },
          "50%": {
            opacity: 0.3
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)"
          }
        }
      },
      animation: {
        fade: "fade .5s ease-in-out",
        scaleIn: "scaleIn .2s ease-in-out",
        scaleOut: "scaleOut .2s ease-in-out"
      }
    }
  },
  plugins: []
};
