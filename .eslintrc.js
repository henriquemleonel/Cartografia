module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['airbnb-base', 'plugin:vue/recommended'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'linebreak-style': 0,
        'eslint linebreak-style': [0, 'error', 'windows'],
        'max-len': ["error", { "code": 180 }],
        // 'eslint no-tabs': ["error", { allowIndentationTabs: true }],
    },
};