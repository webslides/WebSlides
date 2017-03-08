const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let dev = {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?url=false!postcss-loader!sass-loader?sourceMap'
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/webslides.css')
  ]
};

module.exports = merge(require('./webpack.config.common'), dev);