# @utopia/eslint-config-react

该包提供 React 相关的 eslint 配置，内置包含 [@utopia/eslint-config-base][@utopia/eslint-config-base-url] 中提供的配置，同时支持 React 插件以及 Hooks 等，也可根据个人（团队）规范增加或者重写相关 rules。

### Install

```sh
npm install --save-dev @utopia/eslint-config-react
# or
yarn add -D @utopia/eslint-config-react
```

### Usage

在 .eslintrc.\* 文件中配置：

```js
module.exports = {
  extends: ['@utopia/eslint-config-react']
};
```

如果需要支持 Hooks

```js
module.exports = {
  extends: ['@utopia/eslint-config-react', '@utopia/eslint-config-react/hooks']
};
```

[@utopia/eslint-config-base-url]: https://github.com/utopiajs/base-config/tree/main/packages/eslint-config-base
