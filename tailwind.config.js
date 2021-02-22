module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        light: {
          default: '#FFFFFF',
          light: '#F4F5F6',
        },
        success: {
          default: '#C1CF16',
        },
        dark: {
          default: '#0C0D0D',
          light: '#495D69',
          dark: '#1C2834',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
