/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#008080",
            },
            backgroundImage: {
                circularLight: "repeating-radial-gradient(rgba(0,0,0,0.4),2px,#ffffff 5px,#ffffff 100px)",
                circularMobileLight: "repeating-radial-gradient(rgba(0,0,0,0.4),2px,#ffffff 5px,#ffffff 50px)",
            },
            screens: {
                xs: "400px",
            },
        },
    },
    plugins: [],
};
