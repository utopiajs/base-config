// config from vue3

module.exports = {
  extends: ['plugin:vue/vue3-recommended'],
  rules: {
    'vue/singleline-html-element-content-newline': [
      'off',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea',],
      },
    ],
  },
};
