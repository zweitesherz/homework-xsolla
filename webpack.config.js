const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "main.js",
        path: path.join(__dirname, 'dist')
    },
    devServer: {
        port:9000,
        contentBase:path.join(__dirname, 'dist')
    }
}