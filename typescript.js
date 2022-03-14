/* eslint-disable spellcheck/spell-checker */

module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint', 'import'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
      ],
      rules: {
        // Since function declaration is hoisted, you can use beforehand.
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false,
          },
        ],

        // If only type is imported, use type-only imports.
        '@typescript-eslint/consistent-type-imports': 'error',

        // With noImplicitAny, return type of a function don't need to be explicit. Take advantage of type inference as much as possible.
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        // Promise should be handled with async/await or then/catch. This behavior can be ignore with void operator.
        '@typescript-eslint/no-floating-promises': [
          'error',
          {
            ignoreVoid: true,
          },
        ],
        'no-void': [
          'error',
          {
            allowAsStatement: true,
          },
        ],

        // Prevent errors from eslint when using typescript Enum. See https://github.com/typescript-eslint/typescript-eslint/issues/2483.
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',

        // Allow no-null-assertion(!) for productivity.
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
  ],
};
