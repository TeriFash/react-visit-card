// module.exports = {
// //   "env": {
// //     "es6": true,
// //     "browser": true,
// //     "mocha": true,
// //     "node": true,
// //     "jest": true
// //   },
// //   "parser": "babel-eslint",
// //   "root": true,
// //   extends: ['react-app', 'prettier', 'prettier/react'],
// //   parser: 'babel-eslint',
//   rules: {
//     'no-underscore-dangle': ['error', { allow: ['__standin_getCurrent'] }],
//     'no-console': ['error', { allow: ['warn', 'error'] }],
//     "import/no-anonymous-default-export": ["error", {
//       "allowArray": false,
//       "allowArrowFunction": false,
//       "allowAnonymousClass": false,
//       "allowAnonymousFunction": false,
//       "allowCallExpression": true, // The true value here is for backward compatibility
//       "allowLiteral": false,
//       "allowObject": false
//     }]

// //     'no-plusplus': 'off',
// //     'no-continue': 'off',
// //     'no-restricted-syntax': 'off',
// //     'no-prototype-builtins': 'off',
// //     'no-param-reassign': 'off',
// //     'no-constant-condition': 'off',
// //     'no-shadow': 'off',
// //     'class-methods-use-this': 'off',
// //     'import/no-extraneous-dependencies': 'off',
// //     'import/prefer-default-export': 'off',
// //     'react/prop-types': 'off',
// //     'react/prefer-stateless-function': 'off',
// //     'react/no-multi-comp': 'off',
// //     'react/prefer-es6-class': 'off',
// //     'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
// //     'react/require-default-props': 'off',
// //     'jsx-a11y/no-static-element-interactions': 'off',
// //     'jsx-a11y/click-events-have-key-events': 'off',
//   },
//   globals: {
//     __REACT_HOT_LOADER__: true,
//   },
// };

const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
);

module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['react-app', 'prettier'],
  plugins: ['prettier'],
  rules: {
    // "prettier/prettier": "error",
    'prettier/prettier': ['error', prettierOptions]
  },
  overrides: [
    {
      files: ['**/*.js?(x)'],
      rules: { 'prettier/prettier': ['off', prettierOptions] }
    }
  ],
  globals: {
    __REACT_HOT_LOADER__: true
  }
};
