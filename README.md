# @xl8-ai/eslint-config

## Installation

```sh
$ npm install --save-dev @xl8-ai/eslint-config
```

or

```sh
$ yarn add -D @xl8-ai/eslint-config
```

## How to use

```js
module.exports = {
  extends: '@xl8-ai',
};
```

Or, extend only needed rules.

```js
module.exports = {
  extends: [
    '@xl8-ai/eslint-config/react',
    '@xl8-ai/eslint-config/typescript',
    '@xl8-ai/eslint-config/consistency',
    '@xl8-ai/eslint-config/import',
    '@xl8-ai/eslint-config/prettier',
  ],
};
```
