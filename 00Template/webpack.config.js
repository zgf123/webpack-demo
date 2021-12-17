const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const consoleRed = '\x1b[91m'
const consoleGreen = '\033[32m'


console.log(consoleGreen, '-------------------');
console.log(consoleRed, '00Template')
console.log(consoleGreen, '-------------------');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'template'
    }),
  ]
};
