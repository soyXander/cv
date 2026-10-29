// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  tailwindStylesheet: "./src/styles/global.css",
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-astro-organize-imports",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
