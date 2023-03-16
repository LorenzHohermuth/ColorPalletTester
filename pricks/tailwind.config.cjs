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
        },
    },
    plugins: [],
};
