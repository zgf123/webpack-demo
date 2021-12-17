const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const consoleRed = '\x1b[91m'
const consoleGreen = '\033[32m'


console.log(consoleGreen, '-------------------');
console.log(consoleRed, '13Shimming')
console.log(consoleGreen, '-------------------');

module.exports = {
  mode: 'development',
  entry: {
    // polyfills: './src/polyfills',
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: require.resolve('./src/index.js'),
        use: 'imports-loader?wrapper=window',
      },
      {
        test: require.resolve('./src/globals.js'),
        use: 'exports-loader?type=commonjs&exports=file,multiple|helpers.parse|parse',
      }
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'lazy loading'
    }),
    new webpack.ProvidePlugin({
      join: ['lodash', 'join'],
    })
  ]
};
