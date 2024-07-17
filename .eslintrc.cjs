module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    extends: [
        'plugin:prettier/recommended',
        'plugin:vue/vue3-recommended',
        'prettier',
    ],
    plugins: ['vue', 'prettier'],
    rules: {
        'vue/singleline-html-element-content-newline': 0,
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'no-unused-expressions': 'off',
        eqeqeq: 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-v-html': 'off',
        'vue/valid-v-slot': [
            'error',
            {
                allowModifiers: true,
            },
        ],
    },
}
