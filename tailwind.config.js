module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      darkMode: 'class',
      colors: {
        primary: "#752092", // Orange
        secondary: "#C957BC", // Navy
        accent: "#FFC872", // Darker Navy
        muted: "#FFE3B3", // Soft Blue
        dark: "#2D3436", // Dark Gray
        light: "#F5F5F5", // Light Gray
        success: "#55EFC4",
        warning: "#FDCB6E",
        error: "#FF7675",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
