/* eslint-disable spellcheck/spell-checker */

module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['simple-import-sort', 'import', 'import-name'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    // Packages should be imported as camelCase of the package name except react and clsx.
    'import-name/all-imports-name': [
      'error',
      {
        react: 'React',
        clsx: 'cx',
      },
    ],

    // import shoulde be at the top of document.
    'import/first': 'error',

    // After all imports, there should be a blank line.
    'import/newline-after-import': 'error',

    // Do not allow duplicate imports.
    'import/no-duplicates': 'error',

    // When importing, js/jsx/ts/tsx files should not write extensions, but json should write one.
    'import/extensions': [
      'error',
      {
        ignorePackages: true,
        pattern: {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
          json: 'always',
        },
      },
    ],

    // Although "import" plugin can force ordering, simple-import-sort plugin is better at grouped sort.
    'import/order': 'off',

    // Although this encourages using default export, there are some cases that it is not suitable (e.g., the developer expects it to be extended).
    'import/prefer-default-export': 'off',

    // Sort similar packages grouped together.
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports comes very first.
          ['^\\u0000'],
          // Packages. 'react' related packages come first.
          ['^react', '^\\w', '^@'],
          // Aliases imports.
          ['^~'],
          // Relative imports. Put same-folder imports first and parent imports last.
          ['^\\.', '^\\.\\.'],
          // SVG, json, style imports go last.
          ['^.+\\.svg$'],
          ['^.+\\.json$'],
          ['^.+\\.css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
};
