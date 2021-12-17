const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const consoleRed = '\x1b[91m'
const consoleGreen = '\033[32m'


console.log(consoleGreen, '-------------------');
console.log(consoleRed, '15ProgressiveWebApplication')
console.log(consoleGreen, '-------------------');

module.exports = {
  mode: 'development',
  entry: {
    app: ['./src/index.js', './src/print.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Progressive Web Application',
    }),
    new WorkboxPlugin.GenerateSW({
      // 这些选项帮助快速启用 ServiceWorkers
      // 不允许遗留任何“旧的” ServiceWorkers
      clientsClaim: true,
      skipWaiting: true,
    }),
  ]
};
