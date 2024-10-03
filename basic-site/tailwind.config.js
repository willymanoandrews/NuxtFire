// This is the Tailwind CSS configuration file for your Nuxt 3 project.
// It defines the paths where Tailwind should look for class usage,
// enables dark mode based on user preference, and includes the Flowbite plugin.
// You can extend the theme and add custom configurations as needed.

// tailwind.config.js
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
