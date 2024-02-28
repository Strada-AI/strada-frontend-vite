import tailwindcss from "tailwindcss";
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js"
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [tailwindcss(), nextui()],
};

