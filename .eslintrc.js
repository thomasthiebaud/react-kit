module.exports = {
  extends: [
    'standard',
    'standard-react',
  ],
  env: {
    browser: true,
    jest: true,
  },
  plugins: [
    'standard',
    'promise',
  ],
  globals: {
    __DEV__: true,
    __PROD__: true,
    __TEST__: true,
  },
  rules: {
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'prefer-promise-reject-errors': ["error", {"allowEmptyReject": true}]
  }
};
