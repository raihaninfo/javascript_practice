const path = require('path')
const htmlwebpackPlugin = require('html-webpack-plugin')
require('babel-register')

module.exports = {
    entry: ['@babel/polyfill', './src/app.js'],
    output: {
        path: path.resolve(_dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    },
    plugins: [
        new htmlwebpackPlugin({
            template: './index.html'
        })
    ],
    mode: 'development',
    devtool: 'lnline-source-map',
    devServer: {
        open: true,
        contentBase: './dist'
    }
}