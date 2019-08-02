const path = require('path');

module.exports = {
    entry: './lesson5/src/App.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, path.resolve('lesson5','dist'))
    },
    mode: 'development',
    module: {
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader:"babel-loader"
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer:{
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, path.resolve('lesson5','dist'))
    }
}
