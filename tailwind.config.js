module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // Blue
        secondary: "#1E293B", // Dark blue/slate
        accent: "#F59E0B",   // Amber
        dark: "#0F172A",     // Darker blue/slate
        light: "#F8FAFC",    // Light background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
