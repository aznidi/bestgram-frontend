module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      darkMode: 'class',
      colors: {
        primary: "#C957BC", // Purple from your palette
        secondary: "#FFC872", // Light Orange from your palette
        accent: "#FFE3B3", // Pale Yellow from your palette
        muted: "#E6CFA0", // Soft complementary beige tone
        dark: "#2D3436", // Dark Gray for contrast
        light: "#F5F5F5", // Light Gray for background
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
