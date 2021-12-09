const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const consoleRed = '\x1b[91m'
const consoleGreen = '\033[32m'


console.log(consoleGreen, '-------------------');
console.log(consoleRed, '14HotModuleReplacement')
console.log(consoleGreen, '-------------------');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    // 为HMR提供手动入口点:
    hot: 'webpack/hot/dev-server.js',
    client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 9000,
    open: false,
    // hot: true,
    hot: false,
    client: false
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
