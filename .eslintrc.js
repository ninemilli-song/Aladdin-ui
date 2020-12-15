module.exports = {
    extends: [require.resolve('@umijs/fabric/dist/eslint')],
    rules: {
        'react/require-default-props': 0,
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
        '@typescript-eslint/no-loop-func': 0,
        '@typescript-eslint/no-redeclare': 0,
        '@typescript-eslint/no-shadow': 0,
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": 0
    },
};