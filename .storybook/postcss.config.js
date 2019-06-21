module.exports = {
    plugins: {
        // PostCSS Preset Env includes autoprefixer and browsers option will be passed to it automatically.
        'postcss-preset-env': {
            // "browsers": 'last 2 versions',
            "autoprefixer": {}
        },
        'postcss-import': {},
        'postcss-nested': {}
    }
}