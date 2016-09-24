var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome', 'Firefox'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'webpack.config.test.js',
    ],
    preprocessors: {
      'webpack.config.test.js': ['webpack']
    },
    reporters: ['dots'],
    webpack: {
      module: {
        loaders: [
          { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
          {
            test: /\.css$/,
            loaders: ['style', 'css?sourceMap', 'resolve-url'],
          },
          {
            test: /\.scss$/,
            loaders: ['style', 'css?sourceMap', 'resolve-url', 'sass?sourceMap'],
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
      watch: true,
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
      },
    },
    webpackServer: {
      noInfo: true,
    }
  });
};