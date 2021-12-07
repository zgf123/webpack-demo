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
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2)$/,
        use: ['file-loader']
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  }
};
