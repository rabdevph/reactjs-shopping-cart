/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        opensans: 'Open Sans',
        inter: 'Inter',
        rubik: 'Rubik',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      height: {
        'custom-svh': 'calc(100svh - 64px)',
      },
      minHeight: {
        cmh: 'calc(100svh - 64px)', // 100svh - header height
      },
      boxShadow: {
        cms: '5px 0 10px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'slide-in': 'slide-in 0.3s ease-in-out',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' }, // Start from left
          '100%': { transform: 'translateX(0)' }, // End at the original position
        },
      },
    },
  },
  plugins: [],
};
