var path = require("path");
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var AutoDllPlugin = require('autodll-webpack-plugin');

var extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

var glob = require('glob');
var files = glob.sync('./src/*.html');
var entry = {};


var plugins = [
   new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
    extractSass,   

    new AutoDllPlugin({
        filename: '[name].[hash].js',
        path: './page/',
        inject: true,
        entry: {
            vendor: [
               "jquery", "echarts"
            ]
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin()
        ]
    })
]

files.forEach(function(item, i) {
    var htmlName = item.slice(item.lastIndexOf("/") + 1);
    var name = htmlName.split(".")[0];

    entry["page/" + name + "/" + name] = './src/js/' + name + '.js'
    plugins.push(
        new htmlWebpackPlugin({
            template: item,
            filename: htmlName,
            chunks: ["page/" + name + "/" + name]
        })
    )
});




module.exports = {
    entry: entry,
    output: {
        filename:"[name].[hash].js",
        path:path.resolve(__dirname,'dist'),
    },

    devServer: {
        open: true,
        hot:true
    },
    module: {
        rules: [{
                test: /\.s?css$/,
                use: extractSass.extract({
                    use: [{
                            loader: "css-loader"
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    require('autoprefixer')({
                                        browsers: ['last 10 versions']
                                    })
                                ]
                            }
                        },
                        {
                            loader: "sass-loader"
                        }
                    ],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: ['transform-runtime']
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]',
                    publicPath:'../../'
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'font/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: plugins
}