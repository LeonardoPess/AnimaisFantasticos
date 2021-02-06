const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', 'whatwg-fetch', './src/app.js'],
  output: {
    path: path.resolve(__dirname, './'),
    filename: './dist/main.js',
  },
};
