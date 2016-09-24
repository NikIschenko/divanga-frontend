var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var devConfig = {
  devHost: '0.0.0.0',
  devPort: 3001,
  devPublicPath: '/',
};
var config = {
  debug: true,
  devtool: '#cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://' + devConfig.devHost + ':' + devConfig.devPort,
    'webpack/hot/only-dev-server',
    './src/index.js',
    'whatwg-fetch',
    'babel-polyfill',
  ],
  output: {
    publicPath: 'http://' + devConfig.devHost + ':' + devConfig.devPort + devConfig.devPublicPath,
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?sourceMap', 'resolve-url'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'postcss', 'resolve-url', 'sass?sourceMap'],
      },
      {
        test: /\.(woff|woff2|otf|ttf|eot|svg)$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.(svg|jpg|png)$/,
        loader: 'file',
      },
      {
        test: /\.(json)$/,
        loader: 'json',
      },
    ],
  },
  postcss: [autoprefixer({ browsers: ['last 2 versions', 'ie 10'] })],
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  devConfig: devConfig,
};

module.exports = config;
