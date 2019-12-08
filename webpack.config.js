var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        "zoo": "./assets/zoo.js",
        "parser": "./assets/urlparser.js"
    },
    output: {
        path: path.join(__dirname, './content'),
        filename: "./[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};