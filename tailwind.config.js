/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  prefix: "moz-",
  corePlugins: {
    preflight: false,
  },
  darkMode: ["class", 'html[class~="dark"]'],
  plugins: [require("tailwindcss")(), require("autoprefixer")()],
}

