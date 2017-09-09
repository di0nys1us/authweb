const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: path.join(__dirname, "./src/index.tsx"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "./public")
    },

    devtool: "source-map",

    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".ejs", ".scss"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.js$/,
                loader: "source-map-loader",
                enforce: "pre"
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.ejs")
        })
    ]
};
