/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: '#47A8E5',
        brandDeepBlue: '#133A7C',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
  // plugins: [
  //     require("daisyui"),
  //   require('@tailwindcss/forms'),],
  // daisyui: {
  //   styled: true,
  //   themes: true,
  //   base: true,
  //   utils: true,
  //   logs: true,
  //   rtl: false,
  //   prefix: "",
  //   darkTheme: "night",
  // },
}
