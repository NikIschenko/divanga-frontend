var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = Object.assign(baseConfig, {
  plugins: baseConfig.plugins.concat([
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new CleanWebpackPlugin(['dist/*']),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
  ]),
});
