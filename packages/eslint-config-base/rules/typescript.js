const allExtensions = ['.ts', '.tsx', '.js', '.jsx'];

module.exports = {
  extends: ['plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      files: ['**/*.{ts,tsx}']
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
  },

  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/named': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  }
};
