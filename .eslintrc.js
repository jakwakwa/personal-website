module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    // React specific rules
    'react/prop-types': 'warn',
    'react/jsx-uses-react': 'off', // Not needed with React 17+
    'react/react-in-jsx-scope': 'off', // Not needed with React 17+
    
    // General code quality rules
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-debugger': 'error',
    'prefer-const': 'warn',
    'no-var': 'error',
    
    // React Hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    
    // Code style rules
    'semi': ['warn', 'never'],
    'quotes': ['warn', 'double'],
    'indent': ['warn', 2],
    'comma-dangle': ['warn', 'always-multiline'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  // Uncomment and install @typescript-eslint/parser and @typescript-eslint/eslint-plugin if you need TypeScript support
  // overrides: [
  //   {
  //     files: ['*.ts', '*.tsx'],
  //     parser: '@typescript-eslint/parser',
  //     plugins: ['@typescript-eslint'],
  //     extends: [
  //       'eslint:recommended',
  //       '@typescript-eslint/recommended',
  //     ],
  //   },
  // ],
}

