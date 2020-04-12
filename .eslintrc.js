module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "import/no-unresolved": ["off"],
    "import/order": "off",
    "react/jsx-filename-extension": "off",
    "import/extensions": "off",
    "no-unused-vars": "off",
    "linebreak-style": ["error", "unix"],
    "no-undef": "off",
    "react/prop-types": "off",
  },
};
