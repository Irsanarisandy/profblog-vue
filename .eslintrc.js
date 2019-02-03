module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': ['warn', 2],
    'max-len': 'off',
    'no-undef': 'warn',
    'no-unused-vars': 'warn',
    'prefer-const': 'warn',
    'semi': ['error', 'always'],
    'space-before-function-paren': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
