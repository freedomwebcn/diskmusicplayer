/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  corePlugins: {
    preflight: false // 禁用tailwind默认样式
  },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.mask-image': {
          mask: 'linear-gradient(90deg, transparent 0, #000 6px, #000 calc(100% - 12px), transparent)'
        }
      });
    })
  ]
};

