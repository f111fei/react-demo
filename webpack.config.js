var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');

const outPath = path.join(__dirname, 'out');
const publicPath = outPath.replace(/\\/g, '/') + '/';

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
            { test: /\.css$/, loader: ExtractTextPlugin.extract('css') },
            { test: /\.less$/,loader: ExtractTextPlugin.extract('css!less') },
            { test: /\.(eot|woff|ttf|png|svg)([\?]?.*)$/, loader: 'file?name=[path][name].[ext]' }
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
        path: outPath,
        filename: '[name].js',
        publicPath: publicPath
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