import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact, { rules } from "eslint-plugin-react";


export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    rules:{

    },
    extends:{
      plugin:react/jsx-runtime,

    }
  },
  {
    languageOptions: {
       globals: globals.browser 
      }
    },

  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  
];