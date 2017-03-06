const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let prod = {
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

module.exports = merge(require('./webpack.config.common'), prod);
