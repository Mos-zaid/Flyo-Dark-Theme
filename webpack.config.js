const path = require('path');

module.exports = {
  entry: './App/Assets/Scripts/main.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'App'),
  },
};