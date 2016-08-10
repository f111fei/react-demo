var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: 'source-map',
	context: path.join(__dirname, 'src'),
    resolve: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        loaders: [
            { test: /\.ts(x?)$/, loader: 'ts' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('css') }
        ]
    },
    entry: {
        main: [
            './main.tsx'
        ],
    },
    output: {
        path: path.join(__dirname, 'out'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(['out']),
		new CopyWebpackPlugin([
			{ from: '**/*.html'},
		]),
		new ExtractTextPlugin('./media/main.css')
    ]
};