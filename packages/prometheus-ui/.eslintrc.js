module.exports = {
  parser: 'babel-eslint',
  extends: 'standard',
  env: {
    browser: true,
    node: true,
    es6: true,
    jquery: true
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'no-unused-vars': 1,
    'space-before-function-paren': 0,
    indent: 0,
    semi: 0,
    'generator-star-spacing': 0
  }
}
