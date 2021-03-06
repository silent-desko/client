var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var loaders = [
  {
    "test": /\.jsx?$/,
    "exclude": /node_modules/,
    "loader": "babel"
  },
  {
    test: /\.css$/,
    loader: "style-loader!css-loader"
  },
  {
    test:   /\.(png|gif|jpe?g|svg)$/i,
    loader: 'url?limit=10000',
  }
]

var frontend = 'src'

module.exports = {
  devtool: 'source-map',
  entry: path.resolve('src', 'main.js'),
  output: {
    path: path.resolve('build'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.tpl.html'),
      inject: 'body',
      filename: 'index.html'
    })
  ],
  module: {
    loaders: loaders
  },
  resolve: {
    alias: {
      component: path.join(__dirname, frontend, 'components'),
      style: path.join(__dirname, frontend, 'styles'),
      image: path.join(__dirname, frontend, 'images'),
      lib: path.join(__dirname, frontend, 'lib')
    }
  }
};
