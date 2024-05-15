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
        mara: {
          primary: '#EF2B00',
          '50%': '#F79580',
          '25%': '#FBCABF',
          secondary: '#FDEAE5',
        },
        sara: {
          primary: '#007BED',
          '50%': '#808DF6',
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
        },
        error: '#FF4040',
      },
    },
  },
  plugins: [],
};
