const path = require('path')
const webpack = require('webpack')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ]
            },
            {   
                enforce: 'pre',
                test: /\.less$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: [
                    'less-loader'
                ]
            },
            {
                test: /\.(css|less)$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            }
        ]
    },
    plugins: [
        new UglifyPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/assets/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(porcess.env.NODE_ENV)
        }),
        new webpack.ProvidePlugin({
            identifier: ['module', 'default']
        })
    ],
    resolve: {
        alias: {
            utils: path.resolve(__dirname, 'src/utils')
        },
        extensions: ['js', 'vue', 'json', 'less', 'css'],  // 打包时，webpack 会自动按照顺序补全文件后缀再进行查找
        modules: [
            path.resolve(__dirname, 'node_modules'), // 指定当前目录下的 node_modules 优先查找
            'node_modules'
        ]
    },
    devServer: {
        port: 8989
    }
}