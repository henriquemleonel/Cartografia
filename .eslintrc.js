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
        'max-len': ['error', { 'code': 180 }],
        'no-param-reassign': [ 'error',
          {
            props: true,
            ignorePropertyModificationsFor: [
              'state', // for vuex state
              'acc', // for reduce accumulators
              'e', // for e.returnvalue
              'ctx', // for Koa routing
              'req', // for Express requests
              'request', // for Express requests
              'res', // for Express responses
              'response', // for Express responses
              '$scope', // for Angular 1 scopes
            ]
          }
        ]
        // 'eslint no-tabs': ["error", { allowIndentationTabs: true }],
    },
};