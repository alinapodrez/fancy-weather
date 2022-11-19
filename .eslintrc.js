module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-multiple-empty-lines': 0,
    'react/react-in-jsx-scope': 0,
    'template-curly-spacing': 0,
    'indent': 2,
    'react-hooks/exhaustive-deps': 0,
    'linebreak-style': 0,
  }
}
