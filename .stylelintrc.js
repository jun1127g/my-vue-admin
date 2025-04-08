module.exports = {
    extends: [
      'stylelint-config-standard',
      'stylelint-config-prettier',
      'stylelint-config-recommended-vue',
    ],
    rules: {
      'selector-pseudo-class-no-unknown': [
        true,
        {
          ignorePseudoClasses: ['deep', 'global'],
        },
      ],
      'selector-pseudo-element-no-unknown': [
        true,
        {
          ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
        },
      ],
    },
  }
  