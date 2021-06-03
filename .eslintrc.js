module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: ["plugin:prettier/recommended", "plugin:react/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },

  rules: {
    "max-len": ["error", { code: 120 }],
    "react/prop-types": "off",
  },
  settings: {
    jest: {
      version: 26,
    },
  },
  overrides: [
    {
      files: ["webpack.config.js"],
    },
  ],
};
