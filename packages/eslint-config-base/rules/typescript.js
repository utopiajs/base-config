const allExtensions = ['.ts', '.tsx', '.js', '.jsx'];

module.exports = {
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended']
    }
  ],
  settings: {
    'import/extensions': allExtensions,
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: allExtensions
      }
    }
  }
};
