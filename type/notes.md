# Notes

``IMPORTANT for Code-Runner extension``: open `/type` as a sepparate window, otherwise the Code-Runner button will try to use the config from root

To compile, run this command at `/type`: `npx tsc`

Commands used to set up the dependencies for this folder:

- `npm install typescript@5.3.3 -D`
- `npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser -D`
- `npm i prettier eslint-config-prettier eslint-plugin-prettier -D`
- `npx tsc --init`

## Customized `tsconfig.json` settings

```json
{
    "compilerOptions": {
        "lib": ["ESNext", "DOM"],
        "rootDir": "./src",
        "outDir": "./dist",
    },
    "include": [
        "./src"
    ]
}
```

## About modernization

Since TS 5.3.3 is deprecated, a modern approach to TS6 would look like this:

- `eslint.config.js` file instead of `.eslintrc.js`
- Single `typescript-eslint` package instead of specifying for plugin + parser in the config file
- `eslint-plugin-prettier` often dropped

### Commands

```cmd
npm install --save-dev typescript@6 ts-node
npx tsc --init
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-plugin-prettier eslint-config-prettier
npx eslint --init
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

### npx eslint --init selected configs

```cmd
@eslint/create-config: v3.2.0
√ What do you want to lint? · javascript
√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · Yes
√ Where does your code run? · browser
√ Which language do you want your configuration file be written in? · js
i The config that you've selected requires the following dependencies:

eslint, @eslint/js, globals, typescript-eslint
√ Would you like to install them now? · Yes
√ Which package manager do you want to use? · npm
```

### eslint.config.mjs example

```javascript
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],

    plugins: {
      prettier: prettierPlugin,
      js,
    },

    extends: ["js/recommended"],

    languageOptions: {
      sourceType: "module",
      globals: globals.browser,
    },

    rules: {
      ...prettierConfig.rules,
      "prettier/prettier": "error",
    },
  },
  tseslint.configs.recommended,
]);

```
