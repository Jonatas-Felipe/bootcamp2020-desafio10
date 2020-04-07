module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'airbnb',
      'prettier',
      'prettier/react'
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
      'prettier',
      'react-hooks',
    ],
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [
        'warn',
        { extensions: ['.js', '.jsx']}
      ],
      'import/prefer-default-export': 'off',
      'react/state-in-constructor': 'off',
      'react/sort-comp': 'off',
      'react/static-property-placement': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'no-param-reassign': 'off',
      'no-console': ['error', { allow: ['tron'] }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'react/jsx-one-expression-per-line': 'off',
      'global-require': 'off',
      'react-native/no-raw-text': 'off',
      'no-underscore-dangle': 'off',
      camelcase: 'off',
      'no-unused-vars': 'off',
      'no-unused-expressions': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/forbid-prop-types': 'off',
      'no-undef': 'off',
      'react/no-unused-prop-types': 'off'
    },
    settings: {
      'import/resolver': {
        'babel-plugin-root-import':{
          rootPathSuffix: 'src'
        }
      }
    }
  };
  