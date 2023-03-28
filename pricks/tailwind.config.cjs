/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                bgPrimary: "var(--bgPrimary)",
                bgSecondary: "var(--bgSecondary)",
                textPrimary: "var(--textPrimary)",
                textSecondary: "var(--textSecondary)",
            },
            // Added +200px on every viewport because of sidebar (so it's still responsive)
            screens: {
                'sm': '840px',
                'md': '968px',
                'lg': '1224px',
                'xl': '1480px',
                '2xl': '1736px',
            }
        },
    },
    plugins: [],
};
