const path = require('path');

const src = path.join(__dirname, 'src');

module.exports = {
  context: src,
  entry: {
    webslides: './js/full.js',
    "webslides-lite": './js/lite.js',
    "webslides-dev": './js/dev.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist',
  },
  devServer: {
    contentBase: __dirname,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: src
      }
    ]
  }
};
