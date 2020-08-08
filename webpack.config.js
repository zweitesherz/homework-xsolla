const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssPlugin = require('mini-css-extract-plugin');



module.exports = (env, argv) => ({
    entry: './src/index.jsx',
    output: {
        filename: "main.js",
        path: path.join(__dirname, 'dist')
    },
    devtool: argv.mode === "production" ? 'source-map' : 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new MiniCssPlugin({   filename: 'styles.css'}),
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
                test: /\.(png|jpe?g|gif)$/i,
                use: 'file-loader',
            },

            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    MiniCssPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }, {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
                    }
                ]
            },

            {
                test: /\.less$/,
                exclude: /node_modules/,

                use: [
                        MiniCssPlugin.loader,
                    {loader: "css-loader",
                        options: {
                        sourceMap: true,
                        modules: true
                        }
                    },

                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true, config: {path: 'src/postcss.config.js'}
                        },
                    },

                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: true
                        },
                    },

                ],
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                use: "url-loader"
            }
        ]
    },

    devServer: {
        port:9000,
        contentBase:path.join(__dirname, 'dist'),
        hot: true
    }
});

