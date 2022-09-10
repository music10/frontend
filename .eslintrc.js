module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'react-hooks'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': 'warn',
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
      },
    },
  ],
};
