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

Since TS 5.3.3 is deprecated, a modern approach to TS7 would look like this:

- `eslint.config.js` file instead of `.eslintrc.js`
- Single `typescript-eslint` package instead of specifying for plugin + parser
- `eslint-plugin-prettier` often dropped

### eslint.config.js example

```javascript
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    prettier,
);
```
