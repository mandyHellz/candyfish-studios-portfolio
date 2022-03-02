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
        Lobster: ['Lobster', 'cursive', 'sans-serif'],
      },
      height: {
        '70vh': '39.8rem',
        '80vh': '45.5rem',
        '90vh': '51.1rem'
      }
    },
    minHeight: {
      '10vh': '5.5rem',
      '90vh': '51.1rem',
      '100vh': '57.3rem',
    },
    minWidth: {
      xs: '375px',
      sm: '640px',
    },
    maxWidth: {
      container: '1280px',
      menu: '1345px',
      page: '1920px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}