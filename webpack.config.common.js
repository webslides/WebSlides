const path = require('path');

const src = path.join(__dirname, 'src');

module.exports = {
  context: src,
  entry: {
    webslides: './js/full.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'static/js'),
    publicPath: '/static/js/'
  },
  devServer: {
    contentBase: __dirname,
    host: '0.0.0.0'
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
