/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin'

const variants = plugin(({ addVariant }) => {
  addVariant('not-first', '&:not(:first-child)')
  addVariant('not-last', '&:not(:last-child)')
})

module.exports = {
  content: [
    './content/**/*.mdx',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sand': {
          '1': '#fdfdfc',
          '2': '#f9f9f8',
          '3': '#f1f0ef',
          '4': '#e9e8e6',
          '5': '#e2e1de',
          '6': '#dad9d6',
          '7': '#cfceca',
          '8': '#bcbbb5',
          '9': '#8d8d86',
          '10': '#82827c',
          '11': '#63635e',
          '12': '#21201c',
        },
        'sand-dark': {
          '1': '#111110',
          '2': '#191918',
          '3': '#222221',
          '4': '#2a2a28',
          '5': '#31312e',
          '6': '#3b3a37',
          '7': '#494844',
          '8': '#62605b',
          '9': '#6f6d66',
          '10': '#7c7b74',
          '11': '#b5b3ad',
          '12': '#eeeeec',
        }
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      fontFamily: {
        sans: ['soehne', 'sans-serif'],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    variants,
    require('@tailwindcss/typography')
  ],
}
