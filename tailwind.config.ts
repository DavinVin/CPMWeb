/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#17176b',
          dark:    '#0e0e4a',
          mid:     '#1c1c7a',
          light:   '#22228a',
        },
        gold: {
          DEFAULT: '#f5a623',
          dark:    '#d4891a',
        },
        'off-white': '#f5f6fb',
        'text-muted': '#555555',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        opensans:   ['var(--font-opensans)',   'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        'card-lg': '18px',
      },
    },
  },
  plugins: [],
}
