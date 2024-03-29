module.exports = {
  env: { es6: true, node: true },
  extends: 'eslint:recommended',
  parserOptions: { sourceType: 'module', ecmaVersion: 2019 },
  rules: {
    indent: ['error', 2, { "SwitchCase": 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': 0,
    strict: ['error', 'never'],
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'one-var-declaration-per-line': ['error', 'always'],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
    'quote-props': ['error', 'as-needed'],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', { asyncArrow: 'always', named: 'never', anonymous: 'never' }],
    'space-in-parens': ['error', 'never'],
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'no-confusing-arrow': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'template-curly-spacing': 'error',
    'no-await-in-loop': 'error',
    'no-extra-parens': 'error',
    'no-template-curly-in-string': 'error',
    'block-scoped-var': 'error',
    complexity: ['error', 10],
    curly: 'error',
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    eqeqeq: 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-new-wrappers': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-with': 'error',
    radix: ['error', 'as-needed'],
    'vars-on-top': 'error',
    yoda: 'error',
    'init-declarations': ['error', 'always'],
    'no-catch-shadow': 'error',
    'no-label-var': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-use-before-define': 'error',
    'callback-return': 'error',
    'handle-callback-err': 'error',
    'no-buffer-constructor': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-exit': 'error',
    'no-sync': 'error',
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'block-spacing': ['error', 'always'],
    'brace-style': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', {before: false, after: true}],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'self'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'func-names': ['error', 'as-needed'],
    'function-paren-newline': ['error', 'multiline'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'lines-between-class-members': ['error', 'always'],
    'max-depth': ['error', 4],
    'max-len': ['error', 120],
    'max-nested-callbacks': ['error', 4],
    'multiline-ternary': ['error', 'always-multiline'],
    'new-cap': 'error',
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-underscore-dangle': ["error", { "allowAfterThis": true }],
    'no-unneeded-ternary': 'error',
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak':["error", "after", { "overrides": { "?": "before", ":": "before" } }],
    'semi-spacing': 'error',
    'semi-style': ['error', 'last'],
    camelcase: ['error', { properties: 'never' }],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'max-statements-per-line': ['error', { max: 1 }],
    'no-param-reassign': ['error', { props: false }],
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-dupe-else-if': 'error',
    'no-setter-return': 'error',
  },
};
