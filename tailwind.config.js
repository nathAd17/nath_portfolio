/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu'],
        poppins: ['Poppins'],
        roboto: ['Roboto']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}