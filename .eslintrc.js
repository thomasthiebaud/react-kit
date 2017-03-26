module.exports = {
  extends: [
    'standard',
    'standard-react',
  ],
  plugins: [
    'standard',
    'promise',
  ],
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
