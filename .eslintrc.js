module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  rules: {
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
    'prefer-promise-reject-errors': ['error', {'allowEmptyReject': true}],
    'react/jsx-filename-extension': ['error', {'extensions': ['.js', '.jsx']}],
    'semi': ['error', 'never'],
  },
};
