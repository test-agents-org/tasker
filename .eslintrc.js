/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ['apps/**', 'packages/**'],
  extends: ['eslint:recommended', 'prettier'],
  globals: {
    React: true,
    JSX: true,
  },
  parser: '@typescript-eslint/parser',
};
