var path = require('path');
var WebpackShellPlugin = require('webpack-shell-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: ['whatwg-fetch', 'babel-polyfill', './src/index'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'resolve-url'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'resolve-url', 'sass?sourceMap'],
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
  postcss: [
    autoprefixer({ browsers: ['last 2 versions', 'ie 10'] })
  ],
  plugins: [
    new WebpackShellPlugin({
      onBuildStart: ['npm install; npm prune'],
    }),
  ],
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
};
