const path = require('path');
const consoleRed = '\x1b[91m'
const consoleGreen = '\033[32m'


console.log(consoleGreen, '-------------------');
console.log(consoleRed, path.join(__dirname, 'bar'))
console.log(consoleRed, path.resolve(__dirname, 'bar'))
console.log(consoleGreen, '-------------------');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
