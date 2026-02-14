/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.tsx", "./index.ts", "./app/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {}
    },
    plugins: []
};
