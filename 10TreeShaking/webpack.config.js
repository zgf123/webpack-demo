const path = require('path');
const consoleRed = '\x1b[91m'
const consoleGreen = '\033[32m'


console.log(consoleGreen, '-------------------');
console.log(consoleRed, 'Tree Shaking')
console.log(consoleGreen, '-------------------');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: false,
  optimization: {
    usedExports: true,
  },
};
