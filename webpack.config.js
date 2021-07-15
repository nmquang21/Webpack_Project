const path = require('path');

module.exports = {
    entry: {
        // bundle: './src/script/main.js',
        // common: './src/script/common.js'
        bundle: [
            './src/script/main.js',
            './src/script/common.js'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './'
    },
    devtool: 'inline-source-map',
    mode: 'development',
};