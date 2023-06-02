/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#363F1A',
                background: '#f1f1f1',
                sand: '#E0DECF',
                gra: '#706F6F',
            },
            fontFamily: {
                opensans: 'Open Sans',
            },
        },
    },
    plugins: [],
};
