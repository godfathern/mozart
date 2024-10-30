const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output:{
        path: path.resolve(__dirname, "./static/frontend"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    resolve: {
        extensions: [".js", ".jsx"],            // Resolve these file extensions
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV" : JSON.stringify("production")
        })
    ],
};
