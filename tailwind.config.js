/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#001220',
                wave: {
                    100: '#FA7268',
                    200: '#C62368',
                    300: '#ef5f67',
                    400: '#e34c67',
                    500: '#d53867',
                },
            },
        },
    },
    plugins: [],
}
