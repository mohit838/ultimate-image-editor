/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: '640px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      jostFont: ['Jost', 'sans-serif'],
    },
    fontSize: {
      primaryFont: [
        '1.125rem',
        {
          letterSpacing: '-0.02em',
          lineHeight: '1.2',
        },
      ],
    },
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/typography'),
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
    // eslint-disable-next-line no-undef
    require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/container-queries'),
  ],
};
