# @utopia/eslint-config-vue

该包提供 vue 相关的 eslint 配置，内置包含 [@utopia/eslint-config-base][@utopia/eslint-config-base-url] 以及 [@utopia/eslint-config-base][eslint-plugin-vue-url]，也可根据个人（团队）规范增加或者重写相关 rules。

**tip**：内置支持的 vue 版本为 3.x 。

### Install
``` sh
npm install --save-dev @utopia/eslint-config-vue
# or 
yarn add -D @utopia/eslint-config-vue
```

### Usage
在 .eslintrc.* 文件中配置：

``` js
module.exports = {
  extends: ['@utopia/eslint-config-vue'],
};

```

[@utopia/eslint-config-base-url]: https://github.com/utopiajs/base-config/tree/main/packages/eslint-config-base
[eslint-plugin-vue-url]: https://github.com/vuejs/eslint-plugin-vue