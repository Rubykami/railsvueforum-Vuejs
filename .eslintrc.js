module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        'plugin:vue/base',
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue/essential',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'eslint-config-prettier'
    ],
    "overrides": [
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "indent": [
            "error",
            "space"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
}
