module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#3C3C3C',
        white: '#FFFFFF'
      },
      fontFamily: {
        serif: ['Libre Baskerville, serif'],
        sans: ['Helvetica, sans-serif']
      },
      fontSize: {
        body: ['16px', '24px'],
        h1: ['36px', '36px'],
        h2: ['24px', '24px'],
        h3: ['24px', '30px'],
        h4: ['18px', '24px']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
