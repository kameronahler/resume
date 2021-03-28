module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Work Sans"', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-primary-light)',
        },
        bg: {
          DEFAULT: 'var(--color-bg)',
        },
        text: {
          DEFAULT: 'var(--color-text)',
          light: 'var(--color-text-light)',
        },
      },
      fontSize: {
        h1: '2.5rem',
        h2: '1.5rem',
        h3: '1.5rem',
        lead: '1.25rem',
      },
      maxWidth: {
        letter: '8.5in',
      },
      screens: {
        letter: '8.5in',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },

  variants: {
    extend: {
      margin: ['last'],
    },
  },
  plugins: [],
}
