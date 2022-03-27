module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1rem',
                md: '2rem',
                lg: '8rem',
            },
        },
        fontFamily: {
            heading: ["'Reem Kufi'", 'sans-serif'],
        },
        extend: {
            colors: {
                'hiit-black': '#232323',
                'hiit-gradient-grey': '#2A2830',
                'hiit-gradient-purple': '#1B0E28',
            },
            backgroundImage: {
                'hero-background':
                    "linear-gradient(to left bottom, rgb(42, 40, 48, 0.6), rgb(37, 30, 57, 0.6)), url('/images/hero-background.jpg')",
            },
        },
    },
    plugins: [require('tailwind-container-break-out')],
};
