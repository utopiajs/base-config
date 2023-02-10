module.exports = {
  extends: [
    '@utopia/eslint-config-base',
    './rules/react',
    './rules/react-a11y',
    './rules/_rules'
  ].map(require.resolve)
};
