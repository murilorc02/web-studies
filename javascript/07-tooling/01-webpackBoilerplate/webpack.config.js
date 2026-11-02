const { test } = require('node:test');
const path = require('path'); // Node-specific / CommonJS

module.exports = {
    mode: 'production',
    entry: './src/index.js', // The main file where the dependency tree will start to be constructed
    output: { // In this case, we'll be using ./public/assets/js to save the webpack output
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/, // Everything that ends with .js
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map' // Maps the dependency tree
}