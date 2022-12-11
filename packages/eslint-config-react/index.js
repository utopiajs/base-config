module.exports = {
  extends: [
    '@utopia/eslint-config-base',
    './rules/react',
    './rules/react-a11y'
  ].map(require.resolve),
  rules: {
    // override default rules
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off'
  }
};
