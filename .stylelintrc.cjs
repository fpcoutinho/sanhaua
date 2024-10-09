module.exports = {
  extends: ['stylelint-config-standard-scss'],
  overrides: [
    {
      files: ['**/*.scss'],
      processor: 'postcss-scss'
    }
  ],
  rules: {
    'no-descending-specificity': null,
    'scss/load-no-partial-leading-underscore': true,
    'scss/at-import-no-partial-leading-underscore': null,
    'scss/no-global-function-names': null
  }
}
