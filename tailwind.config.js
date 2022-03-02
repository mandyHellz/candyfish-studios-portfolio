module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Satisfy: ['Satisfy', 'cursive', 'sans-serif'],
        Yellowtail: ['Yellowtail', 'cursive', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      height: {
        // 70vh
        '100': '39.8rem',
        // 80vh
        '105': '45.5rem',
        // 90vh
        '110': '51.1rem'
      }
    },
    minHeight: {
      '90': '51.1rem',
    },
    minWidth: {
      xs: '375px',
      sm: '640px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}