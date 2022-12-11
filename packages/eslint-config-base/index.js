module.exports = {
  extends: ['eslint-config-airbnb-base', './rules/typescript'].map(require.resolve),
  rules: {
    // override default rules
    'comma-dangle': ['error', { functions: 'never' }],
    'import/prefer-default-export': 'off',
    'operator-linebreak': 'off',
    'max-len': 'off',
    'arrow-body-style': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always',
        ObjectPattern: {
          multiline: true,
        },
        ImportDeclaration: 'never',
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
      },
    ],
  },
};
