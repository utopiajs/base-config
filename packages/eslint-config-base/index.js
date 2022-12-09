module.exports = {
  extends: ['eslint-config-airbnb-base', './rules/typescript'].map(require.resolve),
  rules: {},
};
