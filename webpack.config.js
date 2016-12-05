var _dirname = './'
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: _dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});
module.exports = {
    entry: [
        './src/js/app.js'
    ],
    module: {
        loaders: [
            {test: /\.js$/, exclude: '/node_modules/', loader:"babel-loader"}
        ]
    },
    output: {
        filename: "app_bundle.js",
        path: _dirname + '/dist'
    },
    plugins: [HTMLWebpackPluginConfig]
}