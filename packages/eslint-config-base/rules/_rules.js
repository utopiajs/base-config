module.exports = {
  rules: {
    // override default rules
    'no-underscore-dangle': 0,
    'object-curly-newline': 0,
    'comma-dangle': [
      'error',
      {
        functions: 'never'
      }
    ],
    'import/prefer-default-export': 'off',
    'operator-linebreak': 'off',
    'max-len': 'off',
    'arrow-body-style': 'off',
    'implicit-arrow-linebreak': 0,
    'global-require': 0,
    indent: 0
  },
  globals: {
    window: true,
    gtag: true
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true
  }
};
