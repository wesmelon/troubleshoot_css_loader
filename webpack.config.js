const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
            ]            
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'CSS Test',
            template: './index.html',
            inject: 'body'
        })
    ]
}