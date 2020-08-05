const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssPlugin = require('mini-css-extract-plugin');



module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: "main.js",
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new MiniCssPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
            }

        )
    ],

    module: {
        rules:[
            {
                test: /\.jsx?/i,
                use: 'babel-loader',
                exclude: /node_modules/
            },

            {
                test: /\.css$/i,
                use: [
                    MiniCssPlugin.loader,
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },

    devServer: {
        port:9000,
        contentBase:path.join(__dirname, 'dist')
    }
}

