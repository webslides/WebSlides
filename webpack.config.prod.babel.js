const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');

const src = path.join(__dirname, 'src');

let config = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?url=false!postcss-loader!sass-loader'
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("../css/webslides.min.css")
  ]
};

module.exports = merge(require('./webpack.config.babel'), config);
