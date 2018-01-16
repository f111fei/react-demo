var path = require('path');
var fs = require('fs');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');

const outPath = path.join(__dirname, 'out');
const publicPath = outPath.replace(/\\/g, '/') + '/';

const extractStyle = new ExtractTextPlugin('./app/electron-browser/media/main.css');
const themes = path.join(__dirname, './src/themes');

const isThemeStyle = function (path, name) {
    if (!name) {
        return /themes(\/|\\).*.less$/.test(path);
    } else {
        return new RegExp('themes(\/|\\\\)' + name + '(\/|\\\\).*.less$').test(path);
    }
}

const config = {
    devtool: 'source-map',
    target: 'electron',
    context: path.join(__dirname, 'src'),
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [
            'node_modules',
            path.join(__dirname, './src'),
            themes
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: 'awesome-typescript-loader',
                options: {
                    configFileName: './src/tsconfig.json'
                }
            },
            {
                test: /\.css$/,
                loader: extractStyle.extract('css-loader')
            },
            {
                test: function (path) { return (/.*.less$/.test(path) && (!isThemeStyle(path))) },
                loader: extractStyle.extract('css-loader!less-loader')
            },
            {
                test: /\.(eot|woff|ttf|png|gif|svg)([\?]?.*)$/,
                loader: 'file-loader?name=[path][name].[ext]'
            }
        ]
    },
    entry: {
        'app/app': [
            './app/app'
        ],
        'app/electron-main/main': [
            './app/electron-main/main'
        ],
        'themes/index': [
            './themes/index'
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
            { from: 'main.js' }
        ]),
        extractStyle
    ]
};

fs.readdirSync(themes).forEach(function (name) {
    var theme = path.join(themes, name);
    if (fs.statSync(theme).isFile()) {
        return;
    }
    const extractPlugin = new ExtractTextPlugin('./themes/' + name + '/index.css');
    const themeLoader = {
        test: function (path) { return isThemeStyle(path, name) },
        loader: extractPlugin.extract('css-loader!less-loader')
    };

    config.plugins.push(extractPlugin);
    config.module.rules.push(themeLoader);
});

module.exports = config;