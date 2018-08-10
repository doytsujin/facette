const path = require("path");

const Autoprefixer = require("autoprefixer");
const CleanPlugin = require("clean-webpack-plugin");
const HTMLPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const {VueLoaderPlugin} = require("vue-loader");

const distDir = path.resolve(__dirname, "dist");

module.exports = {
    context: path.resolve(__dirname, "src"),
    devtool: "source-map",
    entry: {
        app: "./app",
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: "all",
                    name: "vendor",
                    test: /node_modules/,
                },
            },
        },
    },
    output: {
        filename: "[name].js",
        path: distDir,
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: path.resolve(__dirname, "node_modules"),
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            minimize: {
                                discardComments: {
                                    removeAll: true,
                                },
                            },
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                Autoprefixer(),
                            ],
                            sourceMap: true,
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(jpg|png|svg|woff2?)$/,
                loader: "file-loader",
                options: {
                    name: "/[name].[ext]",
                    useRelativePath: process.env.NODE_ENV != "production",
                },
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
        ],
    },
    plugins: [
        new CleanPlugin([
            distDir,
        ]),
        new HTMLPlugin({
            minify: {
                collapseWhitespace: true,
            },
            template: "./index.html",
            hash: true,
        }),
        new MiniCSSExtractPlugin({
            filename: "[name].css",
        }),
        new VueLoaderPlugin(),
    ],
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js",
        },
        extensions: [
            ".js",
            ".vue",
        ],
    },
    stats: "errors-only",
    devServer: {
        historyApiFallback: true,
        port: 9000,
        proxy: {
            "/api": {
                changeOrigin: true,
                target: "http://localhost:12003",
            },
        },
    },
};

/* eslint-env node */
