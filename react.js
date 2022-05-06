/* eslint-disable spellcheck/spell-checker */

module.exports = {
  extends: ['airbnb', 'airbnb/hooks'],
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // When used appropriately, nested ternary operator does not hurt readability.
    'no-nested-ternary': 'off',

    // Don't need defaultProps or prop-types in typescript.
    'react/require-default-props': 'off',
    'react/prop-types': 'off',

    // Allow props spreading.
    'react/jsx-props-no-spreading': 'off',

    // Should use jsx or tsx extension for files with react component.
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],

    // <div /> tag can have onClick handler without keyboard event. It hurts accessibility, but for producivity's sake.
    'jsx-a11y/click-events-have-key-events': 'off',

    // <label /> tag should include control related tags. See https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md#case-my-label-and-input-components-are-custom-components for custom components.
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'either',
        depth: 25,
      },
    ],

    // Since jsx transform changes, `import React from 'react'` is not required for jsx/tsx files.
    // Also, it's annoying that importing hooks with `import { useState }` every time we need it. (it's easy too forget when removed)
    // We prefer just using React.useState, but default import of React will be deprecated in the long term.
    // Thus, we use namespace import instead: `import * as React from 'react'`.
    // See https://epicreact.dev/importing-react-through-the-ages/ for more information.
    // The following rule is from https://github.com/eslint/eslint/issues/13874#issuecomment-732541670.
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "ImportDeclaration[source.value='react'] > :matches(ImportSpecifier, ImportDefaultSpecifier)",
        message: "Please use `import * as React from 'react'` instead.",
      },
    ],
    'react/react-in-jsx-scope': 'off',

    // Although controversial, let's use function for React component instead of arrow function.
    // It's beneficial in several reasons:
    // - it allows `export default function Component() {}` which has less duplication than const Component = () => {}; export default Component
    // - it allows hoisting so that components declarations can be anywhere
    // - it forces consistent use of return statement. When used arrow without return it seems coincise, but it required a lot of diff when hooks are needed. So it's better to use return from the first place.
    // However, allow unnamed components to be written in arrow function (which is commonly used as callbacks or return value).
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],

    // Sometimes some props can intentionally have same name with different cases(e.g., InputProps and inputProps in material-ui).
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],

    // When used properly, these rather improve readability.
    'no-unused-expressions': [
      'error',
      {
        allowTaggedTemplates: true,
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
  },
};
