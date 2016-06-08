var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CSS = new ExtractTextPlugin('css/ui/dropdown.css');
var HOTLOADER = new webpack.HotModuleReplacementPlugin();

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist/js/ui'),
    filename: 'dropdown.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      },
      {
        test : /\.jsx?$/,
        loaders : ['react-hot', 'babel'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [ CSS, HOTLOADER]
};
