const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PACKAGE = require('./package.json');

const banner = PACKAGE.name + ' - ' + PACKAGE.version + ' | (c) 2016, ' + new Date().getFullYear() + '  ' + PACKAGE.author + ' | ' + PACKAGE.license + ' | ' + PACKAGE.homepage;

const configuration = {
  cache: true,
  watch: false,
  context: __dirname,
  entry: {
    scripts: ["webpack-hot-middleware/client", "angular", "./example/example.js"],
    styles: ["./example/example.scss"]
  },
  devtool: "eval",
  resolve: {
    enforceExtension: false,
    extensions: [".js"]
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      enforce: 'pre',
      use: [{
        loader: 'eslint-loader'
      }]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'ng-annotate-loader'
      }, {
        loader: 'babel-loader',
        query: {
          presets: [
            'env',
            'es2017',
            'flow',
            'stage-0'
          ],
          plugins: [
            'transform-decorators-legacy',
            'transform-flow-strip-types'
          ]
        }
      }]
    }, {
        test: /\.(css|scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: ['style-loader'],
          use: [{
            loader: 'css-loader',
            query: {
              sourceMap: true
            }
          }, {
            loader: 'resolve-url-loader'
          }, {
            loader: 'sass-loader',
            query: {
              sourceMap: true
            }
          }]
        })
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader'
      }]
    }, {
      test: /\.(jpg|png|woff|woff2|eot|ttf|svg|ico)$/,
      use: [{
        loader: 'file-loader?name=[name]-[hash].[ext]'
      }]
    }, {
      test: /\.(json|geojson)$/,
      use: [{
        loader: 'json-loader'
      }]
    }]
  },
  output: {
    pathinfo: true,
    filename: "[name]-[hash].js",
    path: path.resolve("./dist"),
    publicPath: '/'
  },
  devServer: {
    port: 38141
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("[name]-[hash].css"),
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor"],
      filename:"[name].js",
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      template: "./example/example.ejs",
      inject: false,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      },
      version: PACKAGE.version,
      title: PACKAGE.name
    }),
    new webpack.BannerPlugin(banner),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

module.exports = configuration;
