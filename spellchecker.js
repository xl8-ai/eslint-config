// https://www.npmjs.com/package/eslint-plugin-spellcheck
// Use for less typos.

module.exports = {
  plugins: ['spellcheck'],
  rules: {
    // Do not catch typos in comments and imports.
    'spellcheck/spell-checker': [
      'warn',
      {
        comments: false,
        ignoreRequire: true,
      },
    ],
  },
};
