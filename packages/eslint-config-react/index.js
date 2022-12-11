module.exports = {
  extends: ['@utopia/eslint-config-base', './rules/react', './rules/react-a11y'].map(require.resolve),
  rules: {
    // override default rules
    'react/jsx-props-no-spreading': 'off',
  },
};
