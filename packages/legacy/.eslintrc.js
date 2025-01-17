module.export = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2015,
    "tsx": true,
    "jsx": true,
    "js": true,
    "useJSXTextNode": true,
    "project": ["tsconfig.json"],
    "tsconfigRootDir": __dirname,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  "globals": {
    "window": "readonly",
    "describe": "readonly",
    "test": "readonly",
    "expect": "readonly",
    "it": "readonly",
    "process": "readonly",
    "document": "readonly"
  },
  "settings": {
    "react": {
      "version": "^16.11.0"
    }
  },
  "plugins": ["prettier", "@typescript-eslint", "react-hooks", "eslint-plugin-react-hooks", "testing-library"],
  "rules": {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/interface-name-prefix": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "react/prop-types": "off",
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "semi": true
      }
    ],
    "testing-library/await-async-query": "error",
    "testing-library/no-await-sync-query": "error",
    "testing-library/no-debugging-utils": "warn",
    "testing-library/no-dom-import": "off"
  },
  "env": {
    "browser": true,
    "node": true
  }
};
