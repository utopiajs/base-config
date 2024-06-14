const allExtensions = ['.ts', '.tsx', '.js', '.jsx'];

module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['import'],
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  globals: {
    window: true,
    gtag: true,
    jsdom: true,
    JSX: true
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true
  },
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
    ],
    indent: 0
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: allExtensions
      }
    }
  }
};
