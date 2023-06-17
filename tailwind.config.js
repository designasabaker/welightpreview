// /** @type {import('tailwindcss').Config} */
// export const content = [
//   "./src/**/*.{js,jsx,ts,tsx}",
// ];
// export const theme = {
//   extend: {
//     colors: {
//       brandBlue: '#47A8E5',
//       brandDeepBlue: '#133A7C',
//     },
//   },
// };
// export const plugins = [require('@tailwindcss/forms')];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
        brandBlue: '#47A8E5',
        brandDeepBlue: '#133A7C',
      }
    },
  },
  plugins: [],
}

