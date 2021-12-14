const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const consoleRed = '\x1b[91m'
const consoleGreen = '\033[32m'

console.log(consoleGreen, '-------------------');
console.log(consoleRed, '09HotModuleReplacement')
console.log(consoleGreen, '-------------------');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
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
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement'
    }),
  ]
};
