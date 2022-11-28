# @utopia/eslint-config-base

该包提供基础版本 js 相关的 eslint 配置，内置规则基于 [eslint-config-airbnb][eslint-config-airbnb]，也可根据个人（团队）规范增加或者重写相关 rules。

### Install
``` sh
npm install --save-dev @utopia/eslint-config-base
# or 
yarn add -D @utopia/eslint-config-base
```

### Usage
在 .eslintrc.* 文件中配置：
``` js
module.exports = {
  extends: ['@utopia/eslint-config-base'],
};


[eslint-config-airbnb]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base