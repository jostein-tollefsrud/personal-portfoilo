module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['"Courier Prime"', 'monospace'],
      heading: ['Barlow', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
    opacity: ['disabled'],
  },
  plugins: [],
};
