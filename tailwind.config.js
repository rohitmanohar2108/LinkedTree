// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Update this to point to your files
  ],
  theme: {
    extend: {
      animation: {
        gradient: 'gradient 8s ease infinite',
        pulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
