/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef9ec",
          100: "#faefcb",
          200: "#f5dd92",
          300: "#eec048",
          400: "#ecb033",
          500: "#e4911c",
          600: "#ca6e15",
          700: "#a84f15",
          800: "#893d17",
          900: "#713316",
          950: "#401908",
        },
        secondary: {
          50: "#f4f7fb",
          100: "#e8eff6",
          200: "#ccddeb",
          300: "#9fc2da",
          400: "#6ba1c5",
          500: "#4886af",
          600: "#33658a",
          700: "#2d5777",
          800: "#284a64",
          900: "#263f54",
          950: "#192938",
        },
        tertiary: {
          50: "#fef6ee",
          100: "#feead6",
          200: "#fbd2ad",
          300: "#f9b278",
          400: "#f58842",
          500: "#f26419",
          600: "#e34d13",
          700: "#bd3811",
          800: "#962e16",
          900: "#792915",
          950: "#411109",
        },
        "light-black": "#1E1E1E",
        "light-gray": "#B5B5B5",
      },
    },
  },
  plugins: [],
};
