/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                monter: "Montserrat', sans-serif",
                bebas: "'Bebas Neue', cursive",
            },
        },
    },
    plugins: [],
};
