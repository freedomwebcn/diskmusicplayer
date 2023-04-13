/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // 禁用tailwind默认样式
  },
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
