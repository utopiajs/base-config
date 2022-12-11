module.exports = {
  extends: ['@utopia/eslint-config-base', './rules/vue'].map(require.resolve)
};
