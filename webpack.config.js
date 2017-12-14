var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

const extractSass = new ExtractTextPlugin({
    filename: "./www/css/style.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: './www/js/index.js',
    output: {
        filename: './www/js/bundle.js',
        path: path.resolve(__dirname),
        publicPath: './www/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                }),
            },
        ]
    },
    plugins: [
        extractSass
    ],
    devtool: 'inline-source-map'
};