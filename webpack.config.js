var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    target: 'electron',
    context: path.join(__dirname, 'src'),
    resolve: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
        root: [path.join(__dirname, './src')]
    },
    module: {
        loaders: [
            { test: /\.ts(x?)$/, loader: 'ts' },
            { test: /\.json$/, loader: 'json' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('css') }
        ]
    },
    entry: {
        'app/app': [
            './app/app'
        ],
        'app/electron-main/main': [
            './app/electron-main/main'
        ]
    },
    output: {
        path: path.join(__dirname, 'out'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(['out']),
        new CopyWebpackPlugin([
            { from: '**/*.html' },
            { from: 'main.js'}
        ]),
        new ExtractTextPlugin('./app/electron-browser/media/main.css')
    ]
};