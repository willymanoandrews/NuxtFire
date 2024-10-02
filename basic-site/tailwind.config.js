module.exports = {
  darkMode: "class", // Enable dark mode based on user preference
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}", // Added Flowbite path
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
