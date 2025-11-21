/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Coffee Shop Theme Colors
        coffee: {
          brown: '#6F4E37',
          mocha: '#8B6F47',
          espresso: '#4A3225',
          caramel: '#D4A574',
          cream: '#E8C9A0',
        },
        // Original Reunion Theme Colors (preserved)
        primary: {
          50: '#FDF6F4',
          100: '#FAEAE4',
          200: '#F5D5C9',
          300: '#EEBDA9',
          400: '#E59C80',
          500: '#D87856',
          600: '#C05A3D',
          700: '#A04A32',
          800: '#804029',
          900: '#663424',
        },
        amber: {
          50: '#FFFBF0',
          100: '#FEF7E0',
          200: '#FDEFC1',
          300: '#FBE49D',
          400: '#F9D66D',
          500: '#F7C84F',
          600: '#E5A92D',
          700: '#C78B1F',
          800: '#A16D18',
          900: '#7D5514',
        },
        sage: {
          50: '#F6F8F5',
          100: '#EDF1EA',
          200: '#D8E3D2',
          300: '#BFD3B6',
          400: '#A0BE94',
          500: '#7FA76F',
          600: '#658856',
          700: '#506D45',
          800: '#405636',
          900: '#33432B',
        },
        blue: {
          50: '#F5F7F9',
          100: '#E8ECF1',
          200: '#D1DBE6',
          300: '#B3C4D8',
          400: '#8FA7C4',
          500: '#6B89AF',
          600: '#526A8C',
          700: '#415571',
          800: '#33445A',
          900: '#283647',
        },
        cream: {
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F5F1ED',
          300: '#EBE5DF',
          400: '#DED5CC',
          500: '#CFC3B8',
          600: '#B5A599',
          700: '#948579',
          800: '#726760',
          900: '#584F4A',
        },
        neutral: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        },
        heart: '#E63946',
        success: '#52B788',
        warning: '#F77F00',
        error: '#D00000',
      },
      fontFamily: {
        serif: ['Crimson Pro', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        handwritten: ['Dancing Script', 'cursive'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
      },
      spacing: {
        'emotional-sm': '4rem',
        'emotional-md': '6rem',
        'emotional-lg': '8rem',
        'emotional-xl': '10rem',
      },
      transitionTimingFunction: {
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'ease-in-out-soft': 'cubic-bezier(0.45, 0, 0.55, 1)',
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
