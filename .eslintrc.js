module.exports = {
    extends: [require.resolve('@umijs/fabric/dist/eslint')],
    rules: {
        'react/require-default-props': 0,
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
    },
};