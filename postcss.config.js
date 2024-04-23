let tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'), // Corrected path to Tailwind config
        require('postcss-import'),
        require('autoprefixer'),
    ]
};
