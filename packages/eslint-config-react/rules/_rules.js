module.exports = {
  rules: {
    // override default rules
    // React
    'react/react-in-jsx-scope': 0,
    'react/jsx-fragments': 0,
    'react/jsx-props-no-spreading': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react/no-danger': 0,
    'react/require-default-props': 'off',
    // React a11y
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0
  }
};
