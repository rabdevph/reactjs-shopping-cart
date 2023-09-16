/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        opensans: ['Open_Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      height: {
        'custom-svh': 'calc(100svh - 64px)',
      },
      minHeight: {
        cmh: 'calc(100dvh - 64px)', // 100svh - header height
      },
      boxShadow: {
        cms: '5px 0 10px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'slide-in': 'slide-in 0.3s ease-in-out',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' }, // start from left
          '100%': { transform: 'translateX(0)' }, // end at the original position
        },
      },
      gridTemplateColumns: {
        shopmd: 'repeat(auto-fill, minmax(260px, 1fr))', // shop grid - md viewport
        shop: 'repeat(auto-fill, minmax(120px, 1fr))', // shop grid
      },
    },
  },
  plugins: [],
};
