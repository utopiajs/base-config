module.exports = {
  extends: ['eslint-config-airbnb-base', './rules/typescript'].map(require.resolve),
  rules: {
    'comma-dangle': ['error', { functions: 'never' }],
    'import/prefer-default-export': 'off',
    'operator-linebreak': 'off'
  },
};
