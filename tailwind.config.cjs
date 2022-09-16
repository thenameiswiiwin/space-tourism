/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      mobile: '375px',
      tablet: '768px',
      desktop: '1440px',
    },
    container: {
      center: true,
      padding: '2rem',
    },
    fontSize: {
      sm: ['14px', { lineHeight: '16.8px', letterSpacing: '2.36px' }],
      base: ['16px', { lineHeight: '19.2px', letterSpacing: '2.7px' }],
      md: ['18px', { lineHeight: '32px', letterSpacing: '0px' }],
      lg: ['24px', { lineHeight: '28.8px', letterSpacing: '0px' }],
      xl: ['28px', { lineHeight: '32.09px', letterSpacing: '0px' }],
      '2xl': ['32px', { lineHeight: '36.67px', letterSpacing: '0px' }],
      '3xl': ['56px', { lineHeight: '64.18px', letterSpacing: '0px' }],
      '4xl': ['100px', { lineHeight: '114.6px', letterSpacing: '0px' }],
      '5xl': ['150px', { lineHeight: '171.9px', letterSpacing: '0px' }],
    },
    fontFamily: {
      barlow: ['Barlow', 'sans-serif'],
      barlowCondensed: ['Barlow Condensed', 'sans-serif'],
      bellefair: ['Bellefair', 'serif'],
    },
    colors: {
      dark: 'hsl(var(--clr-dark) / <alpha-value>)',
      light: 'hsl(var(--clr-light) / <alpha-value>)',
      white: 'hsl(var(--clr-white) / <alpha-value>)',
    },
    extend: {},
  },
  plugins: [],
};
