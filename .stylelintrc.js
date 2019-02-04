module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'color-hex-case': ['upper', { 'severity': 'warning' }],
    'declaration-no-important': [true, { 'severity': 'warning' }],
    'declaration-property-unit-blacklist': {
      'line-height': ['px', 'rem', 'em']
    },
    'indentation': [2, { 'severity': 'warning' }],
    'max-nesting-depth': [4, { 'severity': 'warning' }],
    'selector-max-id': [0, { 'severity': 'warning' }],
    'string-quotes': 'single',
    'scss/at-rule-no-unknown': true,
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/dollar-variable-colon-space-after': 'at-least-one-space',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/media-feature-value-dollar-variable': ['always', { 'severity': 'warning' }],
    'scss/no-duplicate-dollar-variables': true,
    'scss/selector-no-redundant-nesting-selector': true
  }
};
