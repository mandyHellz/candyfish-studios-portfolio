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
        '10.2vh': '5.8rem',
        '70vh': '39.8rem',
        '80vh': '45.5rem',
        '90vh': '51.1rem'
      },
      colors: {
        'bg-violet-300': 'rgb(196 181 253)',
        'bg-violet-400': 'rgb(167 139 250)',
        'bg-violet-500': 'rgb(139 92 246)',
        'bg-violet-600': 'rgb(124 58 237)',
        'bg-violet-700': 'rgb(109 40 217)',
        'bg-violet-800': 'rgb(91 33 182);',
        'bg-violet-900': 'rgb(76 29 149);',
      }
    },
    minHeight: {
      '10vh': '5.5rem',
      '80vh': '43rem',
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