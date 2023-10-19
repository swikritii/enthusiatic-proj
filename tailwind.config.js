/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'phone': { 'max': '430px' },
        'phone-sm': '430px',
        'phone-wide': '480px',
        'phone-lg': '576px',
        'tablet': '768px',
        'phablet-max': {'max': '991px'},
        'phablet': '992px',
        'desktop-lg': '1024px',
        'desktop': '1200px',
        'desktop-md': '1440px',
        'desktop-wide': '1536px'
      },
      fontSize: {
        xs: ['13px', '140%'],
        sm: ['14px', '19px'],
        base: ['16px', '22px'],
        md: ['20px', '28px'],
        lg: ['24px', '32px'],
        xl: ['30px', '36.76px'],
        
        /* additional fonts */
        size15: ['15px', '22px'],
        size18: ['18px', '20px'],
        size32: ['32px', '41.76px'],
        size48: ['48px', '58px'],
        size60: ['60px', '80px'],
      },
      colors: {
        primary:{
          DEFAULT: '#333333',
          '100': '#07090dcc',
          '200': '#07090d4d',
        },
        secondary:{
          DEFAULT: '#FF1472',
        },
        enthuBlue:{
          DEFAULT: '#6300DF',
        },
        blue:{
          DEFAULT: '#1C64F2',
        },
        gray: {
          DEFAULT: '#111928',
          '100': '#F9FAFB',
          '200': '#E0E0E0',
          '300': '#D1D5DB',
          '400': '#D9D9D9',
          '500': '#979797',
          '600': '#717171',
          '700': '#E5E7EB',
          '800': '#B5B5B5',

        },
        black: {
          DEFAULT: '#333333',
          "100": ' #111928',
        },
        white:{
          DEFAULT: '#ffffff',
          '100': '#ffffff0d',
          '200': '#ffffff08',
        }
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '800': '800px',
        '18': '18px',
      },
      boxShadow:{
        'modal': 'var(--modal-boxShadow)',
      },
      maxWidth: {
        '43%': '43%',
        '24%': '24%',
        '19%': '19%',
        '85px': '85px',
      },
      flex: {
        '50%': '0 0 50%',
        '43%': '0 0 43%',
        '24%': '0 0 24%',
        '19%': '0 0 19%',
        '85px': '0 0 85px',
      },
      height: {
        'modal-height-desktop': 'var(--modal-height-desktop)',
        'modal-height-mobile': 'var(--modal-height-mobile)',
        'scrollable-modalbody-desktop-lg': 'var(--scrollable-modalbody-desktop-lg)',
        'scrollable-modalbody-tablet': 'var(--scrollable-modalbody-tablet)',
        'scrollable-modalbody-phablet': 'var(--scrollable-modalbody-phablet)',
        'scrollable-modalbody-mobile': 'var(--scrollable-body-height-mobile)',
      },
      width: {
        'modal-header-right': 'var(--modal-header-right)',
        'modal-width-desktop': 'var(--modal-width-desktop)',
        'modal-width-tablet': 'var(--modal-width-tablet)',
        'modal-width-mobile': 'var(--modal-width-mobile)',
        'modal-header-right-title-width': 'var(--modal-header-right-title-width)',
      },
      backgroundImage: {
        'noisy': "url('https://uploads-ssl.webflow.com/6468bfc04666ac41a5415865/6486ee0bb615abb2a4c20690_noise.webp')",
        'gradient-purplishWhite': 'linear-gradient(96deg, var(--tw-gradient-stops))',
        'gradient-purplishWhiteVar': 'var(--gradient-purplishWhiteVar)',
        'radial-blue-gradient-left': 'var(--radial-blue-gradient-left)',
        'linear-gradient-white': 'var(--linear-gradient-white)',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
  ],
}
