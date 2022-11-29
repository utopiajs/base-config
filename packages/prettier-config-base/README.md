# @utopia/prettier-config-base

该包提供 Prettier 相关配置，也可根据个人（团队）规范增加或者重写相关 option。

### Install
``` sh
npm install --save-dev @utopia/prettier-config-base
# or 
yarn add -D @utopia/prettier-config-base
```

### Usage
在 .prettier.js 文件中配置：

```
module.exports = {
  ...require('@utopia/prettier-config-base'),
};

```