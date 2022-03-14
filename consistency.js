/* eslint-disable spellcheck/spell-checker */

module.exports = {
  rules: {
    // Keep consistent new lines for {}.
    'object-curly-newline': [
      'error',
      {
        consistent: true,
      },
    ],

    // All object properties should be either one per line, or all in one line.
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],

    // Keep consistent new lines for [].
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': ['error', 'consistent'],

    // Keep consistent new lines for functions.
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'consistent'],

    // Always add a comma at the end to mimize needless diff.
    'comma-dangle': ['error', 'always-multiline'],
  },
};
