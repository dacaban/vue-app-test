// .prettierrc.js
module.exports = {
  printWidth: 160,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  arrowParens: 'always',
  overrides: [
    {
      files: ['*.css', '*.scss'],
      options: {
        singleQuote: false
      }
    }
  ],
  endOfLine: 'auto'
};
