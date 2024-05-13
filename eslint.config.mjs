import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    ignores: [
      '**/.next/**/*',
      '**/postcss.config.js',
      'packages/database/scripts/seed.ts',
      'packages/database/src/db.ts'
    ],
  },
  {
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    rules: {
      'react/react-in-jsx-scope': "off",
    },
  }
];
