module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/_rules',
    './rules/typescript'
  ].map(require.resolve)
};
