const path = require('path');

const src = path.join(__dirname, 'src');

module.exports = {
  context: src,
  entry: {
    webslides: './full.js',
    "webslides-lite": './lite.js',
    "webslides-dev": './dev.js',
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
