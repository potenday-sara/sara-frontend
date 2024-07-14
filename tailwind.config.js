/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          kakao: '#fee500'
        },
        mara: {
          primary: '#EF2B00',
          '50%': '#F79580',
          '25%': '#FBCABF',
          secondary: '#FDEAE5',
        },
        primary:{
          '700': '#004A8F',
          '600': '#0062BD',
          '200': '#94CBFF',
          '100':'#C7E4FF',
          '50': '#E5F3FF',
        },
        secondary: {
          '700': '#8F1A00',
          '600': '#BD2200',
          '200': '#FFA794',
          '100': '#FFD1C7',
          '50': '#FFEAE5',
        },
        sara: {
          primary: '#007BED',
          '50%': '#80BDF6',
          '25%': '#BFDEFB',
          secondary: '#E5F2FD',
        },
        black: {
          '#333': '#333333',
          '#666': '#666666',
          '#999': '#999999',
          '#ccc': '#CCCCCC',
          '#ddd': '#dddddd',
          '#eee': '#EEEEEE',
          '#f4': '#F4F4F4',
          '#4242': '#424242',
        },
        gray : {
          '#ddd': '#dddddd',
          '#eaea': '#EAEAEA',
          '#f9f9': '#F9F9F9',
          '#f6f6': '#F6F6F6',
        },
        error: '#FF4040',
      },
    },
  },
  plugins: [],
};
