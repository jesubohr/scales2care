module.exports = {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '700px',
            lg: '976px',
            gx: '1024px',
            xl: '1440px',
        },
        extend: {
            colors: {
                'med-blue': '#0F67FF',
                'med-sky': '#00A8FF',
                'med-green': '#007C63'
            },
            fontFamily: {
                noto: ['Noto Sans', 'ui-sans-serif']
            }
        }
    },
    plugins: [],
};
