module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/typescript',
    './rules/_rules'
  ].map(require.resolve)
};
