module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript', 'prettier', 'prettier/@typescript-eslint'],
  parserOptions: {
    project: 'tsconfig.json',
  },
  rules: { 'react/jsx-uses-react': 'off', 'react/react-in-jsx-scope': 'off' },
};
