module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2021,
    sourceType: "module"
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    // Пример: можно настроить под себя
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "no-console": "warn"
  }
};