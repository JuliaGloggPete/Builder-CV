/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        //"considBlue":  "#70113B",
        "considBlue": "#001a37",
        "considRed": "#70113B",

      }
    },
    fontFamily: {
      marcellus: ["Marcellus"],

    },
  },
  plugins: [],
};
